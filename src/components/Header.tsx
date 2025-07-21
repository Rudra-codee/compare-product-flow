import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-card shadow-card border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-hero rounded-lg p-2">
              <Search className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">SmartCompare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Search
            </Link>
            <Link 
              to="/comparison" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Compare
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <User className="h-4 w-4 mr-2" />
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              to="/comparison" 
              className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </Link>
            <Button 
              variant="outline" 
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <User className="h-4 w-4 mr-2" />
              Log in
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;