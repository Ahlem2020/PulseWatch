import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity, BarChart3 } from 'lucide-react';
import { 
  Line, Area, PieChart as RePieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart
} from 'recharts';

const portfolioData = [
  { name: 'Jan', value: 100000, benchmark: 98000 },
  { name: 'Feb', value: 105000, benchmark: 99000 },
  { name: 'Mar', value: 98000, benchmark: 100000 },
  { name: 'Apr', value: 115000, benchmark: 102000 },
  { name: 'May', value: 125000, benchmark: 105000 },
  { name: 'Jun', value: 118000, benchmark: 107000 },
  { name: 'Jul', value: 135000, benchmark: 110000 },
  { name: 'Aug', value: 142000, benchmark: 112000 },
];

const allocation = [
  { name: 'Stocks', value: 45, color: '#8b5cf6' },
  { name: 'Bonds', value: 25, color: '#06b6d4' },
  { name: 'Crypto', value: 15, color: '#f59e0b' },
  { name: 'Real Estate', value: 10, color: '#10b981' },
  { name: 'Cash', value: 5, color: '#6b7280' },
];

const holdings = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 150, price: 178.25, change: 2.45, value: 26737.50 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 50, price: 141.80, change: -0.85, value: 7090.00 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 100, price: 378.50, change: 3.12, value: 37850.00 },
  { symbol: 'AMZN', name: 'Amazon.com', shares: 75, price: 178.35, change: 1.23, value: 13376.25 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 40, price: 875.40, change: 15.67, value: 35016.00 },
];

export function FinanceDashboard() {
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalChange = holdings.reduce((sum, h) => sum + (h.change * h.shares), 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Finance Dashboard</h1>
        <p className="text-muted-foreground mt-1">Track your investments and portfolio</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">Portfolio Value</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +${totalChange.toFixed(2)} today
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Activity className="w-4 h-4" />
            <span className="text-sm">Total Return</span>
          </div>
          <p className="text-2xl font-bold text-green-500">+42.5%</p>
          <p className="text-sm text-muted-foreground mt-1">All time</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm">YTD Return</span>
          </div>
          <p className="text-2xl font-bold text-green-500">+18.3%</p>
          <p className="text-sm text-muted-foreground mt-1">vs S&P 500: +12.4%</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <PieChart className="w-4 h-4" />
            <span className="text-sm">Positions</span>
          </div>
          <p className="text-2xl font-bold text-foreground">23</p>
          <p className="text-sm text-muted-foreground mt-1">Across 5 sectors</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Performance */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Portfolio Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={portfolioData}>
              <defs>
                <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
               formatter={(value) => value !== undefined && value !== null ? [`$${(value as number).toLocaleString()}`, ''] : ['', '']}
              />
              <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="url(#portfolioGradient)" />
              <Line type="monotone" dataKey="benchmark" stroke="#6b7280" strokeDasharray="5 5" dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-4 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded" />
              <span className="text-muted-foreground">Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded" />
              <span className="text-muted-foreground">Benchmark (S&P 500)</span>
            </div>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Asset Allocation</h2>
          <ResponsiveContainer width="100%" height={200}>
            <RePieChart>
              <Pie
                data={allocation}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {allocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {allocation.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-foreground font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Top Holdings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Symbol</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Shares</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Price</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Change</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {holdings.map((holding) => (
                <tr key={holding.symbol} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-accent">{holding.symbol}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{holding.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground text-right">{holding.shares}</td>
                  <td className="px-4 py-3 text-sm text-foreground text-right">${holding.price.toFixed(2)}</td>
                  <td className={`px-4 py-3 text-sm text-right ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="flex items-center justify-end gap-1">
                      {holding.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {holding.change >= 0 ? '+' : ''}{holding.change.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-foreground text-right">
                    ${holding.value.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
