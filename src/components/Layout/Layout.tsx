import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useThemeStore } from '../../store/themeStore';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Layout() {
  const { isDark } = useThemeStore();
  const [sidebarWidth, setSidebarWidth] = useState(240);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const sidebar = document.querySelector('aside');
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    });

    const sidebar = document.querySelector('aside');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ['style'] });
      setSidebarWidth(sidebar.offsetWidth);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <Sidebar />
      <motion.div
        initial={false}
        animate={{ marginLeft: sidebarWidth }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        <TopBar />
        <main className="p-6">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
}
