import { motion } from 'framer-motion';
import { TrendChart } from '../components/Dashboard/TrendChart';
import { PlatformBreakdown } from '../components/Dashboard/PlatformBreakdown';
import { SentimentGauge } from '../components/Dashboard/SentimentGauge';
import { WorldMap } from '../components/Dashboard/WorldMap';
import { useDashboardStore } from '../store/dashboardStore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useThemeStore } from '../store/themeStore';

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  mentions: Math.floor(Math.random() * 100) + 20,
}));

export function Analytics() {
  const { mentions } = useDashboardStore();
  const { isDark } = useThemeStore();

  const sentimentCounts = {
    positive: mentions.filter((m) => m.sentiment === 'positive').length,
    neutral: mentions.filter((m) => m.sentiment === 'neutral').length,
    negative: mentions.filter((m) => m.sentiment === 'negative').length,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Deep dive into your brand performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrendChart />
        </div>
        <SentimentGauge {...sentimentCounts} />
      </div>

      <WorldMap mentions={mentions} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Hourly Activity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
                <XAxis
                  dataKey="hour"
                  stroke={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize={10}
                  interval={3}
                />
                <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="mentions" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <PlatformBreakdown />
      </div>
    </motion.div>
  );
}
