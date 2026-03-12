import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home, User, Settings, Mail, FileText, Image, Music, Video } from 'lucide-react';

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [verticalTab, setVerticalTab] = useState(0);
  const [pillTab, setPillTab] = useState(0);
  const [iconTab, setIconTab] = useState(0);

  const tabContent = [
    { title: 'Home', icon: Home, content: 'Welcome to the home tab. This is where you can find your dashboard and quick access to all features.' },
    { title: 'Profile', icon: User, content: 'View and edit your profile information. Update your avatar, bio, and personal details here.' },
    { title: 'Messages', icon: Mail, content: 'Check your messages and communicate with other users. You have 5 unread messages.' },
    { title: 'Settings', icon: Settings, content: 'Customize your experience. Manage your account settings, notifications, and preferences.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tabs</h1>
        <p className="text-muted-foreground mt-1">Tab navigation components</p>
      </div>

      {/* Basic Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Basic Tabs</h2>
        <div>
          <div className="flex border-b border-border">
            {tabContent.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === i 
                    ? 'text-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.title}
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="p-4">
            <p className="text-muted-foreground">{tabContent[activeTab].content}</p>
          </div>
        </div>
      </div>

      {/* Pill Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Pill Tabs</h2>
        <div>
          <div className="inline-flex gap-2 rounded-lg bg-muted p-1">
            {tabContent.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => setPillTab(i)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pillTab === i 
                    ? 'bg-accent text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4">
            <p className="text-muted-foreground">{tabContent[pillTab].content}</p>
          </div>
        </div>
      </div>

      {/* Tabs with Icons */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Tabs with Icons</h2>
        <div>
          <div className="flex border-b border-border">
            {tabContent.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.title}
                  onClick={() => setIconTab(i)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                    iconTab === i 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.title}
                  {iconTab === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="p-4">
            <p className="text-muted-foreground">{tabContent[iconTab].content}</p>
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Vertical Tabs</h2>
        <div className="flex gap-6">
          <div className="flex min-w-37.5 flex-col gap-1 border-r border-border pr-4">
            {tabContent.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.title}
                  onClick={() => setVerticalTab(i)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-left ${
                    verticalTab === i 
                      ? 'bg-accent text-white' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.title}
                </button>
              );
            })}
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">{tabContent[verticalTab].title}</h3>
            <p className="text-muted-foreground">{tabContent[verticalTab].content}</p>
          </div>
        </div>
      </div>

      {/* Bordered Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Bordered Tabs</h2>
        <div>
          <div className="flex">
            {['Overview', 'Analytics', 'Reports', 'Export'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  i === 0 
                    ? 'border-accent text-accent' 
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="border border-t-0 border-border rounded-b-lg p-4">
            <p className="text-muted-foreground">Tab content goes here. This is a bordered variant.</p>
          </div>
        </div>
      </div>

      {/* Card Style Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Card Style Tabs</h2>
        <div>
          <div className="flex gap-2">
            {['All Files', 'Images', 'Videos', 'Documents'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  i === 0 
                    ? 'bg-muted text-foreground border-t border-l border-r border-border' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-muted rounded-b-lg rounded-tr-lg p-4">
            <div className="grid grid-cols-4 gap-4">
              {[FileText, Image, Music, Video].map((Icon, i) => (
                <div key={i} className="bg-card p-4 rounded-lg border border-border flex flex-col items-center gap-2">
                  <Icon className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">File {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Tabs */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Scrollable Tabs</h2>
        <div className="overflow-x-auto">
          <div className="flex border-b border-border min-w-max">
            {['Dashboard', 'Analytics', 'Reports', 'Users', 'Products', 'Orders', 'Settings', 'Help', 'Feedback'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4">
          <p className="text-muted-foreground">Scrollable tabs for when you have many tab items.</p>
        </div>
      </div>
    </motion.div>
  );
}
