
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Plus, Minus } from 'lucide-react';
import { EnhancedModule, StyleBoxChallenge } from '@/types/course';

interface StyleBoxSectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const StyleBoxSection: React.FC<StyleBoxSectionProps> = ({ module, setModules, modules }) => {
  const updateChallenge = (moduleId: string, field: keyof StyleBoxChallenge, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              challenge: { ...module.challenge, [field]: value }
            } 
          : module
      )
    );
  };

  const updateChallengeEvaluation = (moduleId: string, field: keyof StyleBoxChallenge['evaluation'], value: boolean) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              challenge: { 
                ...module.challenge, 
                evaluation: {
                  ...module.challenge.evaluation,
                  [field]: value
                }
              }
            } 
          : module
      )
    );
  };

  const addRequirement = (moduleId: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              challenge: { 
                ...module.challenge, 
                requirements: [...module.challenge.requirements, '']
              }
            } 
          : module
      )
    );
  };

  const updateRequirement = (moduleId: string, index: number, value: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              challenge: { 
                ...module.challenge, 
                requirements: module.challenge.requirements.map((req, i) => 
                  i === index ? value : req
                )
              }
            } 
          : module
      )
    );
  };

  const removeRequirement = (moduleId: string, index: number) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              challenge: { 
                ...module.challenge, 
                requirements: module.challenge.requirements.filter((_, i) => i !== index)
              }
            } 
          : module
      )
    );
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium mb-4">StyleBox Challenge</h4>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Challenge Title</label>
          <Input
            value={module.challenge.title}
            onChange={(e) => updateChallenge(module.id, 'title', e.target.value)}
            placeholder="e.g., Create a Minimalist Streetwear Outfit"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Difficulty Level</label>
          <select 
            value={module.challenge.difficulty} 
            onChange={(e) => updateChallenge(
              module.id, 
              'difficulty', 
              e.target.value as 'Easy' | 'Medium' | 'Hard'
            )}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Challenge Description</label>
          <Textarea
            value={module.challenge.content}
            onChange={(e) => updateChallenge(module.id, 'content', e.target.value)}
            placeholder="Detailed explanation of the challenge..."
            className="min-h-[100px]"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Requirements</label>
            <Button 
              type="button" 
              size="sm" 
              variant="outline"
              onClick={() => addRequirement(module.id)}
              className="text-xs h-7"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add Requirement
            </Button>
          </div>
          
          {module.challenge.requirements.length === 0 ? (
            <div className="text-center py-4 text-sm text-muted-foreground border rounded-md">
              No requirements added. Click "Add Requirement" to create one.
            </div>
          ) : (
            <div className="space-y-2">
              {module.challenge.requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={req}
                    onChange={(e) => updateRequirement(module.id, index, e.target.value)}
                    placeholder={`Requirement ${index + 1}`}
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeRequirement(module.id, index)}
                    className="text-destructive h-9 w-9 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h5 className="text-sm font-medium mb-2">Evaluation Methods</h5>
          <div className="flex items-center space-x-2">
            <Switch 
              id={`auto-feedback-${module.id}`}
              checked={!!module.challenge.evaluation.autoFeedback}
              onCheckedChange={(checked) => 
                updateChallengeEvaluation(module.id, 'autoFeedback', checked)
              }
            />
            <Label htmlFor={`auto-feedback-${module.id}`}>Automated Feedback</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id={`peer-review-${module.id}`}
              checked={!!module.challenge.evaluation.peerReview}
              onCheckedChange={(checked) => 
                updateChallengeEvaluation(module.id, 'peerReview', checked)
              }
            />
            <Label htmlFor={`peer-review-${module.id}`}>Peer Review</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id={`expert-assessment-${module.id}`}
              checked={!!module.challenge.evaluation.expertAssessment}
              onCheckedChange={(checked) => 
                updateChallengeEvaluation(module.id, 'expertAssessment', checked)
              }
            />
            <Label htmlFor={`expert-assessment-${module.id}`}>Expert Assessment</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleBoxSection;
