'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAuth } from "@/hooks/use-auth"

export function HeroSection() {
  const { isAuthenticated, userName, userImage } = useAuth()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B0000]/10 to-[#7A9B63]/10">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          {isAuthenticated ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#8B0000]">
              Hi, <span className="text-[#7A9B63]">{userName}</span>!<br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700">Welcome to Your Wellness Journey</span>
            </h1>
          ) : (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#8B0000]">
              Transform Your Life<br />
              <span className="text-[#7A9B63]">With Holistic Wellness</span>
            </h1>
          )}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Experience the perfect harmony of mind, body, and soul at Alina Wellness. 
            Our expert team provides personalized care to help you achieve optimal health 
            and wellness through natural therapies and modern techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-[#7A9B63] text-[#7A9B63] hover:bg-[#7A9B63]/10 px-8 py-6 text-lg"
              size="lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
        <div className="flex-1 relative h-[400px] lg:h-[600px] w-full max-w-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-[#7A9B63]/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <Image
            src="/wellness-hero.svg"
            alt="Wellness Illustration"
            fill
            className="object-contain z-10"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}