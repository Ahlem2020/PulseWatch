import { motion } from 'framer-motion';
import { Check, X, Clock, Star, Zap, Bell, User } from 'lucide-react';

export function Badges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Badges</h1>
        <p className="text-muted-foreground mt-1">Badge and label components</p>
      </div>

      {/* Basic Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Basic Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-2.5 py-1 bg-accent text-white text-sm font-medium rounded-full">Primary</span>
          <span className="px-2.5 py-1 bg-green-600 text-white text-sm font-medium rounded-full">Success</span>
          <span className="px-2.5 py-1 bg-red-600 text-white text-sm font-medium rounded-full">Danger</span>
          <span className="px-2.5 py-1 bg-yellow-600 text-white text-sm font-medium rounded-full">Warning</span>
          <span className="px-2.5 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">Info</span>
          <span className="px-2.5 py-1 bg-muted text-foreground text-sm font-medium rounded-full">Secondary</span>
        </div>
      </div>

      {/* Outline Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Outline Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-2.5 py-1 border border-accent text-accent text-sm font-medium rounded-full">Primary</span>
          <span className="px-2.5 py-1 border border-green-600 text-green-600 text-sm font-medium rounded-full">Success</span>
          <span className="px-2.5 py-1 border border-red-600 text-red-600 text-sm font-medium rounded-full">Danger</span>
          <span className="px-2.5 py-1 border border-yellow-600 text-yellow-600 text-sm font-medium rounded-full">Warning</span>
          <span className="px-2.5 py-1 border border-blue-600 text-blue-600 text-sm font-medium rounded-full">Info</span>
        </div>
      </div>

      {/* Soft Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Soft Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-2.5 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">Primary</span>
          <span className="px-2.5 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">Success</span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-500 text-sm font-medium rounded-full">Danger</span>
          <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full">Warning</span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-500 text-sm font-medium rounded-full">Info</span>
        </div>
      </div>

      {/* Square Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Square Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-2.5 py-1 bg-accent text-white text-sm font-medium rounded-lg">Primary</span>
          <span className="px-2.5 py-1 bg-green-600 text-white text-sm font-medium rounded-lg">Success</span>
          <span className="px-2.5 py-1 bg-red-600 text-white text-sm font-medium rounded-lg">Danger</span>
          <span className="px-2.5 py-1 bg-yellow-600 text-white text-sm font-medium rounded-lg">Warning</span>
          <span className="px-2.5 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg">Info</span>
        </div>
      </div>

      {/* Badge Sizes */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Badge Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-2 py-0.5 bg-accent text-white text-xs font-medium rounded-full">Small</span>
          <span className="px-2.5 py-1 bg-accent text-white text-sm font-medium rounded-full">Default</span>
          <span className="px-3 py-1.5 bg-accent text-white text-base font-medium rounded-full">Large</span>
        </div>
      </div>

      {/* Badges with Icons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Badges with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">
            <Check className="w-3.5 h-3.5" />
            Verified
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-500/10 text-red-500 text-sm font-medium rounded-full">
            <X className="w-3.5 h-3.5" />
            Rejected
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full">
            <Clock className="w-3.5 h-3.5" />
            Pending
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            <Star className="w-3.5 h-3.5" />
            Featured
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-500/10 text-purple-500 text-sm font-medium rounded-full">
            <Zap className="w-3.5 h-3.5" />
            Pro
          </span>
        </div>
      </div>

      {/* Status Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Status Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-500/10 text-green-500 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-500/10 text-red-500 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            Away
          </span>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-muted-foreground rounded-full" />
            Busy
          </span>
        </div>
      </div>

      {/* Notification Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Notification Badges</h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="relative">
            <button className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <Bell className="w-6 h-6 text-foreground" />
            </button>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              5
            </span>
          </div>
          <div className="relative">
            <button className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <Bell className="w-6 h-6 text-foreground" />
            </button>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
              99+
            </span>
          </div>
          <div className="relative">
            <button className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <Bell className="w-6 h-6 text-foreground" />
            </button>
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Avatar Badges */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Avatar with Status</h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-card rounded-full" />
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 border-2 border-card rounded-full" />
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 border-2 border-card rounded-full" />
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-card rounded-full" />
          </div>
        </div>
      </div>

      {/* Badge List */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Badge in List</h2>
        <div className="space-y-3">
          {[
            { label: 'Inbox', count: 12, color: 'accent' },
            { label: 'Drafts', count: 3, color: 'muted' },
            { label: 'Sent', count: 0, color: 'muted' },
            { label: 'Spam', count: 24, color: 'red' },
          ].map((item) => (
            <div 
              key={item.label}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="text-foreground">{item.label}</span>
              {item.count > 0 && (
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                  item.color === 'accent' ? 'bg-accent text-white' :
                  item.color === 'red' ? 'bg-red-500/10 text-red-500' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {item.count}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
