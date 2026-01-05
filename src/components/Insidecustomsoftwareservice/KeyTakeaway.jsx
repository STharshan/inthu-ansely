import { Lightbulb, Zap, CircleCheck } from "lucide-react";

const KeyTakeaway = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Takeaway</h2>
      </div>

      {/* Main Takeaway */}
      <div className="bg-gray-900 text-white rounded-xl border shadow-sm p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            If you're leading a business today, thinking like a tech founder isn't optional — it's a competitive advantage.
          </p>
        </div>
      </div>

      {/* Expertise & Role */}
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

      {/* Leverage Statement */}
      <div className="bg-orange-600 text-white rounded-xl border shadow-sm p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          When you're ready, we don't just build tools —
        </h3>
        <p className="text-xl md:text-2xl font-semibold">we help you build leverage.</p>
      </div>

      {/* Module Complete Badge */}
      <div className="pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
          <CircleCheck className="w-5 h-5" />
          <span className="font-semibold">Module Complete!</span>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaway;
