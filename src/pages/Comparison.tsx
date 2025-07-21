import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, X, ShoppingCart, Heart } from 'lucide-react';

// Mock comparison data
const mockComparisonData = [
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
    shipping: 'Free',
    warranty: '1 Year',
    features: {
      'Storage': '128GB',
      'Display': '6.1" Super Retina XDR',
      'Camera': '48MP Triple Camera',
      'Battery': 'Up to 23 hours',
      'Processor': 'A16 Bionic',
      'Colors': 'Space Black, Silver, Gold, Deep Purple'
    }
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
    shipping: 'Free',
    warranty: '1 Year',
    features: {
      'Storage': '128GB',
      'Display': '6.1" Super Retina XDR',
      'Camera': '48MP Triple Camera',
      'Battery': 'Up to 23 hours',
      'Processor': 'A16 Bionic',
      'Colors': 'Space Black, Silver, Gold'
    }
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
    shipping: '$9.99',
    warranty: '2 Years',
    features: {
      'Storage': '128GB',
      'Display': '6.1" Super Retina XDR',
      'Camera': '48MP Triple Camera',
      'Battery': 'Up to 23 hours',
      'Processor': 'A16 Bionic',
      'Colors': 'Space Black'
    }
  }
];

const Comparison = () => {
  const [products, setProducts] = useState(mockComparisonData);

  const removeProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const clearAll = () => {
    setProducts([]);
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
    if (products.length === 0) return null;
    return Math.min(...products.map(p => p.price));
  };

  const getHighestRating = () => {
    if (products.length === 0) return null;
    return Math.max(...products.map(p => p.rating));
  };

  const getAllFeatureKeys = () => {
    const allKeys = new Set<string>();
    products.forEach(product => {
      Object.keys(product.features).forEach(key => allKeys.add(key));
    });
    return Array.from(allKeys);
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="gradient-hero rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">No Products to Compare</h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Start by searching for products and adding them to your comparison list.
            </p>
            <Button 
              onClick={() => window.location.href = '/search'}
              className="gradient-hero text-white hover:opacity-90 text-lg font-semibold px-8 py-4"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-foreground">Product Comparison</h1>
            <p className="text-muted-foreground">Compare {products.length} product(s) side by side</p>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Button variant="outline" onClick={clearAll}>
              Clear All
            </Button>
            <Button 
              onClick={() => window.location.href = '/search'}
              className="gradient-hero text-white hover:opacity-90"
            >
              Add More Products
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-w-full">
            {products.map((product) => (
              <Card key={product.id} className="shadow-card relative">
                <CardHeader className="pb-4">
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <CardTitle className="text-xl font-semibold mb-2 pr-8">
                    {product.name}
                  </CardTitle>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`text-3xl font-bold ${
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
                    {product.price === getLowestPrice() && (
                      <Badge className="gradient-comparison text-accent-foreground">
                        Best Price
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Rating */}
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Rating</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                      <span className={`font-semibold ${
                        product.rating === getHighestRating() ? 'text-accent-success' : 'text-foreground'
                      }`}>
                        {product.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                      {product.rating === getHighestRating() && (
                        <Badge variant="outline" className="text-accent-success border-accent-success">
                          Highest
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Store Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Store</h4>
                      <p className="text-foreground font-semibold">{product.site}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Availability</h4>
                      <Badge 
                        variant={product.availability === 'In Stock' ? 'default' : 'secondary'}
                      >
                        {product.availability}
                      </Badge>
                    </div>
                  </div>

                  {/* Shipping & Warranty */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Shipping</h4>
                      <p className={`font-semibold ${
                        product.shipping === 'Free' ? 'text-accent-success' : 'text-foreground'
                      }`}>
                        {product.shipping}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Warranty</h4>
                      <p className="text-foreground font-semibold">{product.warranty}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Specifications</h4>
                    <div className="space-y-3">
                      {getAllFeatureKeys().map((key) => (
                        <div key={key} className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground font-medium w-1/3">
                            {key}:
                          </span>
                          <span className="text-sm text-foreground font-semibold text-right w-2/3">
                            {product.features[key] || 'N/A'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 gradient-hero text-white hover:opacity-90">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Comparison Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg gradient-comparison">
                <h3 className="text-lg font-semibold mb-2 text-accent-foreground">Best Price</h3>
                <p className="text-3xl font-bold text-accent-foreground">
                  ${getLowestPrice()}
                </p>
                <p className="text-sm text-accent-foreground/80 mt-2">
                  {products.find(p => p.price === getLowestPrice())?.site}
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg gradient-comparison">
                <h3 className="text-lg font-semibold mb-2 text-accent-foreground">Highest Rating</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-bold text-accent-foreground">
                    {getHighestRating()}
                  </span>
                  <Star className="h-6 w-6 fill-accent-foreground text-accent-foreground" />
                </div>
                <p className="text-sm text-accent-foreground/80 mt-2">
                  {products.find(p => p.rating === getHighestRating())?.site}
                </p>
              </div>

              <div className="text-center p-6 rounded-lg gradient-comparison">
                <h3 className="text-lg font-semibold mb-2 text-accent-foreground">Free Shipping</h3>
                <p className="text-3xl font-bold text-accent-foreground">
                  {products.filter(p => p.shipping === 'Free').length}
                </p>
                <p className="text-sm text-accent-foreground/80 mt-2">
                  of {products.length} stores
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Comparison;