import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Search, Star, TrendingUp, Shield } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Compare Products Like 
                <span className="text-primary-light"> Never Before</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Discover the best deals across multiple e-commerce platforms. Compare prices, ratings, and features instantly to make smarter purchasing decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/search')}
                  className="bg-white text-primary hover:bg-white/90 text-lg font-semibold px-8 py-6"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Start Comparing Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/login')}
                  className="border-white text-white hover:bg-white/10 text-lg font-semibold px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroIllustration} 
                alt="Product comparison illustration" 
                className="w-full h-auto rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose SmartCompare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intelligent platform makes product comparison effortless, helping you save time and money on every purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl gradient-card shadow-card hover:shadow-hover transition-shadow">
              <div className="gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Smart Search</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find products across multiple platforms with our intelligent search algorithm that understands what you're looking for.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl gradient-card shadow-card hover:shadow-hover transition-shadow">
              <div className="gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Rating Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare customer ratings and reviews from different sources to get a complete picture of product quality.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl gradient-card shadow-card hover:shadow-hover transition-shadow">
              <div className="gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Price Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor price changes and get notified when your favorite products go on sale across different platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-hero rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Start Saving Money?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who use SmartCompare to find the best deals every day.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/search')}
            className="gradient-hero text-white hover:opacity-90 text-lg font-semibold px-12 py-6"
          >
            <Search className="mr-2 h-5 w-5" />
            Start Your First Search
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;