
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import { EnhancedModule, ReadingMaterial } from '@/types/course';

interface ReadingsSectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const ReadingsSection: React.FC<ReadingsSectionProps> = ({ module, setModules, modules }) => {
  const addReadingMaterial = (moduleId: string) => {
    const newReading = {
      id: `reading-${Date.now()}`,
      title: '',
      type: 'reading' as const,
      content: '',
      author: ''
    };
    
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { ...module, readings: [...module.readings, newReading] } 
          : module
      )
    );
  };

  const updateReadingMaterial = (moduleId: string, readingId: string, field: keyof ReadingMaterial, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              readings: module.readings.map(reading => 
                reading.id === readingId 
                  ? { ...reading, [field]: value } 
                  : reading
              ) 
            } 
          : module
      )
    );
  };

  const removeReadingMaterial = (moduleId: string, readingId: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              readings: module.readings.filter(reading => reading.id !== readingId) 
            } 
          : module
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Reading Materials</h4>
        <Button 
          type="button" 
          size="sm" 
          variant="outline" 
          onClick={() => addReadingMaterial(module.id)}
          className="flex items-center gap-1"
        >
          <Plus className="h-3 w-3" />
          Add Reading
        </Button>
      </div>
      
      {module.readings.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No reading materials added yet. Click "Add Reading" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {module.readings.map((reading, rIndex) => (
            <Card key={reading.id}>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-medium">Reading {rIndex + 1}</h5>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeReadingMaterial(module.id, reading.id)}
                    className="text-destructive h-6 w-6 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={reading.title}
                      onChange={(e) => updateReadingMaterial(module.id, reading.id, 'title', e.target.value)}
                      placeholder="Reading title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Author</label>
                    <Input
                      value={reading.author || ''}
                      onChange={(e) => updateReadingMaterial(module.id, reading.id, 'author', e.target.value)}
                      placeholder="Author name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <Textarea
                      value={reading.content}
                      onChange={(e) => updateReadingMaterial(module.id, reading.id, 'content', e.target.value)}
                      placeholder="Reading material content..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadingsSection;
