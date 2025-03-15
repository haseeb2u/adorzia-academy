
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft, Save } from 'lucide-react';
import EnhancedModuleFormList from '@/components/admin/EnhancedModuleFormList';
import { EnhancedModule } from '@/types/course';

// Define form schema
const courseFormSchema = z.object({
  title: z.string().min(5, {
    message: "Course title must be at least 5 characters.",
  }),
  level: z.string().min(1, {
    message: "Please select a course level.",
  }),
  emoji: z.string().min(1, {
    message: "Please select an emoji.",
  }),
  objective: z.string().min(20, {
    message: "Course objective must be at least 20 characters.",
  }),
  accessType: z.enum(["Registered", "Paid", "Exclusive"]),
  accessDescription: z.string().min(5, {
    message: "Access description must be at least 5 characters.",
  }),
  hasCertification: z.boolean().default(false),
  communityForums: z.boolean().default(true),
  liveQAsessions: z.boolean().default(true),
  badgesSystem: z.boolean().default(true),
});

type CourseFormValues = z.infer<typeof courseFormSchema>;

// Mock course data for editing an existing course
const mockCourseData = {
  '1': {
    title: 'Fashion Design Fundamentals',
    level: 'Beginner Level',
    emoji: '🏆',
    objective: 'Master the basics of fashion design, from sketching to color theory, with hands-on StyleBox challenges.',
    accessType: 'Registered' as const,
    accessDescription: 'Open to All Users',
    hasCertification: true,
    communityForums: true,
    liveQAsessions: true,
    badgesSystem: true,
    modules: [
      {
        id: 'module-1',
        title: "Introduction to Fashion Design",
        description: "An overview of fashion design principles and history",
        videoLectures: [
          {
            id: 'video-1',
            title: "Fashion Design Fundamentals",
            type: 'video' as const,
            content: "Learn the basics of fashion design in this introductory video",
            duration: 15,
            url: "https://example.com/video1"
          }
        ],
        readings: [
          {
            id: 'reading-1',
            title: "Fashion Design Through History",
            type: 'reading' as const,
            content: "Explore how fashion has evolved through different eras",
            author: "Jane Smith"
          }
        ],
        quizzes: [
          {
            id: 'quiz-1',
            title: "Fashion Basics Quiz",
            type: 'quiz' as const,
            content: "Test your understanding of fashion design principles",
            questions: [],
            passingScore: 70
          }
        ],
        challenge: {
          id: 'challenge-1',
          title: "Create a Minimalist Streetwear Outfit",
          type: 'challenge' as const,
          content: "Design a modern, sleek, and wearable street outfit",
          difficulty: "Easy" as const,
          requirements: [
            "Use a neutral color palette (white, black, grey, beige)",
            "Create oversized or structured fits",
            "Use cotton, denim, or soft fleece fabrics"
          ],
          evaluation: {
            autoFeedback: true,
            peerReview: true,
            expertAssessment: true
          }
        },
        badge: {
          id: 'badge-1',
          name: "Fashion Pioneer",
          description: "Awarded for completing the introduction to fashion design",
          imageUrl: "/badges/fashion-pioneer.png"
        },
        forum: {
          discussions: []
        },
        evaluationSystem: {
          autoFeedback: true,
          peerReview: true,
          expertAssessment: true
        },
        duration: 2,
        order: 1
      },
      // Additional modules would be included here
    ]
  }
};

const CourseForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for enhanced modules
  const [modules, setModules] = useState<EnhancedModule[]>(
    isEditing && id && mockCourseData[id as keyof typeof mockCourseData]?.modules 
      ? mockCourseData[id as keyof typeof mockCourseData].modules
      : [{
          id: `module-${Date.now()}`,
          title: '',
          description: '',
          videoLectures: [],
          readings: [],
          quizzes: [],
          challenge: {
            id: `challenge-${Date.now()}`,
            title: '',
            type: 'challenge',
            content: '',
            difficulty: 'Medium',
            requirements: [],
            evaluation: {
              autoFeedback: true,
              peerReview: false,
              expertAssessment: true
            }
          },
          badge: {
            id: `badge-${Date.now()}`,
            name: '',
            description: '',
            imageUrl: ''
          },
          forum: {
            discussions: []
          },
          evaluationSystem: {
            autoFeedback: true,
            peerReview: true,
            expertAssessment: true
          },
          duration: 2,
          order: 1
        }]
  );

  // Set up form with default values
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: isEditing && id && mockCourseData[id as keyof typeof mockCourseData]
      ? {
          title: mockCourseData[id as keyof typeof mockCourseData].title,
          level: mockCourseData[id as keyof typeof mockCourseData].level,
          emoji: mockCourseData[id as keyof typeof mockCourseData].emoji,
          objective: mockCourseData[id as keyof typeof mockCourseData].objective,
          accessType: mockCourseData[id as keyof typeof mockCourseData].accessType,
          accessDescription: mockCourseData[id as keyof typeof mockCourseData].accessDescription,
          hasCertification: mockCourseData[id as keyof typeof mockCourseData].hasCertification,
          communityForums: mockCourseData[id as keyof typeof mockCourseData].communityForums,
          liveQAsessions: mockCourseData[id as keyof typeof mockCourseData].liveQAsessions,
          badgesSystem: mockCourseData[id as keyof typeof mockCourseData].badgesSystem,
        }
      : {
          title: '',
          level: 'Beginner Level',
          emoji: '📚',
          objective: '',
          accessType: 'Registered',
          accessDescription: 'Open to All Users',
          hasCertification: true,
          communityForums: true,
          liveQAsessions: true,
          badgesSystem: true,
        },
  });

  const onSubmit = (values: CourseFormValues) => {
    // Validate that we have at least one module
    if (modules.length === 0) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "At least one module is required",
      });
      return;
    }

    // Check if all modules have required fields
    const incompleteModules = modules.some(
      module => !module.title || !module.description || !module.challenge.title
    );

    if (incompleteModules) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "All modules must have a title, description, and StyleBox challenge",
      });
      return;
    }

    // In a real app, we would send this data to an API
    console.log('Form values:', values);
    console.log('Enhanced Modules:', modules);

    toast({
      title: `Course ${isEditing ? 'updated' : 'created'} successfully`,
      description: `${values.title} has been ${isEditing ? 'updated' : 'created'} with enhanced module structure.`,
    });

    // Redirect to admin dashboard
    navigate('/admin');
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-adorzia-lightGray">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              className="text-white p-0 h-auto"
              onClick={() => navigate('/admin')}
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Dashboard
            </Button>
          </div>
          <h1 className="text-3xl font-bold">{isEditing ? 'Edit Course' : 'Create New Course'}</h1>
          <p className="text-adorzia-lightGray mt-2">
            {isEditing 
              ? 'Update course details and enhanced modules with videos, readings, quizzes, and StyleBox challenges' 
              : 'Define comprehensive course structure with theory, practice, and evaluation systems'}
          </p>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Fashion Design Fundamentals" {...field} />
                        </FormControl>
                        <FormDescription>
                          An engaging title that describes the course content.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Level</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="Beginner Level">Beginner Level</option>
                            <option value="Intermediate Level">Intermediate Level</option>
                            <option value="Expert Level">Expert Level</option>
                          </select>
                        </FormControl>
                        <FormDescription>
                          The experience level required for this course.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="emoji"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Emoji</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 🏆" {...field} />
                        </FormControl>
                        <FormDescription>
                          A representative emoji for your course.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="accessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Access Type</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            {...field}
                          >
                            <option value="Registered">Registered (Free)</option>
                            <option value="Paid">Paid Subscription</option>
                            <option value="Exclusive">Exclusive (VIP)</option>
                          </select>
                        </FormControl>
                        <FormDescription>
                          Who can access this course?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="accessDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Access Description</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Open to All Users" {...field} />
                      </FormControl>
                      <FormDescription>
                        Short description of access requirements.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="objective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Objective</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Master the basics of fashion design, from sketching to color theory, with hands-on StyleBox challenges." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        What students will learn from this course.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="hasCertification"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Offer Certification
                          </FormLabel>
                          <FormDescription>
                            Students will receive a certificate upon completion.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="badgesSystem"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Enable Badges System
                          </FormLabel>
                          <FormDescription>
                            Award badges for module completion and achievements.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="communityForums"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Enable Community Forums
                          </FormLabel>
                          <FormDescription>
                            Allow students to discuss and interact on module forums.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="liveQAsessions"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Enable Live Q&A Sessions
                          </FormLabel>
                          <FormDescription>
                            Schedule live sessions with instructors for each module.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enhanced Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <EnhancedModuleFormList
                  modules={modules}
                  setModules={setModules}
                />
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" className="bg-adorzia-accent hover:bg-adorzia-accentHover flex items-center gap-2">
                <Save className="h-4 w-4" />
                {isEditing ? 'Update Enhanced Course' : 'Create Enhanced Course'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseForm;
