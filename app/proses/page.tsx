"use client"

import { Card } from "@/components/ui/card"
import { Search, FileText, Code, TestTube, HeadphonesIcon, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const processes = [
  {
    number: "01",
    title: "Discovery & Analisis",
    icon: Search,
    description: "Kami mulai dengan memahami bisnis Anda secara mendalam: pain points, goals, dan ekspektasi.",
    activities: [
      "Interview stakeholder dan end-user",
      "Analisis sistem existing (jika ada)",
      "Identifikasi requirement bisnis dan teknis",
      "Feasibility study dan estimasi project",
    ],
    deliverable: "Business Requirement Document (BRD)",
  },
  {
    number: "02",
    title: "Perencanaan & Arsitektur",
    icon: FileText,
    description: "Merancang solusi teknis yang optimal sesuai dengan kebutuhan dan budget.",
    activities: [
      "Desain system architecture",
      "Database schema design",
      "UI/UX wireframe dan mockup",
      "Tech stack selection",
      "Sprint planning dan timeline",
    ],
    deliverable: "Technical Specification Document (TSD) & Design Mockup",
  },
  {
    number: "03",
    title: "Development",
    icon: Code,
    description: "Fase coding dengan metodologi agile untuk memastikan transparansi dan fleksibilitas.",
    activities: [
      "Sprint-based development (2 minggu per sprint)",
      "Weekly progress update dengan demo",
      "Code review dan quality assurance",
      "Continuous integration & deployment",
    ],
    deliverable: "Working software per sprint dengan progress report",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    icon: TestTube,
    description: "Quality assurance menyeluruh sebelum go-live untuk memastikan sistem berjalan optimal.",
    activities: [
      "Unit testing dan integration testing",
      "User acceptance testing (UAT)",
      "Performance dan security testing",
      "Staging environment deployment",
      "Production deployment",
    ],
    deliverable: "Test report & production-ready system",
  },
  {
    number: "05",
    title: "Support & Scaling",
    icon: HeadphonesIcon,
    description: "Dukungan berkelanjutan untuk memastikan sistem tetap berjalan optimal seiring pertumbuhan bisnis.",
    activities: [
      "Bug fixing dan maintenance",
      "Performance monitoring",
      "Feature enhancement request",
      "Scaling infrastructure jika diperlukan",
      "Training tim internal",
    ],
    deliverable: "Maintenance report & technical support",
  },
]

export default function ProsesPage() {
  const [activeProcess, setActiveProcess] = useState(0)

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proses Kerja Kami</h1>
          <p className="text-lg text-muted-foreground">
            Alur kerja yang terstruktur dan transparan dari awal hingga akhir
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
            {processes.map((process, index) => (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 min-w-[100px] ${
                  activeProcess === index
                    ? "bg-primary text-primary-foreground shadow-lg scale-110"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    activeProcess === index ? "bg-primary-foreground text-primary" : "bg-background"
                  }`}
                >
                  {process.number}
                </div>
                <span className="text-xs font-medium text-center hidden sm:block">{process.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 relative overflow-hidden animate-in fade-in slide-in-from-right-5 duration-500">
            <div className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-muted/10">
              {processes[activeProcess].number}
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                {(() => {
                  const IconComponent = processes[activeProcess].icon
                  return <IconComponent className="h-7 w-7 text-primary" />
                })()}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{processes[activeProcess].title}</h2>
                <p className="text-muted-foreground">{processes[activeProcess].description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Aktivitas:</h3>
                <ul className="space-y-2">
                  {processes[activeProcess].activities.map((activity, actIndex) => (
                    <li
                      key={actIndex}
                      className="flex items-start gap-2 text-muted-foreground animate-in fade-in slide-in-from-left-3 duration-300"
                      style={{ animationDelay: `${actIndex * 50}ms` }}
                    >
                      <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Deliverable:</h3>
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">{processes[activeProcess].deliverable}</p>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveProcess(Math.max(0, activeProcess - 1))}
                    disabled={activeProcess === 0}
                    className="flex-1"
                  >
                    ← Sebelumnya
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveProcess(Math.min(processes.length - 1, activeProcess + 1))}
                    disabled={activeProcess === processes.length - 1}
                    className="flex-1"
                  >
                    Selanjutnya →
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-16 p-8 bg-muted/50 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Transparansi & Komunikasi</h3>
          <p className="text-muted-foreground mb-6">
            Setiap tahapan proses kami dokumentasikan dengan baik dan dikomunikasikan secara rutin. Anda akan selalu
            tahu progress proyek dan bisa memberikan feedback di setiap sprint.
          </p>
          <Button size="lg" asChild className="group">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PES%20Digital%20Solution%2C%20saya%20ingin%20tahu%20lebih%20detail%20tentang%20proses%20kerja%20Anda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulai Diskusi <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
