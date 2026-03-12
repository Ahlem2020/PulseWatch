import { motion } from 'framer-motion';
import { MessageSquare, Users, TrendingUp, Heart } from 'lucide-react';
import { KPICard } from '../components/Dashboard/KPICard';
import { SentimentGauge } from '../components/Dashboard/SentimentGauge';
import { MentionsFeed } from '../components/Dashboard/MentionsFeed';
import { TrendChart } from '../components/Dashboard/TrendChart';
import { PlatformBreakdown } from '../components/Dashboard/PlatformBreakdown';
import { TrendingKeywords } from '../components/Dashboard/TrendingKeywords';
import { WorldMap } from '../components/Dashboard/WorldMap';
import { AlertsPanel } from '../components/Dashboard/AlertsPanel';
import { InfluencerCard } from '../components/Dashboard/InfluencerCard';
import { useDashboardStore } from '../store/dashboardStore';

export function Dashboard() {
  const { mentions, alerts, markAlertRead, searchQuery, selectedPlatform } = useDashboardStore();

  const filteredMentions = mentions.filter((m) => {
    const matchesSearch = searchQuery
      ? m.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.author.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const matchesPlatform = selectedPlatform === 'all' || m.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  const sentimentCounts = {
    positive: mentions.filter((m) => m.sentiment === 'positive').length,
    neutral: mentions.filter((m) => m.sentiment === 'neutral').length,
    negative: mentions.filter((m) => m.sentiment === 'negative').length,
  };

  const totalReach = mentions.reduce((acc, m) => acc + m.reach, 0);
  const totalEngagement = mentions.reduce((acc, m) => acc + m.engagement, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your brand mentions in real-time</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Export Report
        </motion.button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Mentions"
          value={mentions.length}
          change={12.5}
          icon={MessageSquare}
          color="blue"
          delay={0}
        />
        <KPICard
          title="Total Reach"
          value={`${(totalReach / 1000000).toFixed(1)}M`}
          change={8.2}
          icon={Users}
          color="green"
          delay={0.1}
        />
        <KPICard
          title="Engagement"
          value={totalEngagement.toLocaleString()}
          change={-3.1}
          icon={Heart}
          color="purple"
          delay={0.2}
        />
        <KPICard
          title="Sentiment Score"
          value="+24"
          change={15.7}
          icon={TrendingUp}
          color="orange"
          delay={0.3}
        />
      </div>

      {/* World Map */}
      <WorldMap mentions={mentions} />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrendChart />
        </div>
        <SentimentGauge {...sentimentCounts} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MentionsFeed mentions={filteredMentions.slice(0, 10)} compact />
        </div>
        <div className="space-y-6">
          <PlatformBreakdown />
          <TrendingKeywords />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfluencerCard />
        <AlertsPanel alerts={alerts} onMarkRead={markAlertRead} />
      </div>
    </motion.div>
  );
}
