import { motion } from 'framer-motion';
import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Search, Check } from 'lucide-react';

// Get a subset of popular icons
const popularIcons = [
  'Home', 'User', 'Settings', 'Search', 'Bell', 'Mail', 'Heart', 'Star',
  'Plus', 'Minus', 'X', 'Check', 'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronDown',
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Menu', 'MoreHorizontal', 'MoreVertical',
  'Edit', 'Trash2', 'Download', 'Upload', 'Share', 'Copy', 'Clipboard', 'Save',
  'File', 'Folder', 'Image', 'Video', 'Music', 'Camera', 'Mic', 'Volume2',
  'Calendar', 'Clock', 'MapPin', 'Phone', 'MessageCircle', 'Send', 'Link', 'ExternalLink',
  'Eye', 'EyeOff', 'Lock', 'Unlock', 'Key', 'Shield', 'AlertCircle', 'AlertTriangle',
  'Info', 'HelpCircle', 'CheckCircle', 'XCircle', 'Github', 'Twitter', 'Linkedin', 'Facebook',
  'Sun', 'Moon', 'Cloud', 'Zap', 'Activity', 'Target', 'TrendingUp', 'BarChart2',
  'PieChart', 'LineChart', 'Database', 'Server', 'Code', 'Terminal', 'Monitor', 'Smartphone',
  'Wifi', 'Bluetooth', 'Battery', 'Power', 'Cpu', 'Globe', 'Compass', 'Navigation',
  'ShoppingCart', 'CreditCard', 'DollarSign', 'Package', 'Truck', 'Gift', 'Tag', 'Percent',
  'Users', 'UserPlus', 'UserMinus', 'UserCheck', 'Award', 'Bookmark', 'Flag', 'Hash',
  'Layers', 'Layout', 'Grid', 'List', 'Filter', 'Sliders', 'ToggleLeft', 'RefreshCw',
  'RotateCw', 'Maximize', 'Minimize', 'Move', 'ZoomIn', 'ZoomOut', 'Scissors', 'Paperclip',
];

export function Icons() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = popularIcons.filter(icon =>
    icon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} />`);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Icons</h1>
        <p className="text-muted-foreground mt-1">Lucide React icon library</p>
      </div>

      {/* Search */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Icon Library</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent w-64"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Click on any icon to copy its component code. Total: {filteredIcons.length} icons
        </p>
        
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
          {filteredIcons.map((iconName) => {
            const IconComponent = (LucideIcons as any)[iconName];
            if (!IconComponent) return null;
            
            return (
              <button
                key={iconName}
                onClick={() => copyToClipboard(iconName)}
                className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:border-border hover:bg-muted/50 transition-all"
                title={iconName}
              >
                <div className="relative">
                  <IconComponent className="w-6 h-6 text-foreground" />
                  {copiedIcon === iconName && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  )}
                </div>
                <span className="text-xs text-muted-foreground truncate w-full text-center group-hover:text-foreground">
                  {iconName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Icon Sizes */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Icon Sizes</h2>
        <div className="flex items-end gap-8">
          {[16, 20, 24, 32, 40, 48].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <LucideIcons.Heart style={{ width: size, height: size }} className="text-accent" />
              <span className="text-sm text-muted-foreground">{size}px</span>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Colors */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Icon Colors</h2>
        <div className="flex flex-wrap gap-6">
          {[
            { color: 'text-foreground', label: 'Default' },
            { color: 'text-accent', label: 'Accent' },
            { color: 'text-muted-foreground', label: 'Muted' },
            { color: 'text-green-500', label: 'Success' },
            { color: 'text-red-500', label: 'Error' },
            { color: 'text-yellow-500', label: 'Warning' },
            { color: 'text-blue-500', label: 'Info' },
          ].map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <LucideIcons.Star className={`w-8 h-8 ${color}`} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Styles */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Icon Styles</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-accent text-white rounded-lg">
              <LucideIcons.Bell className="w-6 h-6" />
            </div>
            <span className="text-sm text-muted-foreground">Filled BG</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 border border-border text-foreground rounded-lg">
              <LucideIcons.Bell className="w-6 h-6" />
            </div>
            <span className="text-sm text-muted-foreground">Outlined</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-accent/10 text-accent rounded-lg">
              <LucideIcons.Bell className="w-6 h-6" />
            </div>
            <span className="text-sm text-muted-foreground">Soft</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-accent text-white rounded-full">
              <LucideIcons.Bell className="w-6 h-6" />
            </div>
            <span className="text-sm text-muted-foreground">Circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcons.Bell className="w-6 h-6 text-foreground" />
            <span className="text-sm text-muted-foreground">Plain</span>
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Usage</h2>
        <pre className="p-4 bg-muted/50 rounded-lg overflow-x-auto text-sm">
          <code className="text-foreground">{`import { Home, User, Settings } from 'lucide-react';

// Basic usage
<Home className="w-6 h-6" />

// With color
<User className="w-6 h-6 text-accent" />

// With stroke width
<Settings className="w-6 h-6" strokeWidth={1.5} />

// In a button
<button className="p-2 bg-accent rounded-lg">
  <Home className="w-5 h-5 text-white" />
</button>`}</code>
        </pre>
      </div>
    </motion.div>
  );
}
