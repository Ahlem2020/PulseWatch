import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Filter,
  Calendar,
  ChevronDown,
  X,
  User,
  Settings,
  CreditCard,
  LogOut,
} from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useDashboardStore } from '../../store/dashboardStore';
import { format } from 'date-fns';

const platforms = [
  { id: 'all', label: 'All Platforms' },
  { id: 'twitter', label: 'Twitter/X' },
  { id: 'reddit', label: 'Reddit' },
  { id: 'news', label: 'News' },
  { id: 'blog', label: 'Blogs' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'instagram', label: 'Instagram' },
];

export function TopBar() {
  const { isDark, toggleTheme } = useThemeStore();
  const { searchQuery, setSearchQuery, selectedPlatform, setSelectedPlatform, alerts } = useDashboardStore();
  const [showFilters, setShowFilters] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const unreadAlerts = alerts.filter((a) => !a.read).length;

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search mentions, keywords, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
        </div>

     
       
      </div>

      <div className="flex items-center gap-3 ml-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground"
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={18} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-foreground relative"
          >
            <Bell size={18} />
            {unreadAlerts > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
              >
                {unreadAlerts}
              </motion.span>
            )}
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full mt-2 right-0 w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
              >
                <div className="p-3 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  <span className="text-xs text-muted-foreground">{unreadAlerts} unread</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {alerts.slice(0, 5).map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 border-b border-border last:border-0 ${
                        !alert.read ? 'bg-accent/5' : ''
                      }`}
                    >
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(alert.timestamp, 'MMM d, h:mm a')}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 p-1 pr-2 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            <ChevronDown size={14} className={`text-muted-foreground transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full mt-2 right-0 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
              >
                <div className="p-3 border-b border-border">
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                </div>
                <div className="p-1">
                  <Link
                    to="/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    <User size={16} />
                    <span className="text-sm">Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    <Settings size={16} />
                    <span className="text-sm">Settings</span>
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    <CreditCard size={16} />
                    <span className="text-sm">Billing</span>
                  </Link>
                </div>
                <div className="p-1 border-t border-border">
                  <Link
                    to="/login"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut size={16} />
                    <span className="text-sm">Sign Out</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
