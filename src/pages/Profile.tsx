import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  Camera,
  Shield,
  Bell,
  Key,
  LogOut,
  Edit2,
  Check,
  X,
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  role: string;
  joinedDate: string;
  avatar: string;
  bio: string;
}

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    company: 'Acme Inc.',
    role: 'Marketing Director',
    joinedDate: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Passionate about brand management and digital marketing. Leading the charge on social media strategy at Acme Inc.',
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Brands Monitored', value: '12' },
    { label: 'Alerts Created', value: '48' },
    { label: 'Reports Generated', value: '156' },
    { label: 'Team Members', value: '8' },
  ];

  const recentActivity = [
    { action: 'Created alert', target: 'Competitor Mention Spike', time: '2 hours ago' },
    { action: 'Exported report', target: 'Monthly Analytics', time: '5 hours ago' },
    { action: 'Added brand', target: 'Product Launch Campaign', time: '1 day ago' },
    { action: 'Updated settings', target: 'Notification preferences', time: '2 days ago' },
    { action: 'Invited member', target: 'sarah@acme.com', time: '3 days ago' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>
        {!isEditing ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </motion.button>
        ) : (
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
            >
              <X className="w-4 h-4" />
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-600/90 transition-colors"
            >
              <Check className="w-4 h-4" />
              Save Changes
            </motion.button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            {/* Avatar */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover border-4 border-accent/20"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Name & Role */}
            <div className="text-center mb-6">
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full text-center text-xl font-bold bg-muted border border-border rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              ) : (
                <h2 className="text-xl font-bold text-foreground">{profile.name}</h2>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.role}
                  onChange={(e) => setEditedProfile({ ...editedProfile, role: e.target.value })}
                  className="w-full text-center text-sm bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              ) : (
                <p className="text-muted-foreground">{profile.role}</p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-foreground">Security Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Bell className="w-5 h-5 text-accent" />
                <span className="text-foreground">Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left">
                <Key className="w-5 h-5 text-accent" />
                <span className="text-foreground">API Keys</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 transition-colors text-left text-red-500">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Details & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  <p className="text-foreground">{profile.email}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  <p className="text-foreground">{profile.phone}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  <p className="text-foreground">{profile.location}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="w-4 h-4" />
                  Company
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.company}
                    onChange={(e) => setEditedProfile({ ...editedProfile, company: e.target.value })}
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  <p className="text-foreground">{profile.company}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Joined
                </label>
                <p className="text-foreground">{profile.joinedDate}</p>
              </div>

              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  Account Type
                </label>
                <p className="text-foreground">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    Pro Plan
                  </span>
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-4 space-y-1">
              <label className="text-sm text-muted-foreground">Bio</label>
              {isEditing ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                  rows={3}
                  className="w-full bg-muted border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              ) : (
                <p className="text-foreground">{profile.bio}</p>
              )}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground">
                      <span className="font-medium">{activity.action}</span>
                      {' - '}
                      <span className="text-muted-foreground">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
