'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function BookingPage() {
  const { isAuthenticated, userName } = useAuth();
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Mock services
  const services = [
    { id: 'wellness-consultation', name: 'Wellness Consultation' },
    { id: 'nutrition-planning', name: 'Nutrition Planning' },
    { id: 'personal-training', name: 'Personal Training' },
    { id: 'massage-therapy', name: 'Massage Therapy' },
    { id: 'yoga-session', name: 'Yoga Session' },
  ];

  // Generate available time slots based on selected date
  // In a real app, this would come from an API call
  useEffect(() => {
    if (date) {
      // Mock API call to get available slots
      // This would check against existing bookings in a real app
      const mockAvailableSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', 
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
      ];
      
      // Simulate some slots being already booked
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 1 || dayOfWeek === 3) { // Monday or Wednesday
        setAvailableTimeSlots(mockAvailableSlots.filter(slot => slot !== '11:00 AM' && slot !== '02:00 PM'));
      } else if (dayOfWeek === 5) { // Friday
        setAvailableTimeSlots(mockAvailableSlots.filter(slot => slot !== '09:00 AM' && slot !== '04:00 PM'));
      } else {
        setAvailableTimeSlots(mockAvailableSlots);
      }
      
      // Reset time slot when date changes
      setTimeSlot('');
    }
  }, [date]);

  // Handle booking submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !service) {
      alert('Please select a date, time slot, and service');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to book appointment
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      
      // In a real app, this would be an API call to save the booking
      console.log('Booking submitted:', {
        date,
        timeSlot,
        service,
        notes,
        userName
      });
    }, 1500);
  };

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold text-[#8B0000]">Access Restricted</CardTitle>
            <CardDescription className="text-gray-500">
              Please sign in to book an appointment
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              onClick={() => router.push('/login')}
              className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
            >
              Sign In
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#7A9B63] hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Show success message after booking
  if (bookingSuccess) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold text-[#7A9B63]">Booking Confirmed!</CardTitle>
            <CardDescription className="text-gray-700">
              Your appointment has been successfully scheduled
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-medium">{services.find(s => s.id === service)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{date?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">{timeSlot}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              onClick={() => router.push('/profile')}
              className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
            >
              View My Profile
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-[#7A9B63] text-[#7A9B63] hover:bg-[#7A9B63]/10"
              onClick={() => {
                setDate(undefined);
                setTimeSlot('');
                setService('');
                setNotes('');
                setBookingSuccess(false);
              }}
            >
              Book Another Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-2 text-center">Book Your Appointment</h1>
          <p className="text-gray-600 mb-8 text-center">Select a date and time that works for you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendar */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#7A9B63]">Select Date</CardTitle>
                <CardDescription>Choose your preferred appointment date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => {
                    // Disable past dates, Sundays, and Saturdays
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return (
                      date < today ||
                      date.getDay() === 0 ||
                      date.getDay() === 6
                    );
                  }}
                />
              </CardContent>
            </Card>
            
            {/* Booking Form */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#7A9B63]">Appointment Details</CardTitle>
                <CardDescription>Complete your booking information</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Time Slot</Label>
                    <Select value={timeSlot} onValueChange={setTimeSlot} disabled={!date || availableTimeSlots.length === 0}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder={!date ? "Select a date first" : availableTimeSlots.length === 0 ? "No available slots" : "Select a time slot"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests or Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requirements or health concerns we should know about"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
                    disabled={!date || !timeSlot || !service || isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#8B0000] mb-4">Booking Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#7A9B63] mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-gray-700">Appointments must be booked at least 24 hours in advance.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#7A9B63] mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-gray-700">Cancellations must be made at least 12 hours before your appointment to avoid a cancellation fee.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#7A9B63] mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-gray-700">Please arrive 10 minutes before your scheduled appointment time.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
    }