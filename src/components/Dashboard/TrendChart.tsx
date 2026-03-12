import { motion } from 'framer-motion';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { useThemeStore } from '../../store/themeStore';

const generateData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map((day) => ({
    name: day,
    mentions: Math.floor(Math.random() * 500) + 200,
    positive: Math.floor(Math.random() * 200) + 100,
    negative: Math.floor(Math.random() * 100) + 20,
    neutral: Math.floor(Math.random() * 150) + 50,
  }));
};

export function TrendChart() {
  const { isDark } = useThemeStore();
  const data = generateData();

  const gridColor = isDark ? '#374151' : '#e5e7eb';
  const textColor = isDark ? '#9ca3af' : '#6b7280';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Mention Trends</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-muted-foreground">Total</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-muted-foreground">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-muted-foreground">Negative</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} fontSize={12} />
            <YAxis stroke={textColor} fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              labelStyle={{ color: isDark ? '#f9fafb' : '#111827' }}
            />
            <Area
              type="monotone"
              dataKey="mentions"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#colorMentions)"
            />
            <Area
              type="monotone"
              dataKey="positive"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#colorPositive)"
            />
            <Area
              type="monotone"
              dataKey="negative"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#colorNegative)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
