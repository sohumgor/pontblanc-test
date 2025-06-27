
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Target, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const StrategyConsulting = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Clear Direction",
      description: "Transform ambiguous goals into actionable roadmaps with measurable milestones."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Sustainable Growth",
      description: "Build strategies that scale with your business and adapt to market changes."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Alignment",
      description: "Get your entire leadership team rowing in the same direction."
    }
  ];

  const process = [
    { step: "1", title: "Strategic Assessment", description: "Deep dive into your current position, challenges, and opportunities." },
    { step: "2", title: "Vision & Objectives", description: "Define clear, measurable goals aligned with your company's mission." },
    { step: "3", title: "Strategy Development", description: "Create actionable plans with timelines, resources, and success metrics." },
    { step: "4", title: "Implementation Support", description: "Guide execution and adjust strategy based on real-world feedback." }
  ];

  return (
    <div>
      <HeroSection
        title="Clarity and Direction for Sustainable Growth"
        subtitle="We help leadership teams clarify objectives, prioritize initiatives, and create scalable strategies that drive measurable results."
        ctaText="Get a Strategy Session"
        ctaLink="/contact"
      />

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Deliver</h2>
            <p className="text-xl text-gray-600">
              Strategic clarity that translates into actionable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Long-term vision development</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Goal setting & prioritization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Resource allocation planning</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Market Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Competitive analysis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Value proposition refinement</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Market opportunity assessment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Business Model Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Revenue stream optimization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Operational efficiency design</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Scalability planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Strategy Consulting Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Strategic Roadmap?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how strategic clarity can accelerate your growth.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Get a Strategy Session
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StrategyConsulting;
