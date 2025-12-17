import Link from "next/link"

const navigation = {
  layanan: [
    { name: "Web Application", href: "/layanan#web" },
    { name: "Mobile Application", href: "/layanan#mobile" },
    { name: "IoT Integration", href: "/layanan#iot" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Proses Kerja", href: "/proses" },
  ],
  kontak: [
    { name: "Hubungi Kami", href: "/kontak" },
    { name: "WhatsApp", href: "https://wa.me/6281234567890", external: true },
    { name: "Email", href: "mailto:hello@pesbusiness.com", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">PES</h3>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">Solusi digital yang powerful namun elegan.</p>
            <p className="text-sm text-white/40">pesbusiness.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Layanan</h4>
            <ul className="space-y-3">
              {navigation.layanan.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Perusahaan</h4>
            <ul className="space-y-3">
              {navigation.perusahaan.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Kontak</h4>
            <ul className="space-y-3">
              {navigation.kontak.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-white transition-colors block"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors block">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} PES Digital Solution. Silent Thunder.</p>
        </div>
      </div>
    </footer>
  )
}
