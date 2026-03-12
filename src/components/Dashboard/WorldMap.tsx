import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
} from 'react-simple-maps';
import type { Mention } from '../../store/dashboardStore';
import { MapPin, Globe, ZoomIn, ZoomOut, Maximize2, Filter, TrendingUp, Users, Activity } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useSettingsStore } from '../../store/settingsStore';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface WorldMapProps {
  mentions: Mention[];
}

interface MapPoint {
  coordinates: [number, number];
  city: string;
  country: string;
  count: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  reach: number;
  recentMentions: string[];
}

interface ConnectionLine {
  from: [number, number];
  to: [number, number];
}

export function WorldMap({ mentions }: WorldMapProps) {
  const { isDark } = useThemeStore();
  const { focusedCountry } = useSettingsStore();
  const [hoveredPoint, setHoveredPoint] = useState<MapPoint | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [pulsingPoints, setPulsingPoints] = useState<number[]>([]);
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  const [position, setPosition] = useState({ 
    coordinates: focusedCountry.coordinates as [number, number], 
    zoom: focusedCountry.zoom 
  });
  const [filter, setFilter] = useState<'all' | 'positive' | 'neutral' | 'negative'>('all');
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [liveActivity, setLiveActivity] = useState<{ point: MapPoint; type: string; id: number }[]>([]);

  // Update position when focusedCountry changes
  useEffect(() => {
    setPosition({
      coordinates: focusedCountry.coordinates as [number, number],
      zoom: focusedCountry.zoom,
    });
  }, [focusedCountry]);

  const mapPoints = useMemo(() => {
    const locationCounts = new Map<string, { 
      count: number; 
      lat: number; 
      lng: number; 
      city: string; 
      country: string; 
      sentiments: string[];
      reach: number;
      contents: string[];
    }>();
    
    mentions.forEach((mention) => {
      if (mention.location) {
        const key = `${mention.location.lat},${mention.location.lng}`;
        const existing = locationCounts.get(key);
        if (existing) {
          existing.count++;
          existing.sentiments.push(mention.sentiment);
          existing.reach += mention.reach;
          existing.contents.push(mention.content);
        } else {
          locationCounts.set(key, {
            count: 1,
            lat: mention.location.lat,
            lng: mention.location.lng,
            city: mention.location.city,
            country: mention.location.country,
            sentiments: [mention.sentiment],
            reach: mention.reach,
            contents: [mention.content],
          });
        }
      }
    });

    return Array.from(locationCounts.values()).map((loc): MapPoint => {
      const posCount = loc.sentiments.filter(s => s === 'positive').length;
      const negCount = loc.sentiments.filter(s => s === 'negative').length;
      let sentiment: 'positive' | 'negative' | 'neutral' = 'neutral';
      if (posCount > negCount) sentiment = 'positive';
      else if (negCount > posCount) sentiment = 'negative';
      return { 
        coordinates: [loc.lng, loc.lat],
        city: loc.city, 
        country: loc.country, 
        count: loc.count, 
        sentiment,
        reach: loc.reach,
        recentMentions: loc.contents.slice(0, 3),
      };
    });
  }, [mentions]);

  const connections = useMemo(() => {
    const lines: ConnectionLine[] = [];
    for (let i = 0; i < Math.min(mapPoints.length, 8); i++) {
      for (let j = i + 1; j < Math.min(mapPoints.length, 8); j++) {
        if (Math.random() > 0.5) {
          lines.push({ 
            from: mapPoints[i].coordinates, 
            to: mapPoints[j].coordinates 
          });
        }
      }
    }
    return lines;
  }, [mapPoints]);

  // Animate pulsing points
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = mapPoints
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
      setPulsingPoints(randomIndices);
    }, 1500);

    return () => clearInterval(interval);
  }, [mapPoints]);

  // Animate connection lines
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = connections
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      setActiveConnections(randomIndices);
    }, 2000);

    return () => clearInterval(interval);
  }, [connections]);

  // Simulate live activity
  useEffect(() => {
    let activityId = 0;
    const interval = setInterval(() => {
      if (mapPoints.length > 0) {
        const randomPoint = mapPoints[Math.floor(Math.random() * mapPoints.length)];
        const types = ['New mention', 'Trending', 'High engagement', 'Viral content'];
        const newActivity = {
          point: randomPoint,
          type: types[Math.floor(Math.random() * types.length)],
          id: activityId++,
        };
        setLiveActivity(prev => [newActivity, ...prev.slice(0, 3)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mapPoints]);

  const getSentimentColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive': return '#22c55e';
      case 'negative': return '#ef4444';
      case 'neutral': return '#eab308';
    }
  };

  const filteredPoints = filter === 'all' 
    ? mapPoints 
    : mapPoints.filter(p => p.sentiment === filter);

  const handleZoomIn = () => {
    if (position.zoom < 8) {
      setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
    }
  };

  const handleZoomOut = () => {
    if (position.zoom > 1) {
      setPosition(pos => ({ ...pos, zoom: Math.max(1, pos.zoom / 1.5) }));
    }
  };

  const handleReset = () => {
    setPosition({ coordinates: [0, 20], zoom: 1 });
  };

  const handleMoveEnd = (pos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(pos);
  };

  const totalMentions = mapPoints.reduce((acc, p) => acc + p.count, 0);
  const totalReach = mapPoints.reduce((acc, p) => acc + p.reach, 0);

  const mapBackground = isDark ? '#0a0a0f' : '#f8fafc';
  const landColor = isDark ? '#1f1f28' : '#e2e8f0';
  const landHoverColor = isDark ? '#2a2a35' : '#cbd5e1';
  const borderColor = isDark ? '#2a2a35' : '#cbd5e1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card border border-border rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Globe className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Global Mentions</h3>
              <p className="text-sm text-muted-foreground">Real-time brand activity worldwide</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Stats Pills */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full"
              >
                <Activity size={14} className="text-accent" />
                <span className="text-sm font-medium text-foreground">{mapPoints.length} locations</span>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-full"
              >
                <TrendingUp size={14} className="text-emerald-500" />
                <span className="text-sm font-medium text-foreground">{totalMentions} mentions</span>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 rounded-full"
              >
                <Users size={14} className="text-purple-500" />
                <span className="text-sm font-medium text-foreground">{(totalReach / 1000000).toFixed(1)}M reach</span>
              </motion.div>
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as typeof filter)}
                className="appearance-none pl-8 pr-4 py-1.5 bg-muted border border-border rounded-lg text-sm text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
              <Filter size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                disabled={position.zoom <= 1}
                className="p-1.5 rounded hover:bg-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomOut size={16} className="text-foreground" />
              </button>
              <span className="text-xs text-muted-foreground w-12 text-center">{Math.round(position.zoom * 100)}%</span>
              <button
                onClick={handleZoomIn}
                disabled={position.zoom >= 8}
                className="p-1.5 rounded hover:bg-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomIn size={16} className="text-foreground" />
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 rounded hover:bg-background transition-colors"
              >
                <Maximize2 size={16} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-muted-foreground">Positive</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
              <span className="text-muted-foreground">Neutral</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              <span className="text-muted-foreground">Negative</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-0.5 bg-accent/40" />
            <span className="text-muted-foreground">Data flow</span>
          </div>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showHeatmap}
              onChange={(e) => setShowHeatmap(e.target.checked)}
              className="w-3 h-3 rounded border-border accent-accent"
            />
            <span className="text-muted-foreground">Show glow effects</span>
          </label>
        </div>
      </div>

      <div className="flex">
        {/* Map Container */}
        <div className="relative flex-1" style={{ minHeight: '450px' }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [0, 30],
            }}
            style={{
              width: '100%',
              height: '450px',
              background: mapBackground,
            }}
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              minZoom={1}
              maxZoom={8}
            >
              {/* Countries */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={landColor}
                      stroke={borderColor}
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: landHoverColor, outline: 'none', cursor: 'pointer' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Connection Lines */}
              {connections.map((conn, i) => {
                const isActive = activeConnections.includes(i);
                return (
                  <Line
                    key={`connection-${i}`}
                    from={conn.from}
                    to={conn.to}
                    stroke={isActive ? '#6366f1' : '#6366f140'}
                    strokeWidth={isActive ? 1.5 : 0.5}
                    strokeLinecap="round"
                    style={{
                      transition: 'all 0.5s ease',
                    }}
                  />
                );
              })}

              {/* Heatmap/Glow circles */}
              {showHeatmap && filteredPoints.map((point, index) => (
                <Marker key={`heatmap-${index}`} coordinates={point.coordinates}>
                  <motion.circle
                    r={Math.min(point.count * 4 + 15, 40) / position.zoom}
                    fill={getSentimentColor(point.sentiment)}
                    fillOpacity={0.15}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                  />
                </Marker>
              ))}

              {/* Map Points */}
              {filteredPoints.map((point, index) => {
                const isPulsing = pulsingPoints.includes(index);
                const baseSize = Math.min(point.count * 1.5 + 4, 12);
                const size = baseSize / Math.sqrt(position.zoom);
                
                return (
                  <Marker
                    key={`marker-${index}`}
                    coordinates={point.coordinates}
                    onMouseEnter={() => setHoveredPoint(point)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    onClick={() => setSelectedPoint(selectedPoint?.city === point.city ? null : point)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulse rings */}
                    {isPulsing && (
                      <>
                        <motion.circle
                          r={size}
                          fill="none"
                          stroke={getSentimentColor(point.sentiment)}
                          strokeWidth={1.5 / position.zoom}
                          initial={{ scale: 1, opacity: 0.8 }}
                          animate={{ scale: 3, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.circle
                          r={size}
                          fill="none"
                          stroke={getSentimentColor(point.sentiment)}
                          strokeWidth={1 / position.zoom}
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{ scale: 4, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                      </>
                    )}
                    
                    {/* Outer glow */}
                    <motion.circle
                      r={size * 1.5}
                      fill={getSentimentColor(point.sentiment)}
                      fillOpacity={0.3}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                    />
                    
                    {/* Main point */}
                    <motion.circle
                      r={size}
                      fill={getSentimentColor(point.sentiment)}
                      stroke="#fff"
                      strokeWidth={1.5 / position.zoom}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.4 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      style={{
                        filter: `drop-shadow(0 0 ${4 / position.zoom}px ${getSentimentColor(point.sentiment)})`,
                      }}
                    />
                    
                    {/* Inner bright core */}
                    <motion.circle
                      r={size * 0.4}
                      fill="#fff"
                      fillOpacity={0.8}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.02 + 0.1 }}
                    />

                    {/* City label when zoomed */}
                    {position.zoom >= 2 && point.count >= 2 && (
                      <text
                        textAnchor="middle"
                        y={size + 10 / position.zoom}
                        style={{
                          fontFamily: 'system-ui',
                          fontSize: `${10 / position.zoom}px`,
                          fill: isDark ? '#f9fafb' : '#0f172a',
                          fontWeight: 500,
                        }}
                      >
                        {point.city}
                      </text>
                    )}
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>

          {/* Hover Tooltip */}
          <AnimatePresence>
            {hoveredPoint && !selectedPoint && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-2xl pointer-events-none z-20"
                style={{
                  left: '50%',
                  top: '20px',
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-accent" />
                  <span className="font-semibold text-foreground">{hoveredPoint.city}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{hoveredPoint.country}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Mentions</p>
                    <p className="font-semibold text-foreground">{hoveredPoint.count}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reach</p>
                    <p className="font-semibold text-foreground">{(hoveredPoint.reach / 1000).toFixed(1)}K</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ 
                      backgroundColor: getSentimentColor(hoveredPoint.sentiment),
                      boxShadow: `0 0 8px ${getSentimentColor(hoveredPoint.sentiment)}`,
                    }}
                  />
                  <span className="text-sm capitalize text-foreground">{hoveredPoint.sentiment} sentiment</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Selected Point Detail Panel */}
          <AnimatePresence>
            {selectedPoint && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-4 top-4 bottom-4 w-72 bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl overflow-hidden z-20"
              >
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: getSentimentColor(selectedPoint.sentiment),
                          boxShadow: `0 0 8px ${getSentimentColor(selectedPoint.sentiment)}`,
                        }}
                      />
                      <h4 className="font-semibold text-foreground">{selectedPoint.city}</h4>
                    </div>
                    <button
                      onClick={() => setSelectedPoint(null)}
                      className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground text-xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedPoint.country}</p>
                </div>
                
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Mentions</p>
                      <p className="text-xl font-bold text-foreground">{selectedPoint.count}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Reach</p>
                      <p className="text-xl font-bold text-foreground">{(selectedPoint.reach / 1000).toFixed(1)}K</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Recent Mentions</p>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {selectedPoint.recentMentions.map((mention, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground line-clamp-2"
                        >
                          "{mention}"
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Live Activity Feed */}
        <div className="w-64 border-l border-border p-4 hidden lg:block bg-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <h4 className="text-sm font-semibold text-foreground">Live Activity</h4>
          </div>
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {liveActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: -20, height: 0 }}
                  className="p-3 bg-muted/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getSentimentColor(activity.point.sentiment) }}
                    />
                    <span className="text-sm font-medium text-foreground">{activity.point.city}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{activity.type}</p>
                  <p className="text-xs text-accent mt-1">{activity.point.count} mentions</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {liveActivity.length === 0 && (
              <p className="text-xs text-muted-foreground text-center py-4">Waiting for activity...</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
