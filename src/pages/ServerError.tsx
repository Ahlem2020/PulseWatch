import { motion } from 'framer-motion';
import { Home, RefreshCw, AlertTriangle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServerError() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 500 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="relative"
          >
            <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-500 leading-none">
              500
            </h1>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <AlertTriangle className="w-16 h-16 text-red-500/30" />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 space-y-3"
          >
            <h2 className="text-2xl font-bold text-foreground">Internal Server Error</h2>
            <p className="text-muted-foreground">
              Something went wrong on our end. Our team has been notified and is working on a fix.
            </p>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-card rounded-xl border border-border"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <span className="flex items-center gap-2 text-yellow-500">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                Investigating
              </span>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Error ID: ERR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRefresh}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </motion.button>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors w-full"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">
              If the problem persists, please contact our support team
            </p>
            <a
              href="mailto:support@pulsewatch.io"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail className="w-4 h-4" />
              support@pulsewatch.io
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
