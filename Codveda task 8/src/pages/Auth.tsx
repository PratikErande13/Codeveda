import { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, Loader2, UserPlus, LogIn, ArrowLeft, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const authSchema = z.object({
  email: z.string().trim().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(72, { message: 'Password must be less than 72 characters' }),
});

const forgotPasswordSchema = z.object({
  email: z.string().trim().email({ message: 'Please enter a valid email address' }),
});

type AuthFormData = z.infer<typeof authSchema>;
type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  const {
    register: registerAuth,
    handleSubmit: handleSubmitAuth,
    formState: { errors: authErrors },
    reset: resetAuth,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const {
    register: registerForgot,
    handleSubmit: handleSubmitForgot,
    formState: { errors: forgotErrors },
    reset: resetForgot,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      toast.error('Failed to sign in with Google');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const onForgotPasswordSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setResetEmailSent(true);
        toast.success('Password reset email sent!');
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(data.email, data.password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Invalid email or password');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Welcome back!');
          navigate('/');
        }
      } else {
        const { error } = await signUp(data.email, data.password);
        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('An account with this email already exists');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Account created successfully!');
          navigate('/');
        }
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    resetAuth();
    setShowForgotPassword(false);
    setResetEmailSent(false);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setResetEmailSent(false);
    resetForgot();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Back to home */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="absolute -top-12 left-0 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tasks
        </Button>

        <div className="bg-card border border-border rounded-2xl shadow-medium p-8">
          <AnimatePresence mode="wait">
            {showForgotPassword ? (
              <motion.div
                key="forgot-password"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Back button */}
                <button
                  onClick={handleBackToLogin}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl font-serif text-foreground mb-2">
                    {resetEmailSent ? 'Check Your Email' : 'Forgot Password?'}
                  </h1>
                  <p className="text-muted-foreground">
                    {resetEmailSent
                      ? "We've sent you a password reset link. Check your inbox."
                      : "Enter your email and we'll send you a reset link"}
                  </p>
                </div>

                {!resetEmailSent && (
                  <form onSubmit={handleSubmitForgot(onForgotPasswordSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="pl-12 h-12"
                          {...registerForgot('email')}
                          disabled={isLoading}
                        />
                      </div>
                      {forgotErrors.email && (
                        <p className="text-sm text-destructive">{forgotErrors.email.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-medium"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Send Reset Link
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {resetEmailSent && (
                  <Button
                    onClick={handleBackToLogin}
                    className="w-full h-12 text-base font-medium"
                  >
                    Back to Login
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="auth-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="text-3xl font-serif text-foreground mb-2">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h1>
                  <p className="text-muted-foreground">
                    {isLogin
                      ? 'Sign in to access your tasks'
                      : 'Join us and start organizing your tasks'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmitAuth(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="pl-12 h-12"
                        {...registerAuth('email')}
                        disabled={isLoading}
                      />
                    </div>
                    {authErrors.email && (
                      <p className="text-sm text-destructive">{authErrors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-12 h-12"
                        {...registerAuth('password')}
                        disabled={isLoading}
                      />
                    </div>
                    {authErrors.password && (
                      <p className="text-sm text-destructive">{authErrors.password.message}</p>
                    )}
                  </div>

                  {isLogin && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium"
                    disabled={isLoading || isGoogleLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isLogin ? (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign In
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5 mr-2" />
                        Create Account
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-card text-muted-foreground">or continue with</span>
                  </div>
                </div>

                {/* Google Sign In */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 text-base font-medium gap-3"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading || isGoogleLoading}
                >
                  {isGoogleLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <GoogleIcon />
                      Continue with Google
                    </>
                  )}
                </Button>

                {/* Toggle */}
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="ml-2 text-primary font-medium hover:underline"
                      disabled={isLoading || isGoogleLoading}
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Security note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Your data is securely stored and protected
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
