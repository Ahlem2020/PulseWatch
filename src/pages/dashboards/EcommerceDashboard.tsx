import { motion } from 'framer-motion';
import { Users, DollarSign, ShoppingCart, TrendingUp, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Jan', value: 4000, prev: 2400 },
  { name: 'Feb', value: 3000, prev: 1398 },
  { name: 'Mar', value: 5000, prev: 3800 },
  { name: 'Apr', value: 2780, prev: 3908 },
  { name: 'May', value: 4890, prev: 4800 },
  { name: 'Jun', value: 6390, prev: 3800 },
  { name: 'Jul', value: 3490, prev: 4300 },
];

const pieData = [
  { name: 'Direct', value: 400, color: '#8b5cf6' },
  { name: 'Social', value: 300, color: '#06b6d4' },
  { name: 'Organic', value: 300, color: '#10b981' },
  { name: 'Referral', value: 200, color: '#f59e0b' },
];

const recentSales = [
  { name: 'Olivia Martin', email: 'olivia@email.com', amount: '+$1,999.00' },
  { name: 'Jackson Lee', email: 'jackson@email.com', amount: '+$39.00' },
  { name: 'Isabella Nguyen', email: 'isabella@email.com', amount: '+$299.00' },
  { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
  { name: 'Sofia Davis', email: 'sofia@email.com', amount: '+$39.00' },
];

export function EcommerceDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">E-commerce Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your store's performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign, up: true },
          { title: 'Subscriptions', value: '+2,350', change: '+180.1%', icon: Users, up: true },
          { title: 'Sales', value: '+12,234', change: '+19%', icon: ShoppingCart, up: true },
          { title: 'Active Now', value: '+573', change: '+201', icon: TrendingUp, up: true },
        ].map((stat) => (
          <div key={stat.title} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.title}</span>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
            <p className={`text-sm mt-1 flex items-center gap-1 ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
              {stat.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-4 bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Revenue Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Sales */}
        <div className="lg:col-span-3 bg-card rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Recent Sales</h2>
              <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
            </div>
          </div>
          <div className="space-y-4">
            {recentSales.map((sale, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium text-sm">
                    {sale.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{sale.name}</p>
                    <p className="text-sm text-muted-foreground">{sale.email}</p>
                  </div>
                </div>
                <span className="font-medium text-foreground">{sale.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Wireless Headphones', sales: 1234, revenue: '$24,567', progress: 80 },
              { name: 'Smart Watch Pro', sales: 987, revenue: '$19,234', progress: 65 },
              { name: 'Laptop Stand', sales: 756, revenue: '$11,340', progress: 50 },
              { name: 'USB-C Hub', sales: 543, revenue: '$8,145', progress: 35 },
            ].map((product) => (
              <div key={product.name} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{product.name}</span>
                    <span className="text-sm text-muted-foreground">{product.revenue}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full" 
                      style={{ width: `${product.progress}%` }} 
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
