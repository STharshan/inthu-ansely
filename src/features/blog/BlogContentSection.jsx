import React, { useState, useEffect } from 'react';

const BlogContentSection = () => {
  const [activeSection, setActiveSection] = useState('header-2');

  const tableOfContents = [
    { id: 'header-1', title: 'Why It Matters' },
    { id: 'header-2', title: 'Smart Defaults, Flexible Control' },
    { id: 'header-3', title: 'Built for How Teams Actually Work' },
    { id: 'header-4', title: 'Getting Started' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Sticky */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-8">
              {/* Table of Contents */}
              <div className="mb-12">
                <p className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Table of contents</p>
                <nav className="space-y-4">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block text-left w-full transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-black dark:text-white font-medium'
                          : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                      }`}
                      style={{
                        fontSize: '17.5px',
                        lineHeight: '1.2em',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Share Section */}
              <div>
                <p className="text-sm font-bold mb-3 text-gray-900 dark:text-gray-100">Share</p>
                <div className="flex gap-3 text-gray-700 dark:text-gray-300">
                  <button className="hover:opacity-70 transition-opacity">
                    <svg viewBox="0 0 1200 1227" height="20" width="20" fill="currentColor">
                      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                    </svg>
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="lg:col-span-9">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900 dark:text-white" id="header-0">
                Finance teams need visibility — but not everyone should have access to everything. With Roles & Permissions, you get clarity, control, and structure in one place.
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                As teams grow, finance becomes collaborative — but most tools aren't built for that. Shared logins, overexposed data, and unclear responsibilities lead to confusion and mistakes. Vectura's new Roles & Permissions system solves this by letting you define who can see, do, and approve what — without breaking your workflow.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white" id="header-1">
                Why It Matters
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                When your company grows, so does the complexity of managing spend. Without structured access, you risk operational chaos. Budget owners can't approve what they can't see. Team leads don't know how much they're spending. And your finance team ends up playing detective — chasing receipts and trying to track down approvals across multiple tools.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Access control isn't just a security feature — it's foundational to how modern finance teams stay accountable and move quickly. By introducing clearly defined roles, Vectura helps teams operate with confidence, precision, and clarity. Whether you're a startup founder or a finance lead at a growing company, the ability to assign the right access to the right people at the right time can save hours — and prevent expensive mistakes.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white" id="header-2">
                Smart Defaults, Flexible Control
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                To make adoption simple, Vectura includes a set of thoughtfully designed default roles: Finance Lead, Budget Owner, Approver, and Viewer. These match common patterns we've seen across hundreds of teams. But we know every organization is different — so you can also customize roles to match your unique structure.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                You might want your marketing lead to view their campaign budget but not edit it. Or allow a department head to approve expenses but not generate company-wide reports. With granular permissions for budgets, approvals, categories, and reports, you're in control.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This flexibility is what makes Roles & Permissions so powerful. It adapts to your workflow, not the other way around. Whether you're managing five people or five hundred, the structure scales with you.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white" id="header-3">
                Built for How Teams Actually Work
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We've spoken to dozens of teams who all said the same thing: they need structure, but without the red tape. Roles & Permissions is built for real-world collaboration — where teams move quickly, budgets shift often, and clarity is everything.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This isn't about limiting access — it's about enabling better collaboration. With the right people seeing the right data at the right time, teams can:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Track spend more accurately</li>
                <li>Approve faster</li>
                <li>Reduce internal friction</li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The result? Teams can move faster without sacrificing control. And finance teams can stop micromanaging access and start focusing on higher-impact work.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white" id="header-4">
                Getting Started
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Roles & Permissions is available today for all Vectura users. You can find it in <strong className="text-gray-900 dark:text-white">Settings → Team</strong>, where you'll be able to assign default roles or create custom ones based on your company's needs.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We've designed the setup to be intuitive, with built-in guides and suggestions to help you get started quickly. And if you're unsure how to organize your roles or permissions, our team is always here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContentSection;