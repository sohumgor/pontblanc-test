
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Rocket, Factory, Heart, Users, ArrowRight, CheckCircle, TrendingUp, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      id: 'startups',
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Startups",
      tagline: "Accelerate growth with strategic clarity.",
      description: "Scale from idea to execution with proven frameworks and experienced guidance.",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      painPoints: [
        "Limited resources and runway pressure",
        "Rapid scaling challenges",
        "Market validation and product-market fit",
        "Team building and leadership development"
      ],
      solutions: [
        "Strategic roadmap development",
        "Operational efficiency optimization",
        "Growth strategy and market positioning",
        "Leadership coaching and team structure"
      ],
      detailedDescription: "Startups face unique challenges that require agile, resourceful solutions. Our startup consulting combines strategic thinking with practical execution to help you navigate the critical early stages of growth."
    },
    {
      id: 'manufacturing',
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Manufacturing",
      tagline: "Optimize systems for performance and precision.",
      description: "Streamline operations, reduce waste, and increase efficiency across your production line.",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      painPoints: [
        "Supply chain disruptions and complexity",
        "Operational inefficiencies and waste",
        "Quality control and compliance challenges",
        "Technology integration and modernization"
      ],
      solutions: [
        "Supply chain optimization",
        "Lean manufacturing implementation",
        "Digital transformation and automation",
        "Quality management systems"
      ],
      detailedDescription: "Manufacturing companies need operational excellence to remain competitive. We help optimize your entire value chain, from procurement to delivery, ensuring efficiency and quality at every step."
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Healthcare",
      tagline: "Increase patient impact through operational strategy.",
      description: "Improve patient outcomes while optimizing costs and operational efficiency.",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      painPoints: [
        "Rising costs and financial pressures",
        "Regulatory compliance complexity",
        "Patient experience and satisfaction",
        "Staff retention and operational efficiency"
      ],
      solutions: [
        "Cost optimization and revenue cycle management",
        "Process improvement and workflow optimization",
        "Technology integration and digital health",
        "Change management and staff development"
      ],
      detailedDescription: "Healthcare organizations must balance quality care with operational efficiency. Our healthcare consulting focuses on improving patient outcomes while ensuring sustainable operations and compliance."
    },
    {
      id: 'nonprofits',
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Nonprofits",
      tagline: "Strategic planning to maximize mission delivery.",
      description: "Amplify your impact with strategic planning and operational excellence.",
      gradient: "from-purple-500 via-violet-500 to-indigo-600",
      painPoints: [
        "Limited funding and resource constraints",
        "Measuring and demonstrating impact",
        "Board governance and stakeholder management",
        "Program effectiveness and scalability"
      ],
      solutions: [
        "Strategic planning and impact measurement",
        "Fundraising strategy and donor development",
        "Operational efficiency and program optimization",
        "Board development and governance"
      ],
      detailedDescription: "Nonprofits need to maximize their impact with limited resources. Our nonprofit consulting helps organizations increase their effectiveness while maintaining their mission focus and stakeholder trust."
    }
  ];

  const scrollToIndustry = (industryId: string) => {
    const element = document.getElementById(industryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveIndustry(industryId);
    }
  };

  return (
    <div>
      <HeroSection
        title="Industry-Tested Solutions Tailored to Your Sector"
        subtitle="Every industry has unique challenges. Our sector-specific expertise ensures strategies that work in your world, not just in theory."
        ctaText="Find Your Industry"
        ctaLink="#industries"
      />

      {/* Industries Overview */}
      <section id="industries" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sectors We Serve
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Deep expertise across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className={`text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border-0 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${400 + index * 200}ms`}}
                onClick={() => scrollToIndustry(industry.id)}>
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardHeader className="relative">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                  <p className="text-primary font-semibold text-sm">{industry.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                  <div className="flex items-center justify-center text-primary font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section key={industry.id} id={industry.id} className="py-20 relative overflow-hidden">
          <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100'}`}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${industry.gradient} rounded-full text-white mr-4`}>
                    {industry.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{industry.title}</h2>
                    <p className="text-primary font-semibold text-lg">{industry.tagline}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">{industry.detailedDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges:</h4>
                    <ul className="space-y-3">
                      {industry.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Solutions:</h4>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button size="lg" asChild className={`bg-gradient-to-r ${industry.gradient} hover:opacity-90 text-white border-0`}>
                  <Link to="/contact" className="flex items-center">
                    Speak to a Sector Specialist
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`relative p-8 bg-gradient-to-br ${industry.gradient} rounded-2xl shadow-2xl text-white`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="text-6xl">
                      {industry.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Success Story</h4>
                  <p className="text-white/90 mb-6">
                    "Pontblanc's industry expertise in {industry.title.toLowerCase()} helped us navigate complex challenges and achieve breakthrough results. Their understanding of our sector made all the difference."
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center text-sm">
                      <span>Client Satisfaction</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-white h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-gray-200">
              Generic solutions deliver generic results. We speak your industry's language.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Industry-Specific Challenges",
                description: "We understand the unique pain points, regulations, and competitive pressures in your sector."
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Proven Solutions",
                description: "Our strategies are tested and refined through years of success in your industry."
              },
              {
                icon: <Factory className="h-8 w-8" />,
                title: "Faster Implementation",
                description: "Skip the learning curve. We know what works and can implement solutions quickly."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Success */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
              Cross-Industry Success
            </h2>
            <p className="text-xl text-gray-600">
              While we specialize by sector, our core principles work across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Companies Served", icon: <Target className="h-6 w-6" /> },
              { number: "4", label: "Core Industries", icon: <Factory className="h-6 w-6" /> },
              { number: "95%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "300%", label: "Average Growth", icon: <Rocket className="h-6 w-6" /> }
            ].map((stat, index) => (
              <div key={index} className="hover:scale-105 transition-transform duration-300">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Industry Experts?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss the unique challenges and opportunities in your sector.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-300">
            <Link to="/contact" className="flex items-center">
              Speak to a Sector Specialist
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
