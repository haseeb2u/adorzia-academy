
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Settings, Image as ImageIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  category: string;
}

interface ContentManagerProps {
  contentItems: ContentItem[];
  onUpdate: (updatedItems: ContentItem[]) => void;
  title: string;
  description?: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({ 
  contentItems, 
  onUpdate, 
  title,
  description 
}) => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      image: '',
      level: '',
      duration: '',
      students: 0,
      rating: 0,
      category: ''
    }
  });

  const handleEdit = (item: ContentItem) => {
    setSelectedItem(item);
    form.reset({
      title: item.title,
      description: item.description,
      image: item.image,
      level: item.level,
      duration: item.duration,
      students: item.students,
      rating: item.rating,
      category: item.category
    });
  };

  const handleUpdate = (values: any) => {
    if (!selectedItem) return;
    
    const updatedItems = contentItems.map(item => 
      item.id === selectedItem.id ? { ...item, ...values } : item
    );
    
    onUpdate(updatedItems);
    toast({
      title: "Content updated",
      description: `Successfully updated "${values.title}"`
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <Settings size={16} />
          Manage {title}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Manage {title}</SheetTitle>
          <SheetDescription>{description || `Edit content items for ${title}`}</SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {contentItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon size={20} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Edit Content</DialogTitle>
                    <DialogDescription>
                      Make changes to this content item
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleUpdate)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea rows={3} {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="image"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Image URL</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="level"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Level</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="duration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Duration</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="students"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Students</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="rating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rating</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  step="0.1" 
                                  min="0" 
                                  max="5" 
                                  {...field} 
                                  onChange={e => field.onChange(parseFloat(e.target.value))}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContentManager;
