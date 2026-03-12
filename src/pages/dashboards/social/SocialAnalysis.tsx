import { motion } from 'framer-motion';
import { 
  TrendingUp, TrendingDown, MessageSquare, Heart,
  Eye, Target, ThumbsUp, Filter, Calendar, Download, RefreshCw
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const sentimentData = [
  { date: 'Mon', positive: 65, negative: 15, neutral: 20 },
  { date: 'Tue', positive: 72, negative: 12, neutral: 16 },
  { date: 'Wed', positive: 58, negative: 22, neutral: 20 },
  { date: 'Thu', positive: 80, negative: 8, neutral: 12 },
  { date: 'Fri', positive: 75, negative: 10, neutral: 15 },
  { date: 'Sat', positive: 68, negative: 18, neutral: 14 },
  { date: 'Sun', positive: 82, negative: 6, neutral: 12 },
];

const engagementData = [
  { time: '00:00', mentions: 120, engagement: 450 },
  { time: '04:00', mentions: 80, engagement: 280 },
  { time: '08:00', mentions: 340, engagement: 890 },
  { time: '12:00', mentions: 520, engagement: 1240 },
  { time: '16:00', mentions: 480, engagement: 1100 },
  { time: '20:00', mentions: 380, engagement: 920 },
];

const platformShare = [
  { name: 'X (Twitter)', value: 35, color: '#1DA1F2' },
  { name: 'Facebook', value: 25, color: '#4267B2' },
  { name: 'Instagram', value: 20, color: '#E1306C' },
  { name: 'TikTok', value: 12, color: '#000000' },
  { name: 'YouTube', value: 8, color: '#FF0000' },
];

const influencers = [
  { name: 'Sarah Johnson', handle: '@sarahj', platform: 'X', followers: '2.5M', sentiment: 'positive', reach: '1.2M', engagement: '4.8%' },
  { name: 'Mike Chen', handle: '@mikechen', platform: 'Instagram', followers: '1.8M', sentiment: 'positive', reach: '890K', engagement: '6.2%' },
  { name: 'TechReviewer', handle: '@techrev', platform: 'YouTube', followers: '3.2M', sentiment: 'neutral', reach: '2.1M', engagement: '3.5%' },
  { name: 'Emma Wilson', handle: '@emmaw', platform: 'TikTok', followers: '4.1M', sentiment: 'positive', reach: '3.8M', engagement: '8.1%' },
];

const topMentions = [
  { content: 'Just tried @YourBrand new product and it\'s amazing! 🔥', author: '@happycustomer', platform: 'X', engagement: 2340, sentiment: 'positive' },
  { content: 'The customer service from @YourBrand was incredibly helpful today', author: '@satisfied_user', platform: 'Facebook', engagement: 1890, sentiment: 'positive' },
  { content: 'Having some issues with my order #YourBrand anyone else?', author: '@concerned_buyer', platform: 'X', engagement: 890, sentiment: 'negative' },
  { content: 'Unboxing the latest from @YourBrand - watch till the end!', author: '@unboxer_daily', platform: 'TikTok', engagement: 45000, sentiment: 'positive' },
];

const competitorData = [
  { name: 'Your Brand', mentions: 12500, sentiment: 78, share: 35 },
  { name: 'Competitor A', mentions: 9800, sentiment: 65, share: 28 },
  { name: 'Competitor B', mentions: 7200, sentiment: 72, share: 20 },
  { name: 'Competitor C', mentions: 5100, sentiment: 58, share: 17 },
];

export function SocialAnalysis() {
  const keyMetrics = [
    {
      label: 'Total Mentions',
      value: '48,392',
      change: '+12.5%',
      trend: 'up',
      icon: MessageSquare,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500/12',
      badgeBg: 'bg-emerald-500/12',
      badgeColor: 'text-emerald-500',
      surface: 'from-blue-500/6 via-blue-500/4 to-transparent',
      orb: 'bg-blue-500/8',
    },
    {
      label: 'Reach',
      value: '12.4M',
      change: '+8.3%',
      trend: 'up',
      icon: Eye,
      iconColor: 'text-violet-500',
      iconBg: 'bg-violet-500/12',
      badgeBg: 'bg-emerald-500/12',
      badgeColor: 'text-emerald-500',
      surface: 'from-violet-500/6 via-violet-500/4 to-transparent',
      orb: 'bg-violet-500/8',
    },
    {
      label: 'Engagement',
      value: '892K',
      change: '+15.2%',
      trend: 'up',
      icon: Heart,
      iconColor: 'text-pink-500',
      iconBg: 'bg-pink-500/12',
      badgeBg: 'bg-emerald-500/12',
      badgeColor: 'text-emerald-500',
      surface: 'from-pink-500/6 via-pink-500/4 to-transparent',
      orb: 'bg-pink-500/8',
    },
    {
      label: 'Sentiment Score',
      value: '78%',
      change: '+3.2%',
      trend: 'up',
      icon: ThumbsUp,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/12',
      badgeBg: 'bg-emerald-500/12',
      badgeColor: 'text-emerald-500',
      surface: 'from-green-500/6 via-green-500/4 to-transparent',
      orb: 'bg-green-500/8',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Social Media Analysis</h1>
          <p className="text-muted-foreground">Brand monitoring and sentiment analysis across platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Calendar size={18} />
            Last 7 days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Filter size={18} />
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${metric.surface}`} />
            <div className={`absolute -bottom-10 -right-6 h-28 w-28 rounded-full ${metric.orb} blur-2xl`} />
            <div className={`absolute -bottom-4 right-10 h-16 w-16 rounded-full ${metric.orb} opacity-70`} />

            <div className="relative flex items-start justify-between gap-3">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 shadow-sm ${metric.iconBg}`}>
                <metric.icon size={24} className={metric.iconColor} />
              </div>

              <div className="text-right">
                <p className="text-sm font-medium text-muted-foreground">from last month</p>
                <div className={`mt-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold ${metric.badgeBg} ${metric.badgeColor}`}>
                  {metric.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {metric.change}
                </div>
              </div>
            </div>

            <div className="relative mt-8">
              <p className="text-[15px] font-semibold text-foreground">{metric.label}</p>
              <div className="mt-2 flex items-end gap-2">
                <p className="text-4xl font-bold tracking-tight text-foreground">{metric.value}</p>
                <span className="pb-1 text-base text-muted-foreground">live</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sentiment Over Time & Platform Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-linear-to-r from-emerald-500/6 via-transparent to-rose-500/6 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">Sentiment Trend</h3>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">
                    Weekly pulse
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Positive sentiment remains dominant across all monitored channels.
                </p>
              </div>
              <button className="rounded-xl border border-border bg-background/70 p-2.5 hover:bg-muted transition-colors">
                <RefreshCw size={18} className="text-muted-foreground" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: 'Positive', value: '82%', color: 'bg-emerald-500', tone: 'text-emerald-500 bg-emerald-500/10' },
                { label: 'Neutral', value: '12%', color: 'bg-amber-500', tone: 'text-amber-500 bg-amber-500/10' },
                { label: 'Negative', value: '6%', color: 'bg-rose-500', tone: 'text-rose-500 bg-rose-500/10' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border/70 bg-background/60 p-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                  <p className={`mt-2 inline-flex rounded-md px-2 py-1 text-sm font-semibold ${item.tone}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={sentimentData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="positiveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0.03} />
                  </linearGradient>
                  <linearGradient id="neutralFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.03} />
                  </linearGradient>
                  <linearGradient id="negativeFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                <XAxis
                  dataKey="date"
                  stroke="var(--muted-foreground)"
                  axisLine={false}
                  tickLine={false}
                  dy={8}
                  fontSize={12}
                />
                <YAxis
                  stroke="var(--muted-foreground)"
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                />
                <Tooltip
                  cursor={{ stroke: 'var(--border)', strokeDasharray: '4 4' }}
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                  labelStyle={{ color: 'var(--foreground)', fontWeight: 600, marginBottom: 8 }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: 16 }} />
                <Area
                  type="monotone"
                  dataKey="positive"
                  stackId="1"
                  stroke="#22c55e"
                  fill="url(#positiveFill)"
                  strokeWidth={2.5}
                  name="Positive"
                  activeDot={{ r: 5, strokeWidth: 0, fill: '#22c55e' }}
                />
                <Area
                  type="monotone"
                  dataKey="neutral"
                  stackId="1"
                  stroke="#f59e0b"
                  fill="url(#neutralFill)"
                  strokeWidth={2.5}
                  name="Neutral"
                  activeDot={{ r: 5, strokeWidth: 0, fill: '#f59e0b' }}
                />
                <Area
                  type="monotone"
                  dataKey="negative"
                  stackId="1"
                  stroke="#f43f5e"
                  fill="url(#negativeFill)"
                  strokeWidth={2.5}
                  name="Negative"
                  activeDot={{ r: 5, strokeWidth: 0, fill: '#f43f5e' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-6">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={platformShare}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {platformShare.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {platformShare.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                  <span className="text-muted-foreground">{platform.name}</span>
                </div>
                <span className="font-medium text-foreground">{platform.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Timeline */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-6">Engagement Timeline (24h)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="time" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                border: '1px solid var(--border)',
                borderRadius: '8px' 
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="mentions" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} name="Mentions" />
            <Line type="monotone" dataKey="engagement" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} name="Engagement" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Influencers & Mentions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Influencers */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Top Influencers</h3>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {influencers.map((influencer, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {influencer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{influencer.name}</p>
                    <p className="text-sm text-muted-foreground">{influencer.handle} • {influencer.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{influencer.reach} reach</p>
                  <p className="text-sm text-muted-foreground">{influencer.engagement} engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Mentions */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Top Mentions</h3>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {topMentions.map((mention, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50">
                <p className="text-foreground mb-2">{mention.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{mention.author}</span>
                    <span>•</span>
                    <span>{mention.platform}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      mention.sentiment === 'positive' ? 'bg-green-500/10 text-green-500' :
                      mention.sentiment === 'negative' ? 'bg-red-500/10 text-red-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {mention.sentiment}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Heart size={14} /> {mention.engagement.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Competitor Analysis</h3>
          <button className="flex items-center gap-2 text-sm text-accent hover:underline">
            <Target size={16} />
            Add Competitor
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Brand</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Mentions</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Sentiment</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Share of Voice</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Trend</th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((competitor, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${idx === 0 ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}`}>
                        {competitor.name.charAt(0)}
                      </div>
                      <span className={`font-medium ${idx === 0 ? 'text-accent' : 'text-foreground'}`}>
                        {competitor.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-foreground">{competitor.mentions.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${competitor.sentiment >= 70 ? 'bg-green-500' : competitor.sentiment >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${competitor.sentiment}%` }}
                        />
                      </div>
                      <span className="text-sm text-foreground">{competitor.sentiment}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-foreground">{competitor.share}%</td>
                  <td className="py-4 px-4">
                    <TrendingUp className="text-green-500" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
