import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Sparkles,
  Bug,
  Wrench,
  Zap,
  Calendar,
  Tag,
  ChevronDown,
  Search,
} from 'lucide-react';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'feature' | 'improvement' | 'fix' | 'breaking';
  title: string;
  description: string;
  details?: string[];
}

const changelog: ChangelogEntry[] = [
  {
    version: '2.5.0',
    date: '2026-03-10',
    type: 'feature',
    title: 'AI-Powered Insights',
    description: 'Introducing advanced AI insights for better understanding of brand mentions.',
    details: [
      'Automatic topic clustering',
      'Trend prediction algorithms',
      'Smart alert suggestions',
      'Enhanced sentiment granularity',
    ],
  },
  {
    version: '2.4.2',
    date: '2026-03-05',
    type: 'fix',
    title: 'Performance Improvements',
    description: 'Fixed several issues affecting dashboard loading times.',
    details: [
      'Optimized database queries',
      'Improved caching strategy',
      'Fixed memory leak in real-time updates',
    ],
  },
  {
    version: '2.4.1',
    date: '2026-02-28',
    type: 'improvement',
    title: 'Enhanced Filters',
    description: 'Improved filtering capabilities across all views.',
    details: [
      'Multi-select platform filtering',
      'Date range presets',
      'Saved filter combinations',
      'Export filtered results',
    ],
  },
  {
    version: '2.4.0',
    date: '2026-02-20',
    type: 'feature',
    title: 'TikTok Integration',
    description: 'Full support for TikTok brand monitoring is now available.',
    details: [
      'Track mentions in videos and comments',
      'Hashtag monitoring',
      'Influencer discovery',
      'Engagement analytics',
    ],
  },
  {
    version: '2.3.5',
    date: '2026-02-15',
    type: 'fix',
    title: 'Security Patch',
    description: 'Important security updates and vulnerability fixes.',
    details: [
      'Updated authentication protocols',
      'Enhanced data encryption',
      'Fixed XSS vulnerability',
    ],
  },
  {
    version: '2.3.0',
    date: '2026-02-01',
    type: 'feature',
    title: 'Custom Dashboards',
    description: 'Create personalized dashboards with drag-and-drop widgets.',
    details: [
      'Customizable widget layouts',
      'Multiple dashboard support',
      'Shareable dashboard links',
      'Widget templates library',
    ],
  },
  {
    version: '2.2.0',
    date: '2026-01-15',
    type: 'improvement',
    title: 'Report Builder 2.0',
    description: 'Completely redesigned report builder with new capabilities.',
    details: [
      'Visual report designer',
      'Scheduled report delivery',
      'New export formats (PPTX, XLSX)',
      'Custom branding options',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-01-01',
    type: 'breaking',
    title: 'API v2 Release',
    description: 'Major API update with breaking changes. Migration guide available.',
    details: [
      'New endpoint structure',
      'Improved rate limiting',
      'WebSocket support',
      'Deprecation of v1 endpoints',
    ],
  },
];

const typeConfig = {
  feature: { icon: Sparkles, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'New Feature' },
  improvement: { icon: Zap, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Improvement' },
  fix: { icon: Bug, color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Bug Fix' },
  breaking: { icon: Wrench, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Breaking Change' },
};

export function Changelog() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedVersion, setExpandedVersion] = useState<string | null>(changelog[0].version);

  const filteredChangelog = changelog.filter((entry) => {
    const matchesFilter = filter === 'all' || entry.type === filter;
    const matchesSearch =
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.version.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Changelog</h1>
        <p className="text-muted-foreground mt-1">
          Stay up to date with the latest features, improvements, and fixes
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search changelog..."
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-accent text-white'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {Object.entries(typeConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-accent text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {filteredChangelog.map((entry, index) => {
            const config = typeConfig[entry.type];
            const isExpanded = expandedVersion === entry.version;

            return (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-3 w-6 h-6 rounded-full ${config.bg} flex items-center justify-center`}
                >
                  <config.icon className={`w-3 h-3 ${config.color}`} />
                </div>

                {/* Card */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setExpandedVersion(isExpanded ? null : entry.version)}
                    className="w-full flex items-start justify-between p-4 text-left"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                          {config.label}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Tag className="w-3 h-3" />
                          v{entry.version}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground">{entry.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    {entry.details && (
                      <div className="px-4 pb-4 border-t border-border pt-4">
                        <h4 className="text-sm font-medium text-foreground mb-3">What's included:</h4>
                        <ul className="space-y-2">
                          {entry.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full ${config.color.replace('text', 'bg')}`} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredChangelog.length === 0 && (
          <div className="text-center py-12 bg-card rounded-xl border border-border ml-16">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No changelog entries found</p>
          </div>
        )}
      </div>

      {/* Subscribe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-xl border border-accent/20 p-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get notified about new features and updates</p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
