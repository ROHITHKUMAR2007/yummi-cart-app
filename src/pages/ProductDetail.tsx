import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { FoodCard } from '@/components/FoodCard';
import { foodItems, reviews } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  Star,
  Clock,
  Flame,
  Leaf,
  ShoppingCart,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const product = foodItems.find((item) => item.id === id);
  const inWishlist = product ? isInWishlist(product.id) : false;

  const relatedProducts = foodItems
    .filter((item) => item.category === product?.category && item.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16 text-center">
          <span className="text-6xl mb-4 block">🍽️</span>
          <h1 className="font-fredoka text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/menu">
            <Button className="btn-primary">Back to Menu</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity}x ${product.name} to cart!`, {
      icon: '🛒',
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
    toast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist', {
      icon: inWishlist ? '💔' : '❤️',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-3xl shadow-elevated"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestseller && (
                  <span className="badge-bestseller flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Bestseller
                  </span>
                )}
                {product.isHot && (
                  <span className="badge-hot flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    Hot & Spicy
                  </span>
                )}
                {product.isVeg && (
                  <span className="badge-veg flex items-center gap-1">
                    <Leaf className="w-4 h-4" />
                    Vegetarian
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-fredoka text-3xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              {/* Rating & Time */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 star-filled fill-current" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                {product.prepTime && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>{product.prepTime}</span>
                  </div>
                )}
                {product.calories && (
                  <div className="text-muted-foreground">
                    🔥 {product.calories} cal
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="text-4xl font-fredoka font-bold text-primary">
                ${product.price.toFixed(2)}
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div>
                  <h3 className="font-semibold mb-3">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="bg-cream px-4 py-2 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-cream rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 py-6 text-lg gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleToggleWishlist}
                  className={cn(
                    'rounded-full w-14 h-14 p-0',
                    inWishlist && 'bg-hot text-hot-foreground border-hot hover:bg-hot/90'
                  )}
                >
                  <Heart className={cn('w-6 h-6', inWishlist && 'fill-current')} />
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <section className="mt-16">
            <h2 className="font-fredoka text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{review.user}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-4 h-4',
                          i < review.rating
                            ? 'star-filled fill-current'
                            : 'star-empty'
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-fredoka text-2xl font-bold mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((item) => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
