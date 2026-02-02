import { Link } from 'react-router-dom';
import { categories, CategoryInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: CategoryInfo;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl transition-all duration-300 hover-bounce min-w-[100px]',
        isActive
          ? 'bg-primary text-primary-foreground shadow-glow'
          : 'bg-card shadow-soft hover:shadow-card'
      )}
    >
      <span className="text-4xl md:text-5xl">{category.icon}</span>
      <span className="font-semibold text-sm md:text-base">{category.name}</span>
    </button>
  );
}

interface CategorySectionProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategorySection({ activeCategory, onCategoryChange }: CategorySectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-fredoka font-bold">
            What are you craving? 🤤
          </h2>
          <Link
            to="/menu"
            className="text-primary font-medium hover:underline hidden sm:block"
          >
            View All
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              'flex flex-col items-center gap-3 p-4 md:p-6 rounded-2xl transition-all duration-300 hover-bounce min-w-[100px]',
              activeCategory === null
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'bg-card shadow-soft hover:shadow-card'
            )}
          >
            <span className="text-4xl md:text-5xl">🍽️</span>
            <span className="font-semibold text-sm md:text-base">All</span>
          </button>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => onCategoryChange(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
