
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Heart, Users, DollarSign, Shield, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

const HealthcareIndustry = () => {
  const painPoints = [
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      title: "Patient Flow Inefficiencies",
      description: "Long wait times, scheduling conflicts, and administrative bottlenecks affecting patient satisfaction."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Rising Operational Costs",
      description: "Increasing costs of staff, supplies, and compliance while reimbursements remain flat or decline."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Regulatory Compliance",
      description: "Complex and evolving regulations requiring constant attention and resources to maintain compliance."
    }
  ];

  const solutions = [
    {
      title: "Patient Experience Optimization",
      description: "Streamline patient journeys for better outcomes and satisfaction.",
      includes: [
        "Patient flow analysis",
        "Scheduling optimization",
        "Wait time reduction",
        "Communication improvement"
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Reduce costs while maintaining quality of care.",
      includes: [
        "Staff productivity optimization",
        "Supply chain management",
        "Revenue cycle improvement",
        "Expense reduction strategies"
      ]
    },
    {
      title: "Digital Health Solutions",
      description: "Leverage technology to improve care delivery and operations.",
      includes: [
        "EHR optimization",
        "Telemedicine implementation",
        "Patient portal enhancement",
        "Analytics and reporting"
      ]
    }
  ];

  return (
    <div>
      <HeroSection
        title="Increase Patient Impact Through Operational Strategy"
        subtitle="Improve patient outcomes while optimizing operational efficiency. We help healthcare providers deliver better care at lower costs through strategic operations improvements."
        ctaText="Speak to a Healthcare Specialist"
        ctaLink="/contact"
      />

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Challenges</h2>
            <p className="text-xl text-gray-600">
              Critical issues facing healthcare providers today
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Solutions</h2>
            <p className="text-xl text-gray-600">
              Proven strategies to improve care and reduce costs
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Results</h2>
            <p className="text-xl text-gray-600">Average improvements across 40+ healthcare providers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Wait Time Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can help you improve patient outcomes while reducing costs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Speak to a Healthcare Specialist
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HealthcareIndustry;
