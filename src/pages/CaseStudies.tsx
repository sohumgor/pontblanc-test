
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { TrendingUp, Users, Factory, Heart, Star, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TechStart Inc. - 300% Revenue Growth in 8 Months",
      industry: "Startups",
      service: "Strategy",
      icon: <TrendingUp className="h-6 w-6" />,
      problem: "Struggling to scale beyond $2M ARR with unclear growth strategy",
      approach: "Developed comprehensive go-to-market strategy and operational framework",
      outcome: "Achieved $8M ARR within 8 months, secured Series A funding",
      testimonial: "Pontblanc didn't just consult - they became part of our team and transformed our entire business model.",
      author: "Sarah Johnson, CEO",
      tags: ["Strategy", "Growth", "Funding"]
    },
    {
      id: 2,
      title: "MedCare Solutions - 40% Cost Reduction Through Process Optimization",
      industry: "Healthcare",
      service: "Operations",
      icon: <Heart className="h-6 w-6" />,
      problem: "Inefficient patient intake and administrative processes driving up costs",
      approach: "Streamlined workflows, implemented digital systems, trained staff",
      outcome: "Reduced operational costs by 40%, improved patient satisfaction scores",
      testimonial: "The operational improvements allowed us to focus more on patient care while reducing our overhead significantly.",
      author: "Dr. Michael Chen, COO",
      tags: ["Operations", "Healthcare", "Cost Reduction"]
    },
    {
      id: 3,
      title: "GrowthCorp Manufacturing - Digital Transformation Success",
      industry: "Manufacturing",
      service: "Digital",
      icon: <Factory className="h-6 w-6" />,
      problem: "Legacy systems causing production delays and quality issues",
      approach: "Implemented ERP system, automated quality control, digitized workflows",
      outcome: "50% reduction in production time, 25% improvement in quality metrics",
      testimonial: "The digital transformation roadmap they created was game-changing for our manufacturing operations.",
      author: "Emily Rodriguez, Operations Director",
      tags: ["Digital", "Manufacturing", "Automation"]
    },
    {
      id: 4,
      title: "Hope Foundation - Strategic Planning for Maximum Impact",
      industry: "Nonprofits",
      service: "Strategy",
      icon: <Users className="h-6 w-6" />,
      problem: "Limited resources spread across too many initiatives",
      approach: "Developed focused mission strategy, optimized resource allocation",
      outcome: "Doubled program impact while reducing operational overhead by 30%",
      testimonial: "Pontblanc helped us focus our efforts where they matter most, dramatically increasing our community impact.",
      author: "James Wilson, Executive Director",
      tags: ["Strategy", "Nonprofit", "Impact"]
    }
  ];

  const stats = [
    { number: "150+", label: "Success Stories" },
    { number: "300%", label: "Average Growth" },
    { number: "95%", label: "Success Rate" },
    { number: "24mo", label: "Avg Partnership" }
  ];

  return (
    <div>
      <HeroSection
        title="Real Clients. Real Results."
        subtitle="See how we've helped clients achieve breakthrough results across industries. These aren't just case studies—they're proof that strategic execution drives measurable outcomes."
        ctaText="View All Case Studies"
        ctaLink="#case-studies"
      />

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Discover how we've transformed businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {study.icon}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.service}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Problem</h4>
                    <p className="text-gray-600 text-sm">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Approach</h4>
                    <p className="text-gray-600 text-sm">{study.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Outcome</h4>
                    <p className="text-gray-600 text-sm">{study.outcome}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="italic text-gray-700 mb-2">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-sm text-gray-500">— {study.author}</cite>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Filter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Across Industries</h2>
            <p className="text-xl text-gray-600">
              Proven results in every sector we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Startups</h3>
              <p className="text-gray-600 text-sm">25+ companies scaled</p>
            </div>
            <div>
              <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">50+ facilities optimized</p>
            </div>
            <div>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">40+ providers improved</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Nonprofits</h3>
              <p className="text-gray-600 text-sm">35+ missions amplified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join the growing list of companies that have transformed their business with Pontblanc.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact" className="flex items-center justify-center">
              Let's Build Your Success Story
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
