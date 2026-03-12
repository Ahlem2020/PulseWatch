import { motion } from 'framer-motion';
import { Users, TrendingUp, Star } from 'lucide-react';

const influencers = [
  {
    id: '1',
    name: 'TechCrunch',
    handle: '@TechCrunch',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=TC',
    followers: 2500000,
    mentions: 12,
    sentiment: 'positive' as const,
    recentMention: 'Great product launch from @YourBrand...',
  },
  {
    id: '2',
    name: 'Sarah Digital',
    handle: '@sarah_digital',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    followers: 850000,
    mentions: 8,
    sentiment: 'positive' as const,
    recentMention: 'Been using @YourBrand for 6 months...',
  },
  {
    id: '3',
    name: 'Product Hunt',
    handle: '@ProductHunt',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=PH',
    followers: 1200000,
    mentions: 5,
    sentiment: 'neutral' as const,
    recentMention: '@YourBrand featured in today\'s top products...',
  },
  {
    id: '4',
    name: 'Marketing Mike',
    handle: '@marketing_mike',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    followers: 450000,
    mentions: 15,
    sentiment: 'positive' as const,
    recentMention: 'Case study: How @YourBrand helped us...',
  },
];

export function InfluencerCard() {
  const getSentimentColor = (sentiment: 'positive' | 'neutral' | 'negative') => {
    if (sentiment === 'positive') return 'bg-emerald-500';
    if (sentiment === 'negative') return 'bg-red-500';
    return 'bg-yellow-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card border border-border rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-foreground">Top Influencers</h3>
        </div>
        <span className="text-xs text-muted-foreground">Last 7 days</span>
      </div>

      <div className="divide-y divide-border">
        {influencers.map((influencer, index) => (
          <motion.div
            key={influencer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            whileHover={{ backgroundColor: 'rgba(var(--muted), 0.5)' }}
            className="p-4 flex items-center gap-3 cursor-pointer transition-colors"
          >
            <img
              src={influencer.avatar}
              alt={influencer.name}
              className="w-12 h-12 rounded-full bg-muted"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{influencer.name}</span>
                <span className={`w-2 h-2 rounded-full ${getSentimentColor(influencer.sentiment)}`} />
              </div>
              <p className="text-sm text-muted-foreground">{influencer.handle}</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">
                "{influencer.recentMention}"
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm text-foreground">
                <Users size={14} className="text-muted-foreground" />
                {(influencer.followers / 1000000).toFixed(1)}M
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <TrendingUp size={12} />
                {influencer.mentions} mentions
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
