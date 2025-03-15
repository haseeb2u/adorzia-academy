
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  Edit, 
  Trash2, 
  Eye, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { EnhancedCourse } from '@/types/course';

// Database simulation - same implementation as in CourseForm
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

const AdminCourseList = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getCourses, deleteCourse } = useDatabase();
  
  const [courses, setCourses] = useState<EnhancedCourse[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // For forcing re-renders
  
  useEffect(() => {
    // Load courses from the "database"
    const loadCourses = () => {
      try {
        const coursesData = getCourses();
        setCourses(Object.values(coursesData));
      } catch (error) {
        console.error("Failed to load courses:", error);
        toast({
          variant: "destructive",
          title: "Error loading courses",
          description: "Please try refreshing the page",
        });
      }
    };
    
    loadCourses();
  }, [refreshKey]); // Refresh when the key changes
  
  const handleEditCourse = (id: string) => {
    navigate(`/admin/courses/edit/${id}`);
  };

  const handlePreviewCourse = (id: string) => {
    // In a real app, this would navigate to the course preview
    toast({
      title: "Course Preview",
      description: "Course preview functionality is coming soon.",
    });
  };
  
  const handleDeleteCourse = async (id: string) => {
    setIsLoading(true);
    try {
      const success = deleteCourse(id);
      if (success) {
        toast({
          title: "Course deleted",
          description: "The course has been successfully deleted.",
        });
        // Refresh the list
        setRefreshKey(prevKey => prevKey + 1);
      } else {
        throw new Error("Failed to delete course");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error deleting course",
        description: "There was a problem deleting the course. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setSelectedCourseId(null);
    }
  };

  return (
    <div>
      {courses.length === 0 ? (
        <div className="text-center py-10">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-adorzia-midGray" />
          </div>
          <h3 className="text-lg font-medium text-adorzia-darkGray mb-2">No courses found</h3>
          <p className="text-adorzia-midGray mb-4">
            You haven't created any courses yet. Start by creating your first course.
          </p>
          <Button onClick={() => navigate('/admin/courses/new')}>
            Create Your First Course
          </Button>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Modules</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <span className="mr-2 text-xl">{course.emoji}</span>
                    {course.title}
                  </div>
                </TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>{course.modules.length}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreviewCourse(course.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditCourse(course.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => setSelectedCourseId(course.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently delete the course "{course.title}". This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-red-500 hover:bg-red-700"
                            onClick={() => handleDeleteCourse(course.id)}
                            disabled={isLoading}
                          >
                            {isLoading && selectedCourseId === course.id ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Deleting...
                              </>
                            ) : (
                              "Delete Course"
                            )}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AdminCourseList;
