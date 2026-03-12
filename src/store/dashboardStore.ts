import { create } from 'zustand';

export interface Mention {
  id: string;
  author: string;
  avatar: string;
  platform: 'twitter' | 'reddit' | 'news' | 'blog' | 'youtube' | 'instagram';
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  reach: number;
  engagement: number;
  timestamp: Date;
  url: string;
  location?: { lat: number; lng: number; city: string; country: string };
}

export interface Alert {
  id: string;
  type: 'spike' | 'sentiment' | 'influencer' | 'keyword';
  message: string;
  timestamp: Date;
  read: boolean;
}

interface DashboardState {
  mentions: Mention[];
  alerts: Alert[];
  selectedPlatform: string;
  searchQuery: string;
  dateRange: { start: Date; end: Date };
  setSearchQuery: (query: string) => void;
  setSelectedPlatform: (platform: string) => void;
  addMention: (mention: Mention) => void;
  markAlertRead: (id: string) => void;
}

const generateMockMentions = (): Mention[] => {
  const platforms: Mention['platform'][] = ['twitter', 'reddit', 'news', 'blog', 'youtube', 'instagram'];
  const sentiments: Mention['sentiment'][] = ['positive', 'negative', 'neutral'];
  const authors = ['TechCrunch', 'Sarah_Digital', 'MarketWatch', 'John_Reviews', 'StartupDaily', 'TechBlogger', 'NewsToday', 'DigitalTrends', 'ProductHunt', 'HackerNews'];
  const contents = [
    'Just discovered @YourBrand - amazing product! The UX is incredibly intuitive 🚀',
    'Having some issues with @YourBrand customer support. Been waiting for 2 days now.',
    '@YourBrand announced their new feature today. Looks promising for enterprise users.',
    'Switched from competitor to @YourBrand last month. Best decision ever! #recommended',
    'The latest @YourBrand update broke my workflow. Anyone else experiencing this?',
    'Great webinar by @YourBrand team on social listening best practices 👏',
    '@YourBrand vs Competitor: A detailed comparison for 2024',
    'Love how @YourBrand handles real-time monitoring. Game changer for our marketing team.',
    'New case study: How we increased engagement 300% using @YourBrand',
    'Interesting pricing changes from @YourBrand - thoughts?'
  ];
  const locations = [
    { lat: 40.7128, lng: -74.006, city: 'New York', country: 'USA' },
    { lat: 51.5074, lng: -0.1278, city: 'London', country: 'UK' },
    { lat: 35.6762, lng: 139.6503, city: 'Tokyo', country: 'Japan' },
    { lat: 48.8566, lng: 2.3522, city: 'Paris', country: 'France' },
    { lat: -33.8688, lng: 151.2093, city: 'Sydney', country: 'Australia' },
    { lat: 52.52, lng: 13.405, city: 'Berlin', country: 'Germany' },
    { lat: 37.7749, lng: -122.4194, city: 'San Francisco', country: 'USA' },
    { lat: 55.7558, lng: 37.6173, city: 'Moscow', country: 'Russia' },
    { lat: 19.4326, lng: -99.1332, city: 'Mexico City', country: 'Mexico' },
    { lat: 1.3521, lng: 103.8198, city: 'Singapore', country: 'Singapore' },
    { lat: -23.5505, lng: -46.6333, city: 'São Paulo', country: 'Brazil' },
    { lat: 28.6139, lng: 77.209, city: 'New Delhi', country: 'India' },
    { lat: 31.2304, lng: 121.4737, city: 'Shanghai', country: 'China' },
    { lat: 41.9028, lng: 12.4964, city: 'Rome', country: 'Italy' },
    { lat: 59.3293, lng: 18.0686, city: 'Stockholm', country: 'Sweden' },
  ];

  return Array.from({ length: 50 }, (_, i) => ({
    id: `mention-${i}`,
    author: authors[Math.floor(Math.random() * authors.length)],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    content: contents[Math.floor(Math.random() * contents.length)],
    sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
    reach: Math.floor(Math.random() * 100000) + 1000,
    engagement: Math.floor(Math.random() * 5000) + 100,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    url: '#',
    location: Math.random() > 0.3 ? locations[Math.floor(Math.random() * locations.length)] : undefined,
  }));
};

const generateMockAlerts = (): Alert[] => [
  { id: '1', type: 'spike', message: 'Mention volume increased 250% in the last hour', timestamp: new Date(Date.now() - 1000 * 60 * 30), read: false },
  { id: '2', type: 'sentiment', message: 'Negative sentiment spike detected on Twitter', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), read: false },
  { id: '3', type: 'influencer', message: 'New mention from @TechCrunch (2.5M followers)', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), read: true },
  { id: '4', type: 'keyword', message: 'Trending keyword "product launch" detected', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), read: true },
];

export const useDashboardStore = create<DashboardState>((set) => ({
  mentions: generateMockMentions(),
  alerts: generateMockAlerts(),
  selectedPlatform: 'all',
  searchQuery: '',
  dateRange: { start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), end: new Date() },
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
  addMention: (mention) => set((state) => ({ mentions: [mention, ...state.mentions] })),
  markAlertRead: (id) => set((state) => ({
    alerts: state.alerts.map((a) => (a.id === id ? { ...a, read: true } : a)),
  })),
}));
