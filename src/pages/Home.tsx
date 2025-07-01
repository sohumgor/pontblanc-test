
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Star, Zap, Shield } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Strategy Consulting",
      description: "Clear direction and actionable roadmaps for sustainable growth",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Zap className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Operations Excellence",
      description: "Streamlined processes that boost efficiency and reduce costs",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Shield className="h-8 w-8 sm:h-10 sm:w-10" />,
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
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Strategic Consulting That
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Drives Results
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We help businesses achieve breakthrough growth through strategic clarity, operational excellence, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Three specialized areas. Unlimited potential for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white rounded-3xl">
                <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6">
                  <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:bg-blue-50">
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">PontBlanc</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're not just consultants—we're execution partners committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />,
                title: "Results-Focused",
                description: "We measure success by your outcomes, not our deliverables."
              },
              {
                icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />,
                title: "Hands-On Implementation",
                description: "We don't just advise—we roll up our sleeves and help you execute."
              },
              {
                icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />,
                title: "Rapid Results",
                description: "See meaningful improvements in weeks, not months."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex justify-center mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white rounded-3xl hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-white">
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Transform Your Business</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Let's discuss how we can help you achieve breakthrough results. Book your free consultation today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
