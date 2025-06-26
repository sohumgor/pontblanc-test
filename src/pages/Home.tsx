
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import HeroSection from '@/components/ui/hero-section';
import { CheckCircle, TrendingUp, Settings, Zap } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Strategy Consulting",
      description: "Strategic planning and business model design for sustainable growth."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Operational Excellence",
      description: "Process improvement and efficiency optimization to drive results."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Digital Transformation",
      description: "Technology strategy and digital modernization for competitive advantage."
    }
  ];

  const testimonials = [
    {
      quote: "Pontblanc transformed our operations and helped us achieve 40% growth in just 8 months.",
      author: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      company: "TechStart"
    },
    {
      quote: "Their strategic guidance was exactly what we needed to scale our business effectively.",
      author: "Michael Chen",
      title: "Founder, GrowthCorp",
      company: "GrowthCorp"
    },
    {
      quote: "The team's expertise in digital transformation saved us months of trial and error.",
      author: "Emily Rodriguez",
      title: "COO, InnovateLab",
      company: "InnovateLab"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Strategy Meets Execution. Results You Can Measure."
        subtitle="Pontblanc helps businesses unlock scalable growth through strategy, operations, and transformation consulting."
        ctaText="Book a Free Consultation"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center h-12 text-gray-400 font-semibold">
              COMPANY A
            </div>
            <div className="flex items-center justify-center h-12 text-gray-400 font-semibold">
              COMPANY B
            </div>
            <div className="flex items-center justify-center h-12 text-gray-400 font-semibold">
              COMPANY C
            </div>
            <div className="flex items-center justify-center h-12 text-gray-400 font-semibold">
              COMPANY D
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with businesses to deliver measurable results through strategic consulting and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pontblanc Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Pontblanc?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Actionable insights. Agile implementation. Proven results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Results-Driven Approach</h3>
                    <p className="text-gray-600">We focus on outcomes, not just recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Ex-operators who understand real business challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customized Solutions</h3>
                    <p className="text-gray-600">Tailored strategies that fit your unique situation.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8">
                <Link to="/about">Why Choose Us</Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Success Story</h2>
                  <h3 className="text-xl mb-4">How We Helped TechStart Scale 300% in 12 Months</h3>
                  <p className="text-gray-100 mb-6">
                    See how our strategic consulting and operational improvements helped a startup transform from struggling to thriving.
                  </p>
                  <Button variant="secondary" asChild>
                    <Link to="/case-studies">Read Full Story</Link>
                  </Button>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-6xl font-bold mb-2">300%</div>
                  <div className="text-xl">Growth Achieved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Growth Audit Checklist for CEOs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get our proven framework to identify growth opportunities in your business.
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" type="text" placeholder="Your Company" />
                </div>
                <Button className="w-full">Download Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-8 text-center">
                      <blockquote className="text-xl italic text-gray-600 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.title}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to move from ideas to impact?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can help accelerate your business growth.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Schedule Your Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
