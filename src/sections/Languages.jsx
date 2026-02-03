import SectionBackground from "../components/SectionBackground"

export default function Languages() {
  return (
    <section className="relative overflow-hidden rounded-2xl py-10">

      {/* Background Video */}
      <SectionBackground src="/videos/rt.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8 space-y-8">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Languages
          </h2>
          <div className="mt-2 h-[2px] w-20 bg-accent/70 rounded-full" />
        </div>

        <div className="max-w-xl bg-surface/70 backdrop-blur-sm p-6 rounded-xl border border-white/10
                        shadow-lg shadow-black/30">

          <ul className="space-y-3 text-white/85 text-lg">
            <li><span className="text-accent font-semibold">Urdu</span> — Native</li>
            <li><span className="text-accent font-semibold">English</span> — Full Professional Proficiency (Completed Undergrad Studies in English)</li>
            <li><span className="text-accent font-semibold">Punjabi</span> — Limited Working Proficiency</li>
            <li><span className="text-accent font-semibold">Sindhi</span> — Limited Working Proficiency</li>
            <li><span className="text-accent font-semibold">German</span> — Elementary Proficiency (Completed 6 credit hours of courses in undergrad)</li>
          </ul>

        </div>

      </div>
    </section>
  )
}
