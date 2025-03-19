'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Alina Patel',
      role: 'Founder & Wellness Director',
      image: '/team/alina.jpg',
      bio: 'Dr. Alina Patel has over 15 years of experience in holistic health and integrative medicine. She founded Alina Wellness with a vision to provide comprehensive wellness solutions that address the root causes of health issues.'
    },
    {
      name: 'Mark Johnson',
      role: 'Nutrition Specialist',
      image: '/team/mark.jpg',
      bio: 'Mark specializes in creating personalized nutrition plans that support overall wellness. With a background in clinical nutrition, he helps clients develop sustainable eating habits that fuel their bodies optimally.'
    },
    {
      name: 'Sarah Williams',
      role: 'Yoga Instructor',
      image: '/team/sarah.jpg',
      bio: 'Sarah is a certified yoga instructor with expertise in various yoga styles including Hatha, Vinyasa, and Restorative yoga. She believes in yoga as a powerful tool for physical and mental wellbeing.'
    },
    {
      name: 'James Chen',
      role: 'Personal Trainer',
      image: '/team/james.jpg',
      bio: 'James is a certified personal trainer specializing in functional fitness and strength training. He creates customized workout programs that help clients achieve their fitness goals while preventing injuries.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">About Alina Wellness</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your partner in achieving optimal health and wellness through holistic and personalized care.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src="/about/wellness-center.jpg" 
              alt="Alina Wellness Center" 
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015 by Dr. Alina Patel, Alina Wellness began with a simple mission: to provide holistic wellness solutions that treat the whole person, not just symptoms. What started as a small practice has grown into a comprehensive wellness center serving thousands of clients.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach combines traditional wellness practices with modern techniques, creating personalized plans that address the unique needs of each client. We believe that true wellness encompasses physical, mental, and emotional health working in harmony.
            </p>
            <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white" asChild>
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To empower individuals to achieve optimal wellness through personalized care, education, and sustainable lifestyle changes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Holistic Approach</h3>
              <p className="text-gray-600">
                We treat the whole person, addressing the interconnected aspects of physical, mental, and emotional wellbeing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                We recognize that each person is unique, with individual needs, goals, and challenges requiring customized solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Education & Empowerment</h3>
              <p className="text-gray-600">
                We empower clients with knowledge and tools to take control of their health and make informed wellness decisions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your wellness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#8B0000]">{member.name}</h3>
                    <p className="text-[#7A9B63] mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're here to answer your questions and help you on your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 98765 43210<br />
                Monday-Friday: 8am-7pm<br />
                Saturday: 9am-5pm
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Email</h3>
              <p className="text-gray-600">
                info@alinawellness.co.in<br />
                support@alinawellness.co.in<br />
                We respond within 24 hours
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#7A9B63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7A9B63]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Location</h3>
              <p className="text-gray-600">
                123 Wellness Avenue<br />
                New Delhi, 110001<br />
                India
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white px-8" asChild>
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-6 text-center">Find Us</h2>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              We're conveniently located in Sector 12, Dwarka, New Delhi. Our wellness center is easily accessible by public transportation and has ample parking space for visitors.
            </p>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.068850514095!2d77.03138007431641!3d28.589351500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1163e2f8bb%3A0x40ea9f1a930c303a!2sDwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686761234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              We're conveniently located in Sector 12, Dwarka, New Delhi. Our wellness center is easily accessible by public transportation and has ample parking space for visitors.
            </p>
            <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white" asChild>
              <Link href="https://goo.gl/maps/YourActualGoogleMapsLink" target="_blank" rel="noopener noreferrer">
                Get Directions
              </Link>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-6 text-center">Send Us a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9B63] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9B63] focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9B63] focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9B63] focus:border-transparent h-32"
                placeholder="Please provide details about your inquiry..."
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Button className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white px-8">
                Send Message
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}