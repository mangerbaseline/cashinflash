"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  "Can I qualify for a payday loan with bad credit?",
  "What can I use a payday loan for?",
  "How much can I borrow?",
  "How do I repay my payday loan?",
  "Is the application process complicated?",
  "Can I get a Payday Loan without a checking account?"
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F5F7F6] py-15">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* left */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            That Says It{" "}
            <span className="relative inline-block text-green-500">
              All
              <Image
                src="/underline.svg"
                alt=""
                width={195}
                height={20}
                className="absolute left-0 bottom-[-6px] w-full "
              />
            </span>
          </h2>

          <p className="text-gray-500 mt-3">
            Have questions? We've got answers.
          </p>

          <div className="mt-8 bg-[#E8F1ED] rounded-2xl p-6 max-w-sm">
            <div className="flex items-start gap-3">
              <div className="text-xl bg-[#27B07D33] rounded-full p-2">🤔</div>

              <div>
                <p className="font-semibold text-gray-800">
                  Still have questions?
                </p>

                <p className="text-sm text-gray-500">
                  We're here to help
                </p>


              </div>
              
            </div>
            <button className="text-green-500 text-sm font-medium mt-4">
                Contact Support →
              </button>
          </div>
        </div>

        {/* right */}
        <div className="space-y-4">
          {faq.map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-gray-800 text-sm font-medium">
                  {q}
                </span>

                <ChevronDown
                  className={`transition ${open === i ? "rotate-180" : ""
                    }`}
                  size={18}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-5 text-sm text-gray-500">
                  This is where the answer content would go explaining
                  the question in more detail.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}