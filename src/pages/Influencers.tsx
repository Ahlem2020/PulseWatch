import { motion } from 'framer-motion';
import { Users, TrendingUp, MessageSquare, Star } from 'lucide-react';

const topInfluencers = [
  {
    id: '1',
    name: 'TechCrunch',
    handle: '@TechCrunch',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=TC',
    followers: 2500000,
    mentions: 12,
    engagement: 45000,
    sentiment: 'positive' as const,
    reach: 5200000,
  },
  {
    id: '2',
    name: 'Sarah Digital',
    handle: '@sarah_digital',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    followers: 850000,
    mentions: 8,
    engagement: 12000,
    sentiment: 'positive' as const,
    reach: 1200000,
  },
  {
    id: '3',
    name: 'Product Hunt',
    handle: '@ProductHunt',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PH',
    followers: 1200000,
    mentions: 5,
    engagement: 28000,
    sentiment: 'neutral' as const,
    reach: 2800000,
  },
  {
    id: '4',
    name: 'Marketing Mike',
    handle: '@marketing_mike',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    followers: 450000,
    mentions: 15,
    engagement: 8500,
    sentiment: 'positive' as const,
    reach: 890000,
  },
  {
    id: '5',
    name: 'Startup Weekly',
    handle: '@startupweekly',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SW',
    followers: 680000,
    mentions: 6,
    engagement: 15000,
    sentiment: 'positive' as const,
    reach: 1500000,
  },
  {
    id: '6',
    name: 'Tech Reviewer',
    handle: '@tech_reviewer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer',
    followers: 320000,
    mentions: 4,
    engagement: 6200,
    sentiment: 'neutral' as const,
    reach: 450000,
  },
];

const getSentimentColor = (sentiment: 'positive' | 'neutral' | 'negative') => {
  if (sentiment === 'positive') return 'bg-emerald-500';
  if (sentiment === 'negative') return 'bg-red-500';
  return 'bg-yellow-500';
};

export function Influencers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Influencers</h1>
        <p className="text-muted-foreground">Track influential accounts mentioning your brand</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Influencers', value: '156', icon: Users, color: 'blue' },
          { label: 'Total Reach', value: '12.5M', icon: TrendingUp, color: 'green' },
          { label: 'Mentions', value: '342', icon: MessageSquare, color: 'purple' },
          { label: 'Avg. Sentiment', value: '+18', icon: Star, color: 'orange' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {topInfluencers.map((influencer, index) => (
          <motion.div
            key={influencer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card border border-border rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-12 h-12 rounded-full bg-muted"
              />
              <div>
                <h3 className="font-semibold text-foreground">{influencer.name}</h3>
                <p className="text-sm text-muted-foreground">{influencer.handle}</p>
              </div>
              <div className={`ml-auto w-3 h-3 rounded-full ${getSentimentColor(influencer.sentiment)}`} />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Followers</p>
                <p className="font-semibold text-foreground">
                  {(influencer.followers / 1000000).toFixed(1)}M
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Mentions</p>
                <p className="font-semibold text-foreground">{influencer.mentions}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Engagement</p>
                <p className="font-semibold text-foreground">
                  {(influencer.engagement / 1000).toFixed(1)}K
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Reach</p>
                <p className="font-semibold text-foreground">
                  {(influencer.reach / 1000000).toFixed(1)}M
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
