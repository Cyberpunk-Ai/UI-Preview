import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Filter } from "lucide-react";
import vehicleSearchImg from "@assets/Screenshot (194)_1751980724234.png";

const vehicles = [
  {
    id: 1,
    name: "2024 Honda Accord",
    price: "$32,000",
    year: "2024",
    mileage: "2,000 mi",
    type: "Hybrid",
    transmission: "CVT",
    dealer: "Honda Sensing",
    location: "Apple CarPlay",
    image: vehicleSearchImg,
    featured: true
  },
  {
    id: 2,
    name: "2023 Audi A4",
    price: "$48,000",
    year: "2023",
    mileage: "12,000 mi",
    type: "Gasoline",
    transmission: "Automatic",
    dealer: "Quattro AWD",
    location: "Virtual Cockpit",
    image: vehicleSearchImg,
    featured: false
  },
  {
    id: 3,
    name: "2023 Ford Mustang",
    price: "$38,000",
    year: "2023",
    mileage: "18,000 mi",
    type: "Gasoline",
    transmission: "Manual",
    dealer: "Performance Package",
    location: "Recaro Seats",
    image: vehicleSearchImg,
    featured: true
  }
];

export default function BrowseVehicles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [makeFilter, setMakeFilter] = useState("");

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Vehicle
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse thousands of verified vehicles from trusted dealers across all categories.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by make, model, year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-25000">$0 - $25,000</SelectItem>
                  <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100000+">$100,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select value={makeFilter} onValueChange={setMakeFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="All Makes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {vehicles.length} of 5000+ vehicles
          </p>
          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="mileage">Lowest Mileage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                {vehicle.featured && (
                  <Badge className="absolute top-3 left-3 bg-blue-600">
                    Featured
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{vehicle.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">{vehicle.price}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>📅 {vehicle.year}</div>
                  <div>🛣️ {vehicle.mileage}</div>
                  <div>⛽ {vehicle.type}</div>
                  <div>⚙️ {vehicle.transmission}</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    ✓ {vehicle.dealer}
                  </div>
                  <div className="flex items-center text-green-600">
                    ✓ {vehicle.location}
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
}