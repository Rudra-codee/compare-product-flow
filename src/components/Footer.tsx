import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="gradient-hero rounded-lg p-2">
                <Search className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">SmartCompare</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Compare products like never before. Find the best deals across multiple e-commerce platforms with our intelligent comparison tool.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/search" className="block text-muted-foreground hover:text-foreground transition-colors">
                Search
              </Link>
              <Link to="/comparison" className="block text-muted-foreground hover:text-foreground transition-colors">
                Compare
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} SmartCompare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;