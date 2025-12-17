"use client"

import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Cpu, Database, Cloud, Shield, Zap, Users, BarChart } from "lucide-react"
import { useState } from "react"

export default function LayananPage() {
  const [activeService, setActiveService] = useState<string>("web")

  const services = [
    {
      id: "web",
      title: "Web Application Development",
      icon: Code2,
      description: "Sistem web yang scalable dan maintainable untuk mendukung operasional bisnis",
      whatWeBuild: [
        "Sistem manajemen internal (ERP, CRM, HRIS)",
        "Platform e-commerce dan marketplace",
        "Dashboard analytics dan reporting",
        "Portal pelanggan dan vendor",
      ],
      benefits: [
        { icon: Database, text: "Database terstruktur dan aman" },
        { icon: Zap, text: "Performance optimal untuk traffic tinggi" },
        { icon: Shield, text: "Keamanan data level enterprise" },
        { icon: Cloud, text: "Mudah di-scale seiring pertumbuhan" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Application Development",
      icon: Smartphone,
      description: "Aplikasi mobile yang responsif dan user-friendly untuk iOS dan Android",
      whatWeBuild: [
        "Aplikasi field force dan sales mobile",
        "Aplikasi customer-facing (e-commerce, booking)",
        "Internal tools untuk operasional",
        "Integrasi dengan sistem backend existing",
      ],
      benefits: [
        { icon: Users, text: "Akses mudah untuk tim lapangan" },
        { icon: BarChart, text: "Real-time data dan reporting" },
        { icon: Zap, text: "Offline functionality untuk produktivitas" },
        { icon: Smartphone, text: "Native experience di iOS dan Android" },
      ],
    },
    {
      id: "iot",
      title: "IoT & System Integration",
      icon: Cpu,
      description: "Integrasi perangkat IoT dengan sistem backend untuk monitoring dan kontrol",
      whatWeBuild: [
        "Sistem monitoring real-time (suhu, kelembaban, dll)",
        "Kontrol perangkat jarak jauh via web/mobile",
        "Integrasi sensor dengan database dan analytics",
        "Alert system dan automated response",
      ],
      benefits: [
        { icon: BarChart, text: "Data real-time untuk decision making" },
        { icon: Zap, text: "Otomasi proses operasional" },
        { icon: Shield, text: "Monitoring 24/7 tanpa intervensi manual" },
        { icon: Database, text: "Historical data untuk analisis trend" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Layanan</h1>
          <p className="text-xl text-white/60 font-light">
            Solusi digital yang dirancang untuk mendukung pertumbuhan bisnis Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-px bg-white/10 border border-white/10">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 bg-black hover:bg-white/5 transition-all duration-500"
            >
              <button
                onClick={() => setActiveService(activeService === service.id ? "" : service.id)}
                className="w-full p-10 md:p-12 text-left transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <service.icon className="h-10 w-10 text-white/80" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{service.title}</h2>
                    <p className="text-lg text-white/60">{service.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className={`transition-transform duration-300 ${
                        activeService === service.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeService === service.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 md:px-12 pb-10 md:pb-12 border-t border-white/10">
                  <div className="grid md:grid-cols-2 gap-px bg-white/10 mt-8">
                    <div className="p-6 bg-black">
                      <h3 className="text-xl font-semibold mb-4 tracking-tight">Yang Kami Bangun:</h3>
                      <ul className="space-y-3">
                        {service.whatWeBuild.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-white/60 animate-in fade-in slide-in-from-left-3 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <span className="text-white/80 mt-1">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-black">
                      <h3 className="text-xl font-semibold mb-4 tracking-tight">Benefit untuk Bisnis:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-white/60 animate-in fade-in slide-in-from-right-3 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <benefit.icon className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <span>{benefit.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-xl text-white/60 mb-8 font-light">Tertarik dengan layanan kami?</p>
          <Button size="lg" asChild className="group bg-white text-black hover:bg-white/90 border-0 px-8 h-12">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20diskusi%20tentang%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diskusi Kebutuhan Anda
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
