
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import HeroSection from '@/components/ui/hero-section';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectOverview: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div>
      <HeroSection
        title="Let's Talk About Your Growth Goals"
        subtitle="Ready to transform your business? Schedule a free discovery call to discuss how we can help you achieve breakthrough results."
        ctaText="Book a Free Discovery Call"
        ctaLink="#contact-form"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get Started Today</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="projectOverview">Project Overview *</Label>
                      <Textarea
                        id="projectOverview"
                        name="projectOverview"
                        required
                        value={formData.projectOverview}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business challenges and goals..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Send Message & Schedule Call
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>hello@pontblanc.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Free Discovery Call</h4>
                        <p className="text-gray-600 text-sm">We'll discuss your challenges and goals (30 minutes)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Custom Proposal</h4>
                        <p className="text-gray-600 text-sm">We'll create a tailored solution for your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Start Execution</h4>
                        <p className="text-gray-600 text-sm">Begin implementing solutions and tracking results</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Schedule Directly</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Prefer to book a time that works for you? Use our calendar to schedule your free consultation.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Available Times
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
