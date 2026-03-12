import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Mentions } from './pages/Mentions';
import { Analytics } from './pages/Analytics';
import { Alerts } from './pages/Alerts';
import { Influencers } from './pages/Influencers';
import { Settings } from './pages/Settings';
import { Documentation } from './pages/Documentation';
import { Profile } from './pages/Profile';
import { Pricing } from './pages/Pricing';
import { Support } from './pages/Support';
import { Changelog } from './pages/Changelog';
import { NotFound } from './pages/NotFound';
import { ServerError } from './pages/ServerError';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { VerifyEmail } from './pages/auth/VerifyEmail';

// UI Elements
import { Buttons, Cards, Forms, UIAlerts, Modals, Badges, Progress, Tabs } from './pages/ui';

// Components
import { Charts } from './pages/charts';
import { Tables } from './pages/Tables';
import { Icons } from './pages/Icons';
import { Maps } from './pages/Maps';

// Dashboard Variants
import { EcommerceDashboard, FinanceDashboard, FitnessDashboard } from './pages/dashboards';

// Apps
import { Calendar, Chat, Kanban } from './pages/apps';
import { BrowserProfiles, CyberAnalysis, Feeds, Keywords, Reports, SocialAnalysis } from './pages/dashboards/social';

// Social Analysis
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        {/* Error Pages */}
        <Route path="/500" element={<ServerError />} />
        
        {/* Main App Routes - With Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="mentions" element={<Mentions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="influencers" element={<Influencers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="support" element={<Support />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          
          {/* Dashboard Variants */}
          <Route path="dashboards/ecommerce" element={<EcommerceDashboard />} />
          <Route path="dashboards/finance" element={<FinanceDashboard />} />
          <Route path="dashboards/fitness" element={<FitnessDashboard />} />
          
          {/* UI Elements */}
          <Route path="ui/buttons" element={<Buttons />} />
          <Route path="ui/cards" element={<Cards />} />
          <Route path="ui/forms" element={<Forms />} />
          <Route path="ui/alerts" element={<UIAlerts />} />
          <Route path="ui/modals" element={<Modals />} />
          <Route path="ui/badges" element={<Badges />} />
          <Route path="ui/progress" element={<Progress />} />
          <Route path="ui/tabs" element={<Tabs />} />
          
          {/* Components */}
          <Route path="charts" element={<Charts />} />
          <Route path="tables" element={<Tables />} />
          <Route path="icons" element={<Icons />} />
          <Route path="maps" element={<Maps />} />
          
          {/* Apps */}
          <Route path="apps/calendar" element={<Calendar />} />
          <Route path="apps/chat" element={<Chat />} />
          <Route path="apps/tasks" element={<Kanban />} />
          
          {/* Social Analysis */}
          <Route path="social/analysis" element={<SocialAnalysis />} />
          <Route path="social/feeds" element={<Feeds />} />
          <Route path="social/keywords" element={<Keywords />} />
          <Route path="social/reports" element={<Reports />} />
          
          {/* Cyber & Security */}
          <Route path="cyber/analysis" element={<CyberAnalysis />} />
          <Route path="cyber/browsers" element={<BrowserProfiles />} />
          <Route path="cyber/fingerprint" element={<CyberAnalysis />} />
        </Route>
        
        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
