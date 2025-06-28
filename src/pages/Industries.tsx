
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      id: 'startups',
      icon: <Target className="h-10 w-10" />,
      title: "Startups",
      tagline: "Accelerate growth with strategic clarity.",
      description: "Scale from idea to execution with proven frameworks and experienced guidance.",
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
      icon: <Users className="h-10 w-10" />,
      title: "Manufacturing",
      tagline: "Optimize systems for performance and precision.",
      description: "Streamline operations, reduce waste, and increase efficiency across your production line.",
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
      icon: <Award className="h-10 w-10" />,
      title: "Healthcare",
      tagline: "Increase patient impact through operational strategy.",
      description: "Improve patient outcomes while optimizing costs and operational efficiency.",
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
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Nonprofits",
      tagline: "Strategic planning to maximize mission delivery.",
      description: "Amplify your impact with strategic planning and operational excellence.",
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
            Industry-Tested Solutions <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Tailored to Your Sector</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every industry has unique challenges. Our sector-specific expertise ensures strategies that work in your world, <span className="text-blue-600 font-semibold">not just in theory</span>.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="#industries" className="flex items-center gap-2">
                Find Your Industry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Sectors We <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 overflow-hidden bg-white rounded-3xl cursor-pointer"
                onClick={() => scrollToIndustry(industry.id)}
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </CardTitle>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{industry.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
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

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section key={industry.id} id={industry.id} className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mr-4 text-white">
                    {industry.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">{industry.title}</h2>
                    <p className="text-blue-600 font-semibold text-lg">{industry.tagline}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{industry.detailedDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Common Challenges:</h4>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Our Solutions:</h4>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Speak to a Sector Specialist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-6 transform rotate-3 hover:rotate-6 transition-transform duration-500 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6 text-white">
                      {industry.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Success Story</h4>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      "Pontblanc's industry expertise in {industry.title.toLowerCase()} helped us navigate complex challenges and achieve breakthrough results."
                    </p>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm">
                      98% Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Generic solutions deliver generic results. We speak your industry's language.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-10 w-10" />,
                title: "Industry-Specific Challenges",
                description: "We understand the unique pain points, regulations, and competitive pressures in your sector."
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Proven Solutions",
                description: "Our strategies are tested and refined through years of success in your industry."
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Faster Implementation",
                description: "Skip the learning curve. We know what works and can implement solutions quickly."
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
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to Work with <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Industry Experts</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Let's discuss the unique challenges and opportunities in your sector.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-3">
              Speak to a Sector Specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
