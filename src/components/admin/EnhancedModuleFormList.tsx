
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { EnhancedModule } from '@/types/course';
import { 
  Plus, Minus, Video, BookOpen, 
  HelpCircle, Puzzle, MessageSquare, Award 
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface EnhancedModuleFormData extends Omit<EnhancedModule, 'resources'> {
  // We'll use this for the form
}

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

  const updateModule = (id: string, field: keyof EnhancedModuleFormData, value: any) => {
    setModules(
      modules.map(module => 
        module.id === id 
          ? { ...module, [field]: value } 
          : module
      )
    );
  };

  const addVideoLecture = (moduleId: string) => {
    const newVideo = {
      id: `video-${Date.now()}`,
      title: '',
      type: 'video' as const,
      content: '',
      duration: 15,
      url: ''
    };
    
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { ...module, videoLectures: [...module.videoLectures, newVideo] } 
          : module
      )
    );
  };

  const updateVideoLecture = (moduleId: string, videoId: string, field: keyof VideoLecture, value: any) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              videoLectures: module.videoLectures.map(video => 
                video.id === videoId 
                  ? { ...video, [field]: value } 
                  : video
              ) 
            } 
          : module
      )
    );
  };

  const removeVideoLecture = (moduleId: string, videoId: string) => {
    setModules(
      modules.map(module => 
        module.id === moduleId 
          ? { 
              ...module, 
              videoLectures: module.videoLectures.filter(video => video.id !== videoId) 
            } 
          : module
      )
    );
  };

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
                  
                  <TabsContent value="videos" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Video Lectures</h4>
                      <Button 
                        type="button" 
                        size="sm" 
                        variant="outline" 
                        onClick={() => addVideoLecture(module.id)}
                        className="flex items-center gap-1"
                      >
                        <Plus className="h-3 w-3" />
                        Add Video
                      </Button>
                    </div>
                    
                    {module.videoLectures.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No video lectures added yet. Click "Add Video" to create one.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {module.videoLectures.map((video, vIndex) => (
                          <Card key={video.id}>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-start mb-4">
                                <h5 className="font-medium">Video {vIndex + 1}</h5>
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeVideoLecture(module.id, video.id)}
                                  className="text-destructive h-6 w-6 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-1">Title</label>
                                  <Input
                                    value={video.title}
                                    onChange={(e) => updateVideoLecture(module.id, video.id, 'title', e.target.value)}
                                    placeholder="Video title"
                                  />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium mb-1">URL</label>
                                    <Input
                                      value={video.url || ''}
                                      onChange={(e) => updateVideoLecture(module.id, video.id, 'url', e.target.value)}
                                      placeholder="https://..."
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">Duration (min)</label>
                                    <Input
                                      type="number"
                                      value={video.duration || 0}
                                      onChange={(e) => updateVideoLecture(module.id, video.id, 'duration', parseInt(e.target.value))}
                                      placeholder="15"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-1">Description</label>
                                  <Textarea
                                    value={video.content}
                                    onChange={(e) => updateVideoLecture(module.id, video.id, 'content', e.target.value)}
                                    placeholder="Video description and key points..."
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="readings" className="space-y-4">
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
                  </TabsContent>
                  
                  <TabsContent value="quizzes" className="space-y-4">
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
                  </TabsContent>
                  
                  <TabsContent value="stylebox" className="space-y-4">
                    <div>
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
                  </TabsContent>
                  
                  <TabsContent value="badges" className="space-y-4">
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
                  </TabsContent>
                  
                  <TabsContent value="community" className="space-y-4">
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
                  </TabsContent>
                </Tabs>
              </div>
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
