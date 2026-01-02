"use client";

export default function SideBySideComparison() {
  const data = [
    {
      label: "Page Speed",
      react: 5,
      wordpress: 2,
      wix: 2,
      godaddy: 1,
    },
    {
      label: "SEO Control",
      react: 5,
      wordpress: 2,
      wix: 1,
      godaddy: 1,
    },
    {
      label: "Security",
      react: 5,
      wordpress: 2,
      wix: 2,
      godaddy: 1,
    },
    {
      label: "Scalability",
      react: 5,
      wordpress: 2,
      wix: 1,
      godaddy: 1,
    },
    {
      label: "Conversion UX",
      react: 5,
      wordpress: 2,
      wix: 1,
      godaddy: 1,
    },
    {
      label: "Long-Term Value",
      react: 5,
      wordpress: 2,
      wix: 1,
      godaddy: 1,
    },
  ];

  const Stars = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${
            i < rating ? "text-[#22D3EE]" : "text-[#1F2937]"
          }`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 0 0 .95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 0 0-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 0 0-.364-1.118L2.613 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 0 0 .95-.69z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Side-by-Side Comparison
          </h2>
          <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">
            See how React stacks up against traditional website builders across
            key metrics.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[#1F2933] bg-[#111827] overflow-hidden">
          <table className="w-full text-left">
            <thead className="border-b border-[#1F2933]">
              <tr>
                <th className="px-6 py-4 text-white font-semibold">Feature</th>
                <th className="px-6 py-4 text-[#22D3EE] font-semibold">React</th>
                <th className="px-6 py-4 text-[#9CA3AF] font-semibold">
                  WordPress
                </th>
                <th className="px-6 py-4 text-[#9CA3AF] font-semibold">Wix</th>
                <th className="px-6 py-4 text-[#9CA3AF] font-semibold">
                  GoDaddy
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#1F2933] last:border-none"
                >
                  <td className="px-6 py-5 text-white font-medium">
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
