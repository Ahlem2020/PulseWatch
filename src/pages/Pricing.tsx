import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Zap, Building, Crown, HelpCircle } from 'lucide-react';

interface PlanFeature {
  name: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

const features: PlanFeature[] = [
  { name: 'Brand monitoring', starter: '1 brand', pro: '10 brands', enterprise: 'Unlimited' },
  { name: 'Social platforms', starter: '3 platforms', pro: 'All platforms', enterprise: 'All platforms' },
  { name: 'Mention history', starter: '30 days', pro: '1 year', enterprise: 'Unlimited' },
  { name: 'Real-time alerts', starter: '10/month', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Sentiment analysis', starter: true, pro: true, enterprise: true },
  { name: 'Competitor tracking', starter: false, pro: '3 competitors', enterprise: 'Unlimited' },
  { name: 'Custom reports', starter: false, pro: true, enterprise: true },
  { name: 'API access', starter: false, pro: '1,000 req/hr', enterprise: '10,000 req/hr' },
  { name: 'Team members', starter: '1 user', pro: '5 users', enterprise: 'Unlimited' },
  { name: 'Slack integration', starter: false, pro: true, enterprise: true },
  { name: 'Custom integrations', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated support', starter: false, pro: false, enterprise: true },
  { name: 'SLA guarantee', starter: false, pro: '99.9%', enterprise: '99.99%' },
  { name: 'White-label reports', starter: false, pro: false, enterprise: true },
];

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: { monthly: 29, yearly: 24 },
    description: 'Perfect for individuals and small projects',
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    icon: Crown,
    price: { monthly: 99, yearly: 79 },
    description: 'Best for growing teams and businesses',
    highlighted: true,
    cta: 'Start Free Trial',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: { monthly: null, yearly: null },
    description: 'For large organizations with custom needs',
    highlighted: false,
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial. No credit card required.',
  },
  {
    question: 'What happens when I exceed my limits?',
    answer: "You'll receive a notification and can either upgrade your plan or wait for the next billing cycle.",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
          Simple, transparent pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mt-2"
        >
          Choose the perfect plan for your brand monitoring needs
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-accent' : 'bg-muted'
            }`}
          >
            <motion.div
              animate={{ x: isYearly ? 28 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
            Yearly
            <span className="ml-2 text-xs text-green-500 font-medium">Save 20%</span>
          </span>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`relative bg-card rounded-2xl border p-6 ${
              plan.highlighted ? 'border-accent shadow-lg shadow-accent/20' : 'border-border'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                plan.highlighted ? 'bg-accent/10' : 'bg-muted'
              }`}>
                <plan.icon className={`w-5 h-5 ${plan.highlighted ? 'text-accent' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{plan.name}</h3>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              {plan.price.monthly ? (
                <>
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.price.yearly! * 12}/year)
                    </p>
                  )}
                </>
              ) : (
                <span className="text-2xl font-bold text-foreground">Custom</span>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {plan.cta}
            </motion.button>

            {/* Features Preview */}
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              {features.slice(0, 5).map((feature) => {
                const value = feature[plan.name.toLowerCase() as keyof PlanFeature];
                return (
                  <div key={feature.name} className="flex items-center gap-2 text-sm">
                    {value ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-border" />
                    )}
                    <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
                      {typeof value === 'string' ? value : feature.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-2xl border border-border overflow-hidden"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Feature Comparison</h2>
          <p className="text-muted-foreground mt-1">Compare all features across plans</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Feature</th>
                <th className="text-center px-6 py-4 text-sm font-medium text-foreground">Starter</th>
                <th className="text-center px-6 py-4 text-sm font-medium text-accent">Pro</th>
                <th className="text-center px-6 py-4 text-sm font-medium text-foreground">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {features.map((feature) => (
                <tr key={feature.name} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground">{feature.name}</td>
                  {['starter', 'pro', 'enterprise'].map((plan) => {
                    const value = feature[plan as keyof PlanFeature];
                    return (
                      <td key={plan} className="text-center px-6 py-4">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-border mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-foreground">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">Everything you need to know about our pricing</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <HelpCircle className={`w-5 h-5 text-muted-foreground transition-transform ${
                  expandedFaq === index ? 'rotate-180' : ''
                }`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: expandedFaq === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center bg-linear-to-r from-accent/10 to-accent-secondary/10 rounded-2xl p-8 border border-accent/20"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Start your 14-day free trial today. No credit card required.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
