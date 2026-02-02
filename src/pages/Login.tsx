import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type AuthMode = 'login' | 'signup';

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(mode === 'login' ? 'Welcome back! 👋' : 'Account created successfully! 🎉');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">🍔</span>
              <h1 className="font-fredoka text-3xl font-bold mb-2">
                {mode === 'login' ? 'Welcome Back!' : 'Join Yummy'}
              </h1>
              <p className="text-muted-foreground">
                {mode === 'login'
                  ? 'Sign in to continue ordering delicious food'
                  : 'Create an account to start your food journey'}
              </p>
            </div>

            {/* Auth Card */}
            <div className="bg-card rounded-3xl p-8 shadow-elevated">
              {/* Mode Toggle */}
              <div className="flex bg-cream rounded-full p-1 mb-8">
                <button
                  onClick={() => setMode('login')}
                  className={cn(
                    'flex-1 py-3 rounded-full font-medium transition-all',
                    mode === 'login'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  Login
                </button>
                <button
                  onClick={() => setMode('signup')}
                  className={cn(
                    'flex-1 py-3 rounded-full font-medium transition-all',
                    mode === 'signup'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {mode === 'signup' && (
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="rounded-xl py-6"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="rounded-xl py-6"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="flex items-center gap-2 mb-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      required
                      className="rounded-xl py-6 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {mode === 'login' && (
                  <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                <Button
                  type="submit"
                  className="btn-primary w-full py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="animate-spin">⏳</span>
                  ) : mode === 'login' ? (
                    <>
                      Sign In <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Create Account <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-card px-4 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Button variant="outline" className="py-6 rounded-xl gap-2">
                    <span className="text-xl">🔵</span>
                    Google
                  </Button>
                  <Button variant="outline" className="py-6 rounded-xl gap-2">
                    <span className="text-xl">🍎</span>
                    Apple
                  </Button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
