import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  HelpCircle,
  MessageSquare,
  Book,
  Mail,
  Phone,
  Clock,
  Search,
  ChevronRight,
  Send,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const supportCategories = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Browse our comprehensive guides and tutorials',
    link: '/documentation',
    color: 'blue',
  },
  {
    icon: MessageSquare,
    title: 'Community',
    description: 'Connect with other users and share knowledge',
    link: '#',
    color: 'purple',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Find answers to commonly asked questions',
    link: '#faq',
    color: 'green',
  },
];

const faqs = [
  {
    category: 'Account',
    questions: [
      {
        q: 'How do I reset my password?',
        a: 'You can reset your password by clicking "Forgot Password" on the login page. We\'ll send you an email with instructions.',
      },
      {
        q: 'How do I change my email address?',
        a: 'Go to Settings > Profile and update your email address. You\'ll need to verify the new email before the change takes effect.',
      },
      {
        q: 'How do I delete my account?',
        a: 'Contact our support team to request account deletion. We\'ll process your request within 48 hours.',
      },
    ],
  },
  {
    category: 'Billing',
    questions: [
      {
        q: 'How do I update my payment method?',
        a: 'Navigate to Settings > Billing and click "Update Payment Method" to add a new card or change your existing one.',
      },
      {
        q: 'Can I get a refund?',
        a: 'We offer a 30-day money-back guarantee. Contact support within 30 days of your purchase for a full refund.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'Go to Settings > Billing and click "Cancel Subscription". Your access will continue until the end of your billing period.',
      },
    ],
  },
  {
    category: 'Features',
    questions: [
      {
        q: 'How many brands can I monitor?',
        a: 'The number of brands depends on your plan: Starter (1), Pro (10), Enterprise (Unlimited).',
      },
      {
        q: 'What social platforms are supported?',
        a: 'We support Twitter/X, Facebook, Instagram, LinkedIn, Reddit, YouTube, TikTok, and many more.',
      },
      {
        q: 'How accurate is the sentiment analysis?',
        a: 'Our AI-powered sentiment analysis has an accuracy rate of over 90% and continuously improves with more data.',
      },
    ],
  },
];

export function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-foreground"
        >
          How can we help?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mt-2"
        >
          Search our knowledge base or get in touch with our support team
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto mt-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={category.link}
              className="block bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent">
                Learn more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        id="faq"
      >
        <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        
        {filteredFaqs.length > 0 ? (
          <div className="space-y-8">
            {filteredFaqs.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((faq, index) => {
                    const faqId = `${category.category}-${index}`;
                    return (
                      <div
                        key={index}
                        className="bg-card rounded-xl border border-border overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === faqId ? null : faqId)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.q}</span>
                          <ChevronRight
                            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                              expandedFaq === faqId ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: expandedFaq === faqId ? 'auto' : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-muted-foreground">{faq.a}</p>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-card rounded-xl border border-border">
            <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
            <p className="text-sm text-muted-foreground mt-2">Try a different search term or contact support</p>
          </div>
        )}
      </motion.div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">Contact Support</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:support@pulsewatch.io" className="text-foreground hover:text-accent">
                    support@pulsewatch.io
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1-555-123-4567" className="text-foreground hover:text-accent">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-foreground">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-accent/10 to-accent-secondary/10 rounded-xl border border-accent/20 p-6">
            <h3 className="font-bold text-foreground mb-2">Enterprise Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Need dedicated support? Upgrade to Enterprise for 24/7 priority support and a dedicated account manager.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              View Enterprise plans
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
