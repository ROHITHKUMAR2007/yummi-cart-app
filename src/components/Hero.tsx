import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Truck, Star } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-primary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🍕</div>
        <div className="absolute top-40 right-20 text-6xl">🍔</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🍰</div>
        <div className="absolute bottom-40 right-1/3 text-5xl">🥗</div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 text-sm font-medium animate-slide-up">
              <span className="animate-pulse-scale">🔥</span>
              <span>Free delivery on orders over $25</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold leading-tight animate-slide-up">
              Delicious Food,{' '}
              <span className="text-primary">Delivered</span>{' '}
              <span className="inline-block animate-wiggle">Fast!</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up">
              From crispy pizzas to juicy burgers, fresh salads to sweet desserts — 
              order your favorites and we'll bring happiness to your door!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Link to="/menu">
                <Button className="btn-primary text-lg px-8 py-6 flex items-center gap-2 group w-full sm:w-auto">
                  Order Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button className="btn-outline text-lg px-8 py-6 w-full sm:w-auto">
                  View Menu
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 animate-slide-up">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold">30 min</div>
                  <div className="text-xs text-muted-foreground">Delivery</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-healthy/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-healthy" />
                </div>
                <div className="text-left">
                  <div className="font-bold">Free</div>
                  <div className="text-xs text-muted-foreground">Over $25</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Star className="w-5 h-5 text-star" />
                </div>
                <div className="text-left">
                  <div className="font-bold">4.9★</div>
                  <div className="text-xs text-muted-foreground">Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative z-10 animate-float">
              <img
                src={heroBanner}
                alt="Delicious food collage with pizza, burger, and fresh vegetables"
                className="w-full h-auto rounded-3xl shadow-elevated"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full opacity-60 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
