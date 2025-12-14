import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Loader2, KeyRound, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const resetSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(72, { message: 'Password must be less than 72 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type ResetFormData = z.infer<typeof resetSchema>;

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidSession, setIsValidSession] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
  });

  useEffect(() => {
    // Check if there's a valid recovery session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Check URL for recovery token
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const type = hashParams.get('type');
      
      if (type === 'recovery' && accessToken) {
        // Set the session from the recovery token
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: hashParams.get('refresh_token') || '',
        });
        
        if (!error) {
          setIsValidSession(true);
        }
      } else if (session) {
        setIsValidSession(true);
      }
      
      setIsChecking(false);
    };

    checkSession();
  }, []);

  const onSubmit = async (data: ResetFormData) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        setIsSuccess(true);
        toast.success('Password updated successfully!');
        
        // Sign out and redirect to login after 2 seconds
        setTimeout(async () => {
          await supabase.auth.signOut();
          navigate('/auth');
        }, 2000);
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isValidSession && !isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl shadow-medium p-8 max-w-md w-full text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mb-4">
            <KeyRound className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-serif text-foreground mb-2">Invalid or Expired Link</h1>
          <p className="text-muted-foreground mb-6">
            This password reset link is invalid or has expired. Please request a new one.
          </p>
          <Button onClick={() => navigate('/auth')} className="w-full">
            Back to Login
          </Button>
        </motion.div>
      </div>
    );
  }

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
        <div className="bg-card border border-border rounded-2xl shadow-medium p-8">
          {isSuccess ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-success/10 mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h1 className="text-2xl font-serif text-foreground mb-2">Password Updated!</h1>
              <p className="text-muted-foreground">
                Your password has been successfully updated. Redirecting to login...
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <KeyRound className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-serif text-foreground mb-2">Reset Password</h1>
                <p className="text-muted-foreground">
                  Enter your new password below
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="New password"
                      className="pl-12 h-12"
                      {...register('password')}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Confirm new password"
                      className="pl-12 h-12"
                      {...register('confirmPassword')}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
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
                    'Update Password'
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
