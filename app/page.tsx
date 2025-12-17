"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Smartphone, Cpu, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { FAQSection } from "@/components/faq-section"

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: CheckCircle2,
      title: "Profesional",
      description: "Bekerja dengan standar profesional dan dokumentasi yang lengkap",
    },
    {
      icon: CheckCircle2,
      title: "Terstruktur",
      description: "Proses kerja yang jelas dari discovery hingga deployment",
    },
    {
      icon: CheckCircle2,
      title: "SOP Jelas",
      description: "Setiap tahapan punya SOP yang transparan dan dapat dilacak",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-12">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-balance leading-[1.1] tracking-tight">
              PES
              <br />
              <span className="text-white/30">DIGITAL SOLUTION</span>
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 max-w-2xl">
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light">
              Solusi digital yang powerful namun elegan. Kami membangun sistem yang berbicara melalui hasil, bukan
              janji.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              size="lg"
              asChild
              className="text-base group bg-white text-black hover:bg-white/90 border-0 px-8 h-12"
            >
              <a
                href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20diskusi%20tentang%20proyek%20saya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Proyek
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-transparent border-white/20 hover:bg-white/5 hover:border-white/40 h-12 px-8"
            >
              <Link href="/portofolio">Lihat Karya</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                <AnimatedCounter end={50} />
                <span className="text-white/40">+</span>
              </div>
              <p className="text-sm text-white/50 uppercase tracking-wider">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                <AnimatedCounter end={30} />
                <span className="text-white/40">+</span>
              </div>
              <p className="text-sm text-white/50 uppercase tracking-wider">Klien Puas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                <AnimatedCounter end={5} />
                <span className="text-white/40">+</span>
              </div>
              <p className="text-sm text-white/50 uppercase tracking-wider">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                <AnimatedCounter end={98} />
                <span className="text-white/40">%</span>
              </div>
              <p className="text-sm text-white/50 uppercase tracking-wider">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PES Section */}
      <section className="border-b border-white/10">
        <div className="container mx-auto px-4 py-28 md:py-36">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Kenapa PES Digital
              <br />
              <span className="text-white/40">Solution?</span>
            </h2>
            <p className="text-xl text-white/60 font-light">
              Kami tidak hanya coding. Kami merancang sistem yang bekerja.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 max-w-6xl mx-auto border border-white/10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-10 bg-black cursor-pointer transition-all duration-500 hover:bg-white/5 ${
                  activeFeature === index ? "bg-white/5" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="mb-6">
                  <feature.icon className="h-8 w-8 text-white/80" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-28 md:py-36">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Layanan</h2>
          <p className="text-xl text-white/60 font-light">
            Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 max-w-6xl mx-auto border border-white/10">
          <div className="p-10 bg-black group hover:bg-white/5 transition-all duration-500">
            <Code2 className="h-10 w-10 mb-6 text-white/80" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Web Application</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Sistem web yang robust, scalable, dan user-friendly untuk mendukung operasional bisnis Anda
            </p>
            <Link
              href="/layanan#web"
              className="text-white hover:text-white/80 inline-flex items-center group/link font-medium transition-colors"
            >
              Selengkapnya
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="p-10 bg-black group hover:bg-white/5 transition-all duration-500">
            <Smartphone className="h-10 w-10 mb-6 text-white/80" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Mobile Application</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Aplikasi mobile native dan cross-platform yang responsif untuk iOS dan Android
            </p>
            <Link
              href="/layanan#mobile"
              className="text-white hover:text-white/80 inline-flex items-center group/link font-medium transition-colors"
            >
              Selengkapnya
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="p-10 bg-black group hover:bg-white/5 transition-all duration-500">
            <Cpu className="h-10 w-10 mb-6 text-white/80" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold mb-4 tracking-tight">IoT Integration</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Integrasi perangkat IoT dengan sistem backend untuk monitoring dan kontrol real-time
            </p>
            <Link
              href="/layanan#iot"
              className="text-white hover:text-white/80 inline-flex items-center group/link font-medium transition-colors"
            >
              Selengkapnya
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group bg-transparent border-white/20 hover:bg-white/5 hover:border-white/40 h-12 px-8"
          >
            <Link href="/layanan">
              Lihat Semua Layanan
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-28 md:py-36">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-balance">
              Siap untuk memulai
              <br />
              <span className="text-white/40">proyek Anda?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
              Diskusikan kebutuhan proyek Anda bersama tim kami. Konsultasi gratis untuk klien serius.
            </p>
            <Button
              size="lg"
              asChild
              className="text-base group bg-white text-black hover:bg-white/90 border-0 px-8 h-12"
            >
              <a
                href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20diskusi%20tentang%20proyek%20saya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
