import React from "react";
import { Shield, AlertTriangle, Lock } from "lucide-react";

export default function SecuritySection() {
  return (
    <>
      <div
        className="min-w-full h-full overflow-y-auto bg-white dark:bg-black transition-colors duration-500"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <section className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">

              {/* Header */}
              <div className="space-y-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 dark:border-cyan-400/20 bg-blue-50 dark:bg-cyan-400/10 px-4 py-1.5 text-sm transition-colors">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                  <span className="font-medium text-blue-600 dark:text-cyan-300">
                    Enterprise-Grade
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                  Stability &amp; Security
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  For businesses handling bookings, payments, and customer data,
                  React provides enterprise-level security.
                </p>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* Traditional Builder Risks */}
                <div className="rounded-xl border border-red-500/20 bg-red-50 dark:bg-red-500/10 p-8 transition-colors">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                      <h3 className="text-2xl font-extrabold text-red-600 dark:text-red-400">
                        Traditional Builder Risks
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-black dark:text-white">Huge attack surface</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          WordPress powers 40% of the web — a popular target for hackers
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-black dark:text-white">Plugin dependency</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Plugin conflicts and outdated extensions create vulnerabilities
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-black dark:text-white">PHP exposure</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Exposed admin panels and databases if not properly hardened
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                      Note: WordPress with managed hosting, regular updates, and minimal plugins can be very secure — especially for smaller sites.
                    </p>
                  </div>
                </div>

                {/* React Security */}
                <div className="rounded-xl border border-blue-600/20 dark:border-cyan-400/20 bg-blue-50 dark:bg-cyan-400/10 p-8 transition-colors">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Lock className="h-8 w-8 text-blue-600 dark:text-cyan-400" />
                      <h3 className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400">
                        React Security
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-black dark:text-white">No PHP vulnerabilities</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Modern JavaScript security standards
                        </p>
                      </div>

                      <div>
                        <p className="font-medium text-black dark:text-white">No exposed admin panels</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">API-based architecture</p>
                      </div>

                      <div>
                        <p className="font-medium text-black dark:text-white">Far fewer exploits</p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
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
