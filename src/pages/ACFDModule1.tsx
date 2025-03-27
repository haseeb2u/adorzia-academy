
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, Award, CheckCircle, History, BookOpen, 
  Calendar, FileText, BookMarked, Lightbulb, Clock, 
  GraduationCap, Image, Palette, Globe
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Module1Topics from '@/components/certification/Module1Topics';
import Module1StyleBoxes from '@/components/certification/Module1StyleBoxes';

const ACFDModule1 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8 pt-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Button 
                variant="ghost" 
                className="text-white p-0 h-auto mb-4"
                onClick={() => navigate('/courses/acfd')}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to ACFD Certification
              </Button>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-adorzia-accent/20 flex items-center justify-center">
                  <History className="h-6 w-6 text-adorzia-accent" />
                </div>
                <div>
                  <Badge className="bg-amber-200 text-amber-800 mb-2">Module 1</Badge>
                  <h1 className="text-3xl font-bold">The Global Power of Fashion</h1>
                  <p className="text-adorzia-accent mt-1">History, Influence & Impact</p>
                </div>
              </div>
              
              <p className="text-adorzia-lightGray mt-4 max-w-3xl">
                Build a designer's foundation by understanding fashion's global evolution, cultural impact, market influence, and legendary milestones — making every designer ready to think globally.
              </p>
            </div>
            
            <div className="md:text-right">
              <div className="flex flex-col items-start md:items-end">
                <div className="text-sm text-adorzia-lightGray mb-2">Module Progress</div>
                <div className="flex items-center gap-3 mb-2">
                  <Progress value={progress} className="w-56 h-2 bg-white/20" />
                  <span className="text-sm">{progress}%</span>
                </div>
                <Button 
                  className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white"
                  disabled={progress === 100}
                >
                  {progress === 0 ? "Begin Module" : progress === 100 ? "Completed" : "Continue Learning"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-10">
        <Tabs defaultValue="overview" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="topics" className="flex items-center gap-1">
              <BookMarked className="w-4 h-4" />
              Topics
            </TabsTrigger>
            <TabsTrigger value="stylebox" className="flex items-center gap-1">
              <Palette className="w-4 h-4" />
              StyleBox Challenges
            </TabsTrigger>
            <TabsTrigger value="assessment" className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Assessment
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-medium mb-4">Module Overview</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-adorzia-accent" />
                        Module Objective
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Build a designer's foundation by understanding fashion's global evolution, cultural impact, market influence, and legendary milestones — making every designer ready to think globally.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-adorzia-accent" />
                        Learning Outcomes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">By the end of Module 1, you will:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Understand fashion's cultural, social, and market impact globally</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Know historical milestones that shaped modern fashion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Identify fashion eras, movements, and their business relevance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Complete historic and trend-driven design tasks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Pass a high-level conceptual test (80% passing criteria)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-adorzia-accent" />
                        Final Delivery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span>15 In-depth Topics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span>15 Industry-based StyleBox Tasks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span>60-80 Conceptual MCQs</span>
                        </li>
                        <li className="flex items-start">
                          <Image className="h-5 w-5 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                          <span>Module Unlock Reward: <strong>"Fashion History & Market Awareness"</strong> Badge</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-4">Module Details</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Module Duration</div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-adorzia-accent mr-2" />
                          <span>4-6 weeks (Part-time)</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Topics</div>
                        <div className="flex items-center">
                          <BookMarked className="h-5 w-5 text-adorzia-accent mr-2" />
                          <span>15 comprehensive topics</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">StyleBox Challenges</div>
                        <div className="flex items-center">
                          <Palette className="h-5 w-5 text-adorzia-accent mr-2" />
                          <span>15 real-world tasks</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Assessment</div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-adorzia-accent mr-2" />
                          <span>60-80 MCQs (80% passing)</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Instructor Support</div>
                        <div className="flex items-center">
                          <Badge className="bg-green-100 text-green-700">Live Q&A Sessions</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Module Completion</div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-adorzia-accent mr-2" />
                          <span>Earns 25% of ACFD Credits</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-adorzia-accent hover:bg-adorzia-accentHover text-white"
                        disabled={progress === 100}
                      >
                        {progress === 0 ? "Begin Module" : progress === 100 ? "Completed" : "Continue Learning"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="topics">
            <Module1Topics />
          </TabsContent>
          
          <TabsContent value="stylebox">
            <Module1StyleBoxes />
          </TabsContent>
          
          <TabsContent value="assessment">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-4">Module Assessment</h2>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-adorzia-accent" />
                    MCQ Assessment Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>To complete Module 1, you must pass a comprehensive assessment consisting of 60-80 multiple-choice questions testing your understanding of fashion history, cultural impact, global markets, and design movements.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Assessment Details:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>60-80 Multiple Choice Questions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>80% passing score required</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Unlimited retakes available</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Time limit: 90 minutes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <h4 className="font-medium mb-2">Sample MCQ Questions:</h4>
                    <div className="space-y-4">
                      <Card className="bg-gray-50 border-adorzia-accent/20">
                        <CardContent className="p-4">
                          <div className="font-medium mb-2">Who is considered the father of Haute Couture?</div>
                          <ul className="space-y-1 ml-6 list-disc">
                            <li>Christian Dior</li>
                            <li>Charles Frederick Worth</li>
                            <li>Coco Chanel</li>
                            <li>Yves Saint Laurent</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gray-50 border-adorzia-accent/20">
                        <CardContent className="p-4">
                          <div className="font-medium mb-2">What major change did the Industrial Revolution bring to fashion production?</div>
                          <ul className="space-y-1 ml-6 list-disc">
                            <li>Introduction of haute couture</li>
                            <li>Mass production capabilities</li>
                            <li>Elimination of handcrafting</li>
                            <li>Increased fabric costs</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gray-50 border-adorzia-accent/20">
                        <CardContent className="p-4">
                          <div className="font-medium mb-2">Which designer invented the "Little Black Dress"?</div>
                          <ul className="space-y-1 ml-6 list-disc">
                            <li>Christian Dior</li>
                            <li>Coco Chanel</li>
                            <li>Cristóbal Balenciaga</li>
                            <li>Karl Lagerfeld</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300" variant="outline" disabled>
                        Take Assessment (Complete all topics first)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-adorzia-accent" />
                    StyleBox Challenge Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">In addition to the MCQ test, you must complete all 15 StyleBox challenges with satisfactory results:</p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>All StyleBox submissions are reviewed by the Adorzia Expert Panel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>You'll receive personalized feedback on every submission</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Revisions may be requested for submissions that don't meet standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>All StyleBox challenges must be approved to complete the module</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default ACFDModule1;
