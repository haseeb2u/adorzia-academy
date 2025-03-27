
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, Lock, CheckCircle, FileUp, 
  Image, Clock, AlertCircle
} from 'lucide-react';

interface StyleBoxChallenge {
  id: string;
  number: number;
  title: string;
  description: string;
  requirements: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number;
  unlocked: boolean;
  topics: number[];
}

const Module1StyleBoxes = () => {
  const [activeStyleBoxId, setActiveStyleBoxId] = React.useState<string>("stylebox-1");
  
  const styleBoxChallenges: StyleBoxChallenge[] = [
    {
      id: "stylebox-1",
      number: 1,
      title: "Ancient Civilization Fashion Sketch",
      description: "Recreate an Ancient Greek or Roman-inspired outfit sketch, showing your understanding of classical draping techniques and silhouettes.",
      requirements: [
        "Create one full-body sketch of an Ancient Greek or Roman outfit",
        "Include annotations describing key design elements",
        "Add a brief historical context paragraph (100-150 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Easy',
      duration: 120,
      unlocked: true,
      topics: [1, 2]
    },
    {
      id: "stylebox-2",
      number: 2,
      title: "Victorian-Era Dress Design",
      description: "Design a Victorian-era dress with detailed embellishment sketch, focusing on the structured silhouettes and ornate details of the period.",
      requirements: [
        "Create one front-view sketch of a Victorian-era dress",
        "Include at least one detail sketch of embellishments",
        "Write a brief explanation of materials and construction (100 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 150,
      unlocked: false,
      topics: [3]
    },
    {
      id: "stylebox-3",
      number: 3,
      title: "Modern Haute Couture Reimagining",
      description: "Research & reimagine a modern Haute Couture piece inspired by historical couture techniques but with contemporary aesthetics.",
      requirements: [
        "Select one iconic haute couture piece as inspiration (include reference)",
        "Create a modern reinterpretation sketch",
        "Explain your creative process and design decisions (200 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 180,
      unlocked: false,
      topics: [4]
    },
    {
      id: "stylebox-4",
      number: 4,
      title: "1950s Dior 'New Look' Illustration",
      description: "Create a 1950s fashion illustration inspired by Dior's New Look, capturing the revolutionary silhouette that defined the era.",
      requirements: [
        "Create one full-color fashion illustration in 1950s style",
        "Clearly show the New Look silhouette elements",
        "Include a brief description of the historical impact (100 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 150,
      unlocked: false,
      topics: [5]
    },
    {
      id: "stylebox-5",
      number: 5,
      title: "Rebellious Era Fashion Design",
      description: "Design a rebellious Punk or Hippie outfit capturing the spirit and aesthetic of that era's counterculture movement.",
      requirements: [
        "Create one full outfit design (punk or hippie movement)",
        "Include notes on fabric choices and accessories",
        "Explain the cultural significance of design elements (150 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 140,
      unlocked: false,
      topics: [6]
    },
    {
      id: "stylebox-6",
      number: 6,
      title: "Japanese Minimalism Case Study",
      description: "Research & analyze how Japanese minimalism shaped modern fashion through designers like Rei Kawakubo and Issey Miyake.",
      requirements: [
        "Write a 500-word analysis of Japanese minimalism in fashion",
        "Include visual examples of influential designs",
        "Identify 3-5 key principles of Japanese design aesthetic",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 200,
      unlocked: false,
      topics: [7]
    },
    {
      id: "stylebox-7",
      number: 7,
      title: "Fast Fashion Collection Concept",
      description: "Conceptualize a fast fashion collection with 3 sketches that balance trend-responsiveness, marketability and production efficiency.",
      requirements: [
        "Create 3 outfit sketches for a cohesive mini-collection",
        "Include a mood board showing trend inspiration",
        "Provide brief notes on production considerations",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 180,
      unlocked: false,
      topics: [8]
    },
    {
      id: "stylebox-8",
      number: 8,
      title: "Streetwear Design - Cultural Influences",
      description: "Design a streetwear look inspired by 90s Hip-Hop or K-Pop fashion, showing your understanding of how music cultures influence fashion.",
      requirements: [
        "Create one full streetwear outfit design",
        "Include a mood board showing cultural references",
        "Explain specific elements borrowed from the music culture (150 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 160,
      unlocked: false,
      topics: [9]
    },
    {
      id: "stylebox-9",
      number: 9,
      title: "Luxury Brand Mood Board",
      description: "Create a Brand Mood Board for a selected luxury brand (LV, Gucci, etc.) that captures its design aesthetic, values, and market position.",
      requirements: [
        "Create a comprehensive mood board for one luxury brand",
        "Include key visual design elements, colors, and patterns",
        "Write a 200-word brand analysis",
        "Submit as a single PDF file"
      ],
      difficulty: 'Easy',
      duration: 140,
      unlocked: false,
      topics: [10]
    },
    {
      id: "stylebox-10",
      number: 10,
      title: "Fashion Capitals Research Map",
      description: "Create a fashion map pinpointing major fashion capitals and researching their distinctive local trends and design aesthetics.",
      requirements: [
        "Create a visual map highlighting at least 5 fashion capitals",
        "For each city, identify 3 distinctive design characteristics",
        "Include examples of notable designers from each location",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 170,
      unlocked: false,
      topics: [11]
    },
    {
      id: "stylebox-11",
      number: 11,
      title: "Sustainable Fashion Concept",
      description: "Design a sustainable outfit concept with careful materials selection and circular design principles.",
      requirements: [
        "Create one full sustainable outfit design",
        "Include detailed materials list with sustainability properties",
        "Explain circular design considerations (200 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 190,
      unlocked: false,
      topics: [12]
    },
    {
      id: "stylebox-12",
      number: 12,
      title: "Digital Fashion Concept",
      description: "Create a Digital Fashion Concept for a metaverse character, exploring the possibilities of non-physical fashion design.",
      requirements: [
        "Design one full digital-only outfit",
        "Explain unique aspects only possible in digital fashion",
        "Include notes on intended platform/metaverse application",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 200,
      unlocked: false,
      topics: [13]
    },
    {
      id: "stylebox-13",
      number: 13,
      title: "Runway Collection Mini-Concept",
      description: "Design a 3-look runway collection that tells a cohesive story and would be suitable for fashion week presentation.",
      requirements: [
        "Create 3 cohesive runway-ready outfit designs",
        "Include collection title and concept statement",
        "Provide a brief runway presentation concept (100 words)",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 210,
      unlocked: false,
      topics: [14]
    },
    {
      id: "stylebox-14",
      number: 14,
      title: "Fashion & Cultural Movements Research",
      description: "Research how fashion has influenced political or cultural movements globally (Examples: Black Panthers, Bollywood, Paris Protests).",
      requirements: [
        "Write a 500-word analysis on one fashion-influenced movement",
        "Include visual examples with annotations",
        "Examine both the fashion elements and their cultural impact",
        "Submit as a single PDF file"
      ],
      difficulty: 'Hard',
      duration: 180,
      unlocked: false,
      topics: [15]
    },
    {
      id: "stylebox-15",
      number: 15,
      title: "Fashion History Timeline Infographic",
      description: "Create a comprehensive visual timeline infographic capturing key moments, designers, and movements in fashion history.",
      requirements: [
        "Design a visual timeline covering at least 10 key fashion moments",
        "Include brief descriptions for each milestone",
        "Show connections between events/movements where relevant",
        "Submit as a single PDF file"
      ],
      difficulty: 'Medium',
      duration: 170,
      unlocked: false,
      topics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
  ];
  
  const getDifficultyColor = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-50 text-green-700';
      case 'Medium': return 'bg-amber-50 text-amber-700';
      case 'Hard': return 'bg-red-50 text-red-700';
      default: return '';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">StyleBox Challenges</h2>
        <Badge className="bg-adorzia-accent/10 text-adorzia-accent">15 challenges</Badge>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <Badge className="bg-green-50 text-green-700">Easy: 2</Badge>
        <Badge className="bg-amber-50 text-amber-700">Medium: 7</Badge>
        <Badge className="bg-red-50 text-red-700">Hard: 6</Badge>
      </div>
      
      <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-blue-800">
              <strong>StyleBox Challenges</strong> are practical assignments that simulate real-world industry tasks. They are designed to apply theoretical knowledge and develop your professional portfolio. All submissions are reviewed by the Adorzia Expert Panel.
            </p>
          </div>
        </div>
      </Card>
      
      <Accordion 
        type="single" 
        collapsible 
        value={activeStyleBoxId}
        onValueChange={setActiveStyleBoxId}
        className="space-y-4"
      >
        {styleBoxChallenges.map((challenge) => (
          <AccordionItem 
            key={challenge.id} 
            value={challenge.id} 
            className={`border rounded-lg overflow-hidden ${!challenge.unlocked ? 'opacity-70' : ''}`}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <div className="flex items-center w-full">
                <div className="flex-1 flex items-center text-left">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3 
                      ${challenge.unlocked 
                        ? 'bg-adorzia-accent/10 text-adorzia-accent' 
                        : 'bg-gray-200 text-gray-500'}`}
                  >
                    {challenge.unlocked ? <Palette className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-2">
                      <Badge className="bg-gray-100 text-gray-700">StyleBox {challenge.number}</Badge>
                      <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                      {!challenge.unlocked && (
                        <Badge className="bg-gray-100 text-gray-500">Locked</Badge>
                      )}
                    </div>
                    <h3 className="text-base font-medium mt-1">{challenge.title}</h3>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-6 py-4 border-t">
              <p className="mb-4 text-adorzia-midGray">{challenge.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <Clock className="w-4 h-4" />
                  <span>Est. time: {challenge.duration} mins</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-adorzia-midGray">
                  <Image className="w-4 h-4" />
                  <span>Output: PDF Submission</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {challenge.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {challenge.topics.map((topicNum) => (
                    <Badge key={topicNum} className="bg-gray-100 text-gray-700">
                      Topic {topicNum}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
                <div className="text-sm text-adorzia-midGray">
                  Expert review provided within 3-5 business days
                </div>
                
                <Button 
                  className={`flex items-center ${challenge.unlocked 
                    ? 'bg-adorzia-accent hover:bg-adorzia-accentHover text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!challenge.unlocked}
                >
                  {challenge.unlocked ? (
                    <>
                      <FileUp className="w-4 h-4 mr-2" />
                      Submit StyleBox
                    </>
                  ) : 'Complete Previous StyleBox'}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Module1StyleBoxes;
