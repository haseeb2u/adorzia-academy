
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Book, Puzzle, Lightbulb, GraduationCap, Lock, Trophy, 
  CheckCircle, Video, FileText, HelpCircle, MessageSquare,
  Award, Users, Clock, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { EnhancedCourse, EnhancedModule } from '@/types/course';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface EnhancedCourseStructureProps extends EnhancedCourse {}

const EnhancedCourseStructure: React.FC<EnhancedCourseStructureProps> = ({
  title,
  level,
  emoji,
  objective,
  access,
  modules,
  certification = false,
  progress = 0,
  communityForums = false,
  liveQAsessions = false,
  badgesSystem = false,
  instructors = []
}) => {
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState<string | null>(modules.length > 0 ? modules[0].id : null);
  
  const levelColors = {
    'Beginner Level': 'bg-blue-50 text-blue-600',
    'Intermediate Level': 'bg-purple-50 text-purple-600',
    'Expert Level': 'bg-amber-50 text-amber-600',
  };
  
  const accessColors = {
    'Registered': 'bg-green-50 text-green-600',
    'Paid': 'bg-amber-50 text-amber-600',
    'Exclusive': 'bg-rose-50 text-rose-600',
  };
  
  const difficultyColors = {
    'Easy': 'bg-green-50 text-green-600',
    'Medium': 'bg-amber-50 text-amber-600',
    'Hard': 'bg-rose-50 text-rose-600',
  };

  const handleEnroll = () => {
    // In a real application, this would enroll the user in the course
    navigate(`/dashboard`);
  };

  const getModuleCompletionPercent = (module: EnhancedModule) => {
    return module.completed ? 100 : 0;
  };

  return (
    <div className="card p-8 mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">{emoji}</span>
            <Badge className={levelColors[level as keyof typeof levelColors]}>
              {level}
            </Badge>
          </div>
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Badge className={accessColors[access.type]}>
            {access.type === 'Registered' ? (
              <GraduationCap className="w-3 h-3 mr-1" />
            ) : access.type === 'Paid' ? (
              <Lock className="w-3 h-3 mr-1" />
            ) : (
              <Trophy className="w-3 h-3 mr-1" />
            )}
            {access.description}
          </Badge>
        </div>
      </div>
      
      <p className="text-adorzia-midGray mb-8">
        <span className="font-medium text-black">Objective:</span> {objective}
      </p>
      
      {progress > 0 && (
        <div className="mb-8 bg-adorzia-lightGray p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}
      
      {/* Features badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        {certification && (
          <Badge variant="outline" className="bg-gray-50 gap-1">
            <Award className="w-3 h-3" />
            Certification
          </Badge>
        )}
        {communityForums && (
          <Badge variant="outline" className="bg-gray-50 gap-1">
            <MessageSquare className="w-3 h-3" />
            Community Forums
          </Badge>
        )}
        {liveQAsessions && (
          <Badge variant="outline" className="bg-gray-50 gap-1">
            <Users className="w-3 h-3" />
            Live Q&A
          </Badge>
        )}
        {badgesSystem && (
          <Badge variant="outline" className="bg-gray-50 gap-1">
            <Trophy className="w-3 h-3" />
            Achievement Badges
          </Badge>
        )}
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4 flex items-center">
          <Book className="w-5 h-5 mr-2 text-adorzia-accent" />
          Enhanced Course Structure
        </h4>
        
        <Accordion 
          type="single" 
          collapsible 
          value={expandedModule || undefined}
          onValueChange={(value) => setExpandedModule(value)}
          className="space-y-4"
        >
          {modules.map((module, index) => (
            <AccordionItem 
              key={module.id} 
              value={module.id}
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center w-full">
                  <div className="flex-1 flex items-center text-left">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 
                        ${module.completed 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-adorzia-accent/10 text-adorzia-accent'}`}
                    >
                      {module.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    <div>
                      <h5 className="text-base font-medium">{module.title}</h5>
                      <div className="flex items-center text-xs text-adorzia-midGray mt-1 space-x-3">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {module.duration} hours
                        </span>
                        <span className="flex items-center">
                          <Video className="w-3 h-3 mr-1" />
                          {module.videoLectures.length} videos
                        </span>
                        <span className="flex items-center">
                          <HelpCircle className="w-3 h-3 mr-1" />
                          {module.quizzes.length} quizzes
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 mr-2">
                    {module.badge && (
                      <Badge className="bg-yellow-50 text-yellow-600 gap-1">
                        <Trophy className="w-3 h-3" />
                        Badge
                      </Badge>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-0">
                <div className="border-t">
                  <Tabs defaultValue="content" className="w-full">
                    <TabsList className="w-full justify-start px-6 pt-4">
                      <TabsTrigger value="content" className="flex items-center gap-1 text-xs">
                        <Book className="w-3 h-3" />
                        Content
                      </TabsTrigger>
                      <TabsTrigger value="challenge" className="flex items-center gap-1 text-xs">
                        <Puzzle className="w-3 h-3" />
                        StyleBox
                      </TabsTrigger>
                      <TabsTrigger value="community" className="flex items-center gap-1 text-xs">
                        <MessageSquare className="w-3 h-3" />
                        Community
                      </TabsTrigger>
                      {module.badge && (
                        <TabsTrigger value="badge" className="flex items-center gap-1 text-xs">
                          <Award className="w-3 h-3" />
                          Badge
                        </TabsTrigger>
                      )}
                    </TabsList>
                    
                    <TabsContent value="content" className="px-6 py-4 space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-sm font-medium flex items-center mb-3">
                            <Video className="w-4 h-4 mr-2 text-adorzia-accent" />
                            Video Lectures
                          </h6>
                          
                          {module.videoLectures.length === 0 ? (
                            <p className="text-sm text-adorzia-midGray italic">No video lectures available</p>
                          ) : (
                            <div className="space-y-3">
                              {module.videoLectures.map((video, vIndex) => (
                                <div key={video.id} className="border rounded p-3 bg-gray-50">
                                  <div className="flex justify-between items-start">
                                    <div className="flex items-start">
                                      <div className="w-6 h-6 rounded-full bg-adorzia-accent/10 text-adorzia-accent flex items-center justify-center text-xs mr-2 mt-0.5">
                                        {vIndex + 1}
                                      </div>
                                      <div>
                                        <h6 className="text-sm font-medium">{video.title}</h6>
                                        <p className="text-xs text-adorzia-midGray mt-1">{video.content}</p>
                                        <div className="flex items-center mt-2 text-xs text-adorzia-midGray">
                                          <Clock className="w-3 h-3 mr-1" />
                                          {video.duration} minutes
                                        </div>
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                                      Watch Video
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h6 className="text-sm font-medium flex items-center mb-3">
                            <FileText className="w-4 h-4 mr-2 text-adorzia-accent" />
                            Reading Materials
                          </h6>
                          
                          {module.readings.length === 0 ? (
                            <p className="text-sm text-adorzia-midGray italic">No reading materials available</p>
                          ) : (
                            <div className="space-y-3">
                              {module.readings.map((reading, rIndex) => (
                                <div key={reading.id} className="border rounded p-3 bg-gray-50">
                                  <h6 className="text-sm font-medium">{reading.title}</h6>
                                  {reading.author && (
                                    <p className="text-xs text-adorzia-midGray mt-1">By: {reading.author}</p>
                                  )}
                                  <p className="text-xs mt-2">{reading.content.substring(0, 100)}...</p>
                                  <Button variant="link" size="sm" className="h-7 px-0 text-xs mt-1">
                                    Read More
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h6 className="text-sm font-medium flex items-center mb-3">
                            <HelpCircle className="w-4 h-4 mr-2 text-adorzia-accent" />
                            Quizzes
                          </h6>
                          
                          {module.quizzes.length === 0 ? (
                            <p className="text-sm text-adorzia-midGray italic">No quizzes available</p>
                          ) : (
                            <div className="space-y-3">
                              {module.quizzes.map((quiz) => (
                                <div key={quiz.id} className="border rounded p-3 bg-gray-50">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h6 className="text-sm font-medium">{quiz.title}</h6>
                                      <p className="text-xs text-adorzia-midGray mt-1">{quiz.content}</p>
                                      <p className="text-xs mt-2">
                                        Passing score: {quiz.passingScore}%
                                      </p>
                                    </div>
                                    <Button variant="outline" size="sm" className="h-8 text-xs">
                                      Take Quiz
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="challenge" className="px-6 py-4">
                      <div className="border-l-4 border-adorzia-accent pl-4 py-2 space-y-4">
                        <div className="flex items-center">
                          <h6 className="text-base font-medium">{module.challenge.title}</h6>
                          <Badge className={`ml-2 ${difficultyColors[module.challenge.difficulty]}`}>
                            {module.challenge.difficulty}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-adorzia-midGray">
                          {module.challenge.content}
                        </p>
                        
                        <div>
                          <h6 className="text-sm font-medium mb-2">Requirements:</h6>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {module.challenge.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-sm font-medium mb-2">Evaluation Methods:</h6>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {module.challenge.evaluation.autoFeedback && (
                              <Badge variant="outline" className="justify-start gap-1 bg-gray-50">
                                <CheckCircle className="w-3 h-3" />
                                Auto-Feedback
                              </Badge>
                            )}
                            {module.challenge.evaluation.peerReview && (
                              <Badge variant="outline" className="justify-start gap-1 bg-gray-50">
                                <Users className="w-3 h-3" />
                                Peer Review
                              </Badge>
                            )}
                            {module.challenge.evaluation.expertAssessment && (
                              <Badge variant="outline" className="justify-start gap-1 bg-gray-50">
                                <Star className="w-3 h-3" />
                                Expert Assessment
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white w-full sm:w-auto">
                          Start StyleBox Challenge
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="community" className="px-6 py-4">
                      <div className="space-y-6">
                        <div>
                          <h6 className="text-sm font-medium flex items-center mb-3">
                            <MessageSquare className="w-4 h-4 mr-2 text-adorzia-accent" />
                            Discussion Forum
                          </h6>
                          
                          {module.forum?.discussions && module.forum.discussions.length > 0 ? (
                            <div className="space-y-3">
                              {/* Forum discussions would go here */}
                              <p className="text-sm text-adorzia-midGray">3 active discussions</p>
                            </div>
                          ) : (
                            <div className="text-center py-6 border rounded bg-gray-50">
                              <p className="text-sm text-adorzia-midGray mb-3">Be the first to start a discussion!</p>
                              <Button variant="outline" size="sm">
                                Start New Discussion
                              </Button>
                            </div>
                          )}
                        </div>
                        
                        {module.forum?.liveQAsessions && module.forum.liveQAsessions.length > 0 && (
                          <div>
                            <h6 className="text-sm font-medium flex items-center mb-3">
                              <Users className="w-4 h-4 mr-2 text-adorzia-accent" />
                              Upcoming Live Q&A Sessions
                            </h6>
                            <div className="space-y-3">
                              {module.forum.liveQAsessions.map((session) => (
                                <div key={session.id} className="border rounded p-3 bg-gray-50">
                                  <h6 className="text-sm font-medium">{session.topic}</h6>
                                  <div className="flex items-center justify-between text-xs text-adorzia-midGray mt-2">
                                    <div className="flex items-center gap-4">
                                      <span>Host: {session.host}</span>
                                      <span>Date: {session.date}</span>
                                      <span>Time: {session.time}</span>
                                    </div>
                                    <Button variant="outline" size="sm" className="h-7 text-xs">
                                      Add to Calendar
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    {module.badge && (
                      <TabsContent value="badge" className="px-6 py-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-adorzia-accent/10 rounded-full flex items-center justify-center text-adorzia-accent">
                            <Trophy className="w-8 h-8" />
                          </div>
                          <div>
                            <h6 className="text-base font-medium">{module.badge.name}</h6>
                            <p className="text-sm text-adorzia-midGray mt-1">
                              {module.badge.description}
                            </p>
                            <div className="mt-4">
                              {module.completed ? (
                                <Badge className="bg-green-50 text-green-600 gap-1">
                                  <CheckCircle className="w-3 h-3" />
                                  Earned
                                </Badge>
                              ) : (
                                <p className="text-sm italic text-adorzia-midGray">
                                  Complete this module to earn this badge
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {certification && (
        <div className="bg-adorzia-accent/10 p-6 rounded-lg mb-6 flex items-start">
          <Trophy className="w-6 h-6 text-adorzia-accent mr-3 mt-1" />
          <div>
            <h4 className="text-lg font-medium mb-1">Course Certification</h4>
            <p className="text-adorzia-midGray">
              Upon completion of all modules and the final StyleBox challenge, you'll receive an official Adorzia Academy certification that you can share on your portfolio and professional profiles.
            </p>
          </div>
        </div>
      )}
      
      <Button 
        className="w-full bg-adorzia-accent hover:bg-adorzia-accentHover text-white"
        onClick={handleEnroll}
      >
        {access.type === 'Registered' ? 'Enroll Now' : access.type === 'Paid' ? 'Subscribe to Access' : 'Join VIP Program'}
      </Button>
    </div>
  );
};

export default EnhancedCourseStructure;
