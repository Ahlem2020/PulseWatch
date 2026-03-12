import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red';
  delay?: number;
}

const colorClasses = {
  blue: 'border-blue-500/15 text-blue-500 bg-blue-500/10 ring-blue-500/10',
  green: 'border-emerald-500/15 text-emerald-500 bg-emerald-500/10 ring-emerald-500/10',
  orange: 'border-orange-500/15 text-orange-500 bg-orange-500/10 ring-orange-500/10',
  purple: 'border-violet-500/15 text-violet-500 bg-violet-500/10 ring-violet-500/10',
  red: 'border-red-500/15 text-red-500 bg-red-500/10 ring-red-500/10',
};

const iconBgClasses = {
  blue: 'bg-blue-500/12 shadow-blue-500/10',
  green: 'bg-emerald-500/12 shadow-emerald-500/10',
  orange: 'bg-orange-500/12 shadow-orange-500/10',
  purple: 'bg-violet-500/12 shadow-violet-500/10',
  red: 'bg-red-500/12 shadow-red-500/10',
};

const accentBarClasses = {
  blue: 'from-blue-500 via-blue-400 to-cyan-400',
  green: 'from-emerald-500 via-green-400 to-teal-400',
  orange: 'from-orange-500 via-amber-400 to-yellow-400',
  purple: 'from-violet-500 via-fuchsia-400 to-purple-400',
  red: 'from-red-500 via-rose-400 to-orange-400',
};

export function KPICard({ title, value, change, icon: Icon, color, delay = 0 }: KPICardProps) {
  const isPositive = change >= 0;
  const formattedChange = `${isPositive ? '+' : ''}${change}%`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden rounded-2xl border bg-card/95 p-5 shadow-sm ring-1 backdrop-blur-sm transition-all ${colorClasses[color]}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accentBarClasses[color]} opacity-90`} />
      <div className="absolute inset-0 bg-linear-to-br from-white/4 via-transparent to-transparent dark:from-white/3" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${iconBgClasses[color]} ${colorClasses[color].split(' ')[1]}`}>
              Live
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="mt-3 text-3xl font-bold tracking-tight text-foreground"
          >
            {typeof value === 'number' ? value.toLocaleString() : value}
          </motion.p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
              {isPositive ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {formattedChange}
            </div>
            <span className="text-xs text-muted-foreground">vs last week</span>
          </div>
        </div>

        <div className={`relative rounded-2xl p-3.5 shadow-lg ${iconBgClasses[color]}`}>
          <div className="absolute inset-0 rounded-2xl bg-white/30 opacity-60 dark:bg-white/5" />
          <Icon className={`relative h-6 w-6 ${colorClasses[color].split(' ')[1]}`} />
        </div>
      </div>

      <div className="relative mt-5 flex items-end justify-between gap-4 border-t border-border/60 pt-4">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">Performance</p>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
              {isPositive ? 'Growing steadily' : 'Needs attention'}
            </span>
          </div>
        </div>
        <div className="flex h-10 items-end gap-1.5">
          {[35, 55, 45, 75, 60, 82].map((height, index) => (
            <motion.span
              key={index}
              initial={{ height: 8, opacity: 0 }}
              animate={{ height: `${height}%`, opacity: 1 }}
              transition={{ duration: 0.4, delay: delay + 0.35 + index * 0.04 }}
              className={`w-2 rounded-full bg-linear-to-t ${accentBarClasses[color]} ${index > 3 ? 'opacity-100' : 'opacity-70'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
