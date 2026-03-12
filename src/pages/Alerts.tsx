import { motion } from 'framer-motion';
import { AlertsPanel } from '../components/Dashboard/AlertsPanel';
import { useDashboardStore } from '../store/dashboardStore';
import { Settings, Plus } from 'lucide-react';

export function Alerts() {
  const { alerts, markAlertRead } = useDashboardStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alerts</h1>
          <p className="text-muted-foreground">Manage your notification preferences</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          <Plus size={16} />
          Create Alert
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AlertsPanel alerts={alerts} onMarkRead={markAlertRead} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">Alert Settings</h3>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Mention spikes', description: 'Alert when mentions increase 100%+', enabled: true },
              { label: 'Negative sentiment', description: 'Alert on negative mention clusters', enabled: true },
              { label: 'Influencer mentions', description: 'Alert when influencers mention you', enabled: false },
              { label: 'Keyword triggers', description: 'Alert on specific keyword matches', enabled: true },
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="text-sm font-medium text-foreground">{setting.label}</p>
                  <p className="text-xs text-muted-foreground">{setting.description}</p>
                </div>
                <button
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    setting.enabled ? 'bg-accent' : 'bg-muted'
                  }`}
                >
                  <motion.div
                    initial={false}
                    animate={{ x: setting.enabled ? 24 : 2 }}
                    className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5"
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
