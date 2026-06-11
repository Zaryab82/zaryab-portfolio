import SectionBackground from "../components/SectionBackground"

export default function Summary() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden rounded-2xl">

      {/* Background Video */}
      <SectionBackground src="/videos/vid1.mp4" />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-[80vh] p-8">

        {/* TEXT CONTENT */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Muhammad Zaryab Ali
            </h1>
            <div className="h-1 w-20 bg-accent mb-4"></div>

            <p className="text-xl text-accent font-medium">
              Civil Engineer | Infrastructure, Structure & EIA Planning Specialist
            </p>
          </div>

          <p className="text-white/90 leading-relaxed text-lg">
            Ranked <span className="text-accent font-semibold">8th</span> in Civil Engineering at NED University with a CGPA of <span className="text-accent font-semibold">3.768</span>.
            Focused on Infrastructure engineering, Planning and
            data-driven solutions.
          </p>

          <div className="bg-surface/60 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <p className="text-white/80">
              <span className="text-accent">✓</span> Internship: NESPAK (Structure)<br />
              <span className="text-accent">✓</span> Site Training: ZKB Engineers & Constructors<br />
              <span className="text-accent">✓</span> Special Interest: Sustainable & Smart Cities
            </p>
          </div>
        </div>

        {/* PHOTO SECTION */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src="/mypic.png"
              alt="Muhammad Zaryab Ali - Civil Engineer"
              className="w-72 h-72 object-cover rounded-2xl border-4 border-surface shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-accent text-white px-4 py-2 rounded-lg">
              Civil Engineer
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
