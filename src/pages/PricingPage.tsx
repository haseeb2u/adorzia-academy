
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  const faqItems = [
    {
      question: "Can I change my subscription plan later?",
      answer: "Yes, you can upgrade or downgrade your subscription at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 20% discount for verified students. Contact our support team with proof of enrollment to receive your discount code."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 14 days, you can request a full refund."
    },
    {
      question: "Can I pay annually instead of monthly?",
      answer: "Yes, annual payment options are available with a 15% discount compared to monthly payments."
    },
    {
      question: "What happens when my subscription ends?",
      answer: "When your subscription ends, you'll lose access to premium content and features. Your progress and completed courses will be saved if you choose to resubscribe later."
    },
    {
      question: "Are certifications included in all plans?",
      answer: "Basic certifications are included in the Pro and Enterprise plans. Premium industry certifications may require additional fees."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-adorzia-lightGray to-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Flexible <span className="text-purple-600">Pricing</span> for Every Learning Journey
          </h1>
          <p className="text-xl text-adorzia-midGray mb-8 max-w-3xl mx-auto">
            Choose the perfect plan to support your fashion design education and career goals
          </p>
          <div className="inline-flex items-center justify-center space-x-4 bg-white px-4 py-2 rounded-full shadow-subtle">
            <span className="text-adorzia-midGray">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
            <span className="text-adorzia-midGray">Annual <span className="text-green-600 text-xs font-medium">Save 15%</span></span>
          </div>
        </div>
      </section>
      
      {/* Main Content - SubscriptionPlans Component */}
      <SubscriptionPlans />
      
      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Detailed <span className="text-purple-600">Feature Comparison</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-adorzia-lightGray">
                  <th className="p-4 text-left font-medium">Features</th>
                  <th className="p-4 text-center font-medium">Free</th>
                  <th className="p-4 text-center font-medium">Basic</th>
                  <th className="p-4 text-center font-medium">Pro</th>
                  <th className="p-4 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Access to beginner courses</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Intermediate courses</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Advanced courses</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">StyleBox challenges</td>
                  <td className="p-4 text-center">2 per month</td>
                  <td className="p-4 text-center">5 per month</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Downloadable resources</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Access to community forums</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Instructor feedback</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="p-4 text-center">Priority</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Portfolio reviews</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">2 per year</td>
                  <td className="p-4 text-center">Quarterly</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4">Career counseling</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Industry partner connections</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-adorzia-lightGray">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-subtle">
                <div className="flex items-start mb-4">
                  <HelpCircle className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-adorzia-midGray ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Begin Your Fashion Design Journey?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of designers who have transformed their careers with Adorzia Academy's structured learning approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Sign Up Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
