'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
    const { isAuthenticated, userName, userEmail, userImage } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('journey');

    // Mock data for wellness journey
    const journeyData = {
        progress: 68,
        nextAppointment: '2023-06-15T10:30:00',
        recentActivities: [
            { date: '2023-06-01', activity: 'Wellness Consultation', notes: 'Initial assessment completed' },
            { date: '2023-06-08', activity: 'Nutrition Planning', notes: 'Meal plan created' },
        ],
        goals: [
            { id: 1, title: 'Reduce stress levels', progress: 70 },
            { id: 2, title: 'Improve sleep quality', progress: 45 },
            { id: 3, title: 'Increase daily water intake', progress: 80 },
        ],
        metrics: [
            { label: 'Weight', value: '68kg', change: '-2kg' },
            { label: 'BMI', value: '22.5', change: '-0.8' },
            { label: 'Body Fat %', value: '24%', change: '-1.5%' },
        ]
    };

    // Redirect if not authenticated
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-4">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-2 text-center">
                        <CardTitle className="text-3xl font-bold text-teal-700">Access Restricted</CardTitle>
                        <CardDescription className="text-gray-500">
                            Please sign in to view your profile
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            onClick={() => router.push('/login')}
                            className="w-full bg-teal-600 hover:bg-teal-700"
                        >
                            Sign In
                        </Button>
                        <p className="text-sm text-gray-500 text-center">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-teal-600 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    // Format date for display
    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' } as Intl.DateTimeFormatOptions;
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-teal-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Sidebar */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Card className="shadow-md">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <Avatar className="h-24 w-24 border-2 border-[#7A9B63]">
                                        {userImage ? (
                                            <AvatarImage src={userImage} alt={userName} />
                                        ) : (
                                            <AvatarFallback className="bg-[#8B0000] text-white text-xl">
                                                {userName?.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        )}
                                    </Avatar>
                                    <div className="text-center">
                                        <h2 className="text-2xl font-bold text-gray-800">{userName}</h2>
                                        <p className="text-gray-500">{userEmail}</p>
                                    </div>
                                    <div className="w-full pt-4">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600">Wellness Journey</span>
                                            <span className="font-medium">{journeyData.progress}%</span>
                                        </div>
                                        <Progress value={journeyData.progress} className="h-2 bg-gray-200" />
                                    </div>
                                    <div className="w-full space-y-2 pt-2">
                                        <Button
                                            className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
                                            onClick={() => router.push('/booking')}
                                        >
                                            Book Appointment
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="w-full border-[#7A9B63] text-[#7A9B63] hover:bg-[#7A9B63]/10"
                                        >
                                            View Health Report
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <Card className="shadow-md">
                            <CardHeader>
                                <Tabs defaultValue="journey" className="w-full" onValueChange={setActiveTab}>
                                    <TabsList className="grid grid-cols-3 w-full">
                                        <TabsTrigger value="journey">Wellness Journey</TabsTrigger>
                                        <TabsTrigger value="appointments">Appointments</TabsTrigger>
                                        <TabsTrigger value="settings">Settings</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </CardHeader>
                            <CardContent>
                                {activeTab === 'journey' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Your Wellness Goals</h3>
                                            <div className="space-y-4">
                                                {journeyData.goals.map((goal) => (
                                                    <div key={goal.id} className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span className="font-medium">{goal.title}</span>
                                                            <span>{goal.progress}%</span>
                                                        </div>
                                                        <Progress value={goal.progress} className="h-2" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Health Metrics</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {journeyData.metrics.map((metric, index) => (
                                                    <Card key={index} className="bg-white/50">
                                                        <CardContent className="pt-6">
                                                            <div className="text-center">
                                                                <p className="text-gray-500">{metric.label}</p>
                                                                <p className="text-2xl font-bold">{metric.value}</p>
                                                                <p className={`text-sm ${metric.change.startsWith('-') ? 'text-green-600' : 'text-red-600'}`}>
                                                                    {metric.change}
                                                                </p>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Recent Activities</h3>
                                            <div className="space-y-4">
                                                {journeyData.recentActivities.map((activity, index) => (
                                                    <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white/50">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-medium text-[#7A9B63]">{activity.activity}</h4>
                                                                <p className="text-gray-600 text-sm">{activity.notes}</p>
                                                            </div>
                                                            <span className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'appointments' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Upcoming Appointments</h3>
                                            {journeyData.nextAppointment ? (
                                                <div className="p-4 rounded-lg border border-gray-200 bg-white/50">
                                                    <div className="flex flex-col md:flex-row justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-[#7A9B63]">Wellness Consultation</h4>
                                                            <p className="text-gray-600">{formatDate(journeyData.nextAppointment)}</p>
                                                        </div>
                                                        <div className="mt-4 md:mt-0 flex space-x-2">
                                                            <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50">
                                                                Cancel
                                                            </Button>
                                                            <Button variant="outline" size="sm" className="border-[#7A9B63] text-[#7A9B63] hover:bg-[#7A9B63]/10">
                                                                Reschedule
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center py-8">
                                                    <p className="text-gray-500 mb-4">No upcoming appointments</p>
                                                    <Button
                                                        className="bg-[#8B0000] hover:bg-[#8B0000]/90 text-white"
                                                        onClick={() => router.push('/booking')}
                                                    >
                                                        Book Now
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Appointment History</h3>
                                            <div className="space-y-4">
                                                {journeyData.recentActivities.map((activity, index) => (
                                                    <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white/50">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="font-medium text-[#7A9B63]">{activity.activity}</h4>
                                                                <p className="text-gray-600 text-sm">{activity.notes}</p>
                                                            </div>
                                                            <span className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'settings' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Account Settings</h3>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input id="name" defaultValue={userName} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input id="email" defaultValue={userEmail} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input id="password" type="password" value="********" />
                                                </div>
                                                <Button className="bg-[#7A9B63] hover:bg-[#7A9B63]/90 text-white">
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-[#8B0000]">Notification Preferences</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Email Notifications</p>
                                                        <p className="text-sm text-gray-500">Receive updates about appointments and promotions</p>
                                                    </div>
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="email-notifications"
                                                            aria-describedby="email-notifications-description"
                                                            name="email-notifications"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-[#8B0000] focus:ring-[#8B0000]"
                                                            defaultChecked
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">SMS Notifications</p>
                                                        <p className="text-sm text-gray-500">Receive text messages for appointment reminders</p>
                                                    </div>
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="sms-notifications"
                                                            aria-describedby="sms-notifications-description"
                                                            name="sms-notifications"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-[#8B0000] focus:ring-[#8B0000]"
                                                            defaultChecked
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
