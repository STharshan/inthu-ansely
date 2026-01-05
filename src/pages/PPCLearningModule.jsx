import React, { useState } from 'react';
import { Zap, Target, TrendingUp, DollarSign, BarChart3, AlertCircle, Lightbulb, CheckCircle, Clock, ArrowRight, Search, Users, Play, MousePointer, FileText, Phone, TriangleAlert, ChevronDown, ChevronUp, X, ArrowDown } from 'lucide-react';

const PPCLearningModule = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPlatform, setExpandedPlatform] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);

  const tabs = [
    { id: 0, icon: Zap, label: 'What is PPC?' },
    { id: 1, icon: Target, label: 'Core Platforms' },
    { id: 2, icon: TrendingUp, label: 'PPC vs Organic' },
    { id: 3, icon: DollarSign, label: 'How It Makes Money' },
    { id: 4, icon: BarChart3, label: 'Key Metrics' },
    { id: 5, icon: AlertCircle, label: 'Common Mistakes' },
    { id: 6, icon: Lightbulb, label: 'Smart Strategy' },
    { id: 7, icon: CheckCircle, label: 'Knowledge Check' }
  ];

  const platforms = [
    {
      icon: Search,
      title: 'Google Ads',
      badge: 'Intent-based advertising',
      description: 'Capturing high-intent traffic from active searchers',
      formats: ['Search ads (text)', 'Display ads', 'YouTube ads', 'Performance Max'],
      examples: ['"car garage near me"', '"timing belt replacement cost"', '"emergency plumber Leicester"'],
      bestFor: ['Local services', 'Emergency services', 'ROI-focused campaigns']
    },
    {
      icon: Users,
      title: 'Meta Ads',
      badge: 'Interest & behaviour-based',
      description: 'Targeting people based on interests, behaviors, and life events',
      formats: ['Feed ads', 'Stories', 'Reels', 'Messenger ads'],
      examples: ['Age 30-45, interested in home improvement', 'Parents of teenagers', 'Recently engaged'],
      bestFor: ['Brand awareness', 'E-commerce', 'Visual products']
    },
    {
      icon: Play,
      title: 'TikTok Ads',
      badge: 'Attention-based advertising',
      description: 'Massive reach at low cost with short-form native video',
      formats: ['In-feed ads', 'Spark ads', 'TopView', 'Branded effects'],
      examples: ['18-35 year olds', 'Trending content', 'Viral challenges'],
      bestFor: ['Young audiences', 'Viral marketing', 'Brand building']
    }
  ];

  const metrics = [
    {
      icon: MousePointer,
      title: 'CPC',
      subtitle: 'Cost Per Click',
      description: 'How much you pay each time someone clicks your ad',
      example: '£2.50 CPC means you pay £2.50 per click'
    },
    {
      icon: Target,
      title: 'CPA',
      subtitle: 'Cost Per Acquisition',
      description: 'Total ad spend divided by number of conversions',
      example: '£500 spent ÷ 10 sales = £50 CPA'
    },
    {
      icon: BarChart3,
      title: 'CTR',
      subtitle: 'Click-Through Rate',
      description: 'Percentage of people who see your ad and click',
      example: '100 clicks ÷ 10,000 impressions = 1% CTR'
    },
    {
      icon: TrendingUp,
      title: 'ROAS',
      subtitle: 'Return On Ad Spend',
      description: 'Revenue generated for every pound spent on ads',
      example: '£1,000 revenue ÷ £200 ad spend = 5x ROAS'
    },
    {
      icon: DollarSign,
      title: 'Conversion Rate',
      subtitle: 'Conversion Rate',
      description: 'Percentage of clicks that turn into customers',
      example: '10 sales ÷ 100 clicks = 10% conversion rate'
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 0: // What is PPC
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">What Is Paid Ads (PPC)?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">PPC (Pay-Per-Click) is a digital advertising model where you pay only when someone takes action (clicks, watches, submits, or converts).</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Think of PPC as:</h3>
                  <p className="text-lg">A tap you can turn on or off for demand.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                <Clock className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                <p className="text-gray-600 leading-relaxed">Instead of waiting months for SEO, PPC puts your business in front of buyers today.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                <Target className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Full Control</h3>
                <p className="text-gray-600 leading-relaxed">You control budget, audience, message, and speed. Scale up or down as needed.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Module Purpose
              </h3>
              <p className="text-gray-600 leading-relaxed">This module teaches business owners how paid ads actually work, when to use them, and how to avoid burning money. By the end, you'll understand how PPC fits into a growth system, not just "boosting posts."</p>
            </div>
          </div>
        );

      case 1: // Core Platforms
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">Core Platforms You Must Understand</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Each platform serves a different purpose. Here's what you need to know.</p>
            </div>

            <div className="space-y-4">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon;
                const isExpanded = expandedPlatform === idx;
                
                return (
                  <div key={idx} className={`bg-white rounded-xl border py-6 overflow-hidden transition-all ${isExpanded ? 'shadow-lg' : 'shadow-sm'}`}>
                    <button 
                      onClick={() => setExpandedPlatform(isExpanded ? -1 : idx)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-blue-50' : idx === 1 ? 'bg-purple-50' : 'bg-pink-50'}`}>
                            <Icon className={`h-8 w-8 ${idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-purple-600' : 'text-pink-600'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold">{platform.title}</h3>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                                {platform.badge}
                              </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                          </div>
                        </div>
                        {isExpanded ? 
                          <ChevronUp className="h-6 w-6 text-gray-400 flex-shrink-0" /> : 
                          <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                        }
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="h-px bg-gray-200"></div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Ad Formats</h4>
                          <div className="flex flex-wrap gap-2">
                            {platform.formats.map((format, i) => (
                              <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md border border-gray-200 text-xs font-medium">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Example Searches/Targets</h4>
                          <ul className="space-y-2">
                            {platform.examples.map((example, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Best For</h4>
                          <div className="flex flex-wrap gap-2">
                            {platform.bestFor.map((item, i) => (
                              <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 2: // PPC vs Organic
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">PPC vs Organic</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Understanding when to use paid ads versus organic marketing strategies.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left p-4 font-semibold">Channel</th>
                      <th className="text-left p-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-purple-600" />
                          Speed
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          Cost
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          Longevity
                        </div>
                      </th>
                      <th className="text-left p-4 font-semibold">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Control
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium">SEO</td>
                      <td className="p-4"><span className="text-gray-600">Slow</span></td>
                      <td className="p-4"><span className="text-blue-600 font-semibold">Low</span></td>
                      <td className="p-4"><span className="text-blue-600 font-semibold">Long-term</span></td>
                      <td className="p-4"><span className="text-gray-600">Medium</span></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium">Organic Social</td>
                      <td className="p-4"><span className="text-gray-600">Medium</span></td>
                      <td className="p-4"><span className="text-blue-600 font-semibold">Low</span></td>
                      <td className="p-4"><span className="text-gray-600">Medium</span></td>
                      <td className="p-4"><span className="text-gray-600">Low</span></td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="p-4 font-bold">Paid Ads</td>
                      <td className="p-4">
                        <span className="text-purple-600 font-semibold flex items-center gap-1">
                          <Zap className="h-4 w-4" />
                          Instant
                        </span>
                      </td>
                      <td className="p-4"><span className="text-gray-600">Medium–High</span></td>
                      <td className="p-4"><span className="text-gray-600">Short-term</span></td>
                      <td className="p-4"><span className="text-blue-600 font-semibold">High</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm p-6 border-2 border-blue-200">
              <p className="text-lg font-semibold text-center">👉 Smart businesses use PPC + SEO together</p>
            </div>
          </div>
        );

      case 3: // How It Makes Money
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">How Paid Ads Actually Make Money</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Understanding the complete funnel from ad to profit.</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-0">
              {[
                { icon: MousePointer, title: 'Ad', desc: 'Grabs attention', color: 'blue' },
                { icon: FileText, title: 'Landing Page', desc: 'Focused message', color: 'blue' },
                { icon: Phone, title: 'Conversion', desc: 'Call, form, booking', color: 'purple' },
                { icon: Target, title: 'Follow-up', desc: 'Sales process', color: 'pink' },
                { icon: TrendingUp, title: 'Profit', desc: 'Tracked & measured', color: 'green' }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx}>
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            <Icon className={`h-8 w-8 text-${step.color}-600`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                        <div className="flex-shrink-0 text-3xl font-bold text-gray-200">{idx + 1}</div>
                      </div>
                    </div>
                    {idx < 4 && (
                      <div className="flex justify-center py-3">
                        <ArrowDown className="h-6 w-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-red-50 rounded-xl border-2 border-red-200 shadow-sm p-8">
              <div className="flex items-start gap-4">
                <TriangleAlert className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Critical Insight</h3>
                  <p className="text-lg leading-relaxed">💡 Ads don't fail — funnels fail. If your ads aren't working, check every step of this process.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">When Paid Ads Make Sense</h3>
              <ul className="space-y-3">
                {[
                  'Your service already converts (you know it works)',
                  'You know your margins (profit per customer)',
                  'You can handle more leads (capacity to deliver)',
                  'You want predictable growth (scalable system)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-xl border shadow-sm p-6">
              <p className="text-xl font-semibold text-center">Paid ads are not magic — they are amplifiers.</p>
            </div>
          </div>
        );

      case 4: // Key Metrics
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">Key Metrics Every Business Owner Must Know</h2>
              <p className="text-xl text-gray-600 leading-relaxed">You don't need to be a marketer — but you must understand these numbers.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon;
                const isSelected = selectedMetric === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedMetric(idx)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50 shadow-md scale-105' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div className="font-bold text-lg">{metric.title}</div>
                    <div className="text-xs text-gray-600 mt-1">{metric.subtitle}</div>
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 animate-in fade-in duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-blue-50">
                  {React.createElement(metrics[selectedMetric].icon, { className: 'h-12 w-12 text-blue-600' })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold">{metrics[selectedMetric].title}</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                      {metrics[selectedMetric].subtitle}
                    </span>
                  </div>
                  <p className="text-lg mb-4 leading-relaxed">{metrics[selectedMetric].description}</p>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-mono">{metrics[selectedMetric].example}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl border-2 border-red-200 shadow-sm p-8">
              <p className="text-xl font-semibold text-center">⚠️ If you don't track these, you're gambling — not advertising.</p>
            </div>
          </div>
        );

      case 5: // Common Mistakes
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">Common PPC Mistakes (That Waste Money)</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Avoid these costly errors that drain your advertising budget.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Sending traffic to a homepage',
                'No clear offer or CTA',
                'No tracking installed',
                'Boosting posts with no strategy',
                'No follow-up system',
                'Expecting ads to "fix" a bad business'
              ].map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                      <X className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-lg pt-1">{mistake}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-sm p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4">PPC + Website = Non-Negotiable</h3>
              <p className="text-lg mb-4 leading-relaxed">Paid ads only work properly when paired with:</p>
              <ul className="space-y-2">
                {[
                  'Fast website (loads in under 3 seconds)',
                  'Clear landing pages (one goal per page)',
                  'Mobile optimisation (most traffic is mobile)',
                  'Strong CTAs (clear next steps)',
                  'Conversion tracking (know what works)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mt-6">Ads don't replace a website — they demand one.</p>
            </div>
          </div>
        );

      case 6: // Smart Strategy
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">Smart PPC Strategy</h2>
              <p className="text-xl text-gray-600 leading-relaxed">How to approach PPC like a professional.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Start Small, Scale Fast', desc: 'Begin with a modest budget to test and learn. Once you find winning campaigns, scale aggressively.' },
                { title: 'Match Intent to Stage', desc: 'Cold audience? Focus on awareness. Warm audience? Push offers. Hot audience? Retarget with urgency.' },
                { title: 'Build Retargeting Lists', desc: 'Most people don\'t buy on first visit. Retargeting converts 2-3x better than cold traffic.' },
                { title: 'Track Everything', desc: 'Use conversion tracking, UTM parameters, and analytics. You can\'t improve what you don\'t measure.' },
                { title: 'Test Ad Copy Like a Scientist', desc: 'Run A/B tests on headlines, descriptions, and CTAs. Small improvements compound into big wins.' },
                { title: 'Quality Score Matters', desc: 'Google rewards relevant ads with lower costs. Focus on improving quality score for cheaper clicks.' }
              ].map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <Lightbulb className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The 80/20 Rule</h3>
                  <p className="text-lg">80% of your results come from 20% of your campaigns. Find those winners and double down on them ruthlessly.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Knowledge Check
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h2 className="text-4xl font-bold mb-4">Knowledge Check</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Test your understanding of PPC fundamentals.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Question 1', a: 'What does PPC stand for and when do you pay? Answer: Pay-Per-Click. You only pay when someone clicks your ad.' },
                { q: 'Question 2', a: 'What\'s more important: CTR or ROAS? Answer: ROAS. A high CTR is worthless if the clicks don\'t convert to profit.' },
                { q: 'Question 3', a: 'Should you send PPC traffic to your homepage? Answer: No. Always use dedicated landing pages designed for specific campaigns.' },
                { q: 'Question 4', a: 'What\'s the first thing you must know before running PPC? Answer: Your numbers - CLV, profit margins, and how much you can afford to pay per customer.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Ready to Launch?
              </h3>
              <p className="text-gray-600 leading-relaxed">You now understand PPC fundamentals. Start small, track everything, and scale what works. Remember: PPC is a skill that improves with practice and data.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold">Paid Ads (PPC)</h1>
              <p className="text-sm text-gray-600">Instant Visibility That Scales</p>
            </div>
            <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 font-medium bg-blue-100 text-blue-700 text-sm">
              Module {activeTab + 1} of {tabs.length}
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-full h-2 bg-blue-100">
            <div 
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-100/50">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {renderContent()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
              disabled={activeTab === 0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
              disabled={activeTab === tabs.length - 1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PPCLearningModule;