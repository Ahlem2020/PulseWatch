import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Book,
  Rocket,
  Settings,
  Code,
  Bell,
  Users,
  BarChart3,
  Shield,
  Zap,
  ChevronRight,
  Search,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: DocContent[];
}

interface DocContent {
  type: 'text' | 'code' | 'list' | 'warning' | 'info';
  content: string | string[];
  language?: string;
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    content: [
      {
        type: 'text',
        content: 'Welcome to PulseWatch! This guide will help you get up and running with our brand monitoring platform in just a few minutes.',
      },
      {
        type: 'list',
        content: [
          'Create your account and verify your email',
          'Set up your first brand to monitor',
          'Configure your notification preferences',
          'Start tracking mentions across social media',
        ],
      },
      {
        type: 'info',
        content: 'Pro tip: Start with your main brand name and add variations later to catch all mentions.',
      },
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard Overview',
    icon: BarChart3,
    content: [
      {
        type: 'text',
        content: 'The dashboard provides a real-time overview of your brand mentions, sentiment analysis, and key performance indicators.',
      },
      {
        type: 'text',
        content: 'Key components include:',
      },
      {
        type: 'list',
        content: [
          'KPI Cards - Total mentions, reach, engagement, and sentiment score',
          'Sentiment Gauge - Visual representation of overall sentiment',
          'Trend Chart - Historical data visualization',
          'Mentions Feed - Real-time stream of brand mentions',
          'World Map - Geographic distribution of mentions',
        ],
      },
    ],
  },
  {
    id: 'mentions',
    title: 'Managing Mentions',
    icon: Users,
    content: [
      {
        type: 'text',
        content: 'The Mentions page allows you to view, filter, and manage all detected brand mentions across various platforms.',
      },
      {
        type: 'text',
        content: 'You can filter mentions by:',
      },
      {
        type: 'list',
        content: [
          'Platform (Twitter, Facebook, Instagram, LinkedIn, etc.)',
          'Sentiment (Positive, Neutral, Negative)',
          'Date range',
          'Keywords',
          'Influencer status',
        ],
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Example: Filtering mentions programmatically
const filteredMentions = mentions.filter(m => {
  return m.platform === 'twitter' && 
         m.sentiment === 'positive' &&
         m.reach > 10000;
});`,
      },
    ],
  },
  {
    id: 'alerts',
    title: 'Alert Configuration',
    icon: Bell,
    content: [
      {
        type: 'text',
        content: 'Set up custom alerts to never miss important brand mentions or sentiment changes.',
      },
      {
        type: 'warning',
        content: 'Important: Configure your alert thresholds carefully to avoid notification fatigue.',
      },
      {
        type: 'text',
        content: 'Alert types available:',
      },
      {
        type: 'list',
        content: [
          'Spike Detection - Unusual increase in mention volume',
          'Sentiment Shift - Significant change in overall sentiment',
          'Influencer Mention - When high-reach accounts mention your brand',
          'Keyword Trigger - Specific keyword combinations detected',
          'Competitor Activity - Monitor competitor mentions',
        ],
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    icon: BarChart3,
    content: [
      {
        type: 'text',
        content: 'Deep dive into your brand analytics with comprehensive reporting tools.',
      },
      {
        type: 'list',
        content: [
          'Time-series analysis of mention volume',
          'Sentiment trend analysis',
          'Platform performance comparison',
          'Top influencers and advocates',
          'Geographic insights',
          'Competitor benchmarking',
        ],
      },
      {
        type: 'info',
        content: 'Export reports in PDF, CSV, or Excel format for presentations and further analysis.',
      },
    ],
  },
  {
    id: 'api',
    title: 'API Reference',
    icon: Code,
    content: [
      {
        type: 'text',
        content: 'Integrate PulseWatch with your existing tools using our RESTful API.',
      },
      {
        type: 'code',
        language: 'bash',
        content: `# Authentication
curl -X POST https://api.pulsewatch.io/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"api_key": "your_api_key"}'`,
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Fetching mentions via API
const response = await fetch('https://api.pulsewatch.io/v1/mentions', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  }
});

const mentions = await response.json();`,
      },
      {
        type: 'text',
        content: 'Rate limits: 1000 requests per hour for Pro plans, 5000 for Enterprise.',
      },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Zap,
    content: [
      {
        type: 'text',
        content: 'Connect PulseWatch with your favorite tools for seamless workflow integration.',
      },
      {
        type: 'list',
        content: [
          'Slack - Real-time alerts in your channels',
          'Microsoft Teams - Team collaboration',
          'Zapier - Connect with 5000+ apps',
          'Webhook - Custom integrations',
          'Salesforce - CRM synchronization',
          'HubSpot - Marketing automation',
        ],
      },
    ],
  },
  {
    id: 'settings',
    title: 'Account Settings',
    icon: Settings,
    content: [
      {
        type: 'text',
        content: 'Customize your PulseWatch experience through the Settings page.',
      },
      {
        type: 'list',
        content: [
          'Appearance - Toggle between light and dark themes',
          'Notifications - Configure email and push notifications',
          'Security - Enable two-factor authentication',
          'Data & Storage - Manage data retention policies',
          'Team - Invite team members and manage roles',
          'Billing - View and manage subscription',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    content: [
      {
        type: 'text',
        content: 'We take security seriously. Here are the measures we have in place to protect your data.',
      },
      {
        type: 'list',
        content: [
          'End-to-end encryption for all data transmission',
          'SOC 2 Type II certified infrastructure',
          'GDPR compliant data handling',
          'Regular security audits and penetration testing',
          'Two-factor authentication support',
          'Role-based access control',
        ],
      },
      {
        type: 'info',
        content: 'For enterprise security requirements, contact our sales team for a custom security review.',
      },
    ],
  },
];

export function Documentation() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredSections = docSections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.some((c) =>
        typeof c.content === 'string'
          ? c.content.toLowerCase().includes(searchQuery.toLowerCase())
          : c.content.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
      )
  );

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderContent = (content: DocContent, index: number) => {
    switch (content.type) {
      case 'text':
        return (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {content.content as string}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="space-y-2 ml-4">
            {(content.content as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <ChevronRight className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <div key={index} className="relative group">
            <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border rounded-t-lg">
              <span className="text-xs text-muted-foreground">{content.language}</span>
              <button
                onClick={() => copyToClipboard(content.content as string)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {copiedCode === content.content ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <pre className="p-4 bg-muted/30 rounded-b-lg overflow-x-auto">
              <code className="text-sm text-foreground">{content.content as string}</code>
            </pre>
          </div>
        );
      case 'warning':
        return (
          <div key={index} className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <Bell className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-200">{content.content as string}</p>
          </div>
        );
      case 'info':
        return (
          <div key={index} className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-accent">{content.content as string}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const activeDoc = docSections.find((s) => s.id === activeSection);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 -m-6"
    >
      {/* Sidebar */}
      <div className="w-72 min-h-[calc(100vh-4rem)] bg-card border-r border-border p-6 shrink-0">
        <div className="flex items-center gap-2 mb-6">
          <Book className="w-5 h-5 text-accent" />
          <h2 className="font-bold text-foreground">Documentation</h2>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                activeSection === section.id
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <section.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{section.title}</span>
            </button>
          ))}
        </nav>

        {/* External Links */}
        <div className="mt-8 pt-6 border-t border-border space-y-2">
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            API Reference
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Community
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-4xl">
        {activeDoc && (
          <motion.div
            key={activeDoc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <activeDoc.icon className="w-5 h-5 text-accent" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">{activeDoc.title}</h1>
            </div>

            <div className="space-y-6">
              {activeDoc.content.map((content, index) => renderContent(content, index))}
            </div>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
              {docSections.findIndex((s) => s.id === activeSection) > 0 && (
                <button
                  onClick={() => {
                    const currentIndex = docSections.findIndex((s) => s.id === activeSection);
                    setActiveSection(docSections[currentIndex - 1].id);
                  }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Previous
                </button>
              )}
              <div className="flex-1" />
              {docSections.findIndex((s) => s.id === activeSection) < docSections.length - 1 && (
                <button
                  onClick={() => {
                    const currentIndex = docSections.findIndex((s) => s.id === activeSection);
                    setActiveSection(docSections[currentIndex + 1].id);
                  }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
