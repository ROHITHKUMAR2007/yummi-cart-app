import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">🍔</span>
              <span className="font-fredoka text-2xl font-bold">Yummy</span>
            </Link>
            <p className="text-primary-foreground/70">
              Delicious food delivered fast to your door. Order now and taste the happiness!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-fredoka text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-fredoka text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/menu?category=pizza" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  🍕 Pizza
                </Link>
              </li>
              <li>
                <Link to="/menu?category=burgers" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  🍔 Burgers
                </Link>
              </li>
              <li>
                <Link to="/menu?category=desserts" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  🍰 Desserts
                </Link>
              </li>
              <li>
                <Link to="/menu?category=healthy" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  🥗 Healthy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-fredoka text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>123 Yummy Street, Food City</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@yummy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/50">
          <p>© 2025 Yummy. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}
