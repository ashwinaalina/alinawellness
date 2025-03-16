'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type Testimonial = {
  id: number;
  name: string;
  image: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  featured: boolean;
};

type TestimonialsData = {
  [key: string]: Testimonial[];
};

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock testimonial data
  const testimonials: TestimonialsData = {
    all: [
      {
        id: 1,
        name: 'Sarah Johnson',
        image: '/testimonials/sarah.jpg',
        role: 'Yoga Enthusiast',
        content: 'Alina Wellness has completely transformed my approach to health. The personalized yoga sessions have improved my flexibility and reduced my chronic back pain. The instructors are knowledgeable and truly care about your progress.',
        rating: 5,
        service: 'yoga',
        featured: true
      },
      {
        id: 2,
        name: 'Michael Chen',
        image: '/testimonials/michael.jpg',
        role: 'Business Executive',
        content: 'As someone with a high-stress job, the wellness consultations and nutrition planning at Alina have been life-changing. I\'ve lost 15 pounds and have so much more energy throughout the day. Their holistic approach addresses all aspects of wellness.',
        rating: 5,
        service: 'nutrition',
        featured: true
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        image: '/testimonials/emily.jpg',
        role: 'Marathon Runner',
        content: 'The personal training sessions at Alina Wellness have taken my running to the next level. My trainer understood my specific goals and created a program that improved my endurance and prevented injuries. Highly recommend!',
        rating: 4,
        service: 'training',
        featured: false
      },
      {
        id: 4,
        name: 'David Thompson',
        image: '/testimonials/david.jpg',
        role: 'Retired Teacher',
        content: 'After retiring, I wanted to focus on my health. The massage therapy at Alina Wellness has helped manage my arthritis pain better than any medication. The therapists are professional and attentive to my needs.',
        rating: 5,
        service: 'massage',
        featured: false
      },
      {
        id: 5,
        name: 'Jennifer Lee',
        image: '/testimonials/jennifer.jpg',
        role: 'Mother of Two',
        content: 'Balancing work and family left me with little time for self-care. The wellness consultation helped me create a sustainable health plan that fits my busy schedule. I\'ve seen improvements in my energy levels and overall mood.',
        rating: 5,
        service: 'consultation',
        featured: false
      },
      {
        id: 6,
        name: 'Robert Garcia',
        image: '/testimonials/robert.jpg',
        role: 'IT Professional',
        content: 'The nutrition planning service completely changed my relationship with food. I learned how to fuel my body properly while still enjoying meals. The personalized approach made all the difference compared to generic diets I\'ve tried before.',
        rating: 4,
        service: 'nutrition',
        featured: false
      }
    ],
    featured: [],
    yoga: [],
    nutrition: [],
    training: [],
    massage: [],
    consultation: []
  };

  // Populate the filtered arrays
  testimonials.featured = testimonials.all.filter(t => t.featured);
  testimonials.yoga = testimonials.all.filter(t => t.service === 'yoga');
  testimonials.nutrition = testimonials.all.filter(t => t.service === 'nutrition');
  testimonials.training = testimonials.all.filter(t => t.service === 'training');
  testimonials.massage = testimonials.all.filter(t => t.service === 'massage');
  testimonials.consultation = testimonials.all.filter(t => t.service === 'consultation');

  // Generate star rating display
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">Client Testimonials</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Alina Wellness has helped transform the lives of our clients through personalized wellness services.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full max-w-4xl">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="yoga">Yoga</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="massage">Massage</TabsTrigger>
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(testimonials).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials[tab].map((testimonial) => (
                  <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="h-12 w-12 border border-[#7A9B63]">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-[#8B0000] text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                      <div className="flex justify-end">
                        <span className="inline-flex items-center rounded-full bg-[#7A9B63]/10 px-2.5 py-0.5 text-xs font-medium text-[#7A9B63]">
                          {testimonial.service.charAt(0).toUpperCase() + testimonial.service.slice(1)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {testimonials[tab].length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No testimonials found for this category.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-white p-6 rounded-lg shadow-md mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#8B0000] mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We value your feedback! If you've experienced our services, we'd love to hear about your wellness journey.
          </p>
          <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white px-6">
            Submit a Testimonial
          </Button>
        </div>
      </div>
    </div>
  );
}