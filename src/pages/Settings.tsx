import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { useSettingsStore, countries } from '../store/settingsStore';
import { Bell, Shield, Database, Palette, Globe, Key, RefreshCw, Fingerprint, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface SettingItem {
  label: string;
  description: string;
  type: 'toggle' | 'select';
  value: boolean | string;
  key: string;
}

interface SettingsSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  settings: SettingItem[];
}

export function Settings() {
  const { isDark, toggleTheme } = useThemeStore();
  const { focusedCountry, setFocusedCountry, apiToken, setApiToken, mentionsSync, setMentionsSync, digitalFingerprint, setDigitalFingerprint } = useSettingsStore();
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [slackIntegration, setSlackIntegration] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [apiAccess, setApiAccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const settingsSections: SettingsSection[] = [
    {
      title: 'Appearance',
      icon: Palette,
      settings: [
        {
          label: 'Dark Mode',
          description: 'Toggle between light and dark themes',
          type: 'toggle',
          value: isDark,
          key: 'darkMode',
        },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { label: 'Email Notifications', description: 'Receive daily digest emails', type: 'toggle', value: emailNotif, key: 'email' },
        { label: 'Push Notifications', description: 'Browser push notifications', type: 'toggle', value: pushNotif, key: 'push' },
        { label: 'Slack Integration', description: 'Send alerts to Slack', type: 'toggle', value: slackIntegration, key: 'slack' },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      settings: [
        { label: 'Two-Factor Auth', description: 'Enable 2FA for your account', type: 'toggle', value: twoFactor, key: 'twoFactor' },
        { label: 'API Access', description: 'Allow API access to your data', type: 'toggle', value: apiAccess, key: 'api' },
      ],
    },
    {
      title: 'Data & Storage',
      icon: Database,
      settings: [
        { label: 'Data Retention', description: 'Keep mentions for 90 days', type: 'select', value: '90 days', key: 'retention' },
        { label: 'Export Format', description: 'Default export file format', type: 'select', value: 'CSV', key: 'export' },
      ],
    },
  ];

  const handleToggle = (key: string) => {
    switch (key) {
      case 'darkMode':
        toggleTheme();
        break;
      case 'email':
        setEmailNotif(!emailNotif);
        break;
      case 'push':
        setPushNotif(!pushNotif);
        break;
      case 'slack':
        setSlackIntegration(!slackIntegration);
        break;
      case 'twoFactor':
        setTwoFactor(!twoFactor);
        break;
      case 'api':
        setApiAccess(!apiAccess);
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-4xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
            <p className="text-muted-foreground">john@company.com</p>
            <p className="text-sm text-accent mt-1">Pro Plan • 34,250 / 50,000 mentions</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-auto px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            Edit Profile
          </motion.button>
        </div>
      </motion.div>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + sectionIndex * 0.1 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-border flex items-center gap-2">
            <section.icon className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
          </div>
          <div className="divide-y divide-border">
            {section.settings.map((setting, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{setting.label}</p>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
                {setting.type === 'toggle' ? (
                  <button
                    onClick={() => handleToggle(setting.key)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      setting.value ? 'bg-accent' : 'bg-muted'
                    }`}
                  >
                    <motion.div
                      initial={false}
                      animate={{ x: setting.value ? 24 : 2 }}
                      className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5"
                    />
                  </button>
                ) : (
                  <select className="px-3 py-1.5 bg-muted border border-border rounded-lg text-foreground text-sm">
                    <option>{setting.value}</option>
                  </select>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Map Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Globe className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Map Location</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Default Location</p>
              <p className="text-sm text-muted-foreground">Set the default location for the dashboard map</p>
            </div>
            <select 
              value={focusedCountry.code}
              onChange={(e) => {
                const country = countries.find(c => c.code === e.target.value);
                if (country) setFocusedCountry(country);
              }}
              className="px-3 py-2 bg-muted border border-border rounded-lg text-foreground min-w-[180px]"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* API Token */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Key className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">API Token</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Your API Token</p>
              <p className="text-sm text-muted-foreground">Use this token to access the API</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={apiToken}
                onChange={(e) => setApiToken(e.target.value)}
                className="px-3 py-2 bg-muted border border-border rounded-lg text-foreground font-mono text-sm w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className="p-2 bg-muted border border-border rounded-lg text-foreground hover:bg-accent hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mentions Sync */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Mentions Sync</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Auto Sync Mentions</p>
              <p className="text-sm text-muted-foreground">Automatically sync mentions from all platforms</p>
            </div>
            <button
              onClick={() => setMentionsSync(!mentionsSync)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                mentionsSync ? 'bg-accent' : 'bg-muted'
              }`}
            >
              <motion.div
                initial={false}
                animate={{ x: mentionsSync ? 24 : 2 }}
                className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5"
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Digital Fingerprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="bg-card border border-border rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Digital Fingerprint</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Fingerprint Protection</p>
              <p className="text-sm text-muted-foreground">Enable fingerprint masking for browser profiles</p>
            </div>
            <button
              onClick={() => setDigitalFingerprint(!digitalFingerprint)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                digitalFingerprint ? 'bg-accent' : 'bg-muted'
              }`}
            >
              <motion.div
                initial={false}
                animate={{ x: digitalFingerprint ? 24 : 2 }}
                className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5"
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card border border-red-500/30 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-red-500 mb-4">Danger Zone</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Delete Account</p>
            <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            Delete Account
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
