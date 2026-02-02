import { Heart, Plus, Star, Flame, Leaf } from 'lucide-react';
import { FoodItem } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface FoodCardProps {
  item: FoodItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(item.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)}`,
      icon: '🛒',
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(item.id);
    toast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist', {
      icon: inWishlist ? '💔' : '❤️',
    });
  };

  return (
    <Link to={`/product/${item.id}`}>
      <article className="food-card group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {item.isBestseller && (
              <span className="badge-bestseller flex items-center gap-1 text-xs">
                <Star className="w-3 h-3" />
                Bestseller
              </span>
            )}
            {item.isHot && (
              <span className="badge-hot flex items-center gap-1 text-xs">
                <Flame className="w-3 h-3" />
                Hot
              </span>
            )}
            {item.isVeg && (
              <span className="badge-veg flex items-center gap-1 text-xs">
                <Leaf className="w-3 h-3" />
                Veg
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={cn(
              'absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
              inWishlist
                ? 'bg-hot text-hot-foreground'
                : 'bg-card/80 backdrop-blur-sm hover:bg-card text-foreground'
            )}
          >
            <Heart
              className={cn('w-5 h-5 transition-all', inWishlist && 'fill-current')}
            />
          </button>

          {/* Quick Add Button */}
          <Button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-fredoka font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {item.name}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-1">
            {item.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="price-tag">${item.price.toFixed(2)}</span>

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 star-filled fill-current" />
              <span className="font-medium">{item.rating}</span>
              <span className="text-muted-foreground text-sm">
                ({item.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
