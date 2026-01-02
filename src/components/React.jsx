import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Code, Zap, Rocket, Search, Shield, Lock, TriangleAlert, TrendingUp, Users, Globe, ChartColumn, MousePointerClick, CircleCheck, Gauge, DollarSign, Star } from 'lucide-react';

const ReactComparisonGuide = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 10;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      } else if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
        setCurrentSection(currentSection + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-blue-500 text-blue-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const sections = [
    // Section 0: Hero
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-black">
      <div className="absolute inset-0"></div>
      <div className="container relative z-10 mx-auto py-12 md:py-20 text-center max-w-6xl">
        <div className="mx-auto space-y-6 md:space-y-8">
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Interactive Learning Guide
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            React vs Traditional
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Website Builders
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
            Discover why modern web applications built with React outperform WordPress, Wix, and GoDaddy in speed, SEO, security, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg">
              Start Learning
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
              View Comparison
            </button>
          </div>
        </div>
        <button 
          onClick={nextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </section>,

    // Section 1: What Is React?
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              What Is React?
              <span className="text-gray-400"> (In Simple Terms)</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              React is a JavaScript framework that builds fast, dynamic, app-like websites. Instead of loading entire pages repeatedly (like WordPress), React updates only what's needed—making your site feel instant.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Modern Framework</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built on JavaScript, the language that powers the modern web
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Updates only what changes, no full page reloads required
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Growth Engine</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Not just a website—a digital product that drives business growth
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Think of it as:</p>
                <p className="text-gray-600 dark:text-gray-400">❌ A brochure website</p>
                <p className="font-medium">✅ A digital growth engine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 2: Performance
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Performance:
              <span className="text-blue-600"> Speed = Money</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              React websites load 2-10× faster than traditional builders. Faster sites mean lower bounce rates and higher conversions.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Gauge className="h-4 w-4" />
                <span>Performance Scores</span>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'React', score: 95, color: 'bg-blue-500' },
                  { name: 'WordPress', score: 45, color: 'bg-orange-500' },
                  { name: 'Wix', score: 35, color: 'bg-yellow-500' },
                  { name: 'GoDaddy', score: 30, color: 'bg-red-500' }
                ].map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.score}/100</span>
                    </div>
                    <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">2-10×</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Faster load times</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">53%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Users leave if load &gt; 3s</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 sm:col-span-2 lg:col-span-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-600">↑</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Better rankings &amp; conversions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 3: SEO
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm border border-blue-200 dark:border-blue-800">
              <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-300">SEO Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Google Favors React</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Modern React sites (especially using Next.js) are built for search engines from the ground up.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                'Server-Side Rendered (SSR) or Statically Generated (SSG)',
                'Optimized for Core Web Vitals',
                'Built with clean, lightweight HTML',
                'Google can crawl your site faster',
                'Pages index more reliably',
                'Rankings improve organically over time'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-xl border border-red-200 dark:border-red-900/50 shadow-sm p-6 bg-red-50 dark:bg-red-900/10">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">WordPress</div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Needs plugins for everything</li>
                  <li>• Each plugin slows the site</li>
                  <li>• Technical SEO becomes fragile</li>
                  <li>• Plugin conflicts common</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm p-6 bg-blue-50 dark:bg-blue-900/10">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">React</div>
                <ul className="space-y-2 text-sm">
                  <li>• SEO is engineered, not patched</li>
                  <li>• Built-in optimization</li>
                  <li>• No plugin dependencies</li>
                  <li>• Consistent performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 4: Security
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm border border-blue-200 dark:border-blue-800">
              <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-300">Enterprise-Grade</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Stability &amp; Security</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              For businesses handling bookings, payments, and customer data, React provides enterprise-level security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-xl border border-red-200 dark:border-red-900/50 shadow-sm p-6 md:p-8 bg-red-50 dark:bg-red-900/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <TriangleAlert className="h-8 w-8 text-red-600 dark:text-red-400" />
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">WordPress Risk</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { title: '40% of the web', desc: 'Largest attack surface for hackers' },
                    { title: 'Constant updates', desc: 'Plugin conflicts create vulnerabilities' },
                    { title: 'PHP vulnerabilities', desc: 'Exposed admin panels and databases' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm p-6 md:p-8 bg-blue-50 dark:bg-blue-900/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">React Security</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'No PHP vulnerabilities', desc: 'Modern JavaScript security standards' },
                    { title: 'No exposed admin panels', desc: 'API-based architecture' },
                    { title: 'Far fewer exploits', desc: 'Smaller attack surface' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 5: Scalability
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Build Once,
              <span className="text-blue-600"> Grow Forever</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              While WordPress hits limits fast, React scales horizontally with your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: TrendingUp, title: 'Add features without rebuilding', desc: 'Component-based architecture' },
              { icon: Users, title: 'Plug into CRMs, ERPs, booking systems', desc: 'Easy integrations' },
              { icon: Globe, title: 'Power websites, dashboards & apps', desc: 'One codebase' },
              { icon: ChartColumn, title: 'Multi-location & franchise scaling', desc: 'Built for growth' }
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-gray-50 dark:bg-gray-900/50">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Perfect for:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Multi-location businesses',
                  'Franchises',
                  'Service businesses scaling regionally',
                  'SaaS & membership platforms'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 6: User Experience
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Better User Experience =
              <span className="text-blue-600"> More Leads</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              React enables interactions that keep visitors engaged and convert them into customers.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Instant page transitions', 'App-like interactions', 'Smart forms', 'Dynamic personalization'].map((item, index) => (
              <button key={index} className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {item}
              </button>
            ))}
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MousePointerClick className="h-10 w-10 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold">Instant page transitions</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">No full page reloads—navigation feels seamless and fast</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900/50 p-6 border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 Try clicking between sections to feel the smooth scrolling
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { value: '↑ 40%', label: 'Longer session duration' },
              { value: '↑ 35%', label: 'Higher engagement rates' },
              { value: '↑ 25%', label: 'More enquiries & bookings' }
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 bg-white dark:bg-gray-900 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>,

    // Section 7: Comparison Table
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Side-by-Side Comparison</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              See how React stacks up against traditional website builders across key metrics.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden bg-white dark:bg-gray-900">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold text-blue-600 dark:text-blue-400">React</th>
                    <th className="p-4 font-semibold text-gray-500">WordPress</th>
                    <th className="p-4 font-semibold text-gray-500">Wix</th>
                    <th className="p-4 font-semibold text-gray-500">GoDaddy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Page Speed', ratings: [5, 2, 2, 1] },
                    { feature: 'SEO Control', ratings: [5, 2, 1, 1] },
                    { feature: 'Security', ratings: [5, 2, 2, 1] },
                    { feature: 'Scalability', ratings: [5, 2, 1, 1] },
                    { feature: 'Conversion UX', ratings: [5, 2, 1, 1] },
                    { feature: 'Long-Term Value', ratings: [5, 2, 1, 1] }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <StarRating rating={row.ratings[0]} />
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <StarRating rating={row.ratings[1]} />
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <StarRating rating={row.ratings[2]} />
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <StarRating rating={row.ratings[3]} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>,

    // Section 8: Cost Efficiency
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm border border-blue-200 dark:border-blue-800">
              <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400 rotate-180" />
              <span className="text-blue-900 dark:text-blue-300">Long-Term Savings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Cost Efficiency Over Time</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              React is more transparent and cost-effective in the long run compared to traditional builders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-gray-500" />
                  <h3 className="text-2xl font-bold">WordPress/Wix</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Hidden Costs:</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Premium plugins ($100-500/year)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Security subscriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Performance tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Hosting upgrades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Developer fixes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm p-6 md:p-8 bg-blue-50 dark:bg-blue-900/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">React</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Transparent Costs:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>One-time build</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Lightweight hosting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Minimal maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>No plugin licensing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Predictable costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900 text-center">
            <p className="text-lg">
              Over <span className="font-bold text-blue-600">2-3 years</span>, React is{' '}
              <span className="font-bold text-blue-600">cheaper and more reliable</span>.
            </p>
          </div>
        </div>
      </div>
    </section>,

    // Section 9: Bottom Line
    <section className="py-12 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm border border-blue-200 dark:border-blue-800">
              <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-300">The Bottom Line</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">React Websites Are:</h2>
          </div>
          <div className="rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm p-6 md:p-8 bg-gradient-to-br from-blue-50 via-white to-white dark:from-blue-900/10 dark:via-gray-900 dark:to-gray-900">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                'Faster',
                'More secure',
                'Better for Google',
                'Built to scale',
                'Designed to convert'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CircleCheck className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-xl font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-gray-50 dark:bg-gray-900/50">
              <div className="space-y-4 text-center">
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                  WordPress, Wix, and GoDaddy are fine for{' '}
                  <span className="font-medium text-gray-900 dark:text-gray-100">hobby sites</span>.
                </p>
                <p className="text-xl font-semibold">
                  React is built for <span className="text-blue-600">serious businesses</span>.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8 bg-white dark:bg-gray-900">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Final Thought</h3>
                <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400 leading-relaxed">
                  If your website is part of your{' '}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">sales team</span>,{' '}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">brand authority</span>, and{' '}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">growth strategy</span>—React isn't an upgrade.
                </p>
                <p className="text-2xl font-bold text-center text-blue-600">It's a business advantage.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg">
              Get Started with React
            </button>
          </div>
        </div>
      </div>
    </section>
  ];

  return (
    <div className="relative overflow-hidden h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
        <div className="absolute top-2 right-4 text-xs text-gray-500 font-medium">
          {currentSection + 1} / {totalSections}
        </div>
      </div>

      {/* Sections Container - Horizontal Sliding */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSection * 100}%)` }}
      >
        {sections.map((section, index) => (
          <div key={index} className="min-w-full h-full overflow-y-auto">
            {section}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-40 px-4">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-blue-600/20 hover:border-blue-600/40 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="text-sm text-gray-500 font-medium px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-blue-600/20">
          {currentSection + 1} / {totalSections}
        </div>
        <button
          onClick={nextSection}
          disabled={currentSection === totalSections - 1}
          className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all font-medium group disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-20 right-4 text-xs text-gray-400 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000 hidden sm:block">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default ReactComparisonGuide;