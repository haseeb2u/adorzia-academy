
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { EnhancedModule } from '@/types/course';
import ModuleBasicInfo from './module-components/ModuleBasicInfo';
import VideoSection from './module-components/VideoSection';
import ReadingsSection from './module-components/ReadingsSection';
import QuizzesSection from './module-components/QuizzesSection';
import StyleBoxSection from './module-components/StyleBoxSection';
import BadgeSection from './module-components/BadgeSection';
import CommunitySection from './module-components/CommunitySection';

// Define a complete EnhancedModuleFormData type that includes all required fields
type EnhancedModuleFormData = EnhancedModule;

interface EnhancedModuleFormListProps {
  modules: EnhancedModuleFormData[];
  setModules: React.Dispatch<React.SetStateAction<EnhancedModuleFormData[]>>;
}

const EnhancedModuleFormList: React.FC<EnhancedModuleFormListProps> = ({ modules, setModules }) => {
  const [activeTabId, setActiveTabId] = useState<string | null>(modules.length > 0 ? modules[0].id : null);

  const addModule = () => {
    const newId = `module-${Date.now()}`;
    const newModule: EnhancedModuleFormData = { 
      id: newId, 
      title: '', 
      description: '',
      resources: [], // Include the required resources array
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
      order: modules.length + 1
    };
    setModules([...modules, newModule]);
    setActiveTabId(newId);
  };

  const removeModule = (id: string) => {
    if (modules.length <= 1) {
      return; // Don't remove if it's the last module
    }
    const newModules = modules.filter(module => module.id !== id);
    setModules(newModules);
    
    if (activeTabId === id) {
      setActiveTabId(newModules.length > 0 ? newModules[0].id : null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Course Modules</h3>
        <Button 
          type="button" 
          variant="outline" 
          onClick={addModule}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Module
        </Button>
      </div>

      {modules.length > 0 && (
        <Tabs value={activeTabId || undefined} onValueChange={(value) => setActiveTabId(value)}>
          <TabsList className="flex flex-wrap mb-4">
            {modules.map((module, index) => (
              <TabsTrigger key={module.id} value={module.id} className="m-1">
                Module {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {modules.map((module, index) => (
            <TabsContent key={module.id} value={module.id} className="space-y-6">
              <ModuleBasicInfo 
                module={module} 
                index={index} 
                removeModule={removeModule} 
                setModules={setModules} 
                modules={modules}
              />
            </TabsContent>
          ))}
        </Tabs>
      )}
      
      {modules.length === 0 && (
        <div className="text-center py-12 border rounded-lg">
          <p className="text-muted-foreground mb-4">No modules added yet</p>
          <Button 
            type="button" 
            variant="outline" 
            onClick={addModule}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add First Module
          </Button>
        </div>
      )}
    </div>
  );
};

export default EnhancedModuleFormList;
