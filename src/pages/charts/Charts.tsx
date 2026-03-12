import { motion } from 'framer-motion';
import { 
  AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar
} from 'recharts';

const lineData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

const barData = [
  { name: 'Mon', visits: 4000, clicks: 2400 },
  { name: 'Tue', visits: 3000, clicks: 1398 },
  { name: 'Wed', visits: 2000, clicks: 9800 },
  { name: 'Thu', visits: 2780, clicks: 3908 },
  { name: 'Fri', visits: 1890, clicks: 4800 },
  { name: 'Sat', visits: 2390, clicks: 3800 },
  { name: 'Sun', visits: 3490, clicks: 4300 },
];

const pieData = [
  { name: 'Desktop', value: 400, color: '#8b5cf6' },
  { name: 'Mobile', value: 300, color: '#06b6d4' },
  { name: 'Tablet', value: 200, color: '#10b981' },
  { name: 'Other', value: 100, color: '#f59e0b' },
];

const areaData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
];

const radialData = [
  { name: 'Progress', value: 75, fill: '#8b5cf6' },
];

export function Charts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Charts</h1>
        <p className="text-muted-foreground mt-1">Data visualization with Recharts</p>
      </div>

      {/* Line Chart */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--foreground)'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
            <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2} dot={{ fill: '#06b6d4' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Area Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--foreground)'
              }}
            />
            <Area type="monotone" dataKey="uv" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#06b6d4" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Legend />
              <Bar dataKey="visits" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clicks" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Stacked Bar Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--card)', 
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--foreground)'
              }}
            />
            <Legend />
            <Bar dataKey="visits" stackId="a" fill="#8b5cf6" />
            <Bar dataKey="clicks" stackId="a" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Small Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Sales', value: '$12,456', change: '+12%', data: lineData.map(d => ({ value: d.sales })) },
          { title: 'Revenue', value: '$8,234', change: '+8%', data: lineData.map(d => ({ value: d.revenue })) },
          { title: 'Visitors', value: '23,456', change: '+15%', data: barData.map(d => ({ value: d.visits })) },
          { title: 'Conversions', value: '1,234', change: '+5%', data: barData.map(d => ({ value: d.clicks })) },
        ].map((item, i) => (
          <div key={item.title} className="bg-card rounded-xl border border-border p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
              </div>
              <span className="text-green-500 text-sm">{item.change}</span>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart data={item.data}>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'} 
                  fill={i % 2 === 0 ? '#8b5cf640' : '#06b6d440'} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Radial Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Radial Progress</h2>
          <ResponsiveContainer width="100%" height={200}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" data={radialData} startAngle={180} endAngle={0}>
              <RadialBar dataKey="value" cornerRadius={10} fill="#8b5cf6" />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="text-center -mt-16">
            <p className="text-3xl font-bold text-foreground">75%</p>
            <p className="text-sm text-muted-foreground">Completion Rate</p>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Simple Donut</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Horizontal Bars</h2>
          <div className="space-y-4">
            {pieData.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">{item.value}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full" 
                    style={{ width: `${(item.value / 400) * 100}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
