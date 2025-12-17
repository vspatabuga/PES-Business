import { Button } from "@/components/ui/button"
import { Target, Eye, Award, Users } from "lucide-react"

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Tentang PES
            <br />
            <span className="text-white/40">Digital Solution</span>
          </h1>
          <p className="text-xl text-white/60 font-light">Partner terpercaya untuk solusi digital bisnis Anda</p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-12 md:p-16 bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Siapa Kami</h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                PES Digital Solution adalah tim profesional yang fokus pada pengembangan solusi digital untuk UMKM dan
                perusahaan kecil-menengah di Indonesia. Kami percaya bahwa teknologi yang tepat dapat mengakselerasi
                pertumbuhan bisnis secara signifikan.
              </p>
              <p>
                Kami tidak hanya sekedar membuat aplikasi. Kami memahami bisnis Anda, mengidentifikasi pain points, dan
                merancang solusi yang benar-benar menyelesaikan masalah — bukan hanya terlihat bagus di permukaan.
              </p>
              <p>
                Dengan pengalaman membangun sistem untuk berbagai industri, kami memiliki track record dalam
                mengdelivery project yang scalable, maintainable, dan yang terpenting: benar-benar digunakan oleh
                end-user.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20">
          <div className="p-12 bg-black">
            <div className="flex items-start gap-4 mb-6">
              <Target className="h-8 w-8 text-white/80 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Visi</h3>
                <p className="text-white/60 leading-relaxed">
                  Menjadi partner digital terpercaya yang membantu UMKM dan perusahaan Indonesia bertransformasi melalui
                  teknologi yang tepat guna dan scalable.
                </p>
              </div>
            </div>
          </div>

          <div className="p-12 bg-black">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="h-8 w-8 text-white/80 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Misi</h3>
                <p className="text-white/60 leading-relaxed">
                  Memberikan solusi digital berkualitas tinggi dengan proses yang transparan, terstruktur, dan
                  berorientasi pada hasil bisnis yang terukur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="p-10 bg-black text-center">
              <Award className="h-8 w-8 text-white/80 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 tracking-tight">Kualitas</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Kami tidak kompromi dengan kualitas code dan deliverable
              </p>
            </div>

            <div className="p-10 bg-black text-center">
              <Users className="h-8 w-8 text-white/80 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 tracking-tight">Transparansi</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Komunikasi jujur dan terbuka di setiap tahapan project
              </p>
            </div>

            <div className="p-10 bg-black text-center">
              <Target className="h-8 w-8 text-white/80 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 tracking-tight">Fokus Hasil</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Orientasi pada hasil bisnis, bukan hanya technical delivery
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-12 md:p-16 bg-white/5 border border-white/10 text-center">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Komitmen Kami</h3>
            <p className="text-white/60 mb-10 leading-relaxed text-lg">
              Kami berkomitmen untuk membangun solusi yang tidak hanya selesai tepat waktu, tapi juga benar-benar
              membantu bisnis Anda tumbuh. Setiap project kami tangani dengan serius dan profesional.
            </p>
            <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 border-0 px-8 h-12">
              <a
                href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20berkenalan%20lebih%20lanjut"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mari Berkenalan
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
