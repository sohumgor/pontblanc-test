
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Settings, TrendingUp, Users, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const OperationsConsulting = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Increased Efficiency",
      description: "Streamline processes to reduce waste and increase productivity by 25-40%."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cost Reduction",
      description: "Identify and eliminate operational inefficiencies that drain resources."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Optimization",
      description: "Structure teams and delegate effectively for maximum impact."
    }
  ];

  const process = [
    { step: "1", title: "Operational Audit", description: "Comprehensive analysis of current processes, workflows, and resource allocation." },
    { step: "2", title: "Bottleneck Identification", description: "Pinpoint inefficiencies and constraints limiting your growth." },
    { step: "3", title: "Solution Design", description: "Create optimized processes and systems tailored to your business." },
    { step: "4", title: "Implementation & Training", description: "Deploy solutions and train your team for sustainable success." }
  ];

  return (
    <div>
      <HeroSection
        title="Operational Efficiency That Drives Profit"
        subtitle="From supply chain to staffing, we optimize workflows that increase productivity and reduce cost. Transform your operations into a competitive advantage."
        ctaText="Optimize My Operations"
        ctaLink="/contact"
      />

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Optimize</h2>
            <p className="text-xl text-gray-600">
              Every aspect of your operations, from workflow to workforce
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Process Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Workflow optimization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Quality control systems</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Bottleneck elimination</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Team Structure & Delegation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Organizational design</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Role clarification</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Performance systems</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Cost Reduction Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Expense analysis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Vendor optimization</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Resource allocation</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Impact of Operational Excellence</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Optimization Process</h2>
            <p className="text-xl text-gray-600">
              Systematic approach to operational transformation
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

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-gray-600">Faster Process Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's identify the bottlenecks holding your business back.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Optimize My Operations
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OperationsConsulting;
