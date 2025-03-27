
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Video, FileText, CheckCircle, Lock, Play, 
  BookOpen, History, Clock
} from 'lucide-react';

interface Topic {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number;
  resources: {
    videos: number;
    readings: number;
    interactive: number;
  };
  unlocked: boolean;
}

const Module1Topics = () => {
  const [activeTopicId, setActiveTopicId] = React.useState<string>("topic-1");
  
  const topics: Topic[] = [
    {
      id: "topic-1",
      number: 1,
      title: "The Origin of Fashion - Primitive to Ancient Civilizations",
      description: "Explore how clothing evolved from primitive necessity to cultural expression in ancient Egypt, Mesopotamia, and Indus Valley civilizations.",
      duration: 45,
      resources: {
        videos: 2,
        readings: 3,
        interactive: 1
      },
      unlocked: true
    },
    {
      id: "topic-2",
      number: 2,
      title: "Fashion Through the Ages - Roman, Greek, Medieval, Renaissance",
      description: "Trace the evolution of fashion from classical draping to medieval structured garments and Renaissance luxury.",
      duration: 60,
      resources: {
        videos: 3,
        readings: 2,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-3",
      number: 3,
      title: "Victorian Era, Industrial Revolution & Birth of Haute Couture",
      description: "Understand how mechanization transformed fashion production and how the first fashion houses emerged.",
      duration: 50,
      resources: {
        videos: 2,
        readings: 4,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-4",
      number: 4,
      title: "Paris - The Birthplace of Modern Fashion Industry",
      description: "Discover how Paris established itself as the global fashion capital and birthed the modern fashion system.",
      duration: 55,
      resources: {
        videos: 2,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-5",
      number: 5,
      title: "Golden Age of Fashion: 1920s-1950s (Coco Chanel, Dior, etc.)",
      description: "Explore the revolutionary designs and business innovations of early 20th century fashion pioneers.",
      duration: 65,
      resources: {
        videos: 3,
        readings: 4,
        interactive: 2
      },
      unlocked: false
    },
    {
      id: "topic-6",
      number: 6,
      title: "Fashion in the Age of Rebellion: 1960s-1980s",
      description: "Analyze how social movements transformed fashion from hippie counterculture to punk rebellion to 80s excess.",
      duration: 55,
      resources: {
        videos: 3,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-7",
      number: 7,
      title: "Globalization of Fashion - From Europe to USA, Japan, India, China",
      description: "Understand how fashion expanded beyond European boundaries, incorporating global design perspectives.",
      duration: 60,
      resources: {
        videos: 3,
        readings: 4,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-8",
      number: 8,
      title: "Rise of Fast Fashion - Zara, H&M, Uniqlo Impact",
      description: "Examine how the fast fashion business model revolutionized the industry and consumer behavior.",
      duration: 50,
      resources: {
        videos: 2,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-9",
      number: 9,
      title: "Cultural Fashion Movements - Hip-Hop, Punk, Streetwear, K-Pop",
      description: "Study how music and youth culture have driven major fashion trends and created new markets.",
      duration: 55,
      resources: {
        videos: 3,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-10",
      number: 10,
      title: "Luxury Fashion Houses & the Power of Brands",
      description: "Analyze the evolution of luxury fashion from craftsmanship to global conglomerates and brand power.",
      duration: 60,
      resources: {
        videos: 2,
        readings: 4,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-11",
      number: 11,
      title: "Fashion Capitals of the World - Paris, Milan, New York, London, Tokyo",
      description: "Compare the distinct fashion identities of global fashion capitals and their economic importance.",
      duration: 55,
      resources: {
        videos: 3,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-12",
      number: 12,
      title: "Sustainability Movement & The Future of Fashion",
      description: "Explore the rise of sustainable practices and how they're reshaping industry standards.",
      duration: 60,
      resources: {
        videos: 2,
        readings: 4,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-13",
      number: 13,
      title: "Fashion & Technology - AI, AR, Metaverse, Digital Fashion",
      description: "Discover how emerging technologies are creating new design possibilities and business models.",
      duration: 55,
      resources: {
        videos: 3,
        readings: 3,
        interactive: 2
      },
      unlocked: false
    },
    {
      id: "topic-14",
      number: 14,
      title: "Global Fashion Weeks & their Business Impact",
      description: "Understand the evolution and business mechanisms of fashion shows and seasonal collections.",
      duration: 50,
      resources: {
        videos: 2,
        readings: 3,
        interactive: 1
      },
      unlocked: false
    },
    {
      id: "topic-15",
      number: 15,
      title: "Fashion as Cultural Diplomacy & Soft Power",
      description: "Examine how nations use fashion to project cultural influence and economic power globally.",
      duration: 55,
      resources: {
        videos: 2,
        readings: 4,
        interactive: 1
      },
      unlocked: false
    },
  ];
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">Module Topics</h2>
        <Badge className="bg-adorzia-accent/10 text-adorzia-accent">15 topics</Badge>
      </div>
      
      <Accordion 
        type="single" 
        collapsible 
        value={activeTopicId}
        onValueChange={setActiveTopicId}
        className="space-y-4"
      >
        {topics.map((topic) => (
          <AccordionItem 
            key={topic.id} 
            value={topic.id} 
            className={`border rounded-lg overflow-hidden ${!topic.unlocked ? 'opacity-70' : ''}`}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <div className="flex items-center w-full">
                <div className="flex-1 flex items-center text-left">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3 
                      ${topic.unlocked 
                        ? 'bg-adorzia-accent/10 text-adorzia-accent' 
                        : 'bg-gray-200 text-gray-500'}`}
                  >
                    {topic.unlocked ? <History className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Badge className="bg-gray-100 text-gray-700 mr-2">Topic {topic.number}</Badge>
                      {!topic.unlocked && (
                        <Badge className="bg-gray-100 text-gray-500">Locked</Badge>
                      )}
                    </div>
                    <h3 className="text-base font-medium mt-1">{topic.title}</h3>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-6 py-4 border-t">
              <p className="mb-4 text-adorzia-midGray">{topic.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <Clock className="w-4 h-4" />
                  <span>{topic.duration} mins</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <Video className="w-4 h-4" />
                  <span>{topic.resources.videos} videos</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <FileText className="w-4 h-4" />
                  <span>{topic.resources.readings} readings</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <BookOpen className="w-4 h-4" />
                  <span>{topic.resources.interactive} activities</span>
                </div>
              </div>
              
              <h4 className="font-medium mb-3">Learning Content</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-md flex items-center justify-center mr-3">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Introduction Video</div>
                      <div className="text-sm text-adorzia-midGray">12 minutes</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-adorzia-accent" disabled={!topic.unlocked}>
                    <Play className="w-4 h-4 mr-1" />
                    Watch
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mr-3">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Essential Reading</div>
                      <div className="text-sm text-adorzia-midGray">15 minutes</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-adorzia-accent" disabled={!topic.unlocked}>
                    Read
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 text-green-700 rounded-md flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">Interactive Timeline</div>
                      <div className="text-sm text-adorzia-midGray">10 minutes</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-adorzia-accent" disabled={!topic.unlocked}>
                    Explore
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
                <Badge className="bg-purple-50 text-purple-600 w-fit">
                  Includes StyleBox Challenge
                </Badge>
                
                <Button 
                  className={`flex items-center ${topic.unlocked 
                    ? 'bg-adorzia-accent hover:bg-adorzia-accentHover text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!topic.unlocked}
                >
                  {topic.unlocked ? 'Begin Topic' : 'Complete Previous Topic'}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Module1Topics;
