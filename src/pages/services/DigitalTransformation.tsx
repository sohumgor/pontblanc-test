
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Zap, TrendingUp, Settings, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

const DigitalTransformation = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automation Advantage",
      description: "Reduce manual work by 60% with smart automation and workflow optimization."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Data-Driven Decisions",
      description: "Transform raw data into actionable insights for better business outcomes."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Future-Ready Systems",
      description: "Build scalable technology infrastructure that grows with your business."
    }
  ];

  const process = [
    { step: "1", title: "Digital Audit", description: "Assess current technology stack, identify gaps, and benchmark against industry standards." },
    { step: "2", title: "Strategy Development", description: "Create comprehensive digital roadmap aligned with business objectives." },
    { step: "3", title: "Technology Selection", description: "Choose the right tools and platforms for your specific needs and budget." },
    { step: "4", title: "Implementation & Training", description: "Deploy solutions with full team training and ongoing support." }
  ];

  return (
    <div>
      <HeroSection
        title="Modernize to Compete and Win"
        subtitle="We guide your tech strategy and digital roadmap—from automation to system integration. Transform your business for the digital age."
        ctaText="Start Your Digital Audit"
        ctaLink="/contact"
      />

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Digital Solutions That Drive Results</h2>
            <p className="text-xl text-gray-600">
              From legacy system modernization to cutting-edge automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Digital Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Technology stack assessment</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Gap analysis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />ROI opportunity identification</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Automation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Workflow automation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Data integration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Process digitization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">CRM/ERP Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />System selection & setup</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Data migration</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Team training & adoption</li>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Power of Digital Transformation</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Transformation Process</h2>
            <p className="text-xl text-gray-600">
              Structured approach to digital modernization
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
            <p className="text-xl text-gray-600">
              Platform-agnostic solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold">CRM Systems</h3>
              </div>
              <p className="text-sm text-gray-600">Salesforce, HubSpot, Pipedrive</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold">ERP Solutions</h3>
              </div>
              <p className="text-sm text-gray-600">NetSuite, SAP, QuickBooks</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold">Automation</h3>
              </div>
              <p className="text-sm text-gray-600">Zapier, Power Automate, Custom</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <h3 className="font-semibold">Analytics</h3>
              </div>
              <p className="text-sm text-gray-600">Tableau, Power BI, Google Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's assess your current systems and create a roadmap for digital success.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Start Your Digital Audit
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
