import SectionBackground from "../components/SectionBackground"

export default function Skills() {
  const technicalGroups = [
    {
      title: "Transportation & Traffic Engineering",
      items: [
        "Road & Highway Design",
        "Intersection & Traffic Flow Analysis",
        "Level of Service (LOS) Analysis",
        "Urban Transport Planning",
      ],
    },
    {
      title: "GIS & Spatial Analysis",
      items: [
        "QGIS – Spatial Analysis & Land-Use Mapping",
        "Route Optimization & Least-Cost Path",
        "Global Mapper – DEM & Terrain Analysis",
      ],
    },
    {
      title: "Design, BIM & Analysis Tools",
      items: [
        "Civil 3D- – Alignments, Profiles, Intersections, Complete highway design",
        "SPSS – Data Analysis Tool",
        "Excel – Data Cleaning",
        "AutoCAD – Drafting & Detailing",
        "ETABS – Structural Analysis",
        "Revit (Basic)",
      ],
    },
    {
      title: "Data, Simulation & Programming",
      items: [
        "Python – Automation & Analysis with expertise in Pandas, Numpy, Matplotlib and Biogeme",
        "PTV Vissim – Microsimulation of Mid-blocks",
        "SIDRA Intersection – Intersection Analysis",
        "AI and Machine Learning in Transportation (Learning)",
      ],
    },
    {
      title: "Field & Laboratory Work",
      items: [
        "Surveying & Alignment Work",
        "Soil Testing & Interpretation",
        "Bore Log Interpretation",
        "Site Coordination",
      ],
    },
  ]

  const softSkills = [
    "Analytical & Systems Thinking",
    "Research & Technical Writing",
    "Problem Solving",
    "Team Coordination & Leadership",
    "Professional Communication",
  ]

  return (
    <section className="relative overflow-hidden rounded-2xl py-10 space-y-12">

      {/* Background Video */}
      <SectionBackground src="/videos/rhv.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8 space-y-12">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Skills
          </h2>
          <div className="mt-2 h-[2px] w-16 bg-accent/70 rounded-full" />
        </div>

        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white/90">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalGroups.map((group, index) => (
              <div
                key={index}
                className="bg-surface/70 backdrop-blur-sm p-5 rounded-xl border border-white/10
                           shadow-lg shadow-black/30
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <h4 className="font-medium mb-3 text-white/90">
                  {group.title}
                </h4>

                <ul className="space-y-1 text-sm text-white/80">
                  {group.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white/90">
            Soft Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-surface/70 backdrop-blur-sm p-5 rounded-xl border border-white/10
                           shadow-lg shadow-black/30
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <p className="text-white/90 font-medium">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
