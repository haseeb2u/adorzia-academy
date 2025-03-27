
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Award, CheckCircle, Puzzle, Book, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ACFDModuleStructure from '@/components/certification/ACFDModuleStructure';

const ACFDCertification = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-adorzia-primary text-white py-8 pt-24">
        <div className="container max-w-7xl mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white p-0 h-auto mb-4"
            onClick={() => navigate('/courses')}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </Button>
          
          <div className="flex items-center gap-4 mb-3">
            <Award className="h-10 w-10" />
            <div>
              <Badge className="bg-amber-200 text-amber-800 mb-2">Professional Certification</Badge>
              <h1 className="text-3xl font-bold">Adorzia Certified Fashion Designer (ACFD)</h1>
            </div>
          </div>
          
          <p className="text-adorzia-lightGray mt-4 max-w-3xl">
            Our comprehensive industry-recognized certification program covering all aspects of fashion design from concept to collection. Complete all 12 modules and the final project to earn your ACFD credential.
          </p>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-10">
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center">
              <Award className="h-5 w-5 mr-2 text-adorzia-accent" />
              Certification Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">ACFD Certification Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Complete all 12 modules (Sequential Unlock)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Each Topic = 1 StyleBox Challenge + 1 MCQ Theory Test</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Minimum 80% Score on Theory Tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Complete All StyleBox Challenges (Reviewed by Adorzia Panel)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Final Project: Design a Market-Ready Collection (5 Outfits)</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button className="bg-adorzia-accent hover:bg-adorzia-accentHover text-white flex items-center">
                    Enroll in ACFD Program
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Certification Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Badge className="mt-0.5 mr-2 flex-shrink-0 bg-purple-50 text-purple-600">Industry</Badge>
                    <span>Recognized qualification by leading fashion brands and employers</span>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-0.5 mr-2 flex-shrink-0 bg-blue-50 text-blue-600">Portfolio</Badge>
                    <span>Develop a professional portfolio of design work across disciplines</span>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-0.5 mr-2 flex-shrink-0 bg-green-50 text-green-600">Network</Badge>
                    <span>Access to exclusive Adorzia Alumni network and career opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-0.5 mr-2 flex-shrink-0 bg-amber-50 text-amber-600">Mentorship</Badge>
                    <span>Direct feedback from industry professionals on your work</span>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mt-0.5 mr-2 flex-shrink-0 bg-rose-50 text-rose-600">Global</Badge>
                    <span>Digital credential shareable on LinkedIn and fashion portfolios</span>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center text-sm text-adorzia-midGray">
                  <Puzzle className="h-4 w-4 mr-1 text-adorzia-accent" />
                  <span>24 StyleBox challenges included in certification program</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="modules" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="modules" className="flex items-center gap-1">
              <Book className="w-4 h-4" />
              Module Structure
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-1">
              <Puzzle className="w-4 h-4" />
              Program Details
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="modules">
            <div className="space-y-8">
              <h2 className="text-2xl font-medium">ACFD Module Structure</h2>
              <p className="text-adorzia-midGray max-w-3xl">
                The ACFD program consists of 12 comprehensive modules that build upon each other. Each module includes video lectures, readings, quizzes, and practical StyleBox challenges that are reviewed by industry professionals.
              </p>
              
              <ACFDModuleStructure />
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">Program Details</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Program Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The ACFD certification is designed to be completed at your own pace. Most students complete the program in 6-12 months, dedicating 5-10 hours per week to their studies and projects.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Assessment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Multiple-choice quizzes to test theoretical knowledge</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Practical StyleBox challenges with detailed rubrics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Peer review sessions with fellow students</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Expert assessment by Adorzia Panel</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Final capstone project (5-outfit collection)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Support & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Weekly Q&A sessions with industry professionals</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Private community forum for students</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Resource library with templates and guides</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>1-on-1 portfolio review sessions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>There are no formal prerequisites for the ACFD program. However, students with some basic understanding of design principles will find it easier to progress through the more advanced modules. We welcome beginners with a passion for fashion design.</p>
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

export default ACFDCertification;
