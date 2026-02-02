// Food delivery app data with images

import pizzaMargherita from '@/assets/food/pizza-margherita.jpg';
import pizzaPepperoni from '@/assets/food/pizza-pepperoni.jpg';
import pizzaBbq from '@/assets/food/pizza-bbq.jpg';
import burgerClassic from '@/assets/food/burger-classic.jpg';
import burgerJalapeno from '@/assets/food/burger-jalapeno.jpg';
import burgerVeggie from '@/assets/food/burger-veggie.jpg';
import dessertLavaCake from '@/assets/food/dessert-lava-cake.jpg';
import dessertCheesecake from '@/assets/food/dessert-cheesecake.jpg';
import dessertTiramisu from '@/assets/food/dessert-tiramisu.jpg';
import drinkMango from '@/assets/food/drink-mango.jpg';
import drinkLemonade from '@/assets/food/drink-lemonade.jpg';
import drinkLatte from '@/assets/food/drink-latte.jpg';
import healthyBuddha from '@/assets/food/healthy-buddha.jpg';
import healthySalmon from '@/assets/food/healthy-salmon.jpg';
import healthyAcai from '@/assets/food/healthy-acai.jpg';

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  rating: number;
  reviewCount: number;
  isVeg: boolean;
  isHot?: boolean;
  isBestseller?: boolean;
  ingredients?: string[];
  calories?: number;
  prepTime?: string;
}

export type Category = 'pizza' | 'burgers' | 'desserts' | 'drinks' | 'healthy';

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  { id: 'pizza', name: 'Pizza', icon: '🍕', color: 'bg-hot-light', description: 'Cheesy goodness' },
  { id: 'burgers', name: 'Burgers', icon: '🍔', color: 'bg-secondary/30', description: 'Juicy patties' },
  { id: 'desserts', name: 'Desserts', icon: '🍰', color: 'bg-pink-100', description: 'Sweet treats' },
  { id: 'drinks', name: 'Drinks', icon: '🥤', color: 'bg-blue-100', description: 'Refresh yourself' },
  { id: 'healthy', name: 'Healthy', icon: '🥗', color: 'bg-healthy-light', description: 'Feel good food' },
];

export const foodItems: FoodItem[] = [
  // Pizzas
  {
    id: 'pizza-1',
    name: 'Margherita Classic',
    description: 'Fresh tomatoes, mozzarella, basil, and our signature sauce on a hand-tossed crust',
    price: 12.99,
    image: pizzaMargherita,
    category: 'pizza',
    rating: 4.8,
    reviewCount: 234,
    isVeg: true,
    isBestseller: true,
    ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil'],
    calories: 850,
    prepTime: '20-25 min',
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni Feast',
    description: 'Loaded with double pepperoni, extra cheese, and Italian herbs',
    price: 15.99,
    image: pizzaPepperoni,
    category: 'pizza',
    rating: 4.9,
    reviewCount: 456,
    isVeg: false,
    isHot: true,
    isBestseller: true,
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce', 'Oregano'],
    calories: 1100,
    prepTime: '20-25 min',
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken Supreme',
    description: 'Grilled chicken, BBQ sauce, red onions, and bell peppers',
    price: 17.99,
    image: pizzaBbq,
    category: 'pizza',
    rating: 4.7,
    reviewCount: 189,
    isVeg: false,
    ingredients: ['Chicken', 'BBQ Sauce', 'Red Onions', 'Bell Peppers'],
    calories: 980,
    prepTime: '25-30 min',
  },
  // Burgers
  {
    id: 'burger-1',
    name: 'Classic Smash Burger',
    description: 'Double smashed patties, American cheese, pickles, onions, and special sauce',
    price: 11.99,
    image: burgerClassic,
    category: 'burgers',
    rating: 4.9,
    reviewCount: 567,
    isVeg: false,
    isBestseller: true,
    ingredients: ['Beef Patties', 'American Cheese', 'Pickles', 'Special Sauce'],
    calories: 750,
    prepTime: '15-20 min',
  },
  {
    id: 'burger-2',
    name: 'Spicy Jalapeño',
    description: 'Fiery jalapeños, pepper jack cheese, crispy onions, and chipotle mayo',
    price: 13.99,
    image: burgerJalapeno,
    category: 'burgers',
    rating: 4.6,
    reviewCount: 234,
    isVeg: false,
    isHot: true,
    ingredients: ['Beef Patty', 'Jalapeños', 'Pepper Jack', 'Chipotle Mayo'],
    calories: 820,
    prepTime: '15-20 min',
  },
  {
    id: 'burger-3',
    name: 'Veggie Delight',
    description: 'Plant-based patty, avocado, tomato, lettuce, and vegan aioli',
    price: 12.99,
    image: burgerVeggie,
    category: 'burgers',
    rating: 4.5,
    reviewCount: 156,
    isVeg: true,
    ingredients: ['Plant Patty', 'Avocado', 'Tomato', 'Vegan Aioli'],
    calories: 580,
    prepTime: '15-20 min',
  },
  // Desserts
  {
    id: 'dessert-1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 8.99,
    image: dessertLavaCake,
    category: 'desserts',
    rating: 4.9,
    reviewCount: 345,
    isVeg: true,
    isBestseller: true,
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Vanilla Ice Cream'],
    calories: 650,
    prepTime: '10-15 min',
  },
  {
    id: 'dessert-2',
    name: 'New York Cheesecake',
    description: 'Creamy classic cheesecake with strawberry compote',
    price: 7.99,
    image: dessertCheesecake,
    category: 'desserts',
    rating: 4.7,
    reviewCount: 234,
    isVeg: true,
    ingredients: ['Cream Cheese', 'Graham Crust', 'Strawberries'],
    calories: 480,
    prepTime: '5 min',
  },
  {
    id: 'dessert-3',
    name: 'Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers and mascarpone cream',
    price: 9.99,
    image: dessertTiramisu,
    category: 'desserts',
    rating: 4.8,
    reviewCount: 189,
    isVeg: true,
    ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa'],
    calories: 420,
    prepTime: '5 min',
  },
  // Drinks
  {
    id: 'drink-1',
    name: 'Mango Tango Smoothie',
    description: 'Fresh mango, banana, coconut milk, and a hint of lime',
    price: 5.99,
    image: drinkMango,
    category: 'drinks',
    rating: 4.8,
    reviewCount: 289,
    isVeg: true,
    isBestseller: true,
    ingredients: ['Mango', 'Banana', 'Coconut Milk', 'Lime'],
    calories: 220,
    prepTime: '5 min',
  },
  {
    id: 'drink-2',
    name: 'Strawberry Lemonade',
    description: 'Fresh-squeezed lemonade with muddled strawberries',
    price: 4.99,
    image: drinkLemonade,
    category: 'drinks',
    rating: 4.6,
    reviewCount: 178,
    isVeg: true,
    ingredients: ['Strawberries', 'Lemon', 'Sugar', 'Mint'],
    calories: 150,
    prepTime: '5 min',
  },
  {
    id: 'drink-3',
    name: 'Iced Caramel Latte',
    description: 'Espresso, milk, caramel, over ice',
    price: 5.49,
    image: drinkLatte,
    category: 'drinks',
    rating: 4.7,
    reviewCount: 345,
    isVeg: true,
    ingredients: ['Espresso', 'Milk', 'Caramel Syrup', 'Ice'],
    calories: 180,
    prepTime: '5 min',
  },
  // Healthy
  {
    id: 'healthy-1',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted chickpeas, avocado, kale, and tahini dressing',
    price: 13.99,
    image: healthyBuddha,
    category: 'healthy',
    rating: 4.7,
    reviewCount: 234,
    isVeg: true,
    isBestseller: true,
    ingredients: ['Quinoa', 'Chickpeas', 'Avocado', 'Kale', 'Tahini'],
    calories: 520,
    prepTime: '15-20 min',
  },
  {
    id: 'healthy-2',
    name: 'Grilled Salmon Salad',
    description: 'Fresh Atlantic salmon on mixed greens with citrus vinaigrette',
    price: 16.99,
    image: healthySalmon,
    category: 'healthy',
    rating: 4.8,
    reviewCount: 167,
    isVeg: false,
    ingredients: ['Salmon', 'Mixed Greens', 'Cherry Tomatoes', 'Citrus Dressing'],
    calories: 450,
    prepTime: '20-25 min',
  },
  {
    id: 'healthy-3',
    name: 'Açaí Power Bowl',
    description: 'Blended açaí, topped with granola, berries, and honey',
    price: 11.99,
    image: healthyAcai,
    category: 'healthy',
    rating: 4.6,
    reviewCount: 198,
    isVeg: true,
    ingredients: ['Açaí', 'Granola', 'Mixed Berries', 'Banana', 'Honey'],
    calories: 380,
    prepTime: '10 min',
  },
];

export const reviews = [
  { id: 1, user: 'Sarah M.', rating: 5, comment: 'Best pizza in town! The crust is perfect.', date: '2 days ago' },
  { id: 2, user: 'Mike J.', rating: 4, comment: 'Great food, fast delivery. Will order again!', date: '1 week ago' },
  { id: 3, user: 'Emma L.', rating: 5, comment: 'The chocolate lava cake is to die for!', date: '3 days ago' },
];
