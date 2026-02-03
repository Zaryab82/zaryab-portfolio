import SectionBackground from "../components/SectionBackground"

export default function Specialization() {
  const focusAreas = [
    "Transportation & Traffic Engineering",
    "GIS & Spatial Analysis",
    "Project Management and Planning",
    "Urban Rail Planning, Highway and Pavement Design",
    "Sustainable & Smart Cities",
    "Transport Planning (Travel demand Modelling)"
  ]

  return (
    <section className="relative space-y-12 overflow-hidden rounded-2xl py-10">

      {/* Background Video */}
      <SectionBackground src="/videos/train.mp4" />

      {/* Content */}
      <div className="relative z-10 space-y-12 px-8">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Specialization & Academic Focus
          </h2>
          <div className="mt-2 h-[2px] w-28 bg-accent/70 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {focusAreas.map((item, index) => (
            <div
              key={index}
              className="bg-surface/70 backdrop-blur-sm p-5 rounded-xl border border-white/10
                         shadow-lg shadow-black/30
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <p className="text-white/90 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-sm italic">
          Research interests will continue to evolve during postgraduate studies.
        </p>

      </div>

    </section>
  )
}
