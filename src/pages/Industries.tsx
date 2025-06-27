
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Rocket, Factory, Heart, Users, ArrowRight } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Startups",
      tagline: "Accelerate growth with strategic clarity.",
      description: "Scale from idea to execution with proven frameworks and experienced guidance.",
      link: "/industries/startups"
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Manufacturing",
      tagline: "Optimize systems for performance and precision.",
      description: "Streamline operations, reduce waste, and increase efficiency across your production line.",
      link: "/industries/manufacturing"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Healthcare",
      tagline: "Increase patient impact through operational strategy.",
      description: "Improve patient outcomes while optimizing costs and operational efficiency.",
      link: "/industries/healthcare"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Nonprofits",
      tagline: "Strategic planning to maximize mission delivery.",
      description: "Amplify your impact with strategic planning and operational excellence.",
      link: "/industries/nonprofits"
    }
  ];

  return (
    <div>
      <HeroSection
        title="Industry-Tested Solutions Tailored to Your Sector"
        subtitle="Every industry has unique challenges. Our sector-specific expertise ensures strategies that work in your world, not just in theory."
        ctaText="Find Your Industry"
        ctaLink="#industries"
      />

      {/* Industries Grid */}
      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-xl text-gray-600">
              Deep expertise across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                  <p className="text-primary font-semibold text-sm">{industry.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={industry.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-gray-600">
              Generic solutions deliver generic results. We speak your industry's language.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Specific Challenges</h3>
              <p className="text-gray-600">We understand the unique pain points, regulations, and competitive pressures in your sector.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Solutions</h3>
              <p className="text-gray-600">Our strategies are tested and refined through years of success in your industry.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Faster Implementation</h3>
              <p className="text-gray-600">Skip the learning curve. We know what works and can implement solutions quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Success */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cross-Industry Success</h2>
            <p className="text-xl text-gray-600">
              While we specialize by sector, our core principles work across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Companies Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-gray-600">Core Industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Industry Experts?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss the unique challenges and opportunities in your sector.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Speak to a Sector Specialist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
