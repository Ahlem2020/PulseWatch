import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const markers = [
  { name: 'New York', coordinates: [-74.006, 40.7128] as [number, number], value: 1234 },
  { name: 'London', coordinates: [-0.1276, 51.5074] as [number, number], value: 987 },
  { name: 'Paris', coordinates: [2.3522, 48.8566] as [number, number], value: 756 },
  { name: 'Tokyo', coordinates: [139.6917, 35.6895] as [number, number], value: 1567 },
  { name: 'Sydney', coordinates: [151.2093, -33.8688] as [number, number], value: 432 },
  { name: 'Dubai', coordinates: [55.2708, 25.2048] as [number, number], value: 654 },
];

const regionData = [
  { name: 'North America', value: 35, color: '#8b5cf6' },
  { name: 'Europe', value: 28, color: '#06b6d4' },
  { name: 'Asia Pacific', value: 22, color: '#10b981' },
  { name: 'Middle East', value: 10, color: '#f59e0b' },
  { name: 'Other', value: 5, color: '#6b7280' },
];

export function Maps() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Maps</h1>
        <p className="text-muted-foreground mt-1">Interactive map components</p>
      </div>

      {/* World Map with Markers */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">World Map with Markers</h2>
        <div className="h-96 bg-muted/30 rounded-lg overflow-hidden">
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ZoomableGroup center={[0, 20]} zoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="var(--muted)"
                      stroke="var(--border)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: 'var(--accent)', outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, value }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={6} fill="#8b5cf6" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={-12}
                    style={{ 
                      fontFamily: 'inherit', 
                      fill: 'var(--foreground)', 
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
          {markers.map((marker) => (
            <div key={marker.name} className="text-center">
              <p className="text-sm font-medium text-foreground">{marker.name}</p>
              <p className="text-lg font-bold text-accent">{marker.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Regional Distribution</h2>
          <div className="space-y-4">
            {regionData.map((region) => (
              <div key={region.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{region.name}</span>
                  <span className="text-muted-foreground">{region.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500" 
                    style={{ width: `${region.value}%`, backgroundColor: region.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Locations</h2>
          <div className="space-y-3">
            {markers.sort((a, b) => b.value - a.value).map((marker, i) => (
              <div 
                key={marker.name}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    i === 0 ? 'bg-yellow-500 text-white' :
                    i === 1 ? 'bg-gray-400 text-white' :
                    i === 2 ? 'bg-amber-700 text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-foreground font-medium">{marker.name}</span>
                </div>
                <span className="text-accent font-bold">{marker.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bubble Map */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Bubble Map - Data Density</h2>
        <div className="h-96 bg-muted/30 rounded-lg overflow-hidden">
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ZoomableGroup center={[0, 20]} zoom={1}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="var(--muted)"
                      stroke="var(--border)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, value }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle 
                    r={Math.sqrt(value) / 4} 
                    fill="#8b5cf6" 
                    fillOpacity={0.6}
                    stroke="#8b5cf6" 
                    strokeWidth={1} 
                  />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>

      {/* Map with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '24,521', change: '+12%', color: 'accent' },
          { label: 'Active Regions', value: '42', change: '+3', color: 'green' },
          { label: 'New Markets', value: '8', change: '+2', color: 'blue' },
          { label: 'Coverage', value: '87%', change: '+5%', color: 'purple' },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
            <p className="text-sm text-green-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
