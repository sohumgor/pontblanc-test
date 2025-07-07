import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectOverview: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Business Inquiry from ${formData.name} - ${formData.company}`);
      const body = encodeURIComponent(`
Hello Pontblanc Team,

New business inquiry received:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Project Overview:
${formData.projectOverview}

Please follow up to schedule a discovery call.

Best regards,
Website Contact Form
      `);

      const mailtoUrl = `mailto:info@pontblanc.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      toast({
        title: "Email Client Opened",
        description: "Your email client should now be open with the message pre-filled. Send it to complete your inquiry.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectOverview: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try contacting us directly at info@pontblanc.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@pontblanc.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const handleCalendlyClick = () => {
    // Open Calendly popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/pontblanc/discovery-call' });
    } else {
      // Fallback to opening in new tab
      window.open('https://calendly.com/pontblanc/discovery-call', '_blank');
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6">
        <div className="max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Let's Talk About Your <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Growth Goals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your business? Schedule a free discovery call to discuss how we can help you achieve breakthrough results.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleCalendlyClick}
          >
            Book a Free Discovery Call
          </Button>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form">
              <Card className="rounded-3xl shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold text-gray-900">Get Started Today</CardTitle>
                  <CardDescription className="text-gray-700 text-lg max-w-xl">
                    Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <Label htmlFor="name" className="font-semibold text-gray-800 mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-semibold text-gray-800 mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="font-semibold text-gray-800 mb-2 block">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectOverview" className="font-semibold text-gray-800 mb-2 block">Project Overview *</Label>
                      <Textarea
                        id="projectOverview"
                        name="projectOverview"
                        required
                        value={formData.projectOverview}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business challenges and goals..."
                        rows={5}
                        className="rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold py-5"
                    >
                      {isSubmitting ? 'Opening Email...' : 'Send Message & Schedule Call'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6 text-gray-700 text-lg">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <button 
                      onClick={handleEmailClick}
                      className="hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      info@pontblanc.com
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <a href="tel:+15551234567" className="hover:text-blue-600 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-5">Follow Us</h3>
                <div className="flex space-x-6">
                  <button 
                    onClick={handleLinkedInClick}
                    className="text-gray-400 hover:text-blue-600 transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} />
                  </button>
                  <button 
                    onClick={handleInstagramClick}
                    className="text-gray-400 hover:text-pink-600 transition-colors" 
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </button>
                </div>
              </div>

              <Card className="rounded-3xl shadow-md border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 text-gray-700">
                    {[{
                      step: '1',
                      title: 'Free Discovery Call',
                      desc: "We'll discuss your challenges and goals (30 minutes)"
                    }, {
                      step: '2',
                      title: 'Custom Proposal',
                      desc: "We'll create a tailored solution for your needs"
                    }, {
                      step: '3',
                      title: 'Start Execution',
                      desc: "Begin implementing solutions and tracking results"
                    }].map(({ step, title, desc }) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{title}</h4>
                          <p className="text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-md border-0 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Schedule Directly</h3>
                  <p className="text-gray-700 mb-5 text-sm">
                    Prefer to book a time that works for you? Use our calendar to schedule your free consultation.
                  </p>
                  <Button 
                    onClick={handleCalendlyClick}
                    variant="outline" 
                    className="w-full rounded-full py-4 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
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
