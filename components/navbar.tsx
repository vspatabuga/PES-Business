"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Portofolio", href: "/portofolio" },
  { name: "Proses Kerja", href: "/proses" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-white/80 transition-colors tracking-tight">
          PES
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all hover:text-white relative group uppercase tracking-wider ${
                pathname === item.href ? "text-white" : "text-white/60"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
          <Button asChild className="group bg-white text-black hover:bg-white/90 border-0">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden border-t border-white/10 bg-black transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 text-sm font-medium transition-all hover:translate-x-2 uppercase tracking-wider ${
                pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-white text-black hover:bg-white/90 border-0">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
