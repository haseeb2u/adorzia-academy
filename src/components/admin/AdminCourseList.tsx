
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Eye, Plus } from 'lucide-react';

// Mock course data - in a real app, this would come from an API
const courses = [
  {
    id: '1',
    title: 'Fashion Design Fundamentals',
    level: 'Beginner Level',
    modules: 5,
    enrollments: 125,
    publishStatus: 'Published',
    lastUpdated: '2023-08-15',
  },
  {
    id: '2',
    title: 'Advanced Textile Design & Patterns',
    level: 'Intermediate Level',
    modules: 4,
    enrollments: 78,
    publishStatus: 'Published',
    lastUpdated: '2023-09-22',
  },
  {
    id: '3',
    title: 'Fashion Entrepreneurship & Business',
    level: 'Expert Level',
    modules: 4,
    enrollments: 45,
    publishStatus: 'Published',
    lastUpdated: '2023-10-05',
  },
  {
    id: '4',
    title: 'Sustainable Fashion Practices',
    level: 'Intermediate Level',
    modules: 3,
    enrollments: 0,
    publishStatus: 'Draft',
    lastUpdated: '2023-11-01',
  },
];

const AdminCourseList = () => {
  const navigate = useNavigate();

  const handleEdit = (courseId: string) => {
    navigate(`/admin/courses/edit/${courseId}`);
  };

  const handleView = (courseId: string) => {
    navigate(`/courses/demo`); // For demo, always redirect to demo course
  };

  const handleDelete = (courseId: string) => {
    // In a real app, this would make an API call to delete the course
    alert(`Delete course ${courseId} (would be implemented with a proper confirmation dialog)`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">All Courses</h3>
        <Button 
          onClick={() => navigate('/admin/courses/new')}
          className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Course
        </Button>
      </div>
      
      <Table>
        <TableCaption>A list of all courses in Adorzia Academy.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Course Title</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Modules</TableHead>
            <TableHead>Enrollments</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>{course.level}</TableCell>
              <TableCell>{course.modules}</TableCell>
              <TableCell>{course.enrollments}</TableCell>
              <TableCell>
                <Badge 
                  className={
                    course.publishStatus === 'Published' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-amber-50 text-amber-600'
                  }
                >
                  {course.publishStatus}
                </Badge>
              </TableCell>
              <TableCell>{course.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleView(course.id)}
                    title="View Course"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEdit(course.id)}
                    title="Edit Course"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDelete(course.id)}
                    className="text-destructive hover:bg-destructive/10"
                    title="Delete Course"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminCourseList;
