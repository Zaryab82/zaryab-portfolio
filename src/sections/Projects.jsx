import SectionBackground from "../components/SectionBackground"

export default function Projects() {
  const projects = [
    {
      title: "FYDP on: Modelling Behavior of Transport User and Preference Towards Proposed Karachi Circular Railway (On-Going)",
      description:
        "This project evaluates the potential demand for the Karachi Circular Railway through mode choice analysis. Using survey-based data, I developed a Multinomial Logit model to understand how changes in travel time, cost, and comfort influence commuter decisions. The results support evidence-based planning for urban rail investment in Karachi",
    },
    {
      title: "Level of Service Analysis – Karsaz Road, Karachi",
      description:
        "Traffic LOS evaluation with recommendations for improving flow and road utilization.",
    },
    {
      title: "Rome–Florence Motorway Design (Self-Learning)",
      description:
        "GIS-based route optimization, cut–fill analysis, least-cost path using QGIS, followed by detailed highway design in Civil 3D.",
    },
    {
      title: "Orangi Nala Redesign",
      description:
        "Applied fluid mechanics principles to redesign drainage infrastructure and improve flow performance.",
    },
    {
      title: "Structural Analysis of NED Civil N-Block (ETABS)",
      description:
        "Load combination analysis and structural performance evaluation.",
    },
    {
      title: "G+1 Residential Building Design of NED Civil dept N-Block",
      description:
        "Architectural and structural drawings compliant with design standards.",
    },
    {
      title: "Foundation Layout for 1000 sq. yd. Bungalow",
      description:
        "Survey-based on-site layout with emphasis on alignment accuracy.",
    },
    {
      title: "Transmission Tower Structural Model",
      description:
        "Scaled physical modeling and structural behavior analysis.",
    },
    {
      title: "Soil Testing for Residential Construction",
      description:
        "Laboratory soil testing and interpretation for foundation suitability.",
    },
  ]

  return (
    <section className="relative overflow-hidden rounded-2xl py-10 space-y-12">

      {/* Background Video */}
      <SectionBackground src="/videos/bv.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8 space-y-12">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Projects
          </h2>
          <div className="mt-2 h-[2px] w-24 bg-accent/70 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface/70 backdrop-blur-sm p-6 rounded-xl border border-white/10
                         shadow-lg shadow-black/30
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <h3 className="font-medium text-white/90 mb-2">
                {project.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-white/50 text-sm italic">
          Soon more projects and reports of every project will be added in this section.
        </p>

      </div>

    </section>
  )
}
