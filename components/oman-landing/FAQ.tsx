"use client"
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are The Tours Suitable For All Ages?',
      answer:
        'Yes! Our tours are designed to be family-friendly and suitable for all ages. We offer activities that cater to children, adults, and seniors, ensuring everyone has a memorable experience.',
    },
    {
      question: 'Do We Need A Visa To Visit Oman?',
      answer:
        'Visa requirements vary by nationality. Most visitors can obtain a visa on arrival or an e-visa.',
    },
    {
      question: 'What Is Included In The Accommodation Package?',
      answer:
        'Our accommodation packages include comfortable lodging, breakfast, and access to facilities.',
    },
    {
      question: 'Is Alcohol Safe For Travelers?',
      answer:
        'Oman is a safe destination for travelers. Alcohol is available in licensed hotels.',
    },
    {
      question: 'Are We Allowed To Travel Alone?',
      answer:
        'Absolutely! Oman is one of the safest countries in the Middle East for solo travelers.',
    },
    {
      question: 'Do We Have Private Tours?',
      answer:
        'Yes, we offer private tours tailored to your preferences and schedule.',
    },
    {
      question: 'What Discounts Could You Offer?',
      answer:
        'We offer early bird specials, group discounts, and seasonal promotions.',
    },
    {
      question: 'Can I Make Changes To My Itinerary?',
      answer:
        'Yes, modifications may be possible depending on the tour type and timing.',
    },
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-teal-700">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have questions about your trip? We're here to help! Find answers to our most commonly asked questions below.
            </p>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full transition-colors font-medium">
              Ask A Question
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <Plus
                      className={`text-gray-500 transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                      size={18}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
