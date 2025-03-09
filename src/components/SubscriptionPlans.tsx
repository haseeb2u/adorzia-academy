
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, X, Award, BookOpen, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanFeatureProps {
  included: boolean;
  text: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ included, text }) => (
  <div className="flex items-center mb-4">
    {included ? (
      <CheckCircle className="w-5 h-5 text-adorzia-accent mr-3 flex-shrink-0" />
    ) : (
      <X className="w-5 h-5 text-adorzia-midGray mr-3 flex-shrink-0" />
    )}
    <span className={included ? "text-adorzia-darkGray" : "text-adorzia-midGray"}>
      {text}
    </span>
  </div>
);

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: { included: boolean; text: string }[];
  popular?: boolean;
  buttonText: string;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  popular,
  buttonText,
  index
}) => (
  <div className={cn(
    "rounded-lg overflow-hidden h-full flex flex-col reveal",
    popular ? "border-2 border-adorzia-accent" : "border border-gray-200",
    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
  )}>
    {popular && (
      <div className="bg-adorzia-accent text-white text-center py-2 text-sm font-medium">
        Most Popular
      </div>
    )}
    
    <div className="p-8 flex-grow">
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-adorzia-midGray mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="text-4xl font-bold inline-block">{price}</div>
        {period && <div className="text-adorzia-midGray inline-block ml-2">/{period}</div>}
      </div>
      
      <div className="space-y-2 mb-8">
        {features.map((feature, idx) => (
          <PlanFeature key={idx} included={feature.included} text={feature.text} />
        ))}
      </div>
    </div>
    
    <div className="px-8 pb-8">
      <Button 
        className={cn(
          "w-full",
          popular 
            ? "bg-adorzia-accent hover:bg-adorzia-accentHover text-white" 
            : "bg-white border border-adorzia-accent text-adorzia-accent hover:bg-adorzia-accent/5"
        )}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

const SubscriptionPlans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.reveal');
          
          if (entry.isIntersecting) {
            elements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for beginners exploring fashion design fundamentals.",
      buttonText: "Get Started",
      features: [
        { included: true, text: "Access to basic courses" },
        { included: true, text: "Limited StyleBox challenges" },
        { included: true, text: "Community forum access" },
        { included: false, text: "Advanced courses & workshops" },
        { included: false, text: "Certification exams" },
        { included: false, text: "1-on-1 feedback sessions" },
      ],
    },
    {
      title: "Pro",
      price: "$24.99",
      period: "month",
      description: "For committed designers ready to advance their skills.",
      buttonText: "Join Pro",
      popular: true,
      features: [
        { included: true, text: "Access to all courses" },
        { included: true, text: "Unlimited StyleBox challenges" },
        { included: true, text: "Community forum access" },
        { included: true, text: "Advanced courses & workshops" },
        { included: true, text: "Certification exams" },
        { included: false, text: "1-on-1 feedback sessions" },
      ],
    },
    {
      title: "Master",
      price: "$49.99",
      period: "month",
      description: "For professionals seeking industry recognition and mentorship.",
      buttonText: "Join Master",
      features: [
        { included: true, text: "Access to all courses" },
        { included: true, text: "Unlimited StyleBox challenges" },
        { included: true, text: "Community forum access" },
        { included: true, text: "Advanced courses & workshops" },
        { included: true, text: "Certification exams" },
        { included: true, text: "1-on-1 feedback sessions" },
      ],
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge reveal">Subscription Plans</div>
          <h2 className="font-serif mt-4 mb-6 reveal reveal-delay-1">
            Choose the Perfect <span className="text-adorzia-accent">Learning Plan</span>
          </h2>
          <p className="text-adorzia-midGray reveal reveal-delay-2">
            Flexible subscription options to match your learning goals and budget. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-8 items-center bg-adorzia-gray rounded-lg p-8 reveal reveal-delay-3">
          <div className="flex-1 space-y-4">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-adorzia-accent mr-3" />
              <h3 className="text-xl font-medium">Scholarships Available</h3>
            </div>
            <p className="text-adorzia-midGray">
              We believe in making quality design education accessible. High-performing designers may qualify for scholarships.
            </p>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-adorzia-accent mr-3" />
              <h3 className="text-xl font-medium">Educational Discounts</h3>
            </div>
            <p className="text-adorzia-midGray">
              Students and educators can receive special pricing on Pro and Master plans with valid ID.
            </p>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center">
              <MessageSquare className="w-6 h-6 text-adorzia-accent mr-3" />
              <h3 className="text-xl font-medium">Group Rates</h3>
            </div>
            <p className="text-adorzia-midGray">
              Schools and design studios can access bulk licensing options for teams of 5 or more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
