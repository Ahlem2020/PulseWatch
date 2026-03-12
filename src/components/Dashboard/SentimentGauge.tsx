import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SentimentGaugeProps {
  positive: number;
  neutral: number;
  negative: number;
}

export function SentimentGauge({ positive, neutral, negative }: SentimentGaugeProps) {
  const total = positive + neutral + negative;
  const score = ((positive - negative) / total) * 100;
  const normalizedScore = Math.max(-100, Math.min(100, score));
  const rotation = (normalizedScore / 100) * 90;
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(normalizedScore), 500);
    return () => clearTimeout(timer);
  }, [normalizedScore]);

  const getScoreColor = () => {
    if (normalizedScore > 30) return 'text-emerald-500';
    if (normalizedScore < -30) return 'text-red-500';
    return 'text-yellow-500';
  };

  const getScoreLabel = () => {
    if (normalizedScore > 30) return 'Positive';
    if (normalizedScore < -30) return 'Negative';
    return 'Neutral';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">Sentiment Score</h3>
      
      <div className="relative w-48 h-24 mx-auto mb-4">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            className="text-muted"
            strokeLinecap="round"
          />
          {/* Colored segments */}
          <path
            d="M 20 100 A 80 80 0 0 1 60 34"
            fill="none"
            stroke="#ef4444"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.3"
          />
          <path
            d="M 60 34 A 80 80 0 0 1 140 34"
            fill="none"
            stroke="#eab308"
            strokeWidth="16"
            opacity="0.3"
          />
          <path
            d="M 140 34 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#22c55e"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Needle */}
          <motion.g
            initial={{ rotate: -90 }}
            animate={{ rotate: rotation }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 60 }}
            style={{ transformOrigin: '100px 100px' }}
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="currentColor"
              strokeWidth="3"
              className="text-foreground"
              strokeLinecap="round"
            />
            <circle cx="100" cy="100" r="8" fill="currentColor" className="text-foreground" />
          </motion.g>
        </svg>
      </div>

      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`text-4xl font-bold ${getScoreColor()}`}
        >
          {animatedScore > 0 ? '+' : ''}{Math.round(animatedScore)}
        </motion.p>
        <p className={`text-sm font-medium mt-1 ${getScoreColor()}`}>{getScoreLabel()}</p>
      </div>

      <div className="flex justify-between mt-6 text-sm">
        <div className="text-center">
          <div className="w-3 h-3 rounded-full bg-emerald-500 mx-auto mb-1" />
          <p className="text-muted-foreground">Positive</p>
          <p className="font-semibold text-foreground">{Math.round((positive / total) * 100)}%</p>
        </div>
        <div className="text-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mx-auto mb-1" />
          <p className="text-muted-foreground">Neutral</p>
          <p className="font-semibold text-foreground">{Math.round((neutral / total) * 100)}%</p>
        </div>
        <div className="text-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mx-auto mb-1" />
          <p className="text-muted-foreground">Negative</p>
          <p className="font-semibold text-foreground">{Math.round((negative / total) * 100)}%</p>
        </div>
      </div>
    </motion.div>
  );
}
