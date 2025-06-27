
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Rocket, TrendingUp, Target, Users, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';

const StartupsIndustry = () => {
  const painPoints = [
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Unclear Growth Strategy",
      description: "Struggling to scale beyond initial traction with no clear roadmap for sustainable growth."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Fundraising Challenges",
      description: "Difficulty articulating value proposition and growth metrics to potential investors."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Operational Chaos",
      description: "Rapid growth creating process breakdowns, quality issues, and team burnout."
    }
  ];

  const solutions = [
    {
      title: "Strategic Growth Planning",
      description: "Clear roadmaps for scaling from startup to scale-up with proven frameworks.",
      includes: [
        "Market positioning strategy",
        "Revenue model optimization",
        "Go-to-market planning",
        "Competitive differentiation"
      ]
    },
    {
      title: "Fundraising Preparation",
      description: "Get investor-ready with compelling narratives and robust financial models.",
      includes: [
        "Pitch deck optimization",
        "Financial modeling",
        "Investor targeting",
        "Due diligence preparation"
      ]
    },
    {
      title: "Operational Scaling",
      description: "Build systems and processes that support rapid, sustainable growth.",
      includes: [
        "Process documentation",
        "Team structure design",
        "Performance metrics",
        "Quality control systems"
      ]
    }
  ];

  const caseStudies = [
    {
      company: "TechStart Inc.",
      result: "300% Revenue Growth",
      timeframe: "8 months",
      description: "Scaled from $2M to $8M ARR and secured Series A funding",
      metrics: ["Revenue: $2M → $8M", "Team: 15 → 45 people", "Raised: $5M Series A"]
    },
    {
      company: "GrowthApp",
      result: "Successfully Exited",
      timeframe: "18 months",
      description: "Strategic positioning led to successful acquisition",
      metrics: ["Valuation: 3x increase", "User Growth: 500%", "Acquisition: $15M"]
    }
  ];

  return (
    <div>
      <HeroSection
        title="Accelerate Growth with Strategic Clarity"
        subtitle="Turn your startup vision into scalable reality. We help high-growth companies navigate the challenges of scaling with proven frameworks and hands-on execution support."
        ctaText="Speak to a Startup Specialist"
        ctaLink="/contact"
      />

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Startup Challenges</h2>
            <p className="text-xl text-gray-600">
              Challenges that keep startup founders awake at night
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {point.icon}
                  </div>
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Pontblanc Helps Startups</h2>
            <p className="text-xl text-gray-600">
              Proven solutions for startup-specific challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startup Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from real startup partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{study.company}</CardTitle>
                      <div className="text-primary font-semibold">{study.result}</div>
                      <div className="text-gray-500 text-sm">in {study.timeframe}</div>
                    </div>
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Startups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Startups Choose Pontblanc</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ex-Founder Team</h3>
              <p className="text-gray-600">Our team includes successful startup founders who understand your journey.</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
              <p className="text-gray-600">Move fast without breaking things. We help you scale efficiently.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investor Network</h3>
              <p className="text-gray-600">Access to our network of VCs, angels, and strategic partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startup Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Startups Scaled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-gray-600">Successful Exits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <div className="text-gray-600">Avg Growth Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can help you navigate the challenges of rapid growth.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Speak to a Startup Specialist
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StartupsIndustry;
