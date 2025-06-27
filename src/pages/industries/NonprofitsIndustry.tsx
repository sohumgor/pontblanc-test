
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Users, Heart, Target, TrendingUp, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

const NonprofitsIndustry = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Limited Resources",
      description: "Trying to maximize impact with constrained budgets and competing priorities for funding."
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Mission Drift",
      description: "Growing programs and activities that dilute focus from core mission and reduce overall effectiveness."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Fundraising Challenges",
      description: "Difficulty demonstrating impact to donors and securing sustainable funding for long-term programs."
    }
  ];

  const solutions = [
    {
      title: "Strategic Mission Focus",
      description: "Clarify and align all activities with your core mission for maximum impact.",
      includes: [
        "Mission alignment assessment",
        "Program prioritization",
        "Impact measurement frameworks",
        "Strategic planning facilitation"
      ]
    },
    {
      title: "Operational Excellence",
      description: "Optimize operations to maximize program impact while minimizing overhead.",
      includes: [
        "Process improvement",
        "Resource allocation optimization",
        "Volunteer management systems",
        "Administrative efficiency"
      ]
    },
    {
      title: "Fundraising Strategy",
      description: "Develop sustainable funding strategies with compelling impact narratives.",
      includes: [
        "Donor strategy development",
        "Grant writing optimization",
        "Impact storytelling",
        "Revenue diversification"
      ]
    }
  ];

  return (
    <div>
      <HeroSection
        title="Strategic Planning to Maximize Mission Delivery"
        subtitle="Amplify your impact with strategic planning and operational excellence. We help nonprofits focus their efforts where they matter most and demonstrate measurable results to stakeholders."
        ctaText="Speak to a Nonprofit Specialist"
        ctaLink="/contact"
      />

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nonprofit Challenges</h2>
            <p className="text-xl text-gray-600">
              Common obstacles facing mission-driven organizations
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nonprofit Solutions</h2>
            <p className="text-xl text-gray-600">
              Proven strategies to amplify your mission impact
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

      {/* Results Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nonprofit Results</h2>
            <p className="text-xl text-gray-600">Average improvements across 35+ nonprofit organizations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <div className="text-gray-600">Program Impact</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-gray-600">Overhead Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-gray-600">Fundraising Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Mission Alignment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Amplify Your Mission Impact?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can help you maximize your resources and demonstrate clear impact.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Speak to a Nonprofit Specialist
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NonprofitsIndustry;
