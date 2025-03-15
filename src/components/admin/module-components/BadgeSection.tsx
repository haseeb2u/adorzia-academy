
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EnhancedModule, ModuleBadge } from '@/types/course';

interface BadgeSectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const BadgeSection: React.FC<BadgeSectionProps> = ({ module, setModules, modules }) => {
  const updateBadge = (moduleId: string, field: keyof ModuleBadge, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              badge: module.badge ? { ...module.badge, [field]: value } : undefined
            } 
          : module
      )
    );
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium mb-4">Module Badge</h4>
      {module.badge ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Badge Name</label>
            <Input
              value={module.badge.name}
              onChange={(e) => updateBadge(module.id, 'name', e.target.value)}
              placeholder="e.g., Fashion Pioneer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Badge Image URL</label>
            <Input
              value={module.badge.imageUrl}
              onChange={(e) => updateBadge(module.id, 'imageUrl', e.target.value)}
              placeholder="https://example.com/badge.png"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Badge Description</label>
            <Textarea
              value={module.badge.description}
              onChange={(e) => updateBadge(module.id, 'description', e.target.value)}
              placeholder="What this badge represents and how it was earned..."
            />
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No badge configured for this module.
        </div>
      )}
    </div>
  );
};

export default BadgeSection;
