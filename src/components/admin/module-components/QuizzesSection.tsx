
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import { EnhancedModule, Quiz } from '@/types/course';

interface QuizzesSectionProps {
  module: EnhancedModule;
  setModules: React.Dispatch<React.SetStateAction<EnhancedModule[]>>;
  modules: EnhancedModule[];
}

const QuizzesSection: React.FC<QuizzesSectionProps> = ({ module, setModules, modules }) => {
  const addQuiz = (moduleId: string) => {
    const newQuiz = {
      id: `quiz-${Date.now()}`,
      title: '',
      type: 'quiz' as const,
      content: '',
      questions: [],
      passingScore: 70
    };
    
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { ...module, quizzes: [...module.quizzes, newQuiz] } 
          : module
      )
    );
  };

  const updateQuiz = (moduleId: string, quizId: string, field: keyof Quiz, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              quizzes: module.quizzes.map(quiz => 
                quiz.id === quizId 
                  ? { ...quiz, [field]: value } 
                  : quiz
              ) 
            } 
          : module
      )
    );
  };

  const removeQuiz = (moduleId: string, quizId: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              quizzes: module.quizzes.filter(quiz => quiz.id !== quizId) 
            } 
          : module
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Quizzes</h4>
        <Button 
          type="button" 
          size="sm" 
          variant="outline" 
          onClick={() => addQuiz(module.id)}
          className="flex items-center gap-1"
        >
          <Plus className="h-3 w-3" />
          Add Quiz
        </Button>
      </div>
      
      {module.quizzes.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No quizzes added yet. Click "Add Quiz" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {module.quizzes.map((quiz, qIndex) => (
            <Card key={quiz.id}>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-medium">Quiz {qIndex + 1}</h5>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeQuiz(module.id, quiz.id)}
                    className="text-destructive h-6 w-6 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={quiz.title}
                      onChange={(e) => updateQuiz(module.id, quiz.id, 'title', e.target.value)}
                      placeholder="Quiz title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <Textarea
                      value={quiz.content}
                      onChange={(e) => updateQuiz(module.id, quiz.id, 'content', e.target.value)}
                      placeholder="Quiz description..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Passing Score (%)</label>
                    <Input
                      type="number"
                      value={quiz.passingScore}
                      onChange={(e) => updateQuiz(module.id, quiz.id, 'passingScore', parseInt(e.target.value))}
                      placeholder="70"
                      min="1"
                      max="100"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium">Questions</label>
                      <Button 
                        type="button" 
                        size="sm" 
                        variant="outline"
                        className="text-xs h-7"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add Question
                      </Button>
                    </div>
                    <div className="text-center py-4 text-sm text-muted-foreground border rounded-md">
                      Question editor will be added in the next update
                    </div>
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

export default QuizzesSection;
