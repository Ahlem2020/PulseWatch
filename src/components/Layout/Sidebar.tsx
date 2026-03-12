import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Bell,
  Users,
  Settings,
  Radar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Book,
  CreditCard,
  HelpCircle,
  History,
  Palette,
  Component,
  Layers,
  Activity,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  icon: any;
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const mainNavItems: NavItem[] = [
  { icon: MessageSquare, label: 'Mentions', path: '/mentions' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Bell, label: 'Alerts', path: '/alerts' },
  { icon: Users, label: 'Influencers', path: '/influencers' },
];

const dashboardItems: NavItem = {
  icon: LayoutDashboard,
  label: 'Dashboards',
  children: [
    { label: 'Default', path: '/' },
    { label: 'E-commerce', path: '/dashboards/ecommerce' },
    { label: 'Finance', path: '/dashboards/finance' },
    { label: 'Fitness', path: '/dashboards/fitness' },
  ],
};

const uiElements: NavItem = {
  icon: Palette,
  label: 'UI Elements',
  children: [
    { label: 'Buttons', path: '/ui/buttons' },
    { label: 'Cards', path: '/ui/cards' },
    { label: 'Forms', path: '/ui/forms' },
    { label: 'Alerts', path: '/ui/alerts' },
    { label: 'Modals', path: '/ui/modals' },
    { label: 'Badges', path: '/ui/badges' },
    { label: 'Progress', path: '/ui/progress' },
    { label: 'Tabs', path: '/ui/tabs' },
  ],
};

const componentsItems: NavItem = {
  icon: Component,
  label: 'Components',
  children: [
    { label: 'Tables', path: '/tables' },
    { label: 'Charts', path: '/charts' },
    { label: 'Icons', path: '/icons' },
    { label: 'Maps', path: '/maps' },
  ],
};

const appsItems: NavItem = {
  icon: Layers,
  label: 'Apps',
  children: [
    { label: 'Calendar', path: '/apps/calendar' },
    { label: 'Chat', path: '/apps/chat' },
    { label: 'Tasks', path: '/apps/tasks' },
  ],
};

const socialItems: NavItem = {
  icon: Activity,
  label: 'Social Analysis',
  children: [
    { label: 'Overview', path: '/social/analysis' },
    { label: 'Platform Feeds', path: '/social/feeds' },
    { label: 'Keywords', path: '/social/keywords' },
    { label: 'Reports', path: '/social/reports' },
  ],
};

const cyberItems: NavItem = {
  icon: Shield,
  label: 'Cyber & Security',
  children: [
    { label: 'Cyber Analysis', path: '/cyber/analysis' },
    { label: 'Browser Profiles', path: '/cyber/browsers' },
    { label: 'Digital Fingerprint', path: '/cyber/fingerprint' },
  ],
};

const secondaryNavItems: NavItem[] = [
  { icon: Book, label: 'Documentation', path: '/documentation' },
  { icon: CreditCard, label: 'Pricing', path: '/pricing' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
  { icon: History, label: 'Changelog', path: '/changelog' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];
const pagesNavItems: { label: string; path: string }[] = [
  { label: 'Login', path: '/login' },
  { label: 'Register', path: '/register' },
  { label: '404 Page', path: '/404' },
  { label: '500 Page', path: '/500' },
  { label: 'Forgot Password', path: '/forgot-password' },
  { label: 'Reset Password', path: '/reset-password' },
  { label: 'Verify Email', path: '/verify-email' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
];

function NavDropdown({ 
  item, 
  collapsed,
  isOpen,
  onToggle 
}: { 
  item: NavItem; 
  collapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const location = useLocation();
  const isActive = item.children?.some(child => location.pathname === child.path);

  const buttonClass = `w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
    isActive
      ? 'bg-accent/10 text-accent'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
  }`;

  return (
    <div>
      <button
        onClick={onToggle}
        className={buttonClass}
      >
        <div className="flex items-center gap-3">
          <item.icon size={20} />
          <motion.span
            initial={false}
            animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
            className="font-medium whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        </div>
        {!collapsed && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && !collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-8 pr-3 py-1 space-y-1">
              {item.children?.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={({ isActive: active }) =>
                    `block px-3 py-2 rounded-lg text-sm transition-colors ${
                      active
                        ? 'text-accent bg-accent/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>(['Dashboards']);

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-border flex flex-col z-50"
    >
      <div className="p-4 flex items-center justify-between border-b border-border">
        <motion.div
          initial={false}
          animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
          className="flex items-center gap-2 overflow-hidden"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center">
            <Radar className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-foreground whitespace-nowrap">PulseWatch</span>
        </motion.div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {/* Dashboards Dropdown */}
        <NavDropdown 
          item={dashboardItems} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Dashboards')}
          onToggle={() => toggleMenu('Dashboards')}
        />

        {/* Main Navigation */}
        {!collapsed && (
          <p className="px-3 py-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main Menu
          </p>
        )}
        <div className="space-y-1">
          {mainNavItems.map((item) => {
            const linkClass = (active: boolean) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                active
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`;
            
            return (
              <NavLink
                key={item.path}
                to={item.path!}
                className={({ isActive }) => linkClass(isActive)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} />
                </motion.div>
                <motion.span
                  initial={false}
                  animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
                  className="font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              </NavLink>
            );
          })}
        </div>

        {/* UI & Components Section */}
        {!collapsed && (
          <p className="px-3 py-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            UI & Components
          </p>
        )}
        <NavDropdown 
          item={uiElements} 
          collapsed={collapsed}
          isOpen={openMenus.includes('UI Elements')}
          onToggle={() => toggleMenu('UI Elements')}
        />
        <NavDropdown 
          item={componentsItems} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Components')}
          onToggle={() => toggleMenu('Components')}
        />

        {/* Apps Section */}
        {!collapsed && (
          <p className="px-3 py-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Applications
          </p>
        )}
        <NavDropdown 
          item={appsItems} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Apps')}
          onToggle={() => toggleMenu('Apps')}
        />

        {/* Social & Cyber Section */}
        {!collapsed && (
          <p className="px-3 py-2 mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Intelligence
          </p>
        )}
        <NavDropdown 
          item={socialItems} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Social Analysis')}
          onToggle={() => toggleMenu('Social Analysis')}
        />
        <NavDropdown 
          item={cyberItems} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Cyber & Security')}
          onToggle={() => toggleMenu('Cyber & Security')}
        />
        <NavDropdown 
          item={{ icon: Book, label: 'Pages', children: pagesNavItems }} 
          collapsed={collapsed}
          isOpen={openMenus.includes('Pages')}
          onToggle={() => toggleMenu('Pages')}
        />

        {/* Divider */}
        <motion.div
          initial={false}
          animate={{ opacity: collapsed ? 0 : 1 }}
          className="my-4 border-t border-border"
        />

        {/* Secondary Navigation */}
        <motion.div
          initial={false}
          animate={{ opacity: collapsed ? 0 : 1 }}
          className="space-y-1"
        >
          {!collapsed && (
            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Resources
            </p>
          )}
          {secondaryNavItems.map((item) => {
            const linkClass = (active: boolean) => 
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                active
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`;
            
            return (
              <NavLink
                key={item.path}
                to={item.path!}
                className={({ isActive }) => linkClass(isActive)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={18} />
                </motion.div>
                <motion.span
                  initial={false}
                  animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              </NavLink>
            );
          })}
        </motion.div>
      </nav>

      {/* User Info at Bottom */}
      <div className="p-3 border-t border-border">
        <div className={`flex items-center gap-3 px-3 py-2 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
            JD
          </div>
          <motion.div
            initial={false}
            animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : 'auto' }}
            className="overflow-hidden"
          >
            <p className="text-sm font-medium text-foreground whitespace-nowrap">John Doe</p>
            <p className="text-xs text-muted-foreground whitespace-nowrap">Pro Plan</p>
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
}
