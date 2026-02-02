import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategorySection } from '@/components/CategorySection';
import { FoodCard } from '@/components/FoodCard';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { foodItems, categories } from '@/lib/data';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Truck, Clock, Shield } from 'lucide-react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (!activeCategory) return foodItems.slice(0, 8);
    return foodItems.filter((item) => item.category === activeCategory).slice(0, 8);
  }, [activeCategory]);

  const bestsellers = useMemo(() => {
    return foodItems.filter((item) => item.isBestseller).slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main>
        <Hero />

        <CategorySection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Featured Items */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-fredoka font-bold">
                  {activeCategory
                    ? `${categories.find((c) => c.id === activeCategory)?.name} Menu`
                    : 'Popular Right Now 🔥'}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {activeCategory
                    ? 'Browse our delicious selection'
                    : "Our customers' favorites"}
                </p>
              </div>
              <Link to="/menu">
                <Button variant="outline" className="rounded-full gap-2">
                  View All <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers Banner */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block text-4xl mb-3 animate-pulse-scale">⭐</span>
              <h2 className="text-2xl md:text-4xl font-fredoka font-bold mb-3">
                Customer Favorites
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These dishes have won the hearts (and stomachs) of thousands of food lovers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestsellers.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-fredoka font-bold mb-3">
                Why Choose Yummy? 🎉
              </h2>
              <p className="text-muted-foreground">
                We're not just about food, we're about the experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Truck,
                  title: 'Fast Delivery',
                  description: 'Hot food at your door in 30 minutes or less',
                  color: 'bg-primary/10 text-primary',
                },
                {
                  icon: Star,
                  title: 'Quality Food',
                  description: 'Fresh ingredients, made with love every day',
                  color: 'bg-secondary/30 text-secondary-foreground',
                },
                {
                  icon: Clock,
                  title: 'Easy Ordering',
                  description: 'Order in seconds, track in real-time',
                  color: 'bg-healthy/10 text-healthy',
                },
                {
                  icon: Shield,
                  title: 'Safe & Secure',
                  description: 'Contactless delivery and secure payments',
                  color: 'bg-hot/10 text-hot',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow duration-300 hover-bounce"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-fredoka text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-8 text-6xl">🍕</div>
                <div className="absolute bottom-4 right-8 text-6xl">🍔</div>
                <div className="absolute top-1/2 left-1/4 text-4xl">🍟</div>
                <div className="absolute bottom-1/3 right-1/4 text-5xl">🥤</div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-fredoka font-bold mb-4">
                  Hungry? Order Now! 🚀
                </h2>
                <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto mb-8">
                  Download our app and get 20% off your first order. Free delivery on orders over $25!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/menu">
                    <Button className="bg-card text-foreground hover:bg-card/90 rounded-full px-8 py-6 text-lg font-semibold">
                      Order Now
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-lg"
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
