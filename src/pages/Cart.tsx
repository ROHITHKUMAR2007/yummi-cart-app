import { Navbar } from '@/components/Navbar';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, CreditCard, Truck } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const deliveryFee = totalPrice >= 25 ? 0 : 4.99;
  const total = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16 text-center">
          <span className="text-8xl mb-6 block">🛒</span>
          <h1 className="font-fredoka text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Let's fix that!
          </p>
          <Link to="/menu">
            <Button className="btn-primary text-lg px-8 py-6">
              Browse Menu
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-fredoka text-3xl md:text-4xl font-bold mb-8">
            Your Cart 🛒
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 md:p-6 shadow-soft flex gap-4 md:gap-6 animate-slide-up"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-fredoka text-lg md:text-xl font-bold hover:text-primary transition-colors truncate">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-cream rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-fredoka text-xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-hot hover:text-hot/80 transition-colors p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={clearCart}
                className="text-hot border-hot hover:bg-hot hover:text-hot-foreground"
              >
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="font-fredoka text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      Delivery
                    </span>
                    <span className={deliveryFee === 0 ? 'text-healthy font-semibold' : ''}>
                      {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  {totalPrice < 25 && (
                    <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">
                      💡 Add ${(25 - totalPrice).toFixed(2)} more for free delivery!
                    </p>
                  )}
                  <div className="border-t border-border pt-4 flex justify-between">
                    <span className="font-fredoka text-xl font-bold">Total</span>
                    <span className="font-fredoka text-xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="btn-primary w-full py-6 text-lg gap-2">
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/menu" className="block mt-4">
                  <Button variant="outline" className="w-full rounded-full gap-2">
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
