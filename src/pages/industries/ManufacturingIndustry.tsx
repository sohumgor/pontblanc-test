
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { Factory, Settings, TrendingDown, Zap, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

const ManufacturingIndustry = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Production Inefficiencies",
      description: "Equipment downtime, quality issues, and process bottlenecks reducing output and profitability."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Rising Operational Costs",
      description: "Increasing material, labor, and energy costs squeezing margins and competitiveness."
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: "Legacy System Constraints",
      description: "Outdated technology and manual processes limiting scalability and data visibility."
    }
  ];

  const solutions = [
    {
      title: "Production Optimization",
      description: "Streamline manufacturing processes for maximum efficiency and quality.",
      includes: [
        "Lean manufacturing implementation",
        "Quality control systems",
        "Equipment optimization",
        "Waste reduction strategies"
      ]
    },
    {
      title: "Cost Management",
      description: "Systematic approach to reducing operational costs without compromising quality.",
      includes: [
        "Supply chain optimization",
        "Energy efficiency programs",
        "Labor productivity improvement",
        "Vendor negotiation strategies"
      ]
    },
    {
      title: "Digital Manufacturing",
      description: "Modernize operations with smart manufacturing technologies.",
      includes: [
        "ERP system implementation",
        "IoT sensor integration",
        "Predictive maintenance",
        "Real-time analytics dashboards"
      ]
    }
  ];

  return (
    <div>
      <HeroSection
        title="Optimize Systems for Performance and Precision"
        subtitle="Transform your manufacturing operations with lean principles, smart technology, and proven efficiency strategies. Reduce costs, improve quality, and increase output."
        ctaText="Speak to a Manufacturing Expert"
        ctaLink="/contact"
      />

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Challenges</h2>
            <p className="text-xl text-gray-600">
              Common issues facing modern manufacturers
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Solutions</h2>
            <p className="text-xl text-gray-600">
              Proven strategies to optimize your operations
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Results</h2>
            <p className="text-xl text-gray-600">Average improvements across 50+ manufacturing facilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-gray-600">Faster Production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25%</div>
              <div className="text-gray-600">Quality Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Less Downtime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Manufacturing?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss how we can improve your production efficiency and reduce costs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Speak to a Manufacturing Expert
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingIndustry;
