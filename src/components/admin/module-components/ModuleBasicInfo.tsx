
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Minus, Video, BookOpen, HelpCircle, Puzzle, Award, MessageSquare } from 'lucide-react';
import { EnhancedModule } from '@/types/course';
import VideoSection from './VideoSection';
import ReadingsSection from './ReadingsSection';
import QuizzesSection from './QuizzesSection';
import StyleBoxSection from './StyleBoxSection';
import BadgeSection from './BadgeSection';
import CommunitySection from './CommunitySection';

interface ModuleBasicInfoProps {
  module: EnhancedModule;
  index: number;
  removeModule: (id: string) => void;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const ModuleBasicInfo: React.FC<ModuleBasicInfoProps> = ({ 
  module, 
  index, 
  removeModule, 
  setModules,
  modules
}) => {
  const updateModule = (id: string, field: keyof EnhancedModule, value: any) => {
    setModules(
      modules.map(module => 
        module.id === id 
          ? { ...module, [field]: value } 
          : module
      )
    );
  };

  return (
    <div className="p-6 border rounded-lg bg-gray-50 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Module {index + 1} Configuration</h3>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Module Title</label>
          <Input 
            value={module.title} 
            onChange={(e) => updateModule(module.id, 'title', e.target.value)}
            placeholder="e.g., Introduction to Fashion Design"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Module Duration (hours)</label>
          <Input 
            type="number"
            value={module.duration} 
            onChange={(e) => updateModule(module.id, 'duration', parseInt(e.target.value))}
            placeholder="e.g., 2"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Module Description</label>
        <Textarea 
          value={module.description} 
          onChange={(e) => updateModule(module.id, 'description', e.target.value)}
          placeholder="Provide a detailed description of this module..."
          className="min-h-[80px]"
        />
      </div>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="w-full justify-start mb-4">
          <TabsTrigger value="videos" className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="readings" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Readings
          </TabsTrigger>
          <TabsTrigger value="quizzes" className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            Quizzes
          </TabsTrigger>
          <TabsTrigger value="stylebox" className="flex items-center gap-1">
            <Puzzle className="h-4 w-4" />
            StyleBox
          </TabsTrigger>
          <TabsTrigger value="badges" className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            Badge
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            Community
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <VideoSection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
        
        <TabsContent value="readings">
          <ReadingsSection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
        
        <TabsContent value="quizzes">
          <QuizzesSection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
        
        <TabsContent value="stylebox">
          <StyleBoxSection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
        
        <TabsContent value="badges">
          <BadgeSection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
        
        <TabsContent value="community">
          <CommunitySection 
            module={module} 
            setModules={setModules} 
            modules={modules} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleBasicInfo;
