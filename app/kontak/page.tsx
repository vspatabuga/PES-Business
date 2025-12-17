"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct WhatsApp message
    const waMessage = `Halo PES Digital Solution,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0APesan:%0A${formData.message}`
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, "_blank")
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.message

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Hubungi Kami</h1>
          <p className="text-xl text-white/60 font-light">Diskusikan kebutuhan proyek Anda bersama tim kami</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="p-12 bg-black">
            <h2 className="text-2xl font-bold mb-8 tracking-tight">Kirim Pesan</h2>
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg font-semibold">Pesan Terkirim!</p>
                <p className="text-sm text-white/60 mt-2">Kami akan menghubungi Anda segera</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="bg-white/5 border-white/20 focus:border-white/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className="bg-white/5 border-white/20 focus:border-white/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                    Nomor WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 812-3456-7890"
                    className="bg-white/5 border-white/20 focus:border-white/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang proyek Anda..."
                    rows={5}
                    className="bg-white/5 border-white/20 focus:border-white/40 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-white text-black hover:bg-white/90 border-0 h-12"
                  disabled={!isFormValid}
                >
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Kirim via WhatsApp
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-black p-12 space-y-px">
            <div className="p-8 bg-white/5 border border-white/10 text-center mb-px">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Chat Langsung</h2>
              <p className="text-white/60 mb-8">Respons lebih cepat via WhatsApp</p>
              <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 border-0 px-8 h-12">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20diskusi%20tentang%20proyek%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat via WhatsApp
                </a>
              </Button>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-white/80 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold mb-2 tracking-tight">Email</h3>
                  <a
                    href="mailto:hello@pesbusiness.com"
                    className="text-white/60 hover:text-white transition-colors block"
                  >
                    hello@pesbusiness.com
                  </a>
                  <p className="text-sm text-white/40 mt-1">Response: 1-2 hari kerja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-white/80 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold mb-2 tracking-tight">Jam Operasional</h3>
                  <p className="text-white/60">Senin - Jumat</p>
                  <p className="text-white/60">09:00 - 18:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-white/80 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold mb-2 tracking-tight">Lokasi</h3>
                  <p className="text-white/60">Jakarta, Indonesia</p>
                  <p className="text-sm text-white/40 mt-1">(Remote & On-site tersedia)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold mb-4 tracking-tight">Tips Sebelum Menghubungi</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-white/80 mt-1">—</span>
                  <span>Deskripsi singkat bisnis dan masalah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80 mt-1">—</span>
                  <span>Goals dan ekspektasi project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/80 mt-1">—</span>
                  <span>Timeline dan budget range</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
