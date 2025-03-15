
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ModuleFormData } from '@/types/course';
import { Plus, Minus } from 'lucide-react';

interface ModuleFormListProps {
  modules: ModuleFormData[];
  setModules: React.Dispatch<React.SetStateAction<ModuleFormData[]>>;
}

const ModuleFormList: React.FC<ModuleFormListProps> = ({ modules, setModules }) => {
  const addModule = () => {
    const newId = `module-${modules.length}`;
    setModules([...modules, { 
      id: newId, 
      title: '', 
      description: '',
      duration: 2,
      order: modules.length + 1
    }]);
  };

  const removeModule = (id: string) => {
    if (modules.length <= 1) {
      return; // Don't remove if it's the last module
    }
    setModules(modules.filter(module => module.id !== id));
  };

  const updateModule = (id: string, field: keyof ModuleFormData, value: string | number) => {
    setModules(
      modules.map(module => 
        module.id === id 
          ? { ...module, [field]: value } 
          : module
      )
    );
  };

  return (
    <div className="space-y-8">
      {modules.map((module, index) => (
        <div key={module.id} className="p-6 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Module {index + 1}</h3>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={() => removeModule(module.id)}
              disabled={modules.length <= 1}
              className="text-destructive hover:bg-destructive/10"
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Module Title
              </label>
              <Input 
                value={module.title} 
                onChange={(e) => updateModule(module.id, 'title', e.target.value)}
                placeholder="e.g., Introduction to Fashion Design"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Module Description
              </label>
              <Textarea 
                value={module.description} 
                onChange={(e) => updateModule(module.id, 'description', e.target.value)}
                placeholder="e.g., What is Fashion Design? History & Evolution."
                className="min-h-[80px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Module Duration (hours)
              </label>
              <Input 
                type="number"
                value={module.duration} 
                onChange={(e) => updateModule(module.id, 'duration', parseInt(e.target.value))}
                placeholder="e.g., 2"
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={addModule}
        className="flex w-full items-center justify-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Add Module
      </Button>
    </div>
  );
};

export default ModuleFormList;
