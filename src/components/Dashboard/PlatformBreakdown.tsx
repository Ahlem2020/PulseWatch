import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Twitter, MessageCircle, Newspaper, BookOpen, Youtube, Instagram } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const data = [
  { name: 'Twitter/X', value: 35, color: '#0ea5e9', icon: Twitter },
  { name: 'Reddit', value: 20, color: '#f97316', icon: MessageCircle },
  { name: 'News', value: 18, color: '#3b82f6', icon: Newspaper },
  { name: 'Blogs', value: 12, color: '#a855f7', icon: BookOpen },
  { name: 'YouTube', value: 10, color: '#ef4444', icon: Youtube },
  { name: 'Instagram', value: 5, color: '#ec4899', icon: Instagram },
];

export function PlatformBreakdown() {
  const { isDark } = useThemeStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">Source Breakdown</h3>

      <div className="flex items-center gap-4">
        <div className="w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff',
                  border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-2">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon size={14} style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
