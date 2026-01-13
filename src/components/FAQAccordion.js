'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <span className={`text-primary-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
