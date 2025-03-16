'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock sales data
  const salesData = {
    featured: [
      {
        id: 1,
        title: 'Summer Wellness Package',
        description: 'Complete wellness package including consultation, nutrition plan, and 3 personal training sessions',
        originalPrice: 299,
        salePrice: 199,
        percentOff: 33,
        endDate: '2023-08-31',
        category: 'package',
        featured: true,
        code: 'SUMMER23'
      },
      {
        id: 2,
        title: 'Couples Massage Special',
        description: 'Book a couples massage and receive complimentary aromatherapy treatment',
        originalPrice: 180,
        salePrice: 150,
        percentOff: 17,
        endDate: '2023-07-30',
        category: 'service',
        featured: true,
        code: 'COUPLES20'
      }
    ],
    all: [
      {
        id: 1,
        title: 'Summer Wellness Package',
        description: 'Complete wellness package including consultation, nutrition plan, and 3 personal training sessions',
        originalPrice: 299,
        salePrice: 199,
        percentOff: 33,
        endDate: '2023-08-31',
        category: 'package',
        featured: true,
        code: 'SUMMER23'
      },
      {
        id: 2,
        title: 'Couples Massage Special',
        description: 'Book a couples massage and receive complimentary aromatherapy treatment',
        originalPrice: 180,
        salePrice: 150,
        percentOff: 17,
        endDate: '2023-07-30',
        category: 'service',
        featured: true,
        code: 'COUPLES20'
      },
      {
        id: 3,
        title: 'First-Time Client Discount',
        description: 'Special offer for new clients - 20% off your first wellness consultation',
        originalPrice: 120,
        salePrice: 96,
        percentOff: 20,
        endDate: '2023-12-31',
        category: 'service',
        featured: false,
        code: 'NEWCLIENT'
      },
      {
        id: 4,
        title: 'Nutrition Plan Bundle',
        description: 'Personalized nutrition plan with 2 follow-up sessions',
        originalPrice: 250,
        salePrice: 199,
        percentOff: 20,
        endDate: '2023-09-15',
        category: 'package',
        featured: false,
        code: 'NUTRITION20'
      },
      {
        id: 5,
        title: 'Yoga Class Pass',
        description: '10-class pass with one bonus class free',
        originalPrice: 150,
        salePrice: 120,
        percentOff: 20,
        endDate: '2023-08-15',
        category: 'service',
        featured: false,
        code: 'YOGA10PLUS1'
      },
      {
        id: 6,
        title: 'Wellness Products Sale',
        description: 'Buy any 2 wellness products and get 15% off',
        originalPrice: 0,
        salePrice: 0,
        percentOff: 15,
        endDate: '2023-07-31',
        category: 'product',
        featured: false,
        code: 'PRODUCT15'
      }
    ]
  };

  // Filter sales based on active tab
  const getFilteredSales = () => {
    if (activeTab === 'featured') {
      return salesData.featured;
    } else if (activeTab === 'all') {
      return salesData.all;
    } else {
      return salesData.all.filter(sale => sale.category === activeTab);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      } as Intl.DateTimeFormatOptions;
      
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate days remaining
  const getDaysRemaining = (endDateString: string) => {
    const endDate = new Date(endDateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">Special Offers & Promotions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and exclusive deals on wellness services and packages.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="all">All Offers</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="service">Services</TabsTrigger>
              <TabsTrigger value="package">Packages</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredSales().map((sale) => (
                <SaleCard key={sale.id} sale={sale} formatDate={formatDate} getDaysRemaining={getDaysRemaining} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredSales().map((sale) => (
                <SaleCard key={sale.id} sale={sale} formatDate={formatDate} getDaysRemaining={getDaysRemaining} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="service" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredSales().map((sale) => (
                <SaleCard key={sale.id} sale={sale} formatDate={formatDate} getDaysRemaining={getDaysRemaining} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="package" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredSales().map((sale) => (
                <SaleCard key={sale.id} sale={sale} formatDate={formatDate} getDaysRemaining={getDaysRemaining} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-white p-6 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-semibold text-[#8B0000] mb-4">How to Redeem Offers</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#7A9B63] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <p className="text-gray-700">Choose the offer you'd like to redeem and note the promo code.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#7A9B63] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <p className="text-gray-700">Book your appointment online or call our wellness center.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#7A9B63] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <p className="text-gray-700">Provide the promo code during booking or at the time of service.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#7A9B63] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </div>
              <p className="text-gray-700">Enjoy your discounted wellness service!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sale Card Component
function SaleCard({ 
  sale, 
  formatDate, 
  getDaysRemaining 
}: { 
  sale: {
    id: number;
    title: string;
    description: string;
    originalPrice: number;
    salePrice: number;
    percentOff: number;
    endDate: string;
    category: string;
    featured: boolean;
    code: string;
  };
  formatDate: (date: string) => string;
  getDaysRemaining: (date: string) => number;
}) {
  const daysRemaining = getDaysRemaining(sale.endDate);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {sale.featured && (
        <div className="bg-[#8B0000] text-white text-center py-1 text-sm font-medium">
          Featured Offer
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-[#8B0000]">{sale.title}</CardTitle>
          <Badge className="bg-[#7A9B63] hover:bg-[#7A9B63]/90">{sale.percentOff}% OFF</Badge>
        </div>
        <CardDescription className="text-gray-600 mt-2">{sale.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-[#7A9B63]">${sale.salePrice}</span>
          {sale.originalPrice > 0 && (
            <span className="text-gray-500 line-through">${sale.originalPrice}</span>
          )}
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Promo Code:</span>
            <span className="font-mono font-medium">{sale.code}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Valid Until:</span>
            <span>{formatDate(sale.endDate)}</span>
          </div>
          {daysRemaining <= 7 && (
            <div className="text-red-500 text-center font-medium mt-2">
              {daysRemaining <= 0 ? 'Expired' : `Only ${daysRemaining} days left!`}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
          asChild
        >
          <Link href="/booking">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}