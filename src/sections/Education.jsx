import SectionBackground from "../components/SectionBackground"

export default function Education() {
  return (
    <section className="relative overflow-hidden rounded-2xl py-10 space-y-12">

      {/* Background Video */}
      <SectionBackground src="/videos/rv.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8 space-y-12">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Education
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-accent/70 rounded-full" />
        </div>

        {/* Degree 1 */}
        <div className="bg-surface/70 backdrop-blur-sm p-6 rounded-xl space-y-3 border border-white/10
                        shadow-lg shadow-black/30
                        transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
          <h3 className="text-lg font-medium text-white/90">
            Bachelor of Engineering (Civil Engineering)
          </h3>

          <p className="text-white/85">
            NED University of Engineering & Technology, Karachi, Pakistan
          </p>

          <p className="text-white/60 text-sm">
            2022 – 2026 &nbsp;|&nbsp; CGPA: <span className="text-white">3.77</span> &nbsp;|&nbsp;
            Ranked <span className="text-white">8th</span> in Department
          </p>

          <p className="text-white/85 mt-3">
            Strong academic focus on transportation and traffic engineering,
            supported by practical laboratory work, design projects, and
            field-based coursework.
          </p>

          {/* Core Courses */}
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2 text-white/90 underline">
              Core Courses Studied
            </p>

            <ul className="grid md:grid-cols-2 gap-2 text-white/75 text-sm">
              <li>Transportation Engineering – I & II</li>
              <li>Engineering Surveying – I & II</li>
              <li>Environmental Engineering – I & II</li>
              <li>Architecture and Town Planning</li>
              <li>Engineering Drawing – I & II</li>
              <li>Essentials in Construction Project Management</li>
              <li>Modern Aspects of Construction Project Management</li>
              <li>Quantity and Cost Estimation</li>
              <li>Structural Analysis – I & II</li>
              <li>Soil Mechanics – I & II</li>
              <li>Geosynthetics and their Application</li>
              <li>Hydraulics and Water Resources Engineering</li>
              <li>German Language – I & II</li>
              <li>Reinforced Concrete Design – I & II</li>
              <li>Design of Steel Structures</li>
              <li>Fluid Mechanics – I & II</li>
              <li>Mechanics of Solids – I & II</li>
              <li>Calculus, Linear Algebra and ODE, Numerical Analysis, Probability and Statistics</li>
              <li>Communication, Ethics, Community Service</li>
            </ul>
          </div>
        </div>

        {/* Degree 2 */}
        <div className="bg-surface/70 backdrop-blur-sm p-6 rounded-xl space-y-2 border border-white/10
                        shadow-lg shadow-black/30
                        transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
          <h3 className="text-lg font-medium text-white/90">
            Intermediate (Pre-Engineering)
          </h3>

          <p className="text-white/85">
            Nabi Bagh ZM Government Science College, Karachi, Pakistan
          </p>

          <p className="text-white/60 text-sm">
            2020 – 2022 &nbsp;|&nbsp; Grade: <span className="text-white">A+</span> |&nbsp; <span className="text-white">Topper</span> of the College
          </p>
        </div>

        {/* Degree 3 */}
        <div className="bg-surface/70 backdrop-blur-sm p-6 rounded-xl space-y-2 border border-white/10
                        shadow-lg shadow-black/30
                        transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
          <h3 className="text-lg font-medium text-white/90">
            Matriculation (Science)
          </h3>

          <p className="text-white/85">
            Aisha Bawany Academy, Karachi, Pakistan
          </p>

          <p className="text-white/60 text-sm">
            Completed 2020 &nbsp;|&nbsp; Grade: <span className="text-white">1st Division</span>
          </p>
        </div>

        {/* Future placeholder */}
        <p className="text-white/50 text-sm italic">
          Advanced academic qualifications and postgraduate education will be added here.
        </p>

      </div>

    </section>
  )
}
