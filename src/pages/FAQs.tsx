
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { MessageSquareQuestion, Users, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const FAQs = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: <MessageSquareQuestion className="h-6 w-6" />,
      faqs: [
        {
          question: "What types of businesses do you work with?",
          answer: "We work with businesses across four core industries: startups (scaling from $1M-$50M), manufacturing companies, healthcare providers, and nonprofit organizations. Our clients typically have annual revenues between $1M-$100M and are looking to solve specific growth, operational, or strategic challenges."
        },
        {
          question: "What makes Pontblanc different from other consulting firms?",
          answer: "Unlike traditional consultants who deliver reports, we're execution partners. Our team consists of ex-operators who have actually built, scaled, and sold businesses. We don't just provide recommendations—we work alongside you to implement solutions and ensure they deliver measurable results."
        },
        {
          question: "Do you work with companies outside your four core industries?",
          answer: "While we specialize in startups, manufacturing, healthcare, and nonprofits, we occasionally work with companies in other industries if the challenges align with our core competencies in strategy, operations, or digital transformation. Contact us to discuss your specific situation."
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: <DollarSign className="h-6 w-6" />,
      faqs: [
        {
          question: "How do you price your services?",
          answer: "Our pricing varies based on project scope, complexity, and duration. We offer three models: project-based fees for specific initiatives, monthly retainers for ongoing partnerships, and performance-based pricing where part of our fee is tied to achieving specific results. Most engagements range from $15K-$75K per project."
        },
        {
          question: "Do you offer any guarantees on results?",
          answer: "While we can't guarantee specific outcomes (as business results depend on many factors), we do guarantee our process and commitment. If you're not satisfied with our approach or deliverables within the first 30 days, we'll refund your investment. 98% of our clients renew or expand their engagement with us."
        },
        {
          question: "Can you work within our budget constraints?",
          answer: "Yes, we're experienced at working within various budget ranges. During our discovery call, we'll discuss your budget openly and design a solution that delivers maximum value within your parameters. We can often phase projects to spread investment over time while still delivering meaningful results."
        }
      ]
    },
    {
      title: "Process & Timeline",
      icon: <Clock className="h-6 w-6" />,
      faqs: [
        {
          question: "What's your typical engagement length?",
          answer: "Most of our engagements last 3-12 months, with the average being 6 months. Strategy projects typically take 2-4 months, operations improvements 3-8 months, and digital transformations 6-12 months. However, we design each engagement based on your specific needs and can work on shorter sprints or longer partnerships."
        },
        {
          question: "How quickly can you start working with us?",
          answer: "We can typically begin new engagements within 1-2 weeks of signing our agreement. For urgent situations, we've started as quickly as 48 hours. Our discovery process helps us understand your timeline and adjust our approach accordingly."
        },
        {
          question: "What does your process look like?",
          answer: "Every engagement follows our proven 4-phase methodology: 1) Discovery & Assessment (1-2 weeks), 2) Strategy Development (2-4 weeks), 3) Implementation Planning (1-2 weeks), and 4) Execution Support (ongoing). We adapt this framework to your specific situation while maintaining our structured approach to ensure results."
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: <Users className="h-6 w-6" />,
      faqs: [
        {
          question: "Do you help with implementation or just provide recommendations?",
          answer: "Implementation is where we truly differentiate ourselves. We don't just hand you a report and walk away. We work alongside your team to implement solutions, provide hands-on guidance, troubleshoot challenges, and ensure changes stick. This is often the most valuable part of our partnership."
        },
        {
          question: "Will you train our team on new processes or systems?",
          answer: "Absolutely. Knowledge transfer and team training are integral parts of our approach. We provide comprehensive training on new processes, systems, and frameworks so your team can sustain improvements long after our formal engagement ends. This includes documentation, workshops, and ongoing support during transition periods."
        },
        {
          question: "What happens after the project is complete?",
          answer: "We provide 30 days of post-project support to ensure smooth transition and address any questions. Many clients choose to continue with monthly check-ins or quarterly reviews. We also offer alumni support through our client network and resource library. Our goal is your long-term success, not just project completion."
        }
      ]
    }
  ];

  const quickFacts = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "98% Success Rate",
      description: "Clients achieve their primary objectives"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "150+ Companies",
      description: "Successfully transformed across industries"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "6 Month Average",
      description: "Typical engagement duration"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "300% ROI",
      description: "Average return on consulting investment"
    }
  ];

  return (
    <div>
      <HeroSection
        title="Your Questions, Answered"
        subtitle="Everything you need to know about working with Pontblanc. From our process to pricing, we believe in complete transparency."
        ctaText="Still Have Questions?"
        ctaLink="/contact"
      />

      {/* Quick Facts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Facts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {fact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work Together</h2>
            <p className="text-xl text-gray-600">
              Our proven process ensures successful outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery Call</h3>
              <p className="text-gray-600 text-sm">Free 30-minute conversation to understand your challenges and goals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Proposal</h3>
              <p className="text-gray-600 text-sm">Tailored solution with clear timeline, deliverables, and investment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Collaborative implementation with regular check-ins and adjustments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-gray-600 text-sm">Measurable outcomes with ongoing support for sustained success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Schedule a free discovery call to discuss your specific situation.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link to="/contact" className="flex items-center justify-center">
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
