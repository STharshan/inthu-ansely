"use client";

export default function SideBySideComparison() {
  const data = [
    { label: "Page Speed", react: 5, wordpress: 2, wix: 2, godaddy: 1 },
    { label: "SEO Control", react: 5, wordpress: 2, wix: 1, godaddy: 1 },
    { label: "Security", react: 5, wordpress: 2, wix: 2, godaddy: 1 },
    { label: "Scalability", react: 5, wordpress: 2, wix: 1, godaddy: 1 },
    { label: "Conversion UX", react: 5, wordpress: 2, wix: 1, godaddy: 1 },
    { label: "Long-Term Value", react: 5, wordpress: 2, wix: 1, godaddy: 1 },
  ];

  const Stars = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${
            i < rating
              ? "text-[#0045EF]"
              : "text-gray-300 dark:text-gray-700"
          }`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 0 0 .95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 0 0-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 0 0-.364-1.118L2.613 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 0 0 .95-.69z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Side-by-Side Comparison
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            See how React stacks up against traditional website builders across
            key metrics.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 overflow-hidden transition-colors">
          <table className="w-full text-left">
            <thead className="border-b border-gray-300 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-black dark:text-white font-semibold">
                  Feature
                </th>
                <th className="px-6 py-4 text-[#0045EF] font-semibold">React</th>
                <th className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  WordPress
                </th>
                <th className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Wix
                </th>
                <th className="px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  GoDaddy
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-300 dark:border-gray-700 last:border-none"
                >
                  <td className="px-6 py-5 text-black dark:text-white font-medium">
                    {row.label}
                  </td>
                  <td className="px-6 py-5">
                    <Stars rating={row.react} />
                  </td>
                  <td className="px-6 py-5">
                    <Stars rating={row.wordpress} />
                  </td>
                  <td className="px-6 py-5">
                    <Stars rating={row.wix} />
                  </td>
                  <td className="px-6 py-5">
                    <Stars rating={row.godaddy} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
