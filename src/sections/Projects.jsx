import SectionBackground from "../components/SectionBackground"

export default function Projects() {

  const projects = [
    {
      title: "Mode Choice Modelling of Karachi Circular Railway (Report will be uploaded in June-2026)",
      organization: "Final Year Design Project – NED University",
      description:
        "Demand modelling study for the proposed Karachi Circular Railway using stated preference survey data. A Multinomial Logit model developed in Python and SPSS evaluates how travel time, travel cost, and comfort influence commuter mode choice.",
      report: null,
      link: null
    },

    {
      title: "Level of Service Analysis – Karsaz Road, Karachi",
      organization: "Traffic Engineering Project",
      description:
        "Traffic flow analysis using Highway Capacity Manual methodology. Field traffic counts used to evaluate density, delay, and level of service conditions and propose operational improvements.",
      report: "/reports/los.pdf",
      link: null
    },

    {
      title: "Rome – Florence Motorway Design",
      organization: "Self Learning Transportation Project",
      description:
        "Route optimization using least cost path analysis in QGIS followed by geometric highway design development in Civil 3D including alignments, profiles, and cross sections.",
      report: "/reports/rtf.pdf",
      link: null
    },

    {
      title: "Traffic Vehicle Detection and Classification using YOLOv8, OpenCV and Python",
      organization: "Self Learning Project",
      description:
        "Developed a traffic video analysis system using Python, YOLOv8, and OpenCV to detect and count vehicles. The model identifies cars, bikes, rickshaws, LTVs, and HTVs and counts each vehicle when it crosses a virtual detection line to prevent double counting. The system processes traffic videos and provides automated vehicle counts with about 95 percent detection accuracy. Designed as a learning project to apply computer vision techniques in traffic data collection and transportation analysis.",
      report: null,
      link: "https://www.linkedin.com/posts/m-zaryab-ali_selflearning-firstproject-ai-activity-7391119485623058432-OznS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4trBgBAXD1_Nb3Gruz7tWV_RmPD-uhzIU"
    },

    {
      title: "Highway Alignment Design using QGIS, Global Mapper and Google Earth Engine",
      organization: "Self Learning Project",
      description:
        "Designed a highway alignment between Taif City and a proposed XYZ residential area using GIS based spatial analysis. The project used Google Earth Engine for study area extraction, Global Mapper for DEM and terrain data, and QGIS for slope analysis, contour generation, and least cost path modelling using r.walk and r.drain tools. The alignment was optimized to reduce construction cost, minimize cut and fill volumes, follow natural terrain slope, and connect with existing road infrastructure where possible. This project applied GIS and remote sensing techniques for transportation planning and route optimization.",
      report: null,
      link: "https://www.linkedin.com/posts/m-zaryab-ali_highway-alignment-taif-to-xyz-activity-7307063852267937795-Ry-7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4trBgBAXD1_Nb3Gruz7tWV_RmPD-uhzIU"
    },
    {
      title: "Town Map of Karachi using QGIS",
      organization: "Self Learning Project",
      description:
        "Created a basic GIS map showing the administrative towns of Karachi using QGIS. OpenStreetMap data was used to obtain town boundaries due to limited availability of official spatial datasets. Data was collected and processed using HCMGIS, OSMInfo, and OSMDownloader plugins.",
      report: null,
      link: "https://www.linkedin.com/posts/m-zaryab-ali_towns-in-karachi-activity-7306387244620083200-CNSL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4trBgBAXD1_Nb3Gruz7tWV_RmPD-uhzIU"
    },

    {
      title: "Quantity and Cost Estimation of 500 sq.yd G+1 Residential Building (Civil Works only)",
      organization: "Complex Engineering Problem, Quantity Surveying and Cost Estimation",
      description:
        "This report presents a detailed quantity and cost estimation for the civil works of a 500 sq.yd G+1 residential building. The study includes quantity take-off for all major construction items, rate analysis based on market prices, and a comprehensive cost estimate for the entire project. The objective is to provide a realistic budget forecast for planning and execution of residential construction projects.",
      report: "/reports/qce.pdf",
      excel: "/reports/qce1.xlsx",
      link: null
    },

    {
      title: "Transmission Tower Structural Model",
      organization: "Complex Engineering Problem, Structure Analysis-I",
      description:
        "Three foot wooden scale model of a 160 foot transmission tower developed to study structural behavior and load distribution. The project demonstrates structural modelling principles and engineering design accuracy.",
      report: "/reports/t.pdf",
      link: null
    },

    {
      title: "Orangi Nala Drainage Redesign",
      organization: "Complex Engineering Project, Fluid Mechanics-I",
      description:
        "Hydraulic evaluation of an existing drainage channel and redesign of the section to improve discharge capacity and flood safety based on fluid mechanics principles.",
      report: "/reports/on.jfif",
      link: null
    },

    {
      title: "Rectangular Combined Footing Design App",
      organization: "Complex Engineering Problem, Reinforced Concrete Design-II",
      description:
        "Python based web application that automates design of rectangular combined footings according to ACI 318-19. Built with Streamlit, NumPy, Matplotlib, and IndeterminateBeam for structural analysis and visualization. The system performs soil pressure analysis, shear checks, flexural reinforcement design, and generates automated PDF design reports.",
      report: "/reports/rcd2.pdf",
      link: "https://rectangularcombinefootingdesign.streamlit.app/"
    },

    {
      title: "Structural Analysis of NED Civil N-Block",
      organization: "Structural Engineering Project",
      description:
        "Building structural model created in ETABS including load assignment, load combinations, and structural performance evaluation.",
      report: "/reports/nblock.pdf",
      link: null
    },

    {
      title: "G+1 House Architectural and Structural Design",
      organization: "Complex Engineering Problem, Engineering Drawing-II",
      description:
        "Prepared complete architectural and structural drawings for a 200 square yard residential house. The work included floor plans, elevations, sections, and structural drawings for foundations, columns, beams, slabs, and reinforcement detailing. All drawings followed standard engineering practice and were developed using CAD software to ensure clear construction documentation.",
      report: "/reports/dr.pdf",
      link: null
    },

    {
      title: "Foundation Layout for 1000 sq. yd. Bungalow",
      organization: "Surveying and Construction Project",
      description:
        "Survey based field layout of residential foundation including alignment control, reference points, and site marking for construction accuracy.",
      report: null,
      link: null
    }
  ]


  return (
    <section className="relative overflow-hidden rounded-2xl py-10 space-y-10">

      <SectionBackground src="/videos/bv.mp4" />

      <div className="relative z-10 px-8 space-y-10">

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
              className="bg-surface/70 backdrop-blur-sm p-5 rounded-xl border border-white/10
                         shadow-lg shadow-black/30
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >

              <h3 className="font-medium text-white/90 mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-white/60 mb-3">
                {project.organization}
              </p>

              <p className="text-sm text-white/80 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex gap-4 text-sm">

                {project.report && (
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View Project Report
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View Link
                  </a>
                )}

                {project.excel && (
                  <a
                    href={project.excel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View Excel Report
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>

        <p className="text-white/50 text-sm italic">
          Additional engineering projects and research work will be added here.
        </p>

      </div>
    </section>
  )
}