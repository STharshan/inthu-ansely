export default function FinancialConfidenceSection() {
  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://framerusercontent.com/images/295l2PYYNWyQF0GHf7Kws2Ddko.jpg?width=3148&height=2100"
              alt="Building financial confidence through strategic planning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-transparent rounded-lg">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <div className="relative w-5 h-5">
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">What we do</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Building financial confidence through strategic planning
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach integrates detailed analysis, forecasting, and risk management to create a complete financial roadmap. We focus on helping clients strengthen liquidity, improve performance, and achieve sustainable profitability through data-driven decisions and proactive planning.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
}