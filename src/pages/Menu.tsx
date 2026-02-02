import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { FoodCard } from '@/components/FoodCard';
import { foodItems, categories, Category } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'veg' | 'non-veg';
type SortType = 'popular' | 'price-low' | 'price-high' | 'rating';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('popular');
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    let items = [...foodItems];

    // Search filter
    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Veg/Non-veg filter
    if (filterType === 'veg') {
      items = items.filter((item) => item.isVeg);
    } else if (filterType === 'non-veg') {
      items = items.filter((item) => !item.isVeg);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        items.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        items.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return items;
  }, [searchQuery, activeCategory, filterType, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartSidebar />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-fredoka font-bold mb-3">
              Our Menu 🍽️
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our delicious selection of handcrafted dishes made with love
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input pl-12"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              className="rounded-full gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-card rounded-2xl p-6 mb-8 shadow-soft animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Diet Filter */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Diet Preference</label>
                  <div className="flex flex-wrap gap-2">
                    {(['all', 'veg', 'non-veg'] as FilterType[]).map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm font-medium transition-all',
                          filterType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-cream hover:bg-accent'
                        )}
                      >
                        {type === 'all' ? '🍽️ All' : type === 'veg' ? '🥬 Veg' : '🍖 Non-Veg'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Sort By</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'popular', label: 'Most Popular' },
                      { value: 'rating', label: 'Top Rated' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSortBy(option.value as SortType)}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm font-medium transition-all',
                          sortBy === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-cream hover:bg-accent'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all hover-bounce',
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card shadow-soft hover:shadow-card'
              )}
            >
              🍽️ All Items
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all hover-bounce',
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card shadow-soft hover:shadow-card'
                )}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredItems.length}</span> items
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Food Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FoodCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="font-fredoka text-xl font-bold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setFilterType('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
