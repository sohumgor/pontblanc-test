
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Star, Zap, Shield, Loader2, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSignup = async () => {
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: { email: email.trim(), source: 'home' }
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Successfully Subscribed!",
          description: data.message,
        });
        setEmail('');
      } else {
        toast({
          title: "Subscription Failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const services = [
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
      title: "Strategy Consulting",
      description: "Clear direction and actionable roadmaps for sustainable growth",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
      title: "Operations Excellence",
      description: "Streamlined processes that boost efficiency and reduce costs",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
      title: "Digital Transformation",
      description: "Modern solutions that future-proof your business",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { number: "150+", label: "Companies Transformed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Value Created" },
    { number: "24hrs", label: "Response Time" }
  ];

  const testimonials = [
    {
      quote: "PontBlanc didn't just give us a strategy—they helped us execute it. Revenue increased 40% in 6 months.",
      author: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Their operational expertise transformed our manufacturing processes. We cut costs by 25% while improving quality.",
      author: "Michael Rodriguez",
      title: "COO, Industrial Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The digital transformation roadmap they created is exactly what we needed. Implementation was seamless.",
      author: "Lisa Park",
      title: "CTO, FinanceFirst",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-3 sm:px-4 md:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 sm:-top-20 md:-top-40 -right-16 sm:-right-20 md:-right-40 w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-40 -left-16 sm:-left-20 md:-left-40 w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-72 md:h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Strategic Consulting That
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Drives Results
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            We help businesses achieve breakthrough growth through strategic clarity, operational excellence, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Three specialized areas. Unlimited potential for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white rounded-2xl sm:rounded-3xl">
                <div className="h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="text-center pb-2 sm:pb-3 md:pb-4">
                  <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                    <div className={`p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 sm:mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-1 sm:px-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-4 sm:pb-6">
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:bg-blue-50 text-sm sm:text-base">
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">PontBlanc</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              We're not just consultants—we're execution partners committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-600" />,
                title: "Results-Focused",
                description: "We measure success by your outcomes, not our deliverables."
              },
              {
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-emerald-600" />,
                title: "Hands-On Implementation",
                description: "We don't just advise—we roll up our sleeves and help you execute."
              },
              {
                icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600" />,
                title: "Rapid Results",
                description: "See meaningful improvements in weeks, not months."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-2 sm:px-4">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white rounded-2xl sm:rounded-3xl hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex mb-2 sm:mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-xs sm:text-sm md:text-base text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4">
            Stay Ahead of the Competition
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90 px-2 sm:px-4">
            Get weekly business insights, strategic tips, and exclusive content delivered to your inbox.
          </p>
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-lg border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="newsletter-email" className="text-white font-semibold text-sm sm:text-base">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
                    Email Address
                  </Label>
                  <Input 
                    id="newsletter-email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSignup()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mt-2" 
                  />
                </div>
                <Button 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={handleNewsletterSignup}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transform Your Business</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
            Let's discuss how we can help you achieve breakthrough results. Book your free consultation today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
