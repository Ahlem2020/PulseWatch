import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Radar, CheckCircle } from 'lucide-react';

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
            <Radar className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">PulseWatch</span>
        </div>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Forgot password?</h1>
              <p className="text-muted-foreground mt-2">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Reset Password'
                )}
              </motion.button>
            </form>
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Check your email</h2>
            <p className="text-muted-foreground mb-6">
              We sent a password reset link to
              <br />
              <span className="font-medium text-foreground">{email}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Didn't receive the email?{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent hover:underline"
              >
                Click to resend
              </button>
            </p>
          </motion.div>
        )}

        {/* Back to Login */}
        <Link
          to="/login"
          className="flex items-center justify-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>
      </motion.div>
    </div>
  );
}
