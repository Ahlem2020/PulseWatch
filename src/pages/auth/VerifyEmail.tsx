import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Radar, Mail, CheckCircle, RefreshCw } from 'lucide-react';

export function VerifyEmail() {
  const [isResending, setIsResending] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedCode = value.slice(0, 6).split('');
      const newCode = [...code];
      pastedCode.forEach((char, i) => {
        if (index + i < 6) {
          newCode[index + i] = char;
        }
      });
      setCode(newCode);
      
      // Focus last input or the one after paste
      const nextIndex = Math.min(index + pastedCode.length, 5);
      document.getElementById(`code-${nextIndex}`)?.focus();
    } else {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsResending(false);
    setResendCount(resendCount + 1);
  };

  const handleVerify = async () => {
    if (code.join('').length !== 6) return;
    
    setIsVerifying(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsVerifying(false);
    setIsVerified(true);
  };

  const email = 'john.doe@example.com'; // This would come from props/context

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
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center">
            <Radar className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">PulseWatch</span>
        </div>

        {!isVerified ? (
          <>
            {/* Email Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center"
            >
              <Mail className="w-10 h-10 text-accent" />
            </motion.div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground">Check your email</h1>
              <p className="text-muted-foreground mt-2">
                We sent a verification code to
                <br />
                <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>

            {/* Code Input */}
            <div className="flex justify-center gap-3 mb-6">
              {code.map((digit, index) => (
                <motion.input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value.replace(/[^0-9]/g, ''))}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="w-12 h-14 text-center text-xl font-bold bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              ))}
            </div>

            {/* Verify Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleVerify}
              disabled={isVerifying || code.join('').length !== 6}
              className="w-full py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </motion.button>

            {/* Resend */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?{' '}
                <button
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-accent hover:underline disabled:opacity-50 inline-flex items-center gap-1"
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Click to resend'
                  )}
                </button>
              </p>
              {resendCount > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-green-500 mt-2"
                >
                  Verification code sent! ({resendCount})
                </motion.p>
              )}
            </div>

            {/* Tips */}
            <div className="mt-8 p-4 bg-card rounded-xl border border-border">
              <h3 className="font-medium text-foreground mb-2">Can't find the email?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Check your spam or junk folder</li>
                <li>• Make sure you entered the correct email</li>
                <li>• Wait a few minutes and try again</li>
              </ul>
            </div>
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Email verified!</h2>
            <p className="text-muted-foreground mb-6">
              Your email has been successfully verified.
              <br />
              You can now access all features.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Go to Dashboard
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Back to Login */}
        {!isVerified && (
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to login
          </Link>
        )}
      </motion.div>
    </div>
  );
}
