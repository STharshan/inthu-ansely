import React, { useState } from "react";

const faqData = {
  heading: "Everything You Need to Know",
  faqs: [
    {
      q: "Do they need an app to receive my details?",
      a: "Not at all. That's the beauty of it. Anyone with a modern smartphone can receive your details with a single tap — no app, no download, no fuss. It just works, instantly."
    },
    {
      q: "What information can I put on my digital card?",
      a: "Pretty much everything you'd want someone to know. Your photo, name, job title, a short bio, your website, social media links, phone number, and a button that lets them add you straight to their contacts."
    },
    {
      q: "Does it work on all phones?",
      a: "Yes — Ansely Cards use NFC technology which is built into virtually every modern iPhone and Android. No special settings needed on their end. Just tap and it opens right up."
    },
    {
      q: "Can I update my profile after I've got the card?",
      a: "Absolutely. Change your number, update your website, add a new social — just log in and edit your profile. Your card stays the same, your details stay fresh."
    },
    {
      q: "Is this better than a paper business card?",
      a: "Honestly? We think so. Paper cards get lost, go in a pile, and never get looked at again. Ansely Cards open straight on someone's phone, get saved to their contacts, and actually make you memorable."
    },
    {
      q: "How does this help me win more business?",
      a: "First impressions are everything. When you tap your card and someone instantly sees your photo, your work, and your story — you're not just another name on a bit of card. You're someone they'll remember."
    }
  ]
};

export default function FAQSection({ data = faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black dark:text-white leading-tight px-2">
            {data.heading}
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-[#0045EF] mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {data.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg ${isOpen
                    ? "bg-white/90 scale-[1.01] sm:scale-[1.02]"
                    : "bg-[#0045EF] hover:bg-[#0045EF]/90 cursor-pointer"
                  }`}
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer gap-3 p-4 sm:p-5 lg:p-6"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className={`text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-snug ${isOpen ? "text-black" : "text-white"
                    } transition-colors`}>
                    {item.q}
                  </h3>
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-black text-[#0045EF]" : "bg-white/80 text-black"
                    }`}>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 animate-slideIn">
                    <div className="pt-3 sm:pt-4 border-t border-black/10">
                      <p className="text-sm sm:text-base lg:text-[17px] text-black leading-relaxed font-medium">
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

      <style dangerouslySetInnerHTML={{
        __html: `
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