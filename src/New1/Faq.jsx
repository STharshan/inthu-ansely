import React, { useState } from "react";

// The content structured to match your 'data' prop requirement
const faqData = {
  heading: "Everything You Need to Know",
  faqs: [
    {
      q: "Why should we invoice immediately after completing a job?",
      a: "Businesses that send invoices within 24 hours get paid significantly faster than those who delay. When the work is fresh in the client's mind, payment feels like the natural next step — reducing delays and improving cash flow."
    },
    {
      q: "Is it actually easy for my team to use?",
      a: "Yes. It's built so anyone in your team can send an invoice in just a few clicks. No accounting experience. No complicated dashboards. If they can use a phone, they can invoice."
    },
    {
      q: "Does sending professional invoices really build trust?",
      a: "Absolutely. Clean, branded digital invoices make your business look organised and established. Customers are more confident paying structured invoices compared to handwritten or informal requests."
    },
    {
      q: "Will this help us get paid faster?",
      a: "Yes. Instant invoices — especially with clear payment details — remove friction. The easier you make it to pay, the faster clients complete payment. Speed of sending directly impacts speed of receiving."
    },
    {
      q: "Does this reduce admin time?",
      a: "Definitely. No paper. No lost invoices. No manual tracking. Everything is handled in only a few clicks, freeing your team for more important tasks."
    },
    {
      q: "How does this improve overall business performance?",
      a: "Faster invoicing improves cash flow, cash flow improves stability, and stability fuels growth. Small operational upgrades like instant invoicing compound into stronger, more professional businesses."
    }
  ]
};

export default function FAQSection({ data = faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Dynamic Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-black dark:text-white leading-tight">
            {data.heading}
          </h2>
          <div className="w-20 h-1.5 bg-[#0045EF] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {data.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border border-white/10 shadow-lg ${
                  isOpen 
                    ? "bg-white/90 scale-[1.02]" 
                    : "bg-[#0045EF] hover:bg-[#0045EF]/90 cursor-pointer"
                }`}
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer group p-6"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className={`text-[18px] md:text-[22px] font-semibold ${isOpen ? 'text-black' : 'text-white'} transition-colors pr-6`}>
                    {item.q}
                  </h3>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-black text-[#0045EF]' : 'bg-white/80 text-black'
                  }`}>
                    <span className="text-[24px] -mt-1 font-bold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 animate-slideIn">
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-[16px] md:text-[18px] text-black leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}} />
    </section>
  );
}