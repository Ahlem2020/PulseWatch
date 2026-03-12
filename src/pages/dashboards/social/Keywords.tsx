import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Search, Plus, Trash2, Edit, Bell, TrendingUp, TrendingDown, AlertTriangle,
  Hash, Filter, Calendar, Download, Eye, Pause, Play, Target, Zap,
  Globe, MessageSquare, BarChart3, Clock, CheckCircle, Settings
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

interface Keyword {
  id: string;
  term: string;
  status: 'active' | 'paused';
  mentions: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
  sentiment: number;
  platforms: string[];
  alerts: boolean;
  lastMention: string;
}

const keywords: Keyword[] = [
  { id: '1', term: 'brand name', status: 'active', mentions: 12450, trend: 'up', trendValue: '+15.2%', sentiment: 78, platforms: ['X', 'Facebook', 'Instagram'], alerts: true, lastMention: '2 min ago' },
  { id: '2', term: 'product launch', status: 'active', mentions: 8920, trend: 'up', trendValue: '+42.1%', sentiment: 85, platforms: ['X', 'YouTube', 'TikTok'], alerts: true, lastMention: '5 min ago' },
  { id: '3', term: 'customer service', status: 'active', mentions: 3240, trend: 'down', trendValue: '-8.3%', sentiment: 45, platforms: ['X', 'Facebook'], alerts: true, lastMention: '12 min ago' },
  { id: '4', term: 'competitor brand', status: 'active', mentions: 5670, trend: 'stable', trendValue: '+0.5%', sentiment: 62, platforms: ['All'], alerts: false, lastMention: '1 hour ago' },
  { id: '5', term: '#trending2024', status: 'paused', mentions: 2100, trend: 'down', trendValue: '-23.4%', sentiment: 71, platforms: ['X', 'Instagram', 'TikTok'], alerts: false, lastMention: '1 day ago' },
];

const trendData = [
  { date: 'Mon', 'brand name': 1200, 'product launch': 800, 'customer service': 400 },
  { date: 'Tue', 'brand name': 1400, 'product launch': 1200, 'customer service': 350 },
  { date: 'Wed', 'brand name': 1100, 'product launch': 1500, 'customer service': 520 },
  { date: 'Thu', 'brand name': 1600, 'product launch': 1800, 'customer service': 380 },
  { date: 'Fri', 'brand name': 1800, 'product launch': 2100, 'customer service': 290 },
  { date: 'Sat', 'brand name': 1500, 'product launch': 1900, 'customer service': 310 },
  { date: 'Sun', 'brand name': 1700, 'product launch': 2300, 'customer service': 280 },
];

const recentAlerts = [
  { keyword: 'brand name', message: 'Spike detected: 340 mentions in last hour', type: 'spike', time: '5 min ago' },
  { keyword: 'customer service', message: 'Negative sentiment increase: -15% in 24h', type: 'sentiment', time: '1 hour ago' },
  { keyword: 'product launch', message: 'Trending on X with 5.2K mentions', type: 'trending', time: '2 hours ago' },
  { keyword: 'competitor brand', message: 'New campaign detected with high engagement', type: 'competitor', time: '4 hours ago' },
];

const topCooccurrences = [
  { term: 'quality', count: 3420, sentiment: 82 },
  { term: 'price', count: 2890, sentiment: 58 },
  { term: 'support', count: 2340, sentiment: 45 },
  { term: 'delivery', count: 1980, sentiment: 72 },
  { term: 'recommend', count: 1650, sentiment: 91 },
];

export function Keywords() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Keyword Detection</h1>
          <p className="text-muted-foreground">Monitor keywords, hashtags, and brand mentions across platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Download size={18} />
            Export
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            <Plus size={18} />
            Add Keyword
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Keywords', value: '12', icon: Hash, color: 'text-blue-500' },
          { label: 'Total Mentions', value: '48.2K', icon: MessageSquare, color: 'text-purple-500' },
          { label: 'Alerts Today', value: '8', icon: Bell, color: 'text-orange-500' },
          { label: 'Avg. Sentiment', value: '72%', icon: TrendingUp, color: 'text-green-500' },
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

      {/* Keyword Trend Chart */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Keyword Trends (7 Days)</h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-sm hover:bg-muted transition-colors text-muted-foreground">Day</button>
            <button className="px-3 py-1.5 rounded-lg text-sm bg-accent text-white">Week</button>
            <button className="px-3 py-1.5 rounded-lg text-sm hover:bg-muted transition-colors text-muted-foreground">Month</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                border: '1px solid var(--border)',
                borderRadius: '8px' 
              }} 
            />
            <Area type="monotone" dataKey="brand name" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
            <Area type="monotone" dataKey="product launch" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
            <Area type="monotone" dataKey="customer service" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Keywords Table */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Keyword</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Mentions</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Trend</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Sentiment</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Platforms</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword) => (
              <tr key={keyword.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Hash size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{keyword.term}</p>
                      <p className="text-xs text-muted-foreground">Last: {keyword.lastMention}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold text-foreground">{keyword.mentions.toLocaleString()}</span>
                </td>
                <td className="py-4 px-6">
                  <span className={`flex items-center gap-1 ${
                    keyword.trend === 'up' ? 'text-green-500' : 
                    keyword.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {keyword.trend === 'up' ? <TrendingUp size={16} /> : 
                     keyword.trend === 'down' ? <TrendingDown size={16} /> : 
                     <span className="w-4">—</span>}
                    {keyword.trendValue}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          keyword.sentiment >= 70 ? 'bg-green-500' : 
                          keyword.sentiment >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${keyword.sentiment}%` }}
                      />
                    </div>
                    <span className="text-sm text-foreground">{keyword.sentiment}%</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1">
                    {keyword.platforms.slice(0, 3).map((platform, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        {platform}
                      </span>
                    ))}
                    {keyword.platforms.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{keyword.platforms.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${
                    keyword.status === 'active' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-gray-500/10 text-gray-500'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      keyword.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                    {keyword.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                      <Eye size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                      <Bell size={16} className={keyword.alerts ? 'text-accent' : 'text-muted-foreground'} />
                    </button>
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                      {keyword.status === 'active' ? 
                        <Pause size={16} className="text-muted-foreground" /> : 
                        <Play size={16} className="text-muted-foreground" />
                      }
                    </button>
                    <button className="p-1.5 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alerts and Co-occurrences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Recent Alerts</h3>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <div className={`p-2 rounded-lg ${
                  alert.type === 'spike' ? 'bg-purple-500/10 text-purple-500' :
                  alert.type === 'sentiment' ? 'bg-red-500/10 text-red-500' :
                  alert.type === 'trending' ? 'bg-green-500/10 text-green-500' :
                  'bg-blue-500/10 text-blue-500'
                }`}>
                  {alert.type === 'spike' ? <Zap size={18} /> :
                   alert.type === 'sentiment' ? <AlertTriangle size={18} /> :
                   alert.type === 'trending' ? <TrendingUp size={18} /> :
                   <Target size={18} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent">{alert.keyword}</span>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Co-occurrences */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Top Co-occurring Terms</h3>
            <button className="text-sm text-accent hover:underline">Analyze</button>
          </div>
          <div className="space-y-4">
            {topCooccurrences.map((term, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-muted-foreground w-6">#{idx + 1}</span>
                  <div>
                    <p className="font-medium text-foreground">{term.term}</p>
                    <p className="text-sm text-muted-foreground">{term.count.toLocaleString()} mentions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-2 py-1 rounded text-xs ${
                    term.sentiment >= 70 ? 'bg-green-500/10 text-green-500' :
                    term.sentiment >= 50 ? 'bg-yellow-500/10 text-yellow-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {term.sentiment}% positive
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Keyword Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card rounded-xl border border-border w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Add Keyword</h2>
                <p className="text-sm text-muted-foreground">Start monitoring a new keyword or hashtag</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Keyword or Hashtag</label>
                  <input
                    type="text"
                    placeholder="Enter keyword..."
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Platforms</label>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'X', 'Facebook', 'Instagram', 'TikTok', 'YouTube', 'Websites'].map((platform) => (
                      <button
                        key={platform}
                        className="px-3 py-1.5 rounded-lg text-sm border border-border hover:border-accent hover:text-accent transition-colors"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <div>
                    <p className="font-medium text-foreground">Enable Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified on significant changes</p>
                  </div>
                  <button className="w-12 h-6 rounded-full bg-accent relative">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                  </button>
                </div>
              </div>
              <div className="p-6 border-t border-border flex justify-end gap-3">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
                  Add Keyword
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
