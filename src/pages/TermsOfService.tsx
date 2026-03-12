import { motion } from 'framer-motion';
import { FileText, Calendar, Mail, Shield, AlertTriangle, Scale, Globe, Users, CreditCard, Lock } from 'lucide-react';

export function TermsOfService() {
  const lastUpdated = 'March 1, 2026';

  const sections = [
    {
      id: 'acceptance',
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: `By accessing and using Social Guard ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service ("Terms") govern your access to and use of our website, products, and services. Please read these Terms carefully, and contact us if you have any questions.`
    },
    {
      id: 'description',
      icon: Globe,
      title: '2. Description of Service',
      content: `Social Guard provides social media monitoring, brand analysis, cyber security tools, and related services. Our platform includes:

• Real-time social media monitoring across multiple platforms
• Sentiment analysis and brand reputation tracking
• Keyword detection and alert systems
• Multi-browser profile management
• Digital fingerprint protection
• Report generation and analytics
• API access for enterprise integrations

We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.`
    },
    {
      id: 'accounts',
      icon: Users,
      title: '3. User Accounts',
      content: `To access certain features of the Service, you must register for an account. When you register:

• You must provide accurate and complete information
• You are responsible for maintaining the confidentiality of your account credentials
• You are responsible for all activities that occur under your account
• You must notify us immediately of any unauthorized use of your account
• You must be at least 18 years old or have parental consent

We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.`
    },
    {
      id: 'payment',
      icon: CreditCard,
      title: '4. Payment Terms',
      content: `Certain aspects of the Service require payment. By subscribing to a paid plan:

• You agree to pay all fees associated with your chosen plan
• Fees are billed in advance on a monthly or annual basis
• All fees are non-refundable except as required by law
• We may change our fees upon 30 days' notice
• Failure to pay may result in suspension of your account

Enterprise customers may have custom billing arrangements as specified in their service agreements.`
    },
    {
      id: 'acceptable-use',
      icon: Shield,
      title: '5. Acceptable Use Policy',
      content: `You agree not to use the Service to:

• Violate any applicable laws or regulations
• Infringe upon the rights of others, including intellectual property rights
• Transmit malware, viruses, or other harmful code
• Attempt to gain unauthorized access to other systems or networks
• Engage in harassment, abuse, or threats against others
• Scrape or collect data in violation of platform terms
• Use the Service for any illegal surveillance or stalking
• Resell or redistribute the Service without authorization
• Interfere with or disrupt the Service or servers

We reserve the right to investigate and take appropriate action against violations.`
    },
    {
      id: 'intellectual-property',
      icon: Lock,
      title: '6. Intellectual Property',
      content: `The Service and its original content, features, and functionality are owned by Social Guard and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

• You may not copy, modify, or distribute our content without permission
• You retain ownership of your data and content uploaded to the Service
• You grant us a license to use your content to provide the Service
• Our trademarks and trade dress may not be used without written consent

Any feedback or suggestions you provide may be used by us without obligation to you.`
    },
    {
      id: 'data-privacy',
      icon: Shield,
      title: '7. Data and Privacy',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.

By using the Service, you consent to:

• Collection and processing of data as described in our Privacy Policy
• Transfer of data to our servers and third-party service providers
• Use of cookies and similar tracking technologies
• Receiving communications from us regarding the Service

You may have additional rights under applicable data protection laws, including GDPR and CCPA.`
    },
    {
      id: 'disclaimer',
      icon: AlertTriangle,
      title: '8. Disclaimer of Warranties',
      content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:

• MERCHANTABILITY
• FITNESS FOR A PARTICULAR PURPOSE
• NON-INFRINGEMENT
• ACCURACY OF DATA

We do not warrant that the Service will be uninterrupted, secure, or error-free. You use the Service at your own risk.`
    },
    {
      id: 'limitation',
      icon: Scale,
      title: '9. Limitation of Liability',
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOCIAL GUARD SHALL NOT BE LIABLE FOR:

• Any indirect, incidental, special, consequential, or punitive damages
• Any loss of profits, data, or goodwill
• Any damages resulting from unauthorized access to your account
• Any damages exceeding the amount paid by you in the 12 months preceding the claim

Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above may not apply to you.`
    },
    {
      id: 'indemnification',
      icon: Shield,
      title: '10. Indemnification',
      content: `You agree to indemnify, defend, and hold harmless Social Guard and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or relating to:

• Your use of the Service
• Your violation of these Terms
• Your violation of any rights of another party
• Your content or data submitted to the Service`
    },
    {
      id: 'termination',
      icon: AlertTriangle,
      title: '11. Termination',
      content: `We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:

• Breach of these Terms
• Fraudulent or illegal activity
• Non-payment of fees
• Request by law enforcement
• Extended periods of inactivity

Upon termination, your right to use the Service will immediately cease. You may export your data before termination subject to our data retention policies.`
    },
    {
      id: 'changes',
      icon: FileText,
      title: '12. Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. We will provide notice of material changes by:

• Posting the updated Terms on our website
• Sending an email to registered users
• Displaying a notice in the Service

Your continued use of the Service after changes constitutes acceptance of the modified Terms. If you do not agree to the new terms, you must stop using the Service.`
    },
    {
      id: 'governing-law',
      icon: Scale,
      title: '13. Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

Any disputes arising from these Terms or the Service shall be resolved through:

1. Good faith negotiation
2. Binding arbitration administered by the American Arbitration Association
3. Courts located in Delaware as a last resort

You waive any right to a jury trial in any proceeding arising out of these Terms.`
    },
    {
      id: 'contact',
      icon: Mail,
      title: '14. Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us:

Social Guard, Inc.
123 Tech Boulevard, Suite 400
San Francisco, CA 94105
United States

Email: legal@socialguard.com
Phone: +1 (555) 123-4567

For support inquiries, please visit our Help Center or contact support@socialguard.com.`
    },
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
          <FileText className="w-8 h-8 text-accent" />
        </motion.div>
        <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
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

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <p className="text-muted-foreground leading-relaxed">
          Welcome to Social Guard. These Terms of Service ("Terms") govern your use of our platform and services. 
          By using Social Guard, you agree to these Terms. Please read them carefully before using our services.
          If you have any questions, please contact our legal team.
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
        className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center"
      >
        <p className="text-muted-foreground">
          By using Social Guard, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
          <span className="text-muted-foreground">•</span>
          <a href="/support" className="text-accent hover:underline">Contact Support</a>
        </div>
      </motion.div>
    </motion.div>
  );
}
