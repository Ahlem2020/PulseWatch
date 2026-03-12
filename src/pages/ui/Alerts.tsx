import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X, Bell, Zap, Shield } from 'lucide-react';

export function UIAlerts() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const dismissAlert = (id: string) => {
    setDismissedAlerts([...dismissedAlerts, id]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Alerts</h1>
        <p className="text-muted-foreground mt-1">Notification and alert components</p>
      </div>

      {/* Basic Alerts */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Basic Alerts</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <Info className="w-5 h-5 text-blue-500 shrink-0" />
            <p className="text-blue-500">This is an informational alert message.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <p className="text-green-500">Success! Your changes have been saved.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
            <p className="text-yellow-500">Warning! Please review your input.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <p className="text-red-500">Error! Something went wrong.</p>
          </div>
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Dismissible Alerts</h2>
        <div className="space-y-4">
          {!dismissedAlerts.includes('dismiss-1') && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-accent shrink-0" />
                <p className="text-accent">New feature available! Check out the latest updates.</p>
              </div>
              <button 
                onClick={() => dismissAlert('dismiss-1')}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
          {!dismissedAlerts.includes('dismiss-2') && (
            <div className="flex items-center justify-between gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <p className="text-green-500">Your account has been verified successfully.</p>
              </div>
              <button 
                onClick={() => dismissAlert('dismiss-2')}
                className="text-green-500 hover:text-green-500/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        {dismissedAlerts.length > 0 && (
          <button 
            onClick={() => setDismissedAlerts([])}
            className="mt-4 text-sm text-accent hover:underline"
          >
            Reset dismissed alerts
          </button>
        )}
      </div>

      {/* Alert with Title */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Alerts with Title</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-blue-500">Information</h3>
            </div>
            <p className="text-blue-400 ml-7">
              This is a detailed information message that provides more context about the situation.
            </p>
          </div>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-semibold text-red-500">Error Occurred</h3>
            </div>
            <p className="text-red-400 ml-7">
              We couldn't process your request. Please try again or contact support if the issue persists.
            </p>
          </div>
        </div>
      </div>

      {/* Alert with Actions */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Alerts with Actions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-500">Confirm Action</h3>
                <p className="text-yellow-400 mt-1">
                  Are you sure you want to proceed? This action cannot be undone.
                </p>
                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-1.5 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-500/90 transition-colors">
                    Confirm
                  </button>
                  <button className="px-4 py-1.5 bg-transparent text-yellow-500 border border-yellow-500 rounded-lg text-sm hover:bg-yellow-500/10 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-accent">Enable Two-Factor Authentication</h3>
                <p className="text-accent/80 mt-1">
                  Protect your account with an extra layer of security.
                </p>
                <button className="mt-4 px-4 py-1.5 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Alerts */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Solid Alerts</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-blue-600 rounded-lg">
            <Info className="w-5 h-5 text-white shrink-0" />
            <p className="text-white">This is a solid info alert.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-600 rounded-lg">
            <CheckCircle className="w-5 h-5 text-white shrink-0" />
            <p className="text-white">This is a solid success alert.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-600 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-white shrink-0" />
            <p className="text-white">This is a solid warning alert.</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-red-600 rounded-lg">
            <AlertCircle className="w-5 h-5 text-white shrink-0" />
            <p className="text-white">This is a solid error alert.</p>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Toast Notifications Preview</h2>
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg shadow-lg">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Saved Successfully</p>
              <p className="text-sm text-muted-foreground">Your changes have been saved.</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg shadow-lg">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">New Message</p>
              <p className="text-sm text-muted-foreground">You have 3 unread messages.</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg shadow-lg">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Connection Lost</p>
              <p className="text-sm text-muted-foreground">Please check your internet.</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
