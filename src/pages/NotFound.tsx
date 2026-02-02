import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl mb-6 animate-float">🍕</div>
        <h1 className="font-fredoka text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-fredoka text-2xl md:text-3xl font-bold mb-4">
          Oops! This page got eaten
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Looks like someone was too hungry and devoured this page. 
          Let's get you back to the good stuff!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-primary gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline" className="rounded-full gap-2 w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4" />
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
