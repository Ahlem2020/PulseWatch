import { motion } from 'framer-motion';
import { useState } from 'react';

export function Progress() {
  const [animated, setAnimated] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Progress</h1>
        <p className="text-muted-foreground mt-1">Progress bars and indicators</p>
      </div>

      {/* Basic Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Basic Progress Bars</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">25%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-1/4" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">50%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-1/2" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">75%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-3/4" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">100%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Colored Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Colored Progress</h2>
        <div className="space-y-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-2/3" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full w-4/5" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full w-1/2" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full w-1/3" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full w-3/5" />
          </div>
        </div>
      </div>

      {/* Progress Sizes */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Progress Sizes</h2>
        <div className="space-y-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-3/4" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-3/4" />
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-3/4" />
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-3/4" />
          </div>
          <div className="h-6 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-3/4" />
          </div>
        </div>
      </div>

      {/* Progress with Label */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Progress with Labels</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-foreground font-medium">Project Progress</span>
              <span className="text-muted-foreground">68%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: '68%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-foreground font-medium">Storage Used</span>
              <span className="text-muted-foreground">85%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-foreground font-medium">Tasks Completed</span>
              <span className="text-muted-foreground">42%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '42%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Animated Progress</h2>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={animated}
              onChange={(e) => setAnimated(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm text-muted-foreground">Animate</span>
          </label>
        </div>
        <div className="space-y-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: animated ? '75%' : '75%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-accent rounded-full"
            />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className={`h-full bg-accent rounded-full w-2/3 ${animated ? 'animate-pulse' : ''}`} />
          </div>
        </div>
      </div>

      {/* Striped Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Striped Progress</h2>
        <div className="space-y-4">
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full" 
              style={{ 
                width: '60%',
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                backgroundSize: '1rem 1rem'
              }} 
            />
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full animate-[progress-stripes_1s_linear_infinite]" 
              style={{ 
                width: '75%',
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                backgroundSize: '1rem 1rem'
              }} 
            />
          </div>
        </div>
      </div>

      {/* Stacked Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Stacked Progress</h2>
        <div className="h-4 bg-muted rounded-full overflow-hidden flex">
          <div className="h-full bg-green-500" style={{ width: '35%' }} />
          <div className="h-full bg-blue-500" style={{ width: '25%' }} />
          <div className="h-full bg-yellow-500" style={{ width: '20%' }} />
          <div className="h-full bg-red-500" style={{ width: '10%' }} />
        </div>
        <div className="flex gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded" />
            <span className="text-muted-foreground">Completed (35%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded" />
            <span className="text-muted-foreground">In Progress (25%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded" />
            <span className="text-muted-foreground">Pending (20%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded" />
            <span className="text-muted-foreground">Blocked (10%)</span>
          </div>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Circular Progress</h2>
        <div className="flex flex-wrap gap-8">
          {[25, 50, 75, 100].map((value) => (
            <div key={value} className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${value * 2.51} 251`}
                  className="text-accent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">{value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Progress */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Steps Progress</h2>
        <div className="flex items-center justify-between max-w-xl mx-auto">
          {['Cart', 'Shipping', 'Payment', 'Confirm'].map((step, i) => (
            <div key={step} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                i <= 1 ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
              }`}>
                {i + 1}
              </div>
              <span className={`ml-2 text-sm ${i <= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step}
              </span>
              {i < 3 && (
                <div className={`w-12 h-1 mx-4 ${i < 1 ? 'bg-accent' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
