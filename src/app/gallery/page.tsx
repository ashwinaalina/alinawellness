'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  type: 'before-after' | 'video';
  beforeImage?: string;
  afterImage?: string;
  videoUrl?: string;
  description: string;
};

type GalleryData = {
  [key: string]: GalleryItem[];
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock gallery data - in a real application, this would come from a database or API
  const galleryItems: GalleryData = {
    all: [
      {
        id: 1,
        title: 'Weight Loss Transformation',
        category: 'weight-loss',
        type: 'before-after',
        beforeImage: '/testimonials/sarah.jpg', // Using existing images as placeholders
        afterImage: '/testimonials/jennifer.jpg',
        description: 'Client achieved significant weight loss through our personalized nutrition and fitness program over 6 months.'
      },
      {
        id: 2,
        title: 'Posture Improvement',
        category: 'posture',
        type: 'before-after',
        beforeImage: '/testimonials/michael.jpg',
        afterImage: '/testimonials/robert.jpg',
        description: 'Client corrected years of poor posture through targeted exercises and therapy sessions.'
      },
      {
        id: 3,
        title: 'Yoga Flow Session',
        category: 'yoga',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video
        description: 'A sample of our beginner-friendly yoga flow session focusing on flexibility and mindfulness.'
      },
      {
        id: 4,
        title: 'Strength Training Demo',
        category: 'strength',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video
        description: 'Our certified trainer demonstrates proper form for key strength training exercises.'
      },
      {
        id: 5,
        title: 'Skin Rejuvenation',
        category: 'skin',
        type: 'before-after',
        beforeImage: '/testimonials/emily.jpg',
        afterImage: '/testimonials/sarah.jpg',
        description: 'Results after 8 weeks of our holistic skin care regimen and nutrition adjustments.'
      },
      {
        id: 6,
        title: 'Nutrition Coaching Session',
        category: 'nutrition',
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder - replace with actual video
        description: 'Sample from our personalized nutrition coaching sessions focusing on sustainable eating habits.'
      }
    ],
    'before-after': [],
    videos: [],
    'weight-loss': [],
    posture: [],
    yoga: [],
    strength: [],
    skin: [],
    nutrition: []
  };

  // Populate the filtered arrays
  galleryItems['before-after'] = galleryItems.all.filter(item => item.type === 'before-after');
  galleryItems['videos'] = galleryItems.all.filter(item => item.type === 'video');
  galleryItems['weight-loss'] = galleryItems.all.filter(item => item.category === 'weight-loss');
  galleryItems['posture'] = galleryItems.all.filter(item => item.category === 'posture');
  galleryItems['yoga'] = galleryItems.all.filter(item => item.category === 'yoga');
  galleryItems['strength'] = galleryItems.all.filter(item => item.category === 'strength');
  galleryItems['skin'] = galleryItems.all.filter(item => item.category === 'skin');
  galleryItems['nutrition'] = galleryItems.all.filter(item => item.category === 'nutrition');

  // Component to render before/after images
  const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { beforeImage: string, afterImage: string, title: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    
    return (
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gray-200">
          {/* Before image (visible based on slider) */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url(${beforeImage})`,
              width: `${sliderPosition}%`,
              zIndex: 1
            }}
          />
          
          {/* After image (full width in background) */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url(${afterImage})`
            }}
          />
          
          {/* Slider control */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const container = e.currentTarget.parentElement;
                if (container) {
                  const rect = container.getBoundingClientRect();
                  const x = moveEvent.clientX - rect.left;
                  const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
                  setSliderPosition(newPosition);
                }
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-20">Before</div>
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-20">After</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">Transformation Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of before and after transformations and instructional videos showcasing the results of our wellness programs.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 md:grid-cols-9 w-full max-w-4xl">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="before-after">Before/After</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="weight-loss">Weight Loss</TabsTrigger>
              <TabsTrigger value="posture">Posture</TabsTrigger>
              <TabsTrigger value="yoga">Yoga</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="skin">Skin</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(galleryItems).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems[tab].map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      {item.type === 'before-after' && item.beforeImage && item.afterImage && (
                        <BeforeAfterSlider 
                          beforeImage={item.beforeImage} 
                          afterImage={item.afterImage} 
                          title={item.title} 
                        />
                      )}
                      
                      {item.type === 'video' && item.videoUrl && (
                        <div className="aspect-video w-full">
                          <iframe 
                            className="w-full h-full" 
                            src={item.videoUrl} 
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="inline-flex items-center rounded-full bg-[#7A9B63]/10 px-2.5 py-0.5 text-xs font-medium text-[#7A9B63]">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          <Button variant="outline" size="sm" className="text-[#8B0000] border-[#8B0000] hover:bg-[#8B0000]/10">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {galleryItems[tab].length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No items found for this category.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="bg-white p-6 rounded-lg shadow-md mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#8B0000] mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our wellness experts are ready to help you achieve your health and fitness goals. Book a consultation today!
          </p>
          <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white px-6">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}