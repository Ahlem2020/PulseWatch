import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import {
  Twitter,
  MessageCircle,
  Newspaper,
  BookOpen,
  Youtube,
  Instagram,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Users,
  Heart,
} from 'lucide-react';
import type { Mention } from '../../store/dashboardStore';

const platformIcons = {
  twitter: Twitter,
  reddit: MessageCircle,
  news: Newspaper,
  blog: BookOpen,
  youtube: Youtube,
  instagram: Instagram,
};

const platformColors = {
  twitter: 'text-sky-500 bg-sky-500/10',
  reddit: 'text-orange-500 bg-orange-500/10',
  news: 'text-blue-500 bg-blue-500/10',
  blog: 'text-purple-500 bg-purple-500/10',
  youtube: 'text-red-500 bg-red-500/10',
  instagram: 'text-pink-500 bg-pink-500/10',
};

const sentimentIcons = {
  positive: { icon: ThumbsUp, color: 'text-emerald-500 bg-emerald-500/10' },
  negative: { icon: ThumbsDown, color: 'text-red-500 bg-red-500/10' },
  neutral: { icon: Minus, color: 'text-yellow-500 bg-yellow-500/10' },
};

interface MentionsFeedProps {
  mentions: Mention[];
  compact?: boolean;
}

export function MentionsFeed({ mentions, compact = false }: MentionsFeedProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-card border border-border rounded-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Real-time Mentions</h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      <div className={`overflow-y-auto ${compact ? 'max-h-[400px]' : 'max-h-[600px]'}`}>
        <AnimatePresence mode="popLayout">
          {mentions.map((mention, index) => {
            const PlatformIcon = platformIcons[mention.platform];
            const SentimentIcon = sentimentIcons[mention.sentiment].icon;

            return (
              <motion.div
                key={mention.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(var(--muted), 0.5)' }}
                className="p-4 border-b border-border last:border-0 transition-colors cursor-pointer"
              >
                <div className="flex gap-3">
                  <img
                    src={mention.avatar}
                    alt={mention.author}
                    className="w-10 h-10 rounded-full bg-muted"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground">{mention.author}</span>
                      <span className={`p-1 rounded ${platformColors[mention.platform]}`}>
                        <PlatformIcon size={12} />
                      </span>
                      <span className={`p-1 rounded ${sentimentIcons[mention.sentiment].color}`}>
                        <SentimentIcon size={12} />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(mention.timestamp, 'MMM d, h:mm a')}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mt-1 line-clamp-2">{mention.content}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {mention.reach.toLocaleString()} reach
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {mention.engagement.toLocaleString()} engagement
                      </span>
                      {mention.location && (
                        <span className="text-muted-foreground">
                          📍 {mention.location.city}, {mention.location.country}
                        </span>
                      )}
                      <a
                        href={mention.url}
                        className="flex items-center gap-1 hover:text-accent transition-colors ml-auto"
                      >
                        <ExternalLink size={12} />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
