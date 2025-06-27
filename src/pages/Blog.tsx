
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/hero-section';
import { BookText, TrendingUp, Settings, Users, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: "Growth Strategy", icon: <TrendingUp className="h-5 w-5" />, count: 12 },
    { name: "Operations", icon: <Settings className="h-5 w-5" />, count: 8 },
    { name: "Leadership", icon: <Users className="h-5 w-5" />, count: 15 },
    { name: "Tools & Templates", icon: <BookText className="h-5 w-5" />, count: 6 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "5 Strategic Planning Mistakes That Kill Growth (And How to Avoid Them)",
      excerpt: "Most companies create strategic plans that look impressive but fail to drive results. Here's why and what to do instead.",
      category: "Growth Strategy",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "The Operational Excellence Framework: A Step-by-Step Guide",
      excerpt: "Transform your operations with this proven framework used by 100+ successful companies.",
      category: "Operations",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "How to Lead Through Change: Lessons from 50+ Transformations",
      excerpt: "Change management insights from real executive transformations across industries.",
      category: "Leadership",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 10, 2024"
    }
  ];

  const recentPosts = [
    {
      title: "Digital Transformation ROI Calculator [Free Template]",
      category: "Tools & Templates",
      readTime: "5 min read",
      date: "Dec 8, 2024"
    },
    {
      title: "Why Most Strategy Consultants Fail (And What We Do Differently)",
      category: "Growth Strategy",
      readTime: "7 min read",
      date: "Dec 5, 2024"
    },
    {
      title: "The 90-Day Operations Audit Checklist",
      category: "Operations",
      readTime: "6 min read",
      date: "Dec 3, 2024"
    },
    {
      title: "Building High-Performance Teams: A Leader's Playbook",
      category: "Leadership",
      readTime: "9 min read",
      date: "Dec 1, 2024"
    }
  ];

  return (
    <div>
      <HeroSection
        title="Insights That Drive Better Decisions"
        subtitle="Strategic insights, operational wisdom, and leadership guidance from our team of ex-operators. Real advice from real experience."
        ctaText="Subscribe to Newsletter"
        ctaLink="#newsletter"
      />

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Our most popular insights and strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow cursor-pointer">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div>
              <Card id="newsletter" className="sticky top-8">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Get weekly business insights from our experts delivered straight to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input type="email" placeholder="Your email address" />
                    <Button className="w-full">Subscribe to Newsletter</Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Join 2,500+ business leaders who read our weekly insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Free Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Growth Strategy Template</h4>
                    <p className="text-sm text-gray-600 mb-3">Complete framework for strategic planning</p>
                    <Button size="sm" variant="outline" className="w-full">Download Free</Button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operations Assessment</h4>
                    <p className="text-sm text-gray-600 mb-3">Identify inefficiencies in your processes</p>
                    <Button size="sm" variant="outline" className="w-full">Access Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Move beyond reading to execution. Let's discuss how these insights apply to your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Schedule a Strategy Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
