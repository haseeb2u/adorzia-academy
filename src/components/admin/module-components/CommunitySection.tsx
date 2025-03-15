
import React from 'react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { EnhancedModule } from '@/types/course';

interface CommunitySectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ module, setModules, modules }) => {
  return (
    <div className="space-y-4">
      <h4 className="font-medium mb-4">Community Features</h4>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center space-x-2 mb-4">
            <Switch id={`forum-enabled-${module.id}`} defaultChecked />
            <Label htmlFor={`forum-enabled-${module.id}`}>Enable Discussion Forum</Label>
          </div>
          <p className="text-sm text-muted-foreground">
            A dedicated forum will be created for this module where students can ask questions and discuss concepts.
          </p>
        </div>
        
        <div className="p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center space-x-2 mb-2">
            <Switch id={`live-qa-${module.id}`} defaultChecked />
            <Label htmlFor={`live-qa-${module.id}`}>Schedule Live Q&A Sessions</Label>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Set up scheduled live Q&A sessions with instructors for this module.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">Date</label>
              <Input type="date" className="text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Time</label>
              <Input type="time" className="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
