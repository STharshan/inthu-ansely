import React from "react";

export default function SecuritySection() {
  return (
    <>
      {/* Inter font – inline only */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div
        className="min-w-full h-full overflow-y-auto bg-[#050608]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <section className="py-24 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Header */}
              <div className="space-y-4 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm">
                  <span className="text-cyan-400">🛡️</span>
                  <span className="text-cyan-300 font-medium">
                    Enterprise-Grade
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Stability &amp; Security
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  For businesses handling bookings, payments, and customer data,
                  React provides enterprise-level security.
                </p>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* WordPress Risk */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8">
                  <div className="space-y-6">

                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-3xl">⚠️</span>
                      <h3 className="text-2xl font-extrabold text-red-400">
                        WordPress Risk
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-white">40% of the web</p>
                        <p className="text-sm text-gray-400">
                          Largest attack surface for hackers
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-white">
                          Constant updates
                        </p>
                        <p className="text-sm text-gray-400">
                          Plugin conflicts create vulnerabilities
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-white">
                          PHP vulnerabilities
                        </p>
                        <p className="text-sm text-gray-400">
                          Exposed admin panels and databases
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* React Security */}
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-8">
                  <div className="space-y-6">

                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 text-3xl">🔒</span>
                      <h3 className="text-2xl font-extrabold text-cyan-400">
                        React Security
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-white">
                          No PHP vulnerabilities
                        </p>
                        <p className="text-sm text-gray-400">
                          Modern JavaScript security standards
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-white">
                          No exposed admin panels
                        </p>
                        <p className="text-sm text-gray-400">
                          API-based architecture
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-white">
                          Far fewer exploits
                        </p>
                        <p className="text-sm text-gray-400">
                          Smaller attack surface
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
