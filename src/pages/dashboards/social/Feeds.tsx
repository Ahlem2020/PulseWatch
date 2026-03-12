import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Globe, Twitter, Facebook, Instagram, Youtube, Music2, Search, Filter,
  Heart, MessageCircle, Share2, Bookmark, ExternalLink, MoreHorizontal,
  TrendingUp, Clock, Eye, RefreshCw, Grid, List, Columns, ChevronDown
} from 'lucide-react';

type Platform = 'all' | 'websites' | 'x' | 'facebook' | 'instagram' | 'youtube' | 'tiktok';

interface FeedItem {
  id: string;
  platform: Platform;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  media?: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  sentiment: 'positive' | 'negative' | 'neutral';
  timestamp: string;
  url: string;
}

const feedItems: FeedItem[] = [
  {
    id: '1',
    platform: 'x',
    author: { name: 'Sarah Johnson', handle: '@sarahj_tech', avatar: 'S', verified: true },
    content: 'Just tried the new @YourBrand product and I\'m absolutely blown away! The quality is incredible. Highly recommend to anyone looking for a premium experience. 🔥 #YourBrand #ProductReview',
    engagement: { likes: 2340, comments: 189, shares: 456 },
    sentiment: 'positive',
    timestamp: '5 min ago',
    url: 'https://x.com/sarahj_tech/status/123'
  },
  {
    id: '2',
    platform: 'instagram',
    author: { name: 'LifestyleByEmma', handle: '@lifestylebyemma', avatar: 'E', verified: true },
    content: 'Unboxing my latest haul from @YourBrand ✨ The packaging alone is worth talking about! Swipe to see what\'s inside 👉 #Unboxing #YourBrand #Lifestyle',
    media: '📸 4 images',
    engagement: { likes: 8920, comments: 342, shares: 128 },
    sentiment: 'positive',
    timestamp: '18 min ago',
    url: 'https://instagram.com/p/abc123'
  },
  {
    id: '3',
    platform: 'facebook',
    author: { name: 'Tech Reviews Daily', handle: 'TechReviewsDaily', avatar: 'T', verified: false },
    content: 'Our comprehensive review of YourBrand\'s latest release is now live! We tested it for 2 weeks and here\'s what we found... [Link in comments]',
    engagement: { likes: 1250, comments: 89, shares: 234 },
    sentiment: 'neutral',
    timestamp: '1 hour ago',
    url: 'https://facebook.com/post/xyz'
  },
  {
    id: '4',
    platform: 'youtube',
    author: { name: 'UnboxKing', handle: '@UnboxKing', avatar: 'U', verified: true },
    content: '🎬 NEW VIDEO: YourBrand Premium Edition - Worth the Hype? | Full Review & Unboxing',
    media: '▶️ 15:42 video • 45K views',
    engagement: { likes: 3200, comments: 567, shares: 890 },
    sentiment: 'positive',
    timestamp: '2 hours ago',
    url: 'https://youtube.com/watch?v=123'
  },
  {
    id: '5',
    platform: 'tiktok',
    author: { name: 'GenZReviews', handle: '@genzreviews', avatar: 'G', verified: true },
    content: 'POV: When YourBrand actually delivers on their promises 😱 #YourBrand #ProductTesting #Honest',
    media: '▶️ 32 sec video • 2.1M views',
    engagement: { likes: 245000, comments: 8900, shares: 34000 },
    sentiment: 'positive',
    timestamp: '4 hours ago',
    url: 'https://tiktok.com/@genzreviews/video/123'
  },
  {
    id: '6',
    platform: 'websites',
    author: { name: 'TechCrunch', handle: 'techcrunch.com', avatar: 'TC', verified: true },
    content: 'YourBrand announces major product update with AI-powered features - "This will change how people interact with our platform" says CEO',
    engagement: { likes: 0, comments: 45, shares: 189 },
    sentiment: 'positive',
    timestamp: '5 hours ago',
    url: 'https://techcrunch.com/article/yourbrand-ai-update'
  },
  {
    id: '7',
    platform: 'x',
    author: { name: 'Disappointed Customer', handle: '@not_happy_user', avatar: 'D', verified: false },
    content: 'Third time contacting @YourBrand support about my order. Still no resolution. This is unacceptable customer service. #CustomerServiceFail',
    engagement: { likes: 89, comments: 23, shares: 12 },
    sentiment: 'negative',
    timestamp: '6 hours ago',
    url: 'https://x.com/not_happy_user/status/456'
  },
  {
    id: '8',
    platform: 'instagram',
    author: { name: 'FitnessWithMike', handle: '@fitnesswithmike', avatar: 'M', verified: true },
    content: 'Morning routine featuring my new gear from @YourBrand 💪 Perfect for early workouts. Link in bio for discount code! #Fitness #MorningRoutine',
    media: '📸 2 images',
    engagement: { likes: 5670, comments: 234, shares: 89 },
    sentiment: 'positive',
    timestamp: '8 hours ago',
    url: 'https://instagram.com/p/def456'
  },
];

const platforms = [
  { id: 'all', name: 'All Platforms', icon: Grid, color: 'bg-accent' },
  { id: 'websites', name: 'Websites', icon: Globe, color: 'bg-emerald-500' },
  { id: 'x', name: 'X (Twitter)', icon: Twitter, color: 'bg-black' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'bg-red-600' },
  { id: 'tiktok', name: 'TikTok', icon: Music2, color: 'bg-black' },
];

export function Feeds() {
  const [activePlatform, setActivePlatform] = useState<Platform>('all');
  const [viewMode, setViewMode] = useState<'feed' | 'grid' | 'columns'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'engagement' | 'sentiment'>('recent');

  const filteredItems = feedItems.filter(item => {
    if (activePlatform !== 'all' && item.platform !== activePlatform) return false;
    if (searchQuery && !item.content.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'engagement') {
      return (b.engagement.likes + b.engagement.comments + b.engagement.shares) - 
             (a.engagement.likes + a.engagement.comments + a.engagement.shares);
    }
    return 0; // Keep original order for 'recent'
  });

  const getPlatformIcon = (platform: Platform) => {
    const p = platforms.find(pl => pl.id === platform);
    return p ? p.icon : Globe;
  };

  const getPlatformColor = (platform: Platform) => {
    const p = platforms.find(pl => pl.id === platform);
    return p ? p.color : 'bg-gray-500';
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-500 bg-green-500/10';
      case 'negative': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Platform Feeds</h1>
          <p className="text-muted-foreground">Real-time mentions and content across all platforms</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <RefreshCw size={18} />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
            <TrendingUp size={18} />
            Live Mode
          </button>
        </div>
      </div>

      {/* Platform Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isActive = activePlatform === platform.id;
          const count = platform.id === 'all' 
            ? feedItems.length 
            : feedItems.filter(i => i.platform === platform.id).length;
          
          return (
            <button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id as Platform)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all ${
                isActive 
                  ? 'bg-accent text-white' 
                  : 'bg-card border border-border hover:border-accent/50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{platform.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                isActive ? 'bg-white/20' : 'bg-muted'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search mentions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none"
          />
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Filter size={18} />
            Sort: {sortBy}
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button 
            onClick={() => setViewMode('feed')}
            className={`p-2 ${viewMode === 'feed' ? 'bg-accent text-white' : 'hover:bg-muted'}`}
          >
            <List size={18} />
          </button>
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 ${viewMode === 'grid' ? 'bg-accent text-white' : 'hover:bg-muted'}`}
          >
            <Grid size={18} />
          </button>
          <button 
            onClick={() => setViewMode('columns')}
            className={`p-2 ${viewMode === 'columns' ? 'bg-accent text-white' : 'hover:bg-muted'}`}
          >
            <Columns size={18} />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Mentions', value: sortedItems.length, icon: MessageCircle },
          { label: 'Total Engagement', value: formatNumber(sortedItems.reduce((sum, i) => sum + i.engagement.likes + i.engagement.comments, 0)), icon: Heart },
          { label: 'Positive', value: sortedItems.filter(i => i.sentiment === 'positive').length, icon: TrendingUp },
          { label: 'Requiring Action', value: sortedItems.filter(i => i.sentiment === 'negative').length, icon: Eye },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="p-2 rounded-lg bg-muted">
              <stat.icon size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feed Items */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
          : viewMode === 'columns' 
            ? 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4' 
            : 'space-y-4'
      }>
        <AnimatePresence>
          {sortedItems.map((item, idx) => {
            const PlatformIcon = getPlatformIcon(item.platform);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.05 }}
                className={`p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-all ${
                  viewMode === 'columns' ? 'break-inside-avoid' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getPlatformColor(item.platform)}`}>
                      {item.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{item.author.name}</span>
                        {item.author.verified && (
                          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.author.handle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${getPlatformColor(item.platform)}`}>
                      <PlatformIcon size={14} className="text-white" />
                    </div>
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                      <MoreHorizontal size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground mb-3 leading-relaxed">{item.content}</p>

                {/* Media Preview */}
                {item.media && (
                  <div className="mb-4 p-3 rounded-lg bg-muted text-sm text-muted-foreground">
                    {item.media}
                  </div>
                )}

                {/* Engagement & Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart size={16} />
                      {formatNumber(item.engagement.likes)}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageCircle size={16} />
                      {formatNumber(item.engagement.comments)}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Share2 size={16} />
                      {formatNumber(item.engagement.shares)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {item.timestamp}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground">
                    <Heart size={16} />
                    Like
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground">
                    <MessageCircle size={16} />
                    Reply
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground">
                    <Bookmark size={16} />
                    Save
                  </button>
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Open
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors">
          Load More Mentions
        </button>
      </div>
    </motion.div>
  );
}
