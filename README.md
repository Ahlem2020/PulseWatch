# PulseWatch - Brand Monitoring Dashboard

A modern, feature-rich brand monitoring dashboard built with React, TypeScript, and Tailwind CSS. This template includes everything you need to build a professional SaaS application.

![PulseWatch Dashboard](https://via.placeholder.com/1200x600?text=PulseWatch+Dashboard)

## Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Real-time Dashboard**: Monitor brand mentions, sentiment, and engagement
- **Authentication System**: Complete auth flow (login, register, forgot password, email verification)
- **Error Pages**: Professional 404 and 500 error pages
- **Documentation**: Built-in documentation system
- **Profile Management**: User profile with edit capabilities
- **Pricing Page**: Feature comparison and FAQ section
- **Support Center**: FAQ, contact form, and help resources
- **Changelog**: Track product updates and releases

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Router 7** - Routing
- **Zustand** - State management
- **Recharts** - Charts and visualizations
- **Lucide React** - Icons
- **date-fns** - Date formatting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd design

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable components
│   ├── Dashboard/       # Dashboard widgets
│   │   ├── AlertsPanel.tsx
│   │   ├── InfluencerCard.tsx
│   │   ├── KPICard.tsx
│   │   ├── MentionsFeed.tsx
│   │   ├── PlatformBreakdown.tsx
│   │   ├── SentimentGauge.tsx
│   │   ├── TrendChart.tsx
│   │   ├── TrendingKeywords.tsx
│   │   └── WorldMap.tsx
│   └── Layout/          # Layout components
│       ├── Layout.tsx
│       ├── Sidebar.tsx
│       └── TopBar.tsx
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   │   ├── ForgotPassword.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── ResetPassword.tsx
│   │   ├── VerifyEmail.tsx
│   │   └── index.ts
│   ├── Alerts.tsx
│   ├── Analytics.tsx
│   ├── Changelog.tsx
│   ├── Dashboard.tsx
│   ├── Documentation.tsx
│   ├── Influencers.tsx
│   ├── Mentions.tsx
│   ├── NotFound.tsx
│   ├── Pricing.tsx
│   ├── Profile.tsx
│   ├── ServerError.tsx
│   ├── Settings.tsx
│   └── Support.tsx
├── store/               # State management
│   ├── dashboardStore.ts
│   └── themeStore.ts
├── types/               # TypeScript types
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Available Pages

### Main Application
| Route | Description |
|-------|-------------|
| `/` | Dashboard - Main overview |
| `/mentions` | Mentions feed and management |
| `/analytics` | Analytics and reporting |
| `/alerts` | Alert configuration |
| `/influencers` | Influencer tracking |
| `/settings` | Account settings |
| `/documentation` | Product documentation |
| `/profile` | User profile |
| `/pricing` | Pricing plans |
| `/support` | Help center |
| `/changelog` | Product updates |

### Authentication
| Route | Description |
|-------|-------------|
| `/login` | Sign in page |
| `/register` | Create account |
| `/forgot-password` | Password recovery |
| `/reset-password` | Reset password |
| `/verify-email` | Email verification |

### Error Pages
| Route | Description |
|-------|-------------|
| `/500` | Server error page |
| `/*` | 404 Not found (catch-all) |

## Customization

### Theme Colors

Edit `src/index.css` to customize the color scheme:

```css
@theme {
  --color-background: #0a0a0f;
  --color-foreground: #f9fafb;
  --color-card: #111118;
  --color-sidebar: #0d0d12;
  --color-muted: #1f1f28;
  --color-muted-foreground: #9ca3af;
  --color-border: #2a2a35;
  --color-accent: #6366f1;
  --color-accent-secondary: #8b5cf6;
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. (Optional) Add navigation link in `src/components/Layout/Sidebar.tsx`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Best Practices

- **Components**: Keep components small and focused
- **State**: Use Zustand for global state, React state for local
- **Styling**: Use Tailwind utility classes
- **Animations**: Use Framer Motion for complex animations
- **Types**: Define TypeScript interfaces for all data structures

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Built with ❤️ using React + TypeScript + Vite
