import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search as SearchIcon, Star, Plus, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'iPhone 14 Pro 128GB',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
    price: 999,
    originalPrice: 1099,
    rating: 4.5,
    reviews: 2847,
    site: 'TechMart',
    availability: 'In Stock',
    features: ['128GB Storage', 'Pro Camera', '6.1" Display']
  },
  {
    id: '2',
    name: 'iPhone 14 Pro 128GB',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
    price: 1049,
    rating: 4.3,
    reviews: 1256,
    site: 'ElectroShop',
    availability: 'In Stock',
    features: ['128GB Storage', 'Pro Camera', '6.1" Display']
  },
  {
    id: '3',
    name: 'iPhone 14 Pro 128GB Space Black',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
    price: 1029,
    rating: 4.6,
    reviews: 3421,
    site: 'MegaStore',
    availability: 'Limited Stock',
    features: ['128GB Storage', 'Pro Camera', '6.1" Display', 'Space Black']
  },
  {
    id: '4',
    name: 'Samsung Galaxy S23 Ultra',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300',
    price: 1199,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 1876,
    site: 'TechMart',
    availability: 'In Stock',
    features: ['256GB Storage', 'S Pen', '6.8" Display']
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredProducts(mockProducts);
      } else {
        const filtered = mockProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
      setIsLoading(false);
    }, 1000);
  };

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const getLowestPrice = () => {
    if (filteredProducts.length === 0) return null;
    return Math.min(...filteredProducts.map(p => p.price));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Find Your Perfect Product</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Search across multiple platforms and compare the best deals
          </p>

          <div className="max-w-2xl mx-auto flex gap-4">
            <Input
              type="text"
              placeholder="Search for products (e.g., iPhone 14, Samsung Galaxy...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg py-6"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              disabled={isLoading}
              className="gradient-hero text-white hover:opacity-90 px-8 py-6"
            >
              <SearchIcon className="h-5 w-5 mr-2" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </div>

        {/* Search Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="shadow-card animate-pulse">
                <CardContent className="p-6">
                  <div className="bg-gray-300 h-48 w-full rounded-lg mb-4"></div>
                  <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
                  <div className="bg-gray-300 h-8 w-full rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredProducts.length > 0 && (
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">
                  Found {filteredProducts.length} product(s)
                  {selectedProducts.length > 0 && (
                    <span className="ml-2">• {selectedProducts.length} selected for comparison</span>
                  )}
                </p>
                {selectedProducts.length > 0 && (
                  <Button 
                    onClick={() => window.location.href = '/comparison'}
                    className="gradient-comparison text-accent-foreground"
                  >
                    Compare Selected ({selectedProducts.length})
                  </Button>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className={`shadow-card hover:shadow-hover transition-all cursor-pointer ${
                    selectedProducts.includes(product.id) ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => toggleProductSelection(product.id)}
                        className={`absolute top-2 right-2 p-2 rounded-full ${
                          selectedProducts.includes(product.id)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        } shadow-md transition-colors`}
                      >
                        {selectedProducts.includes(product.id) ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-3">
                        {renderStars(product.rating)}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold ${
                          product.price === getLowestPrice() ? 'text-accent-success' : 'text-foreground'
                        }`}>
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Badge 
                        variant={product.availability === 'In Stock' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {product.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        from {product.site}
                      </span>
                      {product.price === getLowestPrice() && (
                        <Badge className="gradient-comparison text-accent-foreground text-xs">
                          Best Price
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full"
                      variant={selectedProducts.includes(product.id) ? 'default' : 'outline'}
                      onClick={() => toggleProductSelection(product.id)}
                    >
                      {selectedProducts.includes(product.id) ? 'Selected' : 'Add to Compare'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-foreground">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse our popular categories.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;