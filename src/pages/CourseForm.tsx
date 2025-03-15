import React, { useState, useEffect } from 'react';
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
import { ChevronLeft, Save, Loader2 } from 'lucide-react';
import EnhancedModuleFormList from '@/components/admin/EnhancedModuleFormList';
import { EnhancedModule, EnhancedCourse } from '@/types/course';

const useDatabase = () => {
  const storageKey = 'adorziaCoursesData';
  
  const getCourses = (): Record<string, EnhancedCourse> => {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored courses", e);
      return {};
    }
  };
  
  const getCourse = (id: string): EnhancedCourse | null => {
    const courses = getCourses();
    return courses[id] || null;
  };
  
  const saveCourse = (course: EnhancedCourse): EnhancedCourse => {
    const courses = getCourses();
    courses[course.id] = course;
    localStorage.setItem(storageKey, JSON.stringify(courses));
    return course;
  };
  
  const deleteCourse = (id: string): boolean => {
    const courses = getCourses();
    if (!courses[id]) return false;
    
    delete courses[id];
    localStorage.setItem(storageKey, JSON.stringify(courses));
    return true;
  };
  
  return { getCourses, getCourse, saveCourse, deleteCourse };
};

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

const CourseForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getCourse, saveCourse } = useDatabase();
  const [isLoading, setIsLoading] = useState(false);
  
  const [modules, setModules] = useState<EnhancedModule[]>([{
    id: `module-${Date.now()}`,
    title: '',
    description: '',
    resources: [],
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
  }]);

  useEffect(() => {
    if (isEditing && id) {
      const existingCourse = getCourse(id);
      if (existingCourse) {
        setModules(existingCourse.modules);
      }
    }
  }, [isEditing, id]);

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: isEditing && id && getCourse(id)
      ? {
          title: getCourse(id)!.title,
          level: getCourse(id)!.level,
          emoji: getCourse(id)!.emoji,
          objective: getCourse(id)!.objective,
          accessType: getCourse(id)!.access.type,
          accessDescription: getCourse(id)!.access.description,
          hasCertification: getCourse(id)!.certification,
          communityForums: getCourse(id)!.communityForums || true,
          liveQAsessions: getCourse(id)!.liveQAsessions || true,
          badgesSystem: getCourse(id)!.badgesSystem || true,
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
    setIsLoading(true);
    
    if (modules.length === 0) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "At least one module is required",
      });
      setIsLoading(false);
      return;
    }

    const incompleteModules = modules.some(
      module => !module.title || !module.description || !module.challenge.title
    );

    if (incompleteModules) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "All modules must have a title, description, and StyleBox challenge",
      });
      setIsLoading(false);
      return;
    }

    const courseData: EnhancedCourse = {
      id: isEditing && id ? id : `course-${Date.now()}`,
      title: values.title,
      level: values.level,
      emoji: values.emoji,
      objective: values.objective,
      access: {
        type: values.accessType,
        description: values.accessDescription,
      },
      modules: modules,
      certification: values.hasCertification,
      communityForums: values.communityForums,
      liveQAsessions: values.liveQAsessions,
      badgesSystem: values.badgesSystem,
      instructors: [
        {
          id: "instructor-1",
          name: "Jane Doe",
          avatar: "/assets/instructor1.jpg",
          bio: "Fashion designer with over 10 years of experience",
          expertise: ["Fashion Design", "Textile Design", "Pattern Making"]
        }
      ]
    };

    try {
      saveCourse(courseData);
      
      toast({
        title: `Course ${isEditing ? 'updated' : 'created'} successfully`,
        description: `${values.title} has been ${isEditing ? 'updated' : 'created'} with enhanced module structure.`,
      });

      navigate('/admin');
    } catch (error) {
      console.error("Error saving course:", error);
      toast({
        variant: "destructive",
        title: "Save Error",
        description: "There was an error saving the course. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-adorzia-lightGray">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8 pt-24">
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
              <Button 
                type="submit" 
                className="bg-adorzia-accent hover:bg-adorzia-accentHover flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {isEditing ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    {isEditing ? 'Update Enhanced Course' : 'Create Enhanced Course'}
                  </>
                )}
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
