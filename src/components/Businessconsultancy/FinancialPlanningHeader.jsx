export default function FinancialPlanningHero() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-7xl">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Financial Planning
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
            Koddam's financial planning service helps you define clear financial goals, 
            optimize resources, and prepare for long-term growth. We combine insight, 
            precision, and strategy to bring clarity and control to your financial future.
          </p>
          
          {/* Focus Tags */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <p className="text-sm font-medium text-gray-800">Strategy</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <p className="text-sm font-medium text-gray-800">Security</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
              <p className="text-sm font-medium text-gray-800">Growth</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-12 lg:mt-16 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://framerusercontent.com/images/j4t0CKObqbFrv3v2bTMmTuQkSq4.jpg?scale-down-to=2048&width=4965&height=3490"
            alt="A workspace with tax forms, a calculator, a pen, an envelope, sticky notes, and a cup of coffee on a dark desk."
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}