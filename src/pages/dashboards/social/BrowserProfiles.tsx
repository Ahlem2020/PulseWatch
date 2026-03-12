import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Monitor, Plus, Play, Pause, Trash2, Edit, Copy,
  MoreVertical, Search, Filter, FolderOpen, Users, Shield, Fingerprint,
  Chrome, RefreshCw, Settings, Download, Upload, Clock, XCircle
} from 'lucide-react';

interface BrowserProfile {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'error';
  os: string;
  browser: string;
  proxy: string;
  lastUsed: string;
  notes: string;
  fingerprint: {
    userAgent: string;
    screenResolution: string;
    timezone: string;
    language: string;
    webGL: string;
    canvas: string;
  };
}

const profiles: BrowserProfile[] = [
  {
    id: '1',
    name: 'Marketing Account - US',
    status: 'running',
    os: 'Windows 11',
    browser: 'Chrome 120',
    proxy: 'us-east.proxy.com:8080',
    lastUsed: '2 min ago',
    notes: 'Main marketing account for US campaigns',
    fingerprint: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      screenResolution: '1920x1080',
      timezone: 'America/New_York',
      language: 'en-US',
      webGL: 'NVIDIA GeForce RTX 3080',
      canvas: 'Unique #A7B3C1',
    },
  },
  {
    id: '2',
    name: 'Social Manager - EU',
    status: 'stopped',
    os: 'macOS Sonoma',
    browser: 'Chrome 119',
    proxy: 'eu-west.proxy.com:8080',
    lastUsed: '1 hour ago',
    notes: 'European social media management',
    fingerprint: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36',
      screenResolution: '2560x1440',
      timezone: 'Europe/London',
      language: 'en-GB',
      webGL: 'Apple M2 Pro',
      canvas: 'Unique #D4E2F1',
    },
  },
  {
    id: '3',
    name: 'Research Bot - Asia',
    status: 'stopped',
    os: 'Windows 10',
    browser: 'Firefox 121',
    proxy: 'asia-sg.proxy.com:8080',
    lastUsed: '3 hours ago',
    notes: 'Market research for Asian markets',
    fingerprint: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101',
      screenResolution: '1366x768',
      timezone: 'Asia/Singapore',
      language: 'zh-CN',
      webGL: 'Intel UHD Graphics 630',
      canvas: 'Unique #B2C4D8',
    },
  },
  {
    id: '4',
    name: 'Competitor Analysis',
    status: 'error',
    os: 'Ubuntu 22.04',
    browser: 'Chrome 118',
    proxy: 'rotating.proxy.com:8080',
    lastUsed: '1 day ago',
    notes: 'Competitor monitoring - proxy expired',
    fingerprint: {
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      screenResolution: '1920x1200',
      timezone: 'UTC',
      language: 'en-US',
      webGL: 'AMD Radeon RX 580',
      canvas: 'Unique #E5F0FA',
    },
  },
];

const proxyList = [
  { name: 'US East', location: 'New York', status: 'active', speed: '45ms', type: 'Residential' },
  { name: 'US West', location: 'Los Angeles', status: 'active', speed: '62ms', type: 'Datacenter' },
  { name: 'EU West', location: 'London', status: 'active', speed: '38ms', type: 'Residential' },
  { name: 'Asia Pacific', location: 'Singapore', status: 'maintenance', speed: '-', type: 'Mobile' },
];

export function BrowserProfiles() {
  const [selectedProfile, setSelectedProfile] = useState<BrowserProfile | null>(null);
  const [, setShowNewProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500';
      case 'stopped': return 'bg-gray-400';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Play size={14} className="text-green-500" />;
      case 'stopped': return <Pause size={14} className="text-gray-400" />;
      case 'error': return <XCircle size={14} className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Browser Profiles</h1>
          <p className="text-muted-foreground">Manage multi-browser sessions with unique digital fingerprints</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Upload size={18} />
            Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Download size={18} />
            Export
          </button>
          <button 
            onClick={() => setShowNewProfile(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            <Plus size={18} />
            New Profile
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Profiles', value: '24', icon: Users, color: 'text-blue-500' },
          { label: 'Running', value: '8', icon: Play, color: 'text-green-500' },
          { label: 'Active Proxies', value: '12', icon: Shield, color: 'text-purple-500' },
          { label: 'Unique Fingerprints', value: '24', icon: Fingerprint, color: 'text-orange-500' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
          <Filter size={18} />
          Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
          <FolderOpen size={18} />
          Groups
        </button>
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-accent text-white' : 'hover:bg-muted'}`}
          >
            <Monitor size={18} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 ${viewMode === 'list' ? 'bg-accent text-white' : 'hover:bg-muted'}`}
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <motion.div
            key={profile.id}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-all cursor-pointer"
            onClick={() => setSelectedProfile(profile)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Chrome size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">{profile.browser}</p>
                </div>
              </div>
              <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(profile.status)}`} />
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">OS</span>
                <span className="text-foreground">{profile.os}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Proxy</span>
                <span className="text-foreground font-mono text-xs">{profile.proxy.split(':')[0]}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Last Used</span>
                <span className="text-foreground flex items-center gap-1">
                  <Clock size={12} />
                  {profile.lastUsed}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <button 
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors ${
                  profile.status === 'running' 
                    ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' 
                    : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                }`}
                onClick={(e) => { e.stopPropagation(); }}
              >
                {profile.status === 'running' ? <Pause size={16} /> : <Play size={16} />}
                {profile.status === 'running' ? 'Stop' : 'Start'}
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Edit size={16} className="text-muted-foreground" />
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Copy size={16} className="text-muted-foreground" />
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Trash2 size={16} className="text-red-500" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proxy Management */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Proxy Management</h3>
          <button className="flex items-center gap-2 text-sm text-accent hover:underline">
            <Plus size={16} />
            Add Proxy
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Location</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Speed</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {proxyList.map((proxy, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4 font-medium text-foreground">{proxy.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{proxy.location}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded text-xs bg-accent/10 text-accent">
                      {proxy.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-foreground">{proxy.speed}</td>
                  <td className="py-4 px-4">
                    <span className={`flex items-center gap-2 text-sm ${
                      proxy.status === 'active' ? 'text-green-500' : 'text-yellow-500'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        proxy.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      {proxy.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <RefreshCw size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-1 hover:bg-muted rounded">
                        <Settings size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Detail Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProfile(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card rounded-xl border border-border w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Chrome size={28} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedProfile.name}</h2>
                      <p className="text-muted-foreground">{selectedProfile.browser} • {selectedProfile.os}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                    selectedProfile.status === 'running' ? 'bg-green-500/10 text-green-500' :
                    selectedProfile.status === 'error' ? 'bg-red-500/10 text-red-500' :
                    'bg-gray-500/10 text-gray-500'
                  }`}>
                    {getStatusIcon(selectedProfile.status)}
                    <span className="text-sm capitalize">{selectedProfile.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Fingerprint size={18} />
                    Digital Fingerprint
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedProfile.fingerprint).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-lg bg-muted">
                        <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-foreground font-mono mt-1 truncate">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield size={18} />
                    Proxy Configuration
                  </h3>
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-mono text-foreground">{selectedProfile.proxy}</p>
                    <p className="text-sm text-muted-foreground mt-2">{selectedProfile.notes}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
                    <Play size={18} />
                    Launch Browser
                  </button>
                  <button className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
                    <Copy size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
