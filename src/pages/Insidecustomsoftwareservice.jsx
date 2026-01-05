import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Target, Lightbulb, Zap, Users, TrendingUp, CircleCheck } from 'lucide-react';

const Insidecustomsoftwareservice = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'overview',
      title: 'Custom Software — Think Like a Tech Founder',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Software — Think Like a Tech Founder</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every successful business reaches a point where off-the-shelf tools start slowing it down. As the leader in your field, your time should be spent on growth, strategy, and decisions that move the business forward — not buried in repetitive admin, disconnected systems, or manual processes that drain your team's energy.
            </p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Module Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  This module is about shifting your mindset from business operator to tech-enabled founder. You'll learn to identify opportunities for automation and understand how custom software creates competitive advantage.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Strategic Thinking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn to question processes and identify what should be automated rather than optimized
              </p>
            </div>

            <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Remove Friction</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Understand the real cost of manual work and how it compounds over time
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mindset',
      title: 'The Founder Mindset',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Founder Mindset</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border-2 border-orange-200">
            <h3 className="text-xl font-semibold mb-4">The best founders don't ask:</h3>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-500 italic mb-6">
              "How do I do this task faster?"
            </blockquote>
            <h3 className="text-xl font-semibold mb-4">They ask:</h3>
            <blockquote className="text-2xl md:text-3xl font-bold text-orange-600">
              "Why does this task exist at all?"
            </blockquote>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">If a process:</h3>
            <div className="space-y-3">
              {[
                'Eats hours every week',
                'Requires double entry or manual checking',
                'Depends on one person "just knowing how it works"',
                'Causes delays, mistakes, or missed opportunities'
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border shadow-sm p-4 hover:border-orange-500 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">{idx + 1}</span>
                    </div>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-6 md:p-8">
            <p className="text-xl md:text-2xl font-semibold text-center">
              …it's a software problem, not a people problem.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cost',
      title: 'Real Cost of Manual Work',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Cost of Manual Work</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most businesses underestimate how much time and money is lost to inefficient processes. That time compounds. And it quietly blocks scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Admin-heavy workflows',
                desc: 'Staff spending hours on tasks that could be automated',
                stat: '10-15 hours/week per employee'
              },
              {
                icon: TrendingUp,
                title: 'Copying data between systems',
                desc: 'Manual data entry leading to errors and delays',
                stat: 'Up to 20% error rate'
              },
              {
                icon: Zap,
                title: 'Chasing updates & approvals',
                desc: 'Time lost following up on processes and payments',
                stat: '5-8 hours/week per manager'
              },
              {
                icon: Target,
                title: 'Disconnected tools',
                desc: 'Using 5–6 tools that don\'t talk to each other',
                stat: '30% productivity loss'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.desc}</p>
                <div className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full inline-block">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-600 text-white rounded-xl border shadow-sm p-6 md:p-8">
            <p className="text-lg md:text-xl font-semibold text-center">
              Custom software removes friction by designing your business logic directly into a system — the way you actually operate.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'meaning',
      title: 'What Custom Software Means',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Custom Software Really Means</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Custom software isn't "big tech" or overkill. It's simply software built around your business, not the other way round.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              'Software built around your business, not the other way round',
              'Automating tasks you already do every day',
              'Giving you visibility, control, and speed'
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl border shadow-sm p-5 border-l-4 border-l-orange-600">
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Examples Include:</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Internal dashboards',
                  desc: 'Replacing spreadsheets with real-time data visualization'
                },
                {
                  title: 'Automated workflows',
                  desc: 'Instead of manual follow-ups and reminders'
                },
                {
                  title: 'Custom CRM, ERP, or booking systems',
                  desc: 'Designed specifically for your business processes'
                },
                {
                  title: 'Tools that scale',
                  desc: 'Growing seamlessly alongside your business'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border shadow-sm p-6 hover:border-orange-500 transition-colors">
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-6 md:p-8 text-center">
            <p className="text-xl font-semibold mb-2">Built once. Used every day.</p>
            <p className="text-gray-300">Investment that compounds over time</p>
          </div>
        </div>
      )
    },
    {
      id: 'approach',
      title: 'Our Approach',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach: Build What Matters</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't start with code. We start with your bottlenecks.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'Identify tasks wasting founder or staff time',
                desc: 'We analyze your current workflows to find where time is being lost'
              },
              {
                num: '02',
                title: 'Map where friction, delays, or errors occur',
                desc: 'Understanding the pain points in your processes'
              },
              {
                num: '03',
                title: 'Decide what should be automated, simplified, or removed',
                desc: 'Strategic decisions about what deserves custom software'
              },
              {
                num: '04',
                title: 'Design software that solves those exact problems',
                desc: 'Building solutions tailored to your specific needs'
              },
              {
                num: '05',
                title: 'Build systems that grow with your business',
                desc: 'Creating scalable infrastructure for long-term success'
              }
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-xl border shadow-sm p-6 md:p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-600 text-white rounded-xl border shadow-sm p-8 text-center">
            <p className="text-xl md:text-2xl font-semibold mb-3">
              You stay focused on what matters.
            </p>
            <p className="text-lg">Your software handles the rest.</p>
          </div>
        </div>
      )
    },
    {
      id: 'takeaway',
      title: 'Key Takeaway',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Takeaway</h2>
          </div>

          <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                If you're leading a business today, thinking like a tech founder isn't optional — it's a competitive advantage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Your Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                You already know your industry better than anyone. That knowledge is your competitive advantage.
              </p>
            </div>

            <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Role</h3>
              <p className="text-gray-600 leading-relaxed">
                Our job is to turn that knowledge into software that works for you, not against you.
              </p>
            </div>
          </div>

          <div className="bg-orange-600 text-white rounded-xl border shadow-sm p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              When you're ready, we don't just build tools —
            </h3>
            <p className="text-xl md:text-2xl font-semibold">we help you build leverage.</p>
          </div>

          <div className="pt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
              <CircleCheck className="w-5 h-5" />
              <span className="font-semibold">Module Complete!</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const progress = ((currentSection + 1) / sections.length) * 100;

  const goToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-orange-600 text-white">
              Learning Module
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Think Like a Tech Founder
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Transform your business by understanding how custom software creates leverage, eliminates friction, and unlocks scale.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-orange-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-200 bg-white sticky top-[57px] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToSection(index)}
                className={`inline-flex items-center justify-center text-sm font-medium transition-all whitespace-nowrap h-8 rounded-md px-3 ${
                  currentSection === index
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {sections[currentSection].content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => goToSection(currentSection - 1)}
              disabled={currentSection === 0}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 gap-2 border shadow-sm ${
                currentSection === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={() => goToSection(currentSection + 1)}
              disabled={currentSection === sections.length - 1}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 gap-2 ${
                currentSection === sections.length - 1
                  ? 'bg-orange-600 text-white opacity-50 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              {currentSection === sections.length - 1 ? 'Complete' : 'Next Section'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insidecustomsoftwareservice;