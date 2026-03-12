import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Bell, TrendingUp, AlertTriangle, User, Hash, Check } from 'lucide-react';
import type { Alert } from '../../store/dashboardStore';

const alertIcons = {
  spike: TrendingUp,
  sentiment: AlertTriangle,
  influencer: User,
  keyword: Hash,
};

const alertColors = {
  spike: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
  sentiment: 'text-red-500 bg-red-500/10 border-red-500/30',
  influencer: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
  keyword: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
};

interface AlertsPanelProps {
  alerts: Alert[];
  onMarkRead: (id: string) => void;
}

export function AlertsPanel({ alerts, onMarkRead }: AlertsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card border border-border rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Recent Alerts</h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {alerts.filter((a) => !a.read).length} unread
        </span>
      </div>

      <div className="divide-y divide-border">
        <AnimatePresence>
          {alerts.map((alert, index) => {
            const Icon = alertIcons[alert.type];
            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 flex items-start gap-3 transition-colors ${
                  !alert.read ? 'bg-accent/5' : ''
                }`}
              >
                <div className={`p-2 rounded-lg border ${alertColors[alert.type]}`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(alert.timestamp, 'MMM d, h:mm a')}
                  </p>
                </div>
                {!alert.read && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onMarkRead(alert.id)}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <Check size={14} />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
