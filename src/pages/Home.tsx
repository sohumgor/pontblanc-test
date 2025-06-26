
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle, TrendingUp, Settings, Zap, ArrowRight, Star, Users, Target, Rocket } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      title: "Strategy Consulting",
      description: "Strategic planning and business model design for exponential growth and market leadership.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Settings className="h-12 w-12 text-white" />,
      title: "Operational Excellence",
      description: "Process optimization and efficiency transformation to drive measurable results and ROI.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Digital Transformation",
      description: "Technology strategy and digital modernization for competitive advantage in the digital age.",
      gradient: "from-pink-600 to-red-600"
    }
  ];

  const stats = [
    { number: "300%", label: "Average Growth" },
    { number: "50+", label: "Companies Transformed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24mo", label: "Average Partnership" }
  ];

  const testimonials = [
    {
      quote: "Pontblanc didn't just consult - they became part of our team and transformed our entire business model. The results speak for themselves: 300% growth in 8 months.",
      author: "Sarah Johnson",
      title: "CEO & Founder",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      quote: "Their strategic guidance and operational expertise saved us from making costly mistakes. They turned our vision into a profitable reality.",
      author: "Michael Chen",
      title: "Founder",
      company: "GrowthCorp",
      rating: 5
    },
    {
      quote: "The digital transformation roadmap they created for us was game-changing. We went from struggling with legacy systems to leading our industry in innovation.",
      author: "Emily Rodriguez",
      title: "COO",
      company: "InnovateLab",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced with animations and gradients */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Strategy Meets
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Execution
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We don't just deliver recommendations. We partner with you to execute strategies that deliver 
              <span className="text-purple-400 font-semibold"> measurable results</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Free Strategy Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300">
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Creative layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core competencies. Infinite possibilities. Measurable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pontblanc - Split layout with animations */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pontblanc</span>?
              </h2>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                We're not just advisors. We're execution partners who get results.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Target className="h-8 w-8" />, title: "Results-Driven Approach", desc: "We focus on measurable outcomes, not just pretty presentations." },
                  { icon: <Users className="h-8 w-8" />, title: "Ex-Operator Team", desc: "Real entrepreneurs who've built, scaled, and sold businesses." },
                  { icon: <Rocket className="h-8 w-8" />, title: "Rapid Implementation", desc: "From strategy to execution in weeks, not months." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="bg-white rounded-2xl h-full flex items-center justify-center">
                  <div className="text-center text-gray-900">
                    <div className="text-6xl font-black mb-4">98%</div>
                    <div className="text-lg font-semibold">Client Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern carousel */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-600">Real partnerships. Real results. Real testimonials.</p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t pt-8">
                        <div className="font-bold text-xl text-gray-900">{testimonial.author}</div>
                        <div className="text-purple-600 font-semibold">{testimonial.title}</div>
                        <div className="text-gray-500">{testimonial.company}</div>
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

      {/* Lead Magnet - Bold design */}
      <section className="py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Free Strategy Audit
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Get our proven framework to identify 7-figure growth opportunities in your business.
          </p>
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-white font-semibold">Company Name</Label>
                  <Input id="company" type="text" placeholder="Your Company" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
                </div>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                  Download Free Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA - Bold and action-oriented */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Scale</span>?
          </h2>
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Stop planning. Start executing. Book your free strategy call and discover how we can 3x your business in the next 12 months.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300">
            <Link to="/contact" className="flex items-center gap-3">
              Book Your Strategy Call Now
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
