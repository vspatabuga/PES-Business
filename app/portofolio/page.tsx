"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Sistem Manajemen Inventory UMKM",
    category: "Web Application",
    client: "UMKM Retail",
    description:
      "Web-based inventory management system dengan real-time stock tracking dan automated alerts yang meningkatkan efisiensi operasional hingga 40%.",
    problem:
      "Klien mengalami kesulitan tracking stok barang secara real-time dan sering terjadi miss-stock yang menyebabkan kerugian operasional.",
    solution:
      "Membangun web-based inventory management system dengan fitur: real-time stock tracking, automated reorder alerts, multi-warehouse support, dan reporting dashboard.",
    result:
      "Efisiensi operasional meningkat 40%, zero miss-stock dalam 3 bulan pertama, dan time spent untuk stock checking berkurang 60%.",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    impact: ["40% Efisiensi Operasional", "60% Lebih Cepat Stock Check", "Zero Miss-stock"],
  },
  {
    title: "Aplikasi Field Sales Mobile",
    category: "Mobile Application",
    client: "Distributor FMCG",
    description:
      "Mobile app iOS & Android dengan offline-first architecture untuk tim sales lapangan, meningkatkan produktivitas 35% dengan reporting real-time.",
    problem:
      "Tim sales lapangan kesulitan melakukan order dan tracking kunjungan. Data sering tidak sinkron dan reporting memakan waktu lama.",
    solution:
      "Membangun mobile app (iOS & Android) dengan offline-first architecture, GPS tracking, digital order form, dan automated visit reports.",
    result: "Produktivitas sales meningkat 35%, reporting real-time, dan accuracy data order meningkat hingga 98%.",
    tech: ["React Native", "Node.js", "MongoDB"],
    impact: ["35% Produktivitas Sales", "98% Akurasi Order", "Real-time Reporting"],
  },
  {
    title: "IoT Monitoring Sistem Cold Storage",
    category: "IoT Integration",
    client: "Perusahaan Logistik",
    description:
      "Integrasi sensor IoT dengan dashboard real-time untuk monitoring suhu cold storage, menghasilkan zero incident kerusakan barang dan cost saving 25%.",
    problem:
      "Monitoring suhu cold storage masih manual, risiko kerusakan barang tinggi, dan tidak ada alert system untuk anomali suhu.",
    solution:
      "Integrasi sensor suhu IoT dengan web dashboard untuk monitoring real-time, automated alert via WhatsApp dan email, dan historical data analytics.",
    result:
      "Zero incident kerusakan barang akibat suhu, response time untuk anomali dari 2 jam menjadi 2 menit, dan cost saving 25% dari preventive action.",
    tech: ["IoT Sensors", "MQTT", "Next.js", "Time Series DB"],
    impact: ["Zero Incident", "2 Menit Response Time", "25% Cost Saving"],
  },
]

export default function PortofolioPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portofolio & Studi Kasus</h1>
          <p className="text-lg text-muted-foreground">Hasil nyata yang telah kami capai bersama klien kami</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-t-primary flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">KEY IMPACT</p>
                    <div className="space-y-1">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <p className="text-sm font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">TEKNOLOGI</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-0.5 bg-muted text-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Button variant="outline" size="sm" className="w-full group/btn bg-transparent" asChild>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20tertarik%20dengan%20project%20${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ingin hasil yang sama untuk bisnis Anda?</p>
          <Button size="lg" asChild className="group">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20tertarik%20dengan%20portofolio%20Anda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diskusikan Proyek Anda{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
