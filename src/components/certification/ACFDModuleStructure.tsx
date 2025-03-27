
import React, { useState } from 'react';
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
  Book, CheckCircle, Lock, ArrowRight, 
  History, Palette, Pencil, Brush, FileEdit,
  ShoppingBag, Shirt, Scissors, Recycle, Camera,
  BookOpen, BriefcaseBusiness, Award
} from 'lucide-react';

interface ACFDModule {
  id: string;
  number: number;
  title: string;
  description: string;
  focus: string[];
  icon: React.ReactNode;
  unlocked: boolean;
}

const ACFDModuleStructure = () => {
  const [activeModule, setActiveModule] = useState<string>("module-1");
  
  const modules: ACFDModule[] = [
    {
      id: "module-1",
      number: 1,
      title: "The Global Power of Fashion: History, Influence & Impact",
      description: "Explore the evolution of fashion from ancient civilizations to modern runways, understanding how cultural, social, and political movements have shaped what we wear.",
      focus: [
        "Fashion history across centuries and cultures",
        "Global markets and industry structure",
        "Cultural evolution of style and trends",
        "Influential designer case studies"
      ],
      icon: <History className="h-5 w-5" />,
      unlocked: true
    },
    {
      id: "module-2",
      number: 2,
      title: "Design Thinking & Conceptualization in Fashion",
      description: "Learn structured approaches to generating and developing fashion concepts, from initial inspiration to fully realized design ideas.",
      focus: [
        "Design thinking methodology for fashion",
        "Creating effective mood boards",
        "Trend forecasting and analysis",
        "Concept development workflows"
      ],
      icon: <Brush className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-3",
      number: 3,
      title: "Fashion Sketching & Digital Illustration Mastery",
      description: "Develop both traditional and digital illustration skills to communicate fashion ideas through figure drawing, technical flats, and presentation boards.",
      focus: [
        "Manual fashion sketching fundamentals",
        "Digital illustration using Procreate and Adobe",
        "Technical flat creation for production",
        "Building digital presentation boards"
      ],
      icon: <Pencil className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-4",
      number: 4,
      title: "Textile Science & Fabric Manipulation for Designers",
      description: "Master the properties and behaviors of fabrics, understanding how materials affect design, drape, comfort, and sustainability.",
      focus: [
        "Fiber properties and fabric structures",
        "Textile testing and selection methods",
        "Fabric manipulation techniques",
        "Material innovation and technology"
      ],
      icon: <Shirt className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-5",
      number: 5,
      title: "The Art of Color Theory & Fashion Forecasting",
      description: "Develop sophisticated color palettes for fashion collections while understanding seasonal color forecasting and consumer psychology.",
      focus: [
        "Color theory principles for fashion",
        "Pantone system and seasonal palettes",
        "Color psychology in design and marketing",
        "Forecasting future color trends"
      ],
      icon: <Palette className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-6",
      number: 6,
      title: "Silhouettes, Patterns, and Garment Construction",
      description: "Learn essential patternmaking and construction techniques that bring design ideas to life, focusing on shape, form, and technical execution.",
      focus: [
        "Silhouette theory and shape development",
        "Pattern drafting fundamentals",
        "Draping techniques for 3D forms",
        "Technical specifications and production guides"
      ],
      icon: <Scissors className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-7",
      number: 7,
      title: "Surface Design, Embellishments & Textile Art",
      description: "Explore techniques to create unique textile surfaces through prints, embroidery, appliqué, and innovative embellishment approaches.",
      focus: [
        "Print design and pattern creation",
        "Embroidery and embellishment techniques",
        "Textile dyeing and manipulation",
        "Digital printing and 3D applications"
      ],
      icon: <FileEdit className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-8",
      number: 8,
      title: "Sustainable, Ethical, and Circular Fashion",
      description: "Develop strategies for creating environmentally and socially responsible fashion, understanding certification standards and circular design principles.",
      focus: [
        "Sustainability frameworks and standards",
        "Ethical production and fair labor",
        "Circular design processes",
        "Zero-waste pattern cutting"
      ],
      icon: <Recycle className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-9",
      number: 9,
      title: "Styling, Visual Merchandising & Presentation",
      description: "Master techniques for presenting fashion work, from editorial styling to retail displays and lookbook creation.",
      focus: [
        "Fashion styling principles and applications",
        "Lookbook and campaign creation",
        "Fashion photography direction",
        "Visual merchandising strategies"
      ],
      icon: <Camera className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-10",
      number: 10,
      title: "Collection Development & Portfolio Building",
      description: "Synthesize all previous learning to create cohesive fashion collections with professional portfolio presentation.",
      focus: [
        "Collection planning and development",
        "Design narratives and storytelling",
        "Line development and merchandising",
        "Professional portfolio curation"
      ],
      icon: <BookOpen className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-11",
      number: 11,
      title: "Fashion Business, Branding & Market Strategies",
      description: "Develop business acumen for fashion entrepreneurship, from brand building to marketing, pricing, and retail strategies.",
      focus: [
        "Fashion business models and startup strategies",
        "Brand development and positioning",
        "Pricing strategies and costing",
        "E-commerce and retail distribution"
      ],
      icon: <ShoppingBag className="h-5 w-5" />,
      unlocked: false
    },
    {
      id: "module-12",
      number: 12,
      title: "Industry Readiness: From Runway to Retail",
      description: "Prepare for professional success with industry networking, portfolio presentation, interview skills, and real-world project experience.",
      focus: [
        "Career pathways in fashion",
        "Professional networking strategies",
        "Interview and presentation skills",
        "Client project management"
      ],
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      unlocked: false
    },
  ];

  return (
    <div>
      <Accordion 
        type="single" 
        collapsible 
        value={activeModule}
        onValueChange={setActiveModule}
        className="space-y-4"
      >
        {modules.map((module) => (
          <AccordionItem 
            key={module.id} 
            value={module.id} 
            className={`border rounded-lg overflow-hidden ${!module.unlocked ? 'opacity-70' : ''}`}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <div className="flex items-center w-full">
                <div className="flex-1 flex items-center text-left">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm mr-3 
                      ${module.unlocked 
                        ? 'bg-adorzia-accent/10 text-adorzia-accent' 
                        : 'bg-gray-200 text-gray-500'}`}
                  >
                    {module.unlocked ? module.icon : <Lock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Badge className="bg-gray-100 text-gray-700 mr-2">Module {module.number}</Badge>
                      {!module.unlocked && (
                        <Badge className="bg-gray-100 text-gray-500">Locked</Badge>
                      )}
                    </div>
                    <h3 className="text-base font-medium mt-1">{module.title}</h3>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-6 py-4 border-t">
              <p className="mb-4 text-adorzia-midGray">{module.description}</p>
              
              <h4 className="font-medium mb-2 flex items-center">
                <Book className="w-4 h-4 mr-2 text-adorzia-accent" />
                Core Focus Areas
              </h4>
              <ul className="space-y-2 mb-6">
                {module.focus.map((focus, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-adorzia-accent mt-0.5 mr-2 flex-shrink-0" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
                <div>
                  <Badge className="bg-purple-50 text-purple-600 mb-2">
                    Includes StyleBox Challenge
                  </Badge>
                  <div className="text-sm text-adorzia-midGray">
                    Est. completion time: 2-3 weeks
                  </div>
                </div>
                
                <Button 
                  className={`flex items-center ${module.unlocked 
                    ? 'bg-adorzia-accent hover:bg-adorzia-accentHover text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                  disabled={!module.unlocked}
                >
                  {module.unlocked ? 'Begin Module' : 'Complete Previous Module'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <Card className="p-6 mt-8 bg-adorzia-accent/5 border-adorzia-accent">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-adorzia-accent/20 flex items-center justify-center mr-4">
            <Award className="w-6 h-6 text-adorzia-accent" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Final Certification Project</h3>
            <p className="text-adorzia-midGray">After completing all 12 modules</p>
          </div>
        </div>
        
        <p className="mb-4">
          Design a market-ready collection of 5 complete outfits that demonstrates your mastery of all aspects covered in the program, from concept development to technical execution.
        </p>
        
        <div className="text-sm text-adorzia-midGray mb-4">
          Your final project will be reviewed by the Adorzia Panel of industry professionals, who will evaluate your work based on creativity, technical execution, marketability, and presentation.
        </div>
        
        <Button variant="outline" className="w-full sm:w-auto" disabled={!modules[11].unlocked}>
          Learn More About Final Project
        </Button>
      </Card>
    </div>
  );
};

export default ACFDModuleStructure;
