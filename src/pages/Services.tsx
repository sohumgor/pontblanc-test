
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'strategy',
      icon: <Target className="h-10 w-10" />,
      title: "Strategy Consulting",
      headline: "Clarity and Direction for Sustainable Growth",
      description: "We help leadership teams clarify objectives, prioritize initiatives, and create scalable strategies.",
      bullets: [
        "Strategic planning",
        "Market positioning", 
        "Business model design"
      ],
      ctaText: "Get a Strategy Session",
      detailedDescription: "Our strategy consulting approach combines proven frameworks with deep industry knowledge to help you navigate complex business challenges. We work alongside your leadership team to develop actionable strategies that drive sustainable growth and competitive advantage.",
      process: [
        "Current state assessment and gap analysis",
        "Market opportunity identification",
        "Strategic roadmap development",
        "Implementation planning and support"
      ]
    },
    {
      id: 'operations',
      icon: <Users className="h-10 w-10" />,
      title: "Operations Consulting",
      headline: "Operational Efficiency That Drives Profit",
      description: "From supply chain to staffing, we optimize workflows that increase productivity and reduce cost.",
      bullets: [
        "Process improvement",
        "Team structure & delegation",
        "Cost reduction strategies"
      ],
      ctaText: "Optimize My Operations",
      detailedDescription: "Transform your operations from cost centers into profit drivers. Our operations consulting focuses on streamlining processes, optimizing resource allocation, and building systems that scale with your growth.",
      process: [
        "Operational audit and bottleneck identification",
        "Process redesign and optimization",
        "Team restructuring and role clarification",
        "Performance metrics and monitoring systems"
      ]
    },
    {
      id: 'digital',
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Digital Transformation",
      headline: "Modernize to Compete and Win",
      description: "We guide your tech strategy and digital roadmap—from automation to system integration.",
      bullets: [
        "Digital audit",
        "Automation tools",
        "CRM/ERP implementation"
      ],
      ctaText: "Start Your Digital Audit",
      detailedDescription: "Navigate the digital landscape with confidence. Our digital transformation services help you leverage technology to improve efficiency, enhance customer experience, and create new revenue streams.",
      process: [
        "Digital maturity assessment",
        "Technology stack evaluation",
        "Implementation roadmap creation",
        "Change management and training"
      ]
    }
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Customized Consulting Built to <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Deliver Outcomes</span>, Not Reports
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We partner with businesses to create strategies that work in practice, not just in theory. Every engagement is designed around <span className="text-blue-600 font-semibold">measurable results</span>.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three specialized areas. Unlimited potential for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl cursor-pointer"
                onClick={() => scrollToService(service.id)}
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-blue-600 mb-2">
                    {service.headline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-center text-blue-600 font-semibold text-sm pt-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mr-4 text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">{service.title}</h2>
                    <p className="text-blue-600 font-semibold text-lg">{service.headline}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.detailedDescription}</p>
                
                <div className="space-y-6 mb-8">
                  <h4 className="text-xl font-bold text-gray-900">Our Process:</h4>
                  <ul className="space-y-3">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    {service.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-6 transform rotate-3 hover:rotate-6 transition-transform duration-500 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6 text-white">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Key Benefits:</h4>
                    <ul className="space-y-3 text-center">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Pontblanc */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose Pontblanc?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Results-focused consulting that delivers measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="h-10 w-10" />,
                title: "Results-Focused",
                description: "We measure success by your outcomes, not our deliverables."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Hands-On Implementation",
                description: "We don't just advise—we roll up our sleeves and help you execute."
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Rapid Results",
                description: "See meaningful improvements in weeks, not months."
              }
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transform Your Business</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Let's discuss which service area will deliver the biggest impact for your company.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Schedule Your Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
