export default function TestimonialCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl overflow-hidden p-4 md:p-8 gap-6">
      {/* Left Side - Person Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/side.avif"
            alt="Sam Balsubramani"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0021FF] via-[#0047FF] to-[#0042D9] text-white rounded-2xl p-6 md:p-8 relative">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
          “Belonging matters. Intuitive provides a safe space for expression,
          knowledge, and community.”
        </p>
        <p className="text-sm font-medium opacity-90 mb-6">
          — Sam Balsubramani, Global Ecosystem Portfolio Marketing
        </p>
        <button className="bg-white text-blue-900 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition">
          Join Intuitive
        </button>
      </div>
    </div>
  );
}