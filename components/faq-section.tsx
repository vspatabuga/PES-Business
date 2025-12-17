"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Berapa estimasi biaya dan timeline?",
    answer:
      "Website company profile 15-30 juta (4-6 minggu), sistem web custom 50-150 juta (3-6 bulan), aplikasi mobile 80-200 juta (4-8 bulan).",
  },
  {
    question: "Apakah bisa bayar bertahap?",
    answer: "Ya, 30% di awal, 40% saat development selesai, 30% saat deployment.",
  },
  {
    question: "Teknologi apa yang digunakan?",
    answer: "Next.js/React untuk web, React Native/Flutter untuk mobile, Node.js/Python untuk backend.",
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya, garansi 3 bulan untuk bug fixes dan kami menyediakan paket maintenance mulai 3 juta/bulan.",
  },
  {
    question: "Apakah saya dapat source code?",
    answer: "Ya, full source code dan dokumentasi lengkap diserahkan setelah pelunasan.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">FAQ</h2>
          <p className="text-xl text-white/60 font-light">Pertanyaan yang sering ditanyakan</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-px bg-white/10 border border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black p-6 hover:bg-white/5 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-start justify-between gap-4 group"
              >
                <span className="font-semibold group-hover:text-white/80 transition-colors tracking-tight">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 mt-0.5 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20punya%20pertanyaan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 font-medium transition-colors"
          >
            Pertanyaan lain? Hubungi via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
