import { motion } from 'framer-motion';
import { Shield, Calendar, Mail, Eye, Database, Globe, Users, Lock, Bell, Trash2, FileText, Server, Cookie, Settings } from 'lucide-react';

export function PrivacyPolicy() {
  const lastUpdated = 'March 1, 2026';

  const sections = [
    {
      id: 'introduction',
      icon: Shield,
      title: '1. Introduction',
      content: `Social Guard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our social media monitoring and analytics platform.

This policy applies to all users of Social Guard, including website visitors, registered users, and enterprise customers. By using our services, you consent to the data practices described in this policy.

We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy regulations.`
    },
    {
      id: 'collection',
      icon: Database,
      title: '2. Information We Collect',
      content: `We collect several types of information:

Account Information:
• Name, email address, and password
• Company name and job title
• Billing information and payment details
• Profile picture and preferences

Usage Data:
• Actions taken within the platform
• Features accessed and time spent
• Search queries and filters applied
• Reports generated and exports made

Device & Technical Data:
• IP address and browser type
• Device identifiers and operating system
• Cookies and tracking technologies
• Log files and analytics data

Social Media Data:
• Public posts and mentions monitored
• Sentiment and engagement metrics
• Influencer profiles and statistics
• Keyword and hashtag data

Third-Party Data:
• Information from connected accounts
• Data from integrated services
• Publicly available information`
    },
    {
      id: 'use',
      icon: Eye,
      title: '3. How We Use Your Information',
      content: `We use collected information to:

Provide Services:
• Deliver social media monitoring and analytics
• Generate reports and insights
• Send alerts and notifications
• Process transactions and billing

Improve Our Platform:
• Analyze usage patterns and trends
• Develop new features and services
• Fix bugs and improve performance
• Conduct research and analytics

Communicate With You:
• Send service updates and announcements
• Respond to support requests
• Deliver marketing communications (with consent)
• Provide personalized recommendations

Legal & Security:
• Comply with legal obligations
• Enforce our terms of service
• Detect and prevent fraud
• Protect user safety and security`
    },
    {
      id: 'sharing',
      icon: Users,
      title: '4. Information Sharing',
      content: `We may share your information with:

Service Providers:
• Cloud hosting and infrastructure providers
• Payment processors and billing services
• Analytics and monitoring tools
• Customer support platforms

Business Partners:
• Integration partners (with your consent)
• Resellers and referral partners
• Co-marketing partners

Legal Requirements:
• Law enforcement when required by law
• Regulatory authorities
• Courts and legal proceedings
• Protect our legal rights

Business Transfers:
• Mergers and acquisitions
• Asset sales
• Bankruptcy proceedings

We DO NOT sell your personal information to third parties for advertising purposes.`
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: '5. Cookies & Tracking',
      content: `We use cookies and similar technologies:

Essential Cookies:
• Authentication and security
• Session management
• Load balancing

Functional Cookies:
• Language and preferences
• Feature settings
• User customizations

Analytics Cookies:
• Usage statistics
• Performance monitoring
• Error tracking

Marketing Cookies (with consent):
• Advertising effectiveness
• Remarketing campaigns
• Social media features

You can manage cookie preferences through:
• Your browser settings
• Our cookie consent banner
• Account privacy settings

Note: Disabling certain cookies may limit functionality.`
    },
    {
      id: 'security',
      icon: Lock,
      title: '6. Data Security',
      content: `We implement robust security measures:

Technical Safeguards:
• AES-256 encryption at rest
• TLS 1.3 encryption in transit
• Multi-factor authentication
• Regular security audits

Infrastructure Security:
• SOC 2 Type II certified data centers
• Automated backups and disaster recovery
• Network segmentation and firewalls
• Intrusion detection and prevention

Organizational Measures:
• Employee security training
• Background checks for staff
• Access controls and least privilege
• Incident response procedures

While we strive to protect your data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`
    },
    {
      id: 'retention',
      icon: Server,
      title: '7. Data Retention',
      content: `We retain your information based on:

Account Data:
• Retained while your account is active
• Deleted within 30 days of account closure
• Some data retained for legal compliance

Usage Data:
• Aggregated analytics retained indefinitely
• Personal usage logs deleted after 2 years
• Session data deleted after 90 days

Social Media Data:
• Monitoring data retained per your plan settings
• Default retention is 90 days
• Enterprise plans may have custom retention

Billing Records:
• Financial records retained for 7 years
• Required for tax and audit purposes

You can request data deletion (see Your Rights section).`
    },
    {
      id: 'rights',
      icon: FileText,
      title: '8. Your Rights',
      content: `Depending on your location, you may have the following rights:

Access & Portability:
• Request a copy of your personal data
• Receive data in a portable format
• Know what information we hold about you

Correction & Deletion:
• Update inaccurate information
• Request deletion of your data
• Erase data under certain circumstances

Restriction & Objection:
• Restrict processing of your data
• Object to certain uses of your data
• Opt-out of marketing communications

Consent Withdrawal:
• Withdraw consent at any time
• Without affecting prior lawful processing

To exercise these rights:
• Use the settings in your account
• Contact us at privacy@socialguard.com
• Submit a request through our Privacy Portal

We will respond to requests within 30 days.`
    },
    {
      id: 'gdpr',
      icon: Globe,
      title: '9. GDPR Compliance',
      content: `For users in the European Economic Area (EEA):

Legal Basis for Processing:
• Contractual necessity - to provide our services
• Legitimate interests - for security and improvement
• Consent - for marketing and optional features
• Legal obligation - to comply with laws

Data Controller:
Social Guard, Inc. acts as the data controller for personal data collected through our platform.

Data Transfers:
• We may transfer data outside the EEA
• We use Standard Contractual Clauses
• Adequate safeguards are in place

Data Protection Officer:
• Contact: dpo@socialguard.com
• You may also contact your local supervisory authority`
    },
    {
      id: 'ccpa',
      icon: Shield,
      title: '10. California Privacy Rights',
      content: `California residents have additional rights under CCPA:

Right to Know:
• Categories of personal information collected
• Sources of personal information
• Business purposes for collection
• Categories of third parties we share with

Right to Delete:
• Request deletion of personal information
• Subject to certain exceptions

Right to Opt-Out:
• We do not sell personal information
• Opt-out of sharing for advertising

Right to Non-Discrimination:
• Equal service and pricing
• No retaliation for exercising rights

Shine the Light:
• Request information about third-party marketing

To exercise California rights:
• Call: 1-800-PRIVACY
• Email: privacy@socialguard.com
• Online: Privacy Portal`
    },
    {
      id: 'children',
      icon: Users,
      title: '11. Children\'s Privacy',
      content: `Our services are not intended for children:

• We do not knowingly collect data from children under 16
• If we discover such data, we will delete it promptly
• Parents may contact us about children's data
• We comply with COPPA and similar laws

If you believe we have collected data from a child, please contact us immediately at privacy@socialguard.com.`
    },
    {
      id: 'updates',
      icon: Bell,
      title: '12. Policy Updates',
      content: `We may update this Privacy Policy periodically:

Notification of Changes:
• Material changes will be notified via email
• Updates posted on our website
• Notice displayed in the platform

Effective Date:
• Changes effective upon posting
• Continued use constitutes acceptance
• Previous versions available upon request

Review Regularly:
• We encourage regular review of this policy
• Check the "Last Updated" date at the top`
    },
    {
      id: 'contact',
      icon: Mail,
      title: '13. Contact Us',
      content: `For privacy-related inquiries:

Privacy Team:
Email: privacy@socialguard.com
Phone: +1 (555) 123-4567

Data Protection Officer:
Email: dpo@socialguard.com

Mailing Address:
Social Guard, Inc.
Attn: Privacy Team
123 Tech Boulevard, Suite 400
San Francisco, CA 94105
United States

EU Representative:
Social Guard EU Ltd.
123 Tech Street
Dublin, Ireland

Response Time:
• We respond to all inquiries within 30 days
• Complex requests may take longer`
    },
  ];

  const keyPoints = [
    { icon: Database, title: 'Data Collection', desc: 'We collect only necessary data' },
    { icon: Lock, title: 'Encryption', desc: 'All data encrypted in transit & at rest' },
    { icon: Trash2, title: 'Data Deletion', desc: 'Request deletion anytime' },
    { icon: Settings, title: 'Your Control', desc: 'Manage your privacy settings' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4"
        >
          <Shield className="w-8 h-8 text-accent" />
        </motion.div>
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Key Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {keyPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-2">
              <point.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">{point.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{point.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-muted-foreground hover:text-accent transition-colors truncate"
            >
              {section.title}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Introduction Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-accent/5 border border-accent/20 rounded-xl p-6"
      >
        <p className="text-muted-foreground leading-relaxed">
          Your privacy matters to us. This Privacy Policy describes how Social Guard collects, uses, and protects your personal information. 
          We are committed to transparency and giving you control over your data. Please take a moment to read this policy carefully.
        </p>
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.03 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-border flex items-center gap-3 bg-muted/30">
            <section.icon className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground">Have Questions?</h3>
            <p className="text-sm text-muted-foreground">Our privacy team is here to help</p>
          </div>
          <div className="flex gap-3">
            <motion.a
              href="mailto:privacy@socialguard.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Contact Privacy Team
            </motion.a>
            <motion.a
              href="/terms"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
