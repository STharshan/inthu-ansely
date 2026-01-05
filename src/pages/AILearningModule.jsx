import React, { useState } from 'react';
import { BookOpen, Target, Lightbulb, Rocket, Layers, Search, Shield, Users, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const AILearningModule = () => {
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    {
      id: 1,
      icon: Target,
      title: 'The Founder Bottleneck',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            Most businesses don't have a growth problem. They have a founder bottleneck.
          </p>

          <div className="space-y-4">
            <p className="leading-relaxed">As a business grows, the founder often becomes:</p>
            <ul className="space-y-2">
              {['The decision-maker', 'The problem-solver', 'The quality controller', 'The fallback when systems fail'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="leading-relaxed">This creates stress, delays, and limits scale.</p>
            <blockquote className="border-l-4 border-orange-600 pl-6 py-2 italic text-lg">
              If everything needs you, growth becomes impossible.
            </blockquote>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-3">Key Shift in Thinking</h3>
            <p className="text-lg mb-3 italic">"If I had an unlimited team, what would I delegate first?"</p>
            <p className="leading-relaxed text-gray-400">
              The answer reveals where your business is leaking time and energy.
            </p>
          </div>

          <div className="space-y-3">
            <p className="leading-relaxed">Anything that:</p>
            <ul className="space-y-2">
              {['Happens repeatedly', 'Follows a predictable pattern', 'Does not require emotional intelligence or creativity'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">…should not require you.</p>
            <p className="leading-relaxed font-medium">That is where AI becomes relevant.</p>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Core Idea</h3>
            <p className="leading-relaxed">
              AI exists to remove the founder from unnecessary work, not remove control.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'What AI Actually Is',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            AI isn't magic. It's pattern recognition at scale.
          </p>

          <div className="space-y-4">
            <p className="leading-relaxed">AI can:</p>
            <ul className="space-y-2">
              {['Process large amounts of data quickly', 'Identify patterns humans might miss', 'Make predictions based on historical data', 'Automate repetitive cognitive tasks'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-3">What AI Is NOT</h3>
            <p className="leading-relaxed text-gray-400">
              AI cannot replace human judgment, creativity, or emotional intelligence. It's a tool that amplifies human capabilities, not a replacement for them.
            </p>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
            <p className="leading-relaxed">
              The best AI implementations combine machine efficiency with human oversight.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: Rocket,
      title: 'Where AI Creates Impact',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            AI creates the most value in areas where speed, scale, and consistency matter.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Customer Service', desc: 'Handle routine inquiries 24/7' },
              { title: 'Data Analysis', desc: 'Extract insights from complex datasets' },
              { title: 'Content Creation', desc: 'Generate drafts and variations quickly' },
              { title: 'Process Automation', desc: 'Streamline repetitive workflows' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Impact Areas</h3>
            <p className="leading-relaxed">
              Focus on tasks that happen frequently, follow patterns, and don't require creative problem-solving.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: Layers,
      title: 'AI vs Traditional Software',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            Understanding the difference helps you choose the right tool for the job.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4">Traditional Software</h3>
              <ul className="space-y-2">
                {['Rule-based', 'Predictable outputs', 'Explicit programming', 'Fixed logic'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4">AI Software</h3>
              <ul className="space-y-2">
                {['Pattern-based', 'Adaptive outputs', 'Learning from data', 'Flexible logic'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">When to Use Each</h3>
            <p className="leading-relaxed">
              Use traditional software for precise, repeatable tasks. Use AI for complex pattern recognition and adaptive responses.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: Search,
      title: 'Identifying AI Opportunities',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            Not every problem needs AI. Here's how to spot genuine opportunities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ask These Questions</h3>
            <ul className="space-y-3">
              {[
                'Does this task happen frequently?',
                'Is there a pattern to how its done?',
                'Would automation create significant time savings?',
                'Is the task data-driven rather than creative?'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-600">{idx + 1}</span>
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-3">Red Flags</h3>
            <p className="leading-relaxed text-gray-400">
              Avoid AI for tasks requiring deep empathy, creative strategy, or high-stakes judgment calls.
            </p>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Best Candidates</h3>
            <p className="leading-relaxed">
              Look for high-volume, pattern-based tasks that currently consume disproportionate time.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      icon: Shield,
      title: 'Are You Ready for AI?',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            Before implementing AI, ensure your foundation is solid.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Prerequisites</h3>
            <div className="space-y-3">
              {[
                { title: 'Clean Data', desc: 'Your data is organized and accessible' },
                { title: 'Clear Processes', desc: 'You understand your current workflows' },
                { title: 'Defined Goals', desc: 'You know what success looks like' },
                { title: 'Team Buy-in', desc: 'Your team is ready for change' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800 rounded-xl border border-gray-700 p-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Readiness Check</h3>
            <p className="leading-relaxed">
              If you can't clearly explain a process to a human, AI won't be able to automate it effectively.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      icon: Users,
      title: 'AI as a Team Member',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            Think of AI as a specialized team member with specific strengths and limitations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">AI Strengths</h3>
              <ul className="space-y-2">
                {['Works 24/7', 'Processes data instantly', 'Never gets tired', 'Consistent quality'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">AI Limitations</h3>
              <ul className="space-y-2">
                {['No emotional intelligence', 'Needs clear instructions', 'Can\'t be truly creative', 'Requires oversight'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-orange-600/10 border border-orange-600/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Integration Strategy</h3>
            <p className="leading-relaxed">
              AI should complement your team's skills, not replace their judgment. Use it for efficiency, not decision-making.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      icon: BookOpen,
      title: 'From Learning to Action',
      content: (
        <div className="prose max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-400">
            You've learned the fundamentals. Now it's time to apply them.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Your Next Steps</h3>
            <div className="space-y-3">
              {[
                'Audit your daily tasks for AI opportunities',
                'Identify one high-impact process to automate',
                'Ensure your data and processes are documented',
                'Start small with a pilot project',
                'Measure results and iterate'
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800 rounded-xl border border-gray-700 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed mt-1">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Remember</h3>
            <p className="text-lg leading-relaxed">
              AI is a tool for leverage, not a magic solution. Focus on clear problems with measurable outcomes.
            </p>
          </div>

          <div className="bg-green-600/10 border border-green-600/20 rounded-xl p-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-full mb-4">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Course Complete!</span>
            </div>
            <p className="text-gray-400">
              You're now equipped to identify and implement AI solutions in your business.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentContent = lessons[currentLesson];
  const progress = ((currentLesson + 1) / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm sticky top-0 z-10 bg-gray-950/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold">AI for Business Growth</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm font-semibold">{currentLesson + 1}/8</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-orange-600 h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <nav className="space-y-1">
                {lessons.map((lesson, index) => {
                  const Icon = lesson.icon;
                  const isActive = currentLesson === index;
                  const isCompleted = currentLesson > index;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        isActive 
                          ? 'bg-orange-600 text-white' 
                          : 'hover:bg-gray-800'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-gray-800'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs mb-0.5 ${isActive ? 'opacity-90' : 'opacity-70'}`}>
                          Lesson {lesson.id}
                        </div>
                        <div className="text-sm font-medium truncate">{lesson.title}</div>
                      </div>
                      {isCompleted && !isActive && (
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center">
                    {React.createElement(currentContent.icon, {
                      className: "w-6 h-6 text-orange-600"
                    })}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Lesson {currentLesson + 1} of {lessons.length}
                    </div>
                    <h2 className="text-3xl font-bold">{currentContent.title}</h2>
                  </div>
                </div>
              </div>

              {currentContent.content}

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === 0
                      ? 'opacity-50 cursor-not-allowed border border-gray-800'
                      : 'border border-gray-700 hover:bg-gray-800'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <button
                  onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
                  disabled={currentLesson === lessons.length - 1}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    currentLesson === lessons.length - 1
                      ? 'bg-orange-600 text-white opacity-50 cursor-not-allowed'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  Next Lesson
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AILearningModule;