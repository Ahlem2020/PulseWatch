import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FileText, Plus, Download, Trash2, Edit, Calendar, Clock, CheckCircle,
  Loader2, Eye, Copy, Share2, Filter, Search, BarChart3, PieChart,
  TrendingUp, Users, Globe, Mail, Slack, Send, RefreshCw, Settings
} from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: 'social' | 'competitor' | 'sentiment' | 'keyword' | 'custom';
  status: 'ready' | 'generating' | 'scheduled' | 'failed';
  lastGenerated: string;
  schedule: string;
  format: 'PDF' | 'Excel' | 'Word' | 'PowerPoint';
  pages: number;
  recipients: string[];
}

const reports: Report[] = [
  { id: '1', name: 'Weekly Social Media Performance', type: 'social', status: 'ready', lastGenerated: '2 hours ago', schedule: 'Every Monday 9:00 AM', format: 'PDF', pages: 24, recipients: ['team@company.com'] },
  { id: '2', name: 'Monthly Competitor Analysis', type: 'competitor', status: 'ready', lastGenerated: '3 days ago', schedule: 'Monthly', format: 'PowerPoint', pages: 42, recipients: ['executives@company.com'] },
  { id: '3', name: 'Real-time Sentiment Report', type: 'sentiment', status: 'generating', lastGenerated: 'Generating...', schedule: 'On demand', format: 'PDF', pages: 0, recipients: [] },
  { id: '4', name: 'Keyword Performance Dashboard', type: 'keyword', status: 'scheduled', lastGenerated: '1 week ago', schedule: 'Daily 6:00 AM', format: 'Excel', pages: 18, recipients: ['analytics@company.com'] },
  { id: '5', name: 'Q1 Marketing Insights', type: 'custom', status: 'ready', lastGenerated: '2 weeks ago', schedule: 'Quarterly', format: 'PowerPoint', pages: 56, recipients: ['marketing@company.com', 'cmo@company.com'] },
];

const reportTemplates = [
  { name: 'Social Media Overview', description: 'Complete overview of all social channels', icon: Globe, color: 'text-blue-500' },
  { name: 'Sentiment Analysis', description: 'Deep dive into brand sentiment', icon: TrendingUp, color: 'text-green-500' },
  { name: 'Competitor Benchmark', description: 'Compare performance with competitors', icon: BarChart3, color: 'text-purple-500' },
  { name: 'Influencer Report', description: 'Influencer engagement and ROI', icon: Users, color: 'text-orange-500' },
  { name: 'Crisis Alert Summary', description: 'Negative sentiment and crisis tracking', icon: PieChart, color: 'text-red-500' },
];

const recentExports = [
  { name: 'Weekly_Report_Mar_8.pdf', size: '2.4 MB', date: 'Mar 8, 2026', downloads: 12 },
  { name: 'Competitor_Analysis_Feb.pptx', size: '8.1 MB', date: 'Mar 1, 2026', downloads: 8 },
  { name: 'Keywords_Data_Export.xlsx', size: '1.2 MB', date: 'Feb 28, 2026', downloads: 5 },
  { name: 'Sentiment_Dashboard_Q1.pdf', size: '3.8 MB', date: 'Feb 15, 2026', downloads: 24 },
];

export function Reports() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-500/10 text-green-500';
      case 'generating': return 'bg-blue-500/10 text-blue-500';
      case 'scheduled': return 'bg-yellow-500/10 text-yellow-500';
      case 'failed': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return <CheckCircle size={14} />;
      case 'generating': return <Loader2 size={14} className="animate-spin" />;
      case 'scheduled': return <Clock size={14} />;
      default: return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'social': return 'bg-blue-500';
      case 'competitor': return 'bg-purple-500';
      case 'sentiment': return 'bg-green-500';
      case 'keyword': return 'bg-orange-500';
      case 'custom': return 'bg-pink-500';
      default: return 'bg-gray-500';
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
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate, schedule, and share analytics reports</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Calendar size={18} />
            Schedule
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            <Plus size={18} />
            Create Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Reports', value: '24', change: '+3 this month', icon: FileText, color: 'text-blue-500' },
          { label: 'Scheduled', value: '8', change: 'Next: Today 6PM', icon: Clock, color: 'text-purple-500' },
          { label: 'Generated Today', value: '5', change: '12 pages avg', icon: CheckCircle, color: 'text-green-500' },
          { label: 'Total Downloads', value: '142', change: '+28 this week', icon: Download, color: 'text-orange-500' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground mt-3">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-xs text-accent mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Templates */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Quick Templates</h3>
          <button className="text-sm text-accent hover:underline">View All Templates</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {reportTemplates.map((template) => (
            <motion.button
              key={template.name}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-muted hover:bg-muted/80 text-left transition-colors"
            >
              <div className={`p-2 rounded-lg bg-card w-fit mb-3 ${template.color}`}>
                <template.icon size={20} />
              </div>
              <p className="font-medium text-foreground text-sm">{template.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{template.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search reports..."
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

      {/* Reports List */}
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Report</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Type</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Schedule</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Format</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(report.type)}`}>
                      <FileText size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{report.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {report.status === 'ready' ? `${report.pages} pages • ${report.lastGenerated}` : report.lastGenerated}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded-full text-xs capitalize bg-muted text-foreground">
                    {report.type}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs w-fit ${getStatusColor(report.status)}`}>
                    {getStatusIcon(report.status)}
                    {report.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">{report.schedule}</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 rounded text-xs bg-accent/10 text-accent font-medium">
                    {report.format}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {report.status === 'ready' && (
                      <>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Download">
                          <Download size={16} className="text-muted-foreground" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Preview">
                          <Eye size={16} className="text-muted-foreground" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Share">
                          <Share2 size={16} className="text-muted-foreground" />
                        </button>
                      </>
                    )}
                    {report.status === 'generating' && (
                      <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Cancel">
                        <RefreshCw size={16} className="text-muted-foreground animate-spin" />
                      </button>
                    )}
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Edit">
                      <Edit size={16} className="text-muted-foreground" />
                    </button>
                    <button className="p-1.5 hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Exports & Delivery Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Exports */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Recent Exports</h3>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentExports.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{file.size} • {file.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{file.downloads} downloads</span>
                  <button className="p-1.5 hover:bg-card rounded-lg transition-colors">
                    <Download size={16} className="text-accent" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Settings */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Delivery Channels</h3>
            <button className="text-sm text-accent hover:underline">Configure</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Email Delivery', description: '5 recipients configured', icon: Mail, enabled: true },
              { name: 'Slack Integration', description: '#reports channel', icon: Slack, enabled: true },
              { name: 'Auto-send to Clients', description: '3 client emails', icon: Send, enabled: false },
            ].map((channel) => (
              <div key={channel.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <channel.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{channel.name}</p>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                </div>
                <button className={`w-12 h-6 rounded-full relative transition-colors ${channel.enabled ? 'bg-accent' : 'bg-muted'}`}>
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${channel.enabled ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Report Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card rounded-xl border border-border w-full max-w-lg max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Create New Report</h2>
                <p className="text-sm text-muted-foreground">Configure your report settings</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Report Name</label>
                  <input
                    type="text"
                    placeholder="Enter report name..."
                    className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Report Type</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none">
                    <option>Social Media Overview</option>
                    <option>Competitor Analysis</option>
                    <option>Sentiment Report</option>
                    <option>Keyword Performance</option>
                    <option>Custom Report</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date Range</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="date" className="px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none" />
                    <input type="date" className="px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Format</label>
                  <div className="flex gap-2">
                    {['PDF', 'Excel', 'PowerPoint', 'Word'].map((format) => (
                      <button
                        key={format}
                        className="flex-1 px-3 py-2 rounded-lg text-sm border border-border hover:border-accent hover:text-accent transition-colors"
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Schedule</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none">
                    <option>Generate Now (One-time)</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                </div>
              </div>
              <div className="p-6 border-t border-border flex justify-end gap-3">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
                  Create Report
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
