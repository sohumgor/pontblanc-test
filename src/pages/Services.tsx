
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Target, Settings, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Strategy Consulting",
      headline: "Clarity and Direction for Sustainable Growth",
      description: "We help leadership teams clarify objectives, prioritize initiatives, and create scalable strategies.",
      bullets: [
        "Strategic planning",
        "Market positioning", 
        "Business model design"
      ],
      ctaText: "Get a Strategy Session",
      ctaLink: "/services/strategy"
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Operations Consulting",
      headline: "Operational Efficiency That Drives Profit",
      description: "From supply chain to staffing, we optimize workflows that increase productivity and reduce cost.",
      bullets: [
        "Process improvement",
        "Team structure & delegation",
        "Cost reduction strategies"
      ],
      ctaText: "Optimize My Operations",
      ctaLink: "/services/operations"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Digital Transformation",
      headline: "Modernize to Compete and Win",
      description: "We guide your tech strategy and digital roadmap—from automation to system integration.",
      bullets: [
        "Digital audit",
        "Automation tools",
        "CRM/ERP implementation"
      ],
      ctaText: "Start Your Digital Audit",
      ctaLink: "/services/digital"
    }
  ];

  return (
    <div>
      <HeroSection
        title="Customized Consulting Built to Deliver Outcomes, Not Reports"
        subtitle="We partner with businesses to create strategies that work in practice, not just in theory. Every engagement is designed around measurable results."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">
              Three specialized areas. Unlimited potential for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-900">
                    {service.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full">
                    <Link to={service.ctaLink} className="flex items-center justify-center">
                      {service.ctaText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pontblanc */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Choose Pontblanc?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Focused</h3>
              <p className="text-gray-600">We measure success by your outcomes, not our deliverables.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Implementation</h3>
              <p className="text-gray-600">We don't just advise—we roll up our sleeves and help you execute.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Results</h3>
              <p className="text-gray-600">See meaningful improvements in weeks, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss which service area will deliver the biggest impact for your company.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
