import { motion } from 'framer-motion';
import {
  Shield, AlertTriangle, Eye, Server, Bug, Activity,
  Search, RefreshCw, CheckCircle, AlertCircle, FileWarning
} from 'lucide-react';
import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const threatData = [
  { time: '00:00', threats: 12, blocked: 10, alerts: 2 },
  { time: '04:00', threats: 8, blocked: 7, alerts: 1 },
  { time: '08:00', threats: 45, blocked: 42, alerts: 3 },
  { time: '12:00', threats: 67, blocked: 64, alerts: 3 },
  { time: '16:00', threats: 52, blocked: 48, alerts: 4 },
  { time: '20:00', threats: 38, blocked: 35, alerts: 3 },
];

const threatTypes = [
  { name: 'Phishing', value: 35, color: '#ef4444' },
  { name: 'Malware', value: 25, color: '#f97316' },
  { name: 'DDoS', value: 15, color: '#eab308' },
  { name: 'Data Breach', value: 12, color: '#8b5cf6' },
  { name: 'Social Eng.', value: 13, color: '#06b6d4' },
];

const recentThreats = [
  { id: 1, type: 'Phishing', source: 'email-spoofed.com', target: 'support@company.com', status: 'blocked', severity: 'high', time: '2 min ago' },
  { id: 2, type: 'Malware', source: '45.67.89.123', target: 'endpoint-032', status: 'blocked', severity: 'critical', time: '15 min ago' },
  { id: 3, type: 'DDoS', source: 'Multiple IPs', target: 'api.company.com', status: 'mitigated', severity: 'medium', time: '1 hour ago' },
  { id: 4, type: 'Data Exfil', source: 'internal', target: 'database-prod', status: 'investigating', severity: 'critical', time: '2 hours ago' },
  { id: 5, type: 'Brute Force', source: '192.168.1.x', target: 'auth-server', status: 'blocked', severity: 'low', time: '4 hours ago' },
];

const digitalFootprint = [
  { category: 'Social Media', exposed: 12, secured: 45, risk: 'medium' },
  { category: 'Dark Web', exposed: 3, secured: 0, risk: 'high' },
  { category: 'Data Brokers', exposed: 8, secured: 2, risk: 'medium' },
  { category: 'Public Records', exposed: 5, secured: 15, risk: 'low' },
  { category: 'Leaked Databases', exposed: 2, secured: 0, risk: 'critical' },
];

const vulnerabilities = [
  { name: 'Outdated SSL Certificate', system: 'web-server-02', severity: 'high', discovered: '3 days ago', status: 'open' },
  { name: 'Unpatched CVE-2024-1234', system: 'database-prod', severity: 'critical', discovered: '1 week ago', status: 'in-progress' },
  { name: 'Weak Password Policy', system: 'auth-service', severity: 'medium', discovered: '2 weeks ago', status: 'open' },
  { name: 'Open Port 22', system: 'server-backup', severity: 'low', discovered: '1 month ago', status: 'resolved' },
];

export function CyberAnalysis() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-black';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked': return 'text-green-500';
      case 'mitigated': return 'text-blue-500';
      case 'investigating': return 'text-yellow-500';
      case 'open': return 'text-red-500';
      case 'in-progress': return 'text-yellow-500';
      case 'resolved': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'text-red-500 bg-red-500/10';
      case 'high': return 'text-orange-500 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-500 bg-green-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
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
          <h1 className="text-2xl font-bold text-foreground">Cyber Analysis</h1>
          <p className="text-muted-foreground">Security monitoring, threat detection, and digital fingerprint analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <RefreshCw size={18} />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
            <AlertTriangle size={18} />
            Active Alerts (4)
          </button>
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { label: 'Threats Blocked', value: '2,847', change: '+12%', trend: 'up', icon: Shield, color: 'text-green-500' },
          { label: 'Active Threats', value: '3', change: '-2', trend: 'down', icon: Bug, color: 'text-red-500' },
          { label: 'Vulnerabilities', value: '12', change: '+4', trend: 'up', icon: AlertCircle, color: 'text-orange-500' },
          { label: 'Systems Monitored', value: '156', change: '', trend: 'stable', icon: Server, color: 'text-blue-500' },
          { label: 'Security Score', value: '78', change: '+5', trend: 'up', icon: Activity, color: 'text-purple-500' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              {stat.change && (
                <span className={`text-xs ${stat.trend === 'up' && stat.label !== 'Threats Blocked' ? 'text-red-500' : stat.trend === 'down' ? 'text-green-500' : 'text-green-500'}`}>
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Threat Timeline & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Threat Activity (24h)</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                Threats
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                Blocked
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={threatData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px' 
                }} 
              />
              <Area type="monotone" dataKey="threats" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
              <Area type="monotone" dataKey="blocked" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-6">Threat Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={threatTypes}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {threatTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {threatTypes.map((type) => (
              <div key={type.name} className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }} />
                <span className="text-muted-foreground">{type.name}</span>
                <span className="font-medium text-foreground ml-auto">{type.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Threats */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">Recent Threats</h3>
          <button className="text-sm text-accent hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Source</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Target</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Severity</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentThreats.map((threat) => (
                <tr key={threat.id} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Bug size={16} className="text-red-500" />
                      <span className="text-foreground">{threat.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-sm text-muted-foreground">{threat.source}</td>
                  <td className="py-3 px-4 text-foreground">{threat.target}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`flex items-center gap-1 text-sm ${getStatusColor(threat.status)}`}>
                      {threat.status === 'blocked' && <CheckCircle size={14} />}
                      {threat.status === 'mitigated' && <Shield size={14} />}
                      {threat.status === 'investigating' && <Eye size={14} />}
                      {threat.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{threat.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digital Footprint & Vulnerabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Digital Footprint */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Digital Footprint Analysis</h3>
            <button className="flex items-center gap-2 text-sm text-accent hover:underline">
              <Search size={14} />
              Scan Now
            </button>
          </div>
          <div className="space-y-4">
            {digitalFootprint.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">{item.category}</span>
                  <span className={`px-2 py-1 rounded text-xs ${getRiskColor(item.risk)}`}>
                    {item.risk} risk
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-red-500">Exposed: {item.exposed}</span>
                      <span className="text-green-500">Secured: {item.secured}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                      <div 
                        className="h-full bg-red-500"
                        style={{ width: `${(item.exposed / (item.exposed + item.secured)) * 100}%` }}
                      />
                      <div 
                        className="h-full bg-green-500"
                        style={{ width: `${(item.secured / (item.exposed + item.secured)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerabilities */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Open Vulnerabilities</h3>
            <button className="text-sm text-accent hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {vulnerabilities.map((vuln, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileWarning size={16} className={
                      vuln.severity === 'critical' ? 'text-red-500' :
                      vuln.severity === 'high' ? 'text-orange-500' :
                      vuln.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'
                    } />
                    <span className="font-medium text-foreground">{vuln.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(vuln.severity)}`}>
                    {vuln.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{vuln.system}</span>
                  <span className={getStatusColor(vuln.status)}>{vuln.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Discovered {vuln.discovered}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="p-6 rounded-xl bg-linear-to-r from-accent/10 to-accent-secondary/10 border border-accent/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent text-white">
            <Shield size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">Security Recommendations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Update SSL certificates on 2 servers (expires in 15 days)
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-orange-500" />
                Apply critical patch CVE-2024-1234 to production database
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500" />
                Enable 2FA for 8 admin accounts without MFA
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                Review and rotate API keys older than 90 days
              </li>
            </ul>
          </div>
          <button className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors">
            View Action Plan
          </button>
        </div>
      </div>
    </motion.div>
  );
}
