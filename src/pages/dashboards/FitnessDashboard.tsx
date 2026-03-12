import { motion } from 'framer-motion';
import { Activity, Heart, Moon, Footprints, Flame, Droplets, Target, Award } from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, RadialBarChart, RadialBar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const weeklyActivity = [
  { day: 'Mon', steps: 8500, calories: 2100, sleep: 7.5 },
  { day: 'Tue', steps: 12000, calories: 2400, sleep: 6.2 },
  { day: 'Wed', steps: 6800, calories: 1800, sleep: 8.0 },
  { day: 'Thu', steps: 9200, calories: 2200, sleep: 7.0 },
  { day: 'Fri', steps: 11500, calories: 2600, sleep: 6.5 },
  { day: 'Sat', steps: 15000, calories: 2800, sleep: 8.5 },
  { day: 'Sun', steps: 7200, calories: 1900, sleep: 9.0 },
];

const heartRateData = [
  { time: '6am', rate: 62 },
  { time: '9am', rate: 78 },
  { time: '12pm', rate: 85 },
  { time: '3pm', rate: 72 },
  { time: '6pm', rate: 95 },
  { time: '9pm', rate: 68 },
];

const goals = [
  { name: 'Steps', current: 8542, target: 10000, icon: Footprints, color: '#8b5cf6' },
  { name: 'Calories', current: 1850, target: 2200, icon: Flame, color: '#f59e0b' },
  { name: 'Water', current: 6, target: 8, icon: Droplets, color: '#06b6d4' },
  { name: 'Sleep', current: 7.2, target: 8, icon: Moon, color: '#6366f1' },
];

const workouts = [
  { name: 'Morning Run', type: 'Cardio', duration: '45 min', calories: 420, date: 'Today' },
  { name: 'Weight Training', type: 'Strength', duration: '60 min', calories: 380, date: 'Today' },
  { name: 'Yoga Session', type: 'Flexibility', duration: '30 min', calories: 120, date: 'Yesterday' },
  { name: 'HIIT Workout', type: 'Cardio', duration: '25 min', calories: 350, date: 'Yesterday' },
];

export function FitnessDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Fitness Dashboard</h1>
        <p className="text-muted-foreground mt-1">Track your health and fitness goals</p>
      </div>

      {/* Goals Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={goal.name} className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${goal.color}20` }}>
                  <goal.icon className="w-5 h-5" style={{ color: goal.color }} />
                </div>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {goal.current}{goal.name === 'Sleep' ? 'h' : goal.name === 'Water' ? ' cups' : ''}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                of {goal.target}{goal.name === 'Sleep' ? 'h' : goal.name === 'Water' ? ' cups' : ''} {goal.name.toLowerCase()}
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all" 
                  style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: goal.color }} 
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="steps" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Steps" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Heart Rate */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Heart Rate</h2>
            <div className="flex items-center gap-2 text-red-500">
              <Heart className="w-5 h-5 animate-pulse" />
              <span className="text-xl font-bold">72 BPM</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={heartRateData}>
              <defs>
                <linearGradient id="heartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} domain={[50, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Area type="monotone" dataKey="rate" stroke="#ef4444" fill="url(#heartGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Workouts */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Workouts</h2>
          <div className="space-y-4">
            {workouts.map((workout, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    workout.type === 'Cardio' ? 'bg-red-500/10 text-red-500' :
                    workout.type === 'Strength' ? 'bg-accent/10 text-accent' :
                    'bg-green-500/10 text-green-500'
                  }`}>
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{workout.name}</p>
                    <p className="text-sm text-muted-foreground">{workout.type} • {workout.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{workout.calories} kcal</p>
                  <p className="text-sm text-muted-foreground">{workout.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Achievements</h2>
          <div className="space-y-4">
            {[
              { name: '7-Day Streak', desc: 'Workout every day', progress: 100, icon: '🔥' },
              { name: '10K Steps', desc: 'Walk 10,000 steps', progress: 85, icon: '👟' },
              { name: 'Early Bird', desc: '5 morning workouts', progress: 60, icon: '🌅' },
              { name: 'Hydration Hero', desc: 'Drink 8 cups daily', progress: 75, icon: '💧' },
            ].map((achievement) => (
              <div key={achievement.name} className="flex items-center gap-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{achievement.name}</span>
                    <span className="text-xs text-muted-foreground">{achievement.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full" 
                      style={{ width: `${achievement.progress}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
