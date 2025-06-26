
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We deliver honest assessments and transparent recommendations, even when it's not what you want to hear."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Clarity",
      description: "We cut through complexity to provide clear, actionable insights that drive real business results."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accountability",
      description: "We take ownership of outcomes and work alongside you to ensure successful implementation."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Impact",
      description: "We measure success by the tangible improvements we create in your business performance."
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

  return (
    <div>
      <HeroSection
        title="We're Not Just Advisors. We're Execution Partners."
        subtitle="At Pontblanc, we believe strategy should lead to action. Founded by a team of ex-operators, our consulting firm bridges the gap between big ideas and measurable results."
        ctaText="Explore Services"
        ctaLink="/services/strategy"
      />

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To empower businesses with strategic clarity and operational excellence, transforming ambitious visions into sustainable, measurable results. We don't just provide recommendations—we partner with you to ensure successful execution.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Pontblanc was founded in 2018 by a team of former McKinsey consultants and Fortune 500 executives who saw a gap in the consulting industry. Too many firms delivered impressive presentations but failed to help clients implement real change.
                </p>
                <p>
                  We built Pontblanc differently. Our team consists of ex-operators who have actually run departments, launched products, and scaled businesses. We understand the difference between theoretical recommendations and practical solutions that work in the real world.
                </p>
                <p>
                  Today, we've helped over 150 companies achieve breakthrough results, from startups scaling to $100M+ valuations to established enterprises optimizing for efficiency and growth.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can help transform your business challenges into growth opportunities.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services/strategy">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Meet Your Consultant</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
