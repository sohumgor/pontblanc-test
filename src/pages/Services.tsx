
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Target, Settings, Zap, ArrowRight, CheckCircle, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Target className="h-12 w-12 text-white" />,
      title: "Strategy Consulting",
      headline: "Clarity and Direction for Sustainable Growth",
      description: "We help leadership teams clarify objectives, prioritize initiatives, and create scalable strategies.",
      bullets: [
        "Strategic planning",
        "Market positioning", 
        "Business model design"
      ],
      ctaText: "Get a Strategy Session",
      ctaLink: "/services/strategy",
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      hoverGradient: "from-blue-600 via-indigo-600 to-purple-700"
    },
    {
      icon: <Settings className="h-12 w-12 text-white" />,
      title: "Operations Consulting",
      headline: "Operational Efficiency That Drives Profit",
      description: "From supply chain to staffing, we optimize workflows that increase productivity and reduce cost.",
      bullets: [
        "Process improvement",
        "Team structure & delegation",
        "Cost reduction strategies"
      ],
      ctaText: "Optimize My Operations",
      ctaLink: "/services/operations",
      gradient: "from-emerald-500 via-green-600 to-teal-700",
      hoverGradient: "from-emerald-600 via-teal-600 to-cyan-700"
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Digital Transformation",
      headline: "Modernize to Compete and Win",
      description: "We guide your tech strategy and digital roadmap—from automation to system integration.",
      bullets: [
        "Digital audit",
        "Automation tools",
        "CRM/ERP implementation"
      ],
      ctaText: "Start Your Digital Audit",
      ctaLink: "/services/digital",
      gradient: "from-purple-500 via-violet-600 to-indigo-700",
      hoverGradient: "from-purple-600 via-indigo-600 to-blue-700"
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Focused",
      description: "We measure success by your outcomes, not our deliverables.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Hands-On Implementation",
      description: "We don't just advise—we roll up our sleeves and help you execute.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Rapid Results",
      description: "See meaningful improvements in weeks, not months.",
      gradient: "from-purple-400 to-violet-600"
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our Core Services
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Three specialized areas. Unlimited potential for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover-scale group border-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${400 + index * 200}ms`}}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-all duration-500 group-hover:bg-gradient-to-br group-hover:${service.hoverGradient}`}></div>
                <div className="relative">
                  <CardHeader className="text-center text-white">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-white/90">
                      {service.headline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-white">
                    <p className="text-white/80">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-white/90">
                          <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100 hover-scale">
                      <Link to={service.ctaLink} className="flex items-center justify-center font-semibold">
                        {service.ctaText}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pontblanc */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Choose Pontblanc?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className={`text-center transition-all duration-500 delay-${1200 + index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-150`}></div>
                  <div className={`relative bg-gradient-to-r ${benefit.gradient} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Proven Track Record
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Companies Served", icon: <Target className="h-6 w-6" /> },
              { number: "98%", label: "Client Satisfaction", icon: <Sparkles className="h-6 w-6" /> },
              { number: "45%", label: "Average Growth", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "6mo", label: "Average ROI Time", icon: <Zap className="h-6 w-6" /> }
            ].map((stat, index) => (
              <div key={index} className={`text-center transition-all duration-500 delay-${1700 + index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-blue-600 rounded-full text-white shadow-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-primary to-blue-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss which service area will deliver the biggest impact for your company.
            </p>
            <Button size="lg" variant="secondary" asChild className="hover-scale">
              <Link to="/contact" className="flex items-center">
                Schedule Your Free Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
