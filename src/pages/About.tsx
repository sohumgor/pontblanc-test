
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Target, Users, Award, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We deliver honest assessments and transparent recommendations, even when it's not what you want to hear.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Clarity",
      description: "We cut through complexity to provide clear, actionable insights that drive real business results.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accountability",
      description: "We take ownership of outcomes and work alongside you to ensure successful implementation.",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Impact",
      description: "We measure success by the tangible improvements we create in your business performance.",
      gradient: "from-purple-400 to-violet-600"
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      title: "Managing Partner",
      bio: "Former McKinsey consultant with 15 years of strategy and operations experience across Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Mitchell",
      title: "Operations Director",
      bio: "Ex-Amazon operations leader specializing in process optimization and digital transformation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Rodriguez",
      title: "Strategy Partner",
      bio: "Former startup founder and Bain consultant with expertise in growth strategy and business model innovation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const stats = [
    { number: "150+", label: "Companies Transformed", icon: <Target className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Award className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <Users className="h-6 w-6" /> },
    { number: "5x", label: "Average ROI", icon: <Sparkles className="h-6 w-6" /> }
  ];

  return (
    <div>
      <HeroSection
        title="We're Not Just Advisors. We're Execution Partners."
        subtitle="At Pontblanc, we believe strategy should lead to action. Founded by a team of ex-operators, our consulting firm bridges the gap between big ideas and measurable results."
        ctaText="Explore Services"
        ctaLink="/services"
      />

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transition-all duration-500 delay-${index * 100} ${isVisible ? 'scale-100' : 'scale-95'}`}>
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

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower businesses with strategic clarity and operational excellence, transforming ambitious visions into sustainable, measurable results. We don't just provide recommendations—we partner with you to ensure successful execution.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Pontblanc was founded in 2018 by a team of former McKinsey consultants and Fortune 500 executives who saw a gap in the consulting industry. Too many firms delivered impressive presentations but failed to help clients implement real change.
                </p>
                <p className="leading-relaxed">
                  We built Pontblanc differently. Our team consists of ex-operators who have actually run departments, launched products, and scaled businesses. We understand the difference between theoretical recommendations and practical solutions that work in the real world.
                </p>
                <p className="leading-relaxed">
                  Today, we've helped over 150 companies achieve breakthrough results, from startups scaling to $100M+ valuations to established enterprises optimizing for efficiency and growth.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="relative rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-500 hover-scale group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${800 + index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-primary to-blue-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-200">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`text-center hover:shadow-2xl transition-all duration-500 hover-scale group border-0 bg-white/10 backdrop-blur-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${1000 + index * 150}ms`}}>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-r ${value.gradient} rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-200 leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss how we can help transform your business challenges into growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="hover-scale">
                <Link to="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-primary hover-scale">
                <Link to="/contact" className="flex items-center">
                  Meet Your Consultant
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
