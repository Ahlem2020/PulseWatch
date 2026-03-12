import { motion } from 'framer-motion';
import { TrendingUp, Hash, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const keywords = [
  { word: 'product launch', count: 1250, change: 45, trending: true },
  { word: 'customer service', count: 890, change: -12, trending: false },
  { word: 'new feature', count: 756, change: 28, trending: true },
  { word: 'pricing', count: 634, change: 8, trending: true },
  { word: 'integration', count: 521, change: -5, trending: false },
  { word: 'API', count: 445, change: 15, trending: true },
];

const hashtags = [
  { tag: '#YourBrand', count: 2340, change: 67 },
  { tag: '#ProductReview', count: 1560, change: 23 },
  { tag: '#TechNews', count: 980, change: -8 },
  { tag: '#SaaS', count: 756, change: 34 },
];

export function TrendingKeywords() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold text-foreground">Trending</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Keywords</h4>
          <div className="space-y-2">
            {keywords.map((item, index) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {item.trending && (
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  )}
                  <span className="text-sm text-foreground">{item.word}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item.count.toLocaleString()}</span>
                  <span
                    className={`flex items-center text-xs ${
                      item.change >= 0 ? 'text-emerald-500' : 'text-red-500'
                    }`}
                  >
                    {item.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {Math.abs(item.change)}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Hashtags</h4>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((item, index) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full cursor-pointer hover:bg-accent/20 transition-colors"
              >
                <Hash size={12} className="text-accent" />
                <span className="text-sm text-foreground">{item.tag.slice(1)}</span>
                <span className="text-xs text-muted-foreground ml-1">{item.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
