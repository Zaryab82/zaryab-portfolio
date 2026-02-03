import SectionBackground from "../components/SectionBackground"
export default function Courses() {
  const certifications = [
    {
      title: "𝑺𝒖𝒔𝒕𝒂𝒊𝒏𝒂𝒃𝒍𝒆 𝑪𝒊𝒕𝒊𝒆𝒔",
      provider: "𝑱𝒐𝒉𝒏𝒔 𝑯𝒐𝒑𝒌𝒊𝒏𝒔 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚",
      description:
        "Specialization focused on sustainable urban development, smart mobility, and planning of future cities with emphasis on transportation systems.",
      files: {
        main: "/assets/sustainable_cities.pdf",
        sub: [
          {
            name: "Course 1 — Sustainable Regional Principles, Planning and Transportation",
            path: "/assets/sustainable_regional_principles.pdf",
          },
          {
            name: "Course 2 — Sustainable Neighborhoods",
            path: "/assets/sustainable_neighborhoods.pdf",
          },
          {
            name: "Course 3 — Sustainable Transportation Networks and Streetscapes",
            path: "/assets/sustainable_transportation.pdf",
          },
          {
            name: "Course 4 — Transportation, Sustainable Buildings, Green Construction",
            path: "/assets/transportation_sustainable.pdf",
          },
        ],
      },
    },
    {
      title: "𝙎𝙢𝙖𝙧𝙩 𝘾𝙞𝙩𝙞𝙚𝙨 - 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩 𝙤𝙛 𝙎𝙢𝙖𝙧𝙩 𝙐𝙧𝙗𝙖𝙣 𝙄𝙣𝙛𝙧𝙖𝙨𝙩𝙧𝙪𝙘𝙩𝙪𝙧𝙚𝙨",
      provider: "𝙀𝙘𝙤𝙡𝙚 𝙋𝙤𝙡𝙮𝙩𝙚𝙘𝙝𝙣𝙞𝙦𝙪𝙚 𝙁𝙚𝙙𝙚𝙧𝙖𝙡𝙚 𝙙𝙚 𝙇𝙖𝙪𝙨𝙖𝙣𝙣𝙚 ( EPFL )",
      description:
        "Studied smart mobility, energy, water, and digital infrastructure systems. Focused on data-driven planning, system integration, and governance of urban infrastructures in smart cities..",
      files: {
      main: null,
      sub: [
          {
            name: "Smart Cities – Management of Smart Urban Infrastructures",
            path: "/assets/sc.pdf",
          },
        ],  
      },
    },

    {
      title: "𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕",
      provider: "𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝒐𝒇 𝑪𝒐𝒍𝒐𝒓𝒂𝒅𝒐 𝑩𝒐𝒖𝒍𝒅𝒆𝒓",
      description:
        "Developed core project management skills including project planning, scheduling, cost control, risk assessment, stakeholder coordination, and quality management. Focused on applying management tools and techniques to engineering and infrastructure projects to meet scope, time, cost, and performance objectives.",
      files: {
        main: "/assets/pm.pdf",
        sub: [
          {
            name: "Course 1 — Project Management: Foundations and Initiation",
            path: "/assets/pm1.pdf",
          },
          {
            name: "Course 2 — Project Planning and Execution",
            path: "/assets/pm2.pdf",
          },
          {
            name: "Course 3 — Agile Project Management",
            path: "/assets/pm3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑷𝒍𝒂𝒏𝒏𝒊𝒏𝒈 & 𝑪𝒐𝒏𝒕𝒓𝒐𝒍 𝒘𝒊𝒕𝒉 𝑶𝒓𝒂𝒄𝒍𝒆 𝑷𝒓𝒊𝒎𝒂𝒗𝒆𝒓𝒂 𝑷𝑷𝑴 𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍",
      provider: "𝑷𝒂𝒄𝒌𝒕",
      description:
        "Developed practical skills in project planning and control using Oracle Primavera PPM, including work breakdown structures, activity scheduling, resource allocation, cost tracking, baseline management, and progress monitoring. Applied scheduling and control techniques to engineering and construction projects to manage time, cost, and resources effectively.",
      files: {
        main: "/assets/p.pdf",
        sub: [
          {
            name: "Course 1 — Oracle Primavera P6 – Project Setup and Basic Management",
            path: "/assets/p1.pdf",
          },
          {
            name: "Course 2 — Advanced Scheduling and Project Optimization in Primavera P6",
            path: "/assets/p2.pdf",
          },
          {
            name: "Course 3 — Advanced Resource and Enterprise Management in Primavera P6",
            path: "/assets/p3.pdf",
          },
          {
            name: "Course 4 — Formatting, Printing and Reporting with Primavera P6 PPM",
            path: "/assets/p4.pdf",
          },
          {
            name: "Course 5 — Resource Management in Oracle Primavera P6 PPM Professional",
            path: "/assets/p5.pdf",
          },
          {
            name: "Course 6 — Baselines and Updating a Project with Primavera P6 PPM",
            path: "/assets/p6.pdf",
          },
        ],
      },
    },
    
    
    {
      title: "𝑷𝒓𝒊𝒎𝒂𝒗𝒆𝒓𝒂 𝒑6 𝑾𝒐𝒓𝒌𝒔𝒉𝒐𝒑",
      provider: "𝑨𝒑𝒆𝒙𝑬𝒅𝒈𝒆: 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆",
      description:
        "Gained hands-on exposure to Primavera P6 project scheduling, including activity creation, logic linking, critical path identification, baseline setup, progress updating, and basic delay analysis. Focused on practical scheduling workflows used in construction and infrastructure projects to track time, resources, and project performance.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑷𝒓𝒊𝒎𝒂𝒗𝒆𝒓𝒂 𝒑6",
            path: "/assets/pri.jfif",
          },
        ],  
      },
    },

    {
      title: "𝑰𝒏𝒇𝒓𝒂𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒆 𝒇𝒐𝒓 𝑻𝒓𝒂𝒏𝒔𝒑𝒐𝒓𝒕𝒂𝒕𝒊𝒐𝒏 𝑺𝒚𝒔𝒕𝒆𝒎𝒔",
      provider: "𝑳&𝑻 𝑬𝒅𝒖𝑻𝒆𝒄𝒉",
      description:
        "Developed solid understanding of transportation infrastructure systems, including roads, highways, railways, bridges, and urban transit facilities. Focused on planning, design fundamentals, construction methods, maintenance strategies, and system integration, with emphasis on efficiency, safety, and long-term performance of transport networks.",
      files: {
        main: "/assets/ts.pdf",
        sub: [
          {
            name: "Course 1 — Construction Practices in Metro Rails",
            path: "/assets/ts1.pdf",
          },
          {
            name: "Course 2 — Airport Infrastructure",
            path: "/assets/ts2.pdf",
          },
          {
            name: "Course 3 — Highway Geometry and Pavement Design",
            path: "/assets/ts3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑯𝒊𝒈𝒉𝒘𝒂𝒚 𝑷𝒍𝒂𝒏𝒏𝒊𝒏𝒈, 𝑷𝒂𝒗𝒆𝒎𝒆𝒏𝒕 𝑫𝒆𝒔𝒊𝒈𝒏 𝒂𝒏𝒅 𝑪𝒐𝒏𝒔𝒕𝒓𝒖𝒄𝒕𝒊𝒐𝒏",
      provider: "𝑳&𝑻 𝑬𝒅𝒖𝑻𝒆𝒄𝒉",
      description:
        "Developed comprehensive understanding of highway systems covering route planning, geometric design principles, traffic considerations, pavement materials, structural design, and construction methods. Focused on design standards, quality control, maintenance strategies, and practical aspects of delivering safe, durable, and efficient road infrastructure for urban and intercity transport.",
      files: {
        main: "/assets/hp.pdf",
        sub: [
          {
            name: "Course 1 — Geometric and Traffic Aspects of Highway",
            path: "/assets/hp1.pdf",
          },
          {
            name: "Course 2 — Pavement Materials and Design (IRC and MoRTH)",
            path: "/assets/hp2.pdf",
          },
          {
            name: "Course 3 — Pavement Construction Practices (IRC and MoRTH)",
            path: "/assets/hp3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑨𝒊𝒓𝒑𝒐𝒓𝒕 𝑪𝒐𝒏𝒔𝒕𝒓𝒖𝒄𝒕𝒊𝒐𝒏",
      provider: "𝑳&𝑻 𝑬𝒅𝒖𝑻𝒆𝒄𝒉",
      description:
        "Developed understanding of airport planning and construction, including runway and taxiway design, pavement systems, drainage, lighting, terminal facilities, and safety requirements. Focused on construction methods, operational constraints, and compliance with aviation standards to support safe and efficient airport infrastructure.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑨𝒊𝒓𝒑𝒐𝒓𝒕 𝑪𝒐𝒏𝒔𝒕𝒓𝒖𝒄𝒕𝒊𝒐𝒏",
            path: "/assets/a1.pdf",
          },
        ],  
      },
    },
    {
      title: "𝑴𝒂𝒔𝒕𝒆𝒓𝒊𝒏𝒈 𝒃𝒊𝒕𝒖𝒎𝒆𝒏 𝒇𝒐𝒓 𝒃𝒆𝒕𝒕𝒆𝒓 𝒓𝒐𝒂𝒅𝒔 𝒂𝒏𝒅 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔",
      provider: "𝑬́𝒄𝒐𝒍𝒆 𝑵𝒂𝒕𝒊𝒐𝒏𝒂𝒍𝒆 𝒅𝒆𝒔 𝑷𝒐𝒏𝒕𝒔 𝒆𝒕 𝑪𝒉𝒂𝒖𝒔𝒔𝒆́𝒆𝒔",
      description:
        "Gained strong understanding of bitumen behavior and performance in road engineering, including physical and rheological properties, aging, temperature susceptibility, and performance-based testing. Focused on improving pavement durability, selecting suitable binders for different traffic and climate conditions, and exploring modern and sustainable applications of bitumen in highway construction and maintenance..",
      files: {
      main: null,
      sub: [
          {
            name: "Mastering bitumen for better roads and innovative applications",
            path: "/assets/b1.pdf",
          },
        ],  
      },
    },
    {
      title: "𝑮𝑰𝑺, 𝑴𝒂𝒑𝒑𝒊𝒏𝒈, 𝒂𝒏𝒅 𝑺𝒑𝒂𝒕𝒊𝒂𝒍 𝑨𝒏𝒂𝒍𝒚𝒔𝒊𝒔",
      provider: "𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝒐𝒇 𝑻𝒐𝒓𝒐𝒏𝒕𝒐",
      description:
        "Developed practical skills in GIS and spatial analysis, including map creation, spatial data management, coordinate systems, and basic geoprocessing. Applied spatial analysis techniques to real-world planning and engineering problems such as land use analysis, transportation networks, and environmental assessment.",
      files: {
        main: "/assets/gs.pdf",
        sub: [
          {
            name: "Course 1 — Introduction to GIS Mapping",
            path: "/assets/gs1.pdf",
          },
          {
            name: "Course 2 — GIS Data Acquisition and Map Design",
            path: "/assets/gs2.pdf",
          },
          {
            name: "Course 3 — Spatial Analysis and Satellite Imagery in a GIS",
            path: "/assets/gs3.pdf",
          },
          {
            name: "Course 4 — GIS, Mapping, and Spatial Analysis Capstone",
            path: "/assets/gs4.pdf",
          },
        ],
      },
    },
    {
      title: "𝑸𝑮𝑰𝑺 𝒂𝒏𝒅 𝑹𝒆𝒎𝒐𝒕𝒆 𝑺𝒆𝒏𝒔𝒊𝒏𝒈",
      provider: "𝑼𝒅𝒆𝒎𝒚 & 𝑨𝒍𝒊𝒔𝒐𝒏",
      description:
        "Built hands-on skills in QGIS and remote sensing, including spatial data visualization, raster and vector analysis, map layout design, and interpretation of satellite imagery. Applied techniques to land use mapping, transportation corridors, environmental monitoring, and basic spatial modeling for planning and engineering tasks.",
      files: {
        main: null ,
        sub: [
          {
            name: "𝑸𝑮𝑰𝑺 𝑬𝒙𝒑𝒆𝒓𝒕: 𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝑴𝒂𝒑𝒔 𝒇𝒓𝒐𝒎 𝒁𝒆𝒓𝒐",
            path: "/assets/rq1.jfif",
          },
          {
            name: "𝑹𝒆𝒎𝒐𝒕𝒆 𝑺𝒆𝒏𝒔𝒊𝒏𝒈, 𝑸𝑮𝑰𝑺 𝒂𝒏𝒅 𝑫𝒂𝒕𝒂 𝑰𝒎𝒑𝒐𝒓𝒕",
            path: "/assets/rq2.jfif",
          },
        ],
      },
    },
    
    {
      title: "𝑮𝒆𝒐𝒔𝒑𝒂𝒕𝒊𝒂𝒍 𝑻𝒆𝒄𝒉𝒏𝒊𝒒𝒖𝒆𝒔 𝒇𝒐𝒓 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒔",
      provider: "𝑳&𝑻 𝑬𝒅𝒖𝑻𝒆𝒄𝒉",
      description:
        "Developed practical understanding of geospatial techniques used in engineering, including spatial data collection, GIS analysis, remote sensing basics, and map interpretation. Applied geospatial tools to site analysis, infrastructure planning, transportation studies, and environmental assessment to support data-based engineering decisions.",
      files: {
        main: "/assets/gt.pdf",
        sub: [
          {
            name: "Course 1 — Geospatial Technology for Construction",
            path: "/assets/gt1.pdf",
          },
          {
            name: "Course 2 — Geospatial Information Technology Essentials",
            path: "/assets/gt2.pdf",
          },
          {
            name: "Course 3 — Mastering Geospatial Analysis with QGIS",
            path: "/assets/gt3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑻𝒓𝒂𝒇𝒇𝒊𝒄 𝑰𝒎𝒑𝒂𝒄𝒕 𝑨𝒔𝒔𝒆𝒔𝒔𝒎𝒆𝒏𝒕 𝑺𝒕𝒖𝒅𝒚",
      provider: "𝑰𝑻𝑬 𝑺𝒕𝒖𝒅𝒆𝒏𝒕𝒔 𝑪𝒉𝒂𝒑𝒕𝒆𝒓, 𝑼𝑬𝑻 𝑻𝒂𝒙𝒊𝒍𝒂",
      description:
        "Developed applied understanding of traffic impact assessment, including trip generation, trip distribution, mode split, and traffic assignment for proposed developments. Focused on capacity analysis, level of service evaluation, mitigation measures, and preparation of technical reports to support planning approvals and traffic management decisions.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑻𝒓𝒂𝒇𝒇𝒊𝒄 𝑰𝒎𝒑𝒂𝒄𝒕 𝑨𝒔𝒔𝒆𝒔𝒔𝒎𝒆𝒏𝒕 𝑺𝒕𝒖𝒅𝒚",
            path: "/assets/tia.jfif",
          },
        ],  
      },
    },
    {
      title: "𝑨𝒖𝒕𝒐𝑫𝒆𝒔𝒌 𝑪𝒊𝒗𝒊𝒍 3𝑫",
      provider: "𝑼𝒅𝒆𝒎𝒚 & 𝑺𝒐𝒖𝒓𝒄𝒆𝑪𝑨𝑫",
      description:
        "Developed practical skills in highway geometric design using AutoDesk Civil 3D, including surface creation, alignments, profiles, corridors, assemblies, and cross-sections. Applied design standards to roads and highways, prepared quantities, and produced construction-ready drawings suitable for transportation engineering projects.",
      files: {
        main: null ,
        sub: [
          {
            name: "𝑨𝒖𝒕𝒐𝑪𝑨𝑫 𝑪𝒊𝒗𝒊𝒍 3𝑫 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒆 𝑪𝒐𝒖𝒓𝒔𝒆 𝑹𝒐𝒂𝒅𝒔 & 𝑯𝒊𝒈𝒉𝒘𝒂𝒚𝒔 𝑫𝒆𝒔𝒊𝒈𝒏",
            path: "/assets/C1.jfif",
          },
          {
            name: "𝑪𝒊𝒗𝒊𝒍 3𝑫 𝑬𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍𝒔",
            path: "/assets/C2.jfif",
          },
        ],
      },
    },
    {
      title: "𝙋𝙧𝙤𝙜𝙧𝙖𝙢𝙢𝙞𝙣𝙜 𝙞𝙣 𝙋𝙮𝙩𝙝𝙤𝙣",
      provider: "𝙈𝙚𝙩𝙖",
      description:
        "Certified in Python programming by Meta, I have built a strong foundation in core programming, data structures, and object-oriented design. This training enables me to write clean, efficient, and reliable software. I now apply these skills directly to my field of transportation and traffic engineering, developing analytical tools and simulations. My focus is on creating practical Python solutions for data-driven traffic analysis and smart mobility planning.",
      files: {
      main: null,
      sub: [
          {
            name: "Programming in Python",
            path: "/assets/python.pdf",
          },
        ],  
      },
    },
    {
      title: "𝑴𝒂𝒄𝒉𝒊𝒏𝒆 𝑳𝒆𝒂𝒓𝒏𝒊𝒏𝒈",
      provider: "𝑺𝒕𝒂𝒏𝒇𝒐𝒓𝒅 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 & 𝑫𝒆𝒆𝒑 𝑳𝒆𝒂𝒓𝒏𝒊𝒏𝒈",
      description:
        "I completed the Machine Learning specialization from Stanford University. I learned how computers can learn from data. I studied different types of machine learning, such as supervised learning and reinforcement learning. The course covered many topics, like making predictions, finding patterns, and building neural networks.",
      files: {
        main: "/assets/ml.pdf",
        sub: [
          {
            name: "Course 1 — Supervised Machine Learning: Regression and Classification",
            path: "/assets/ml1.pdf",
          },
          {
            name: "Course 2 — Advanced Learning Algorithms",
            path: "/assets/ml2.pdf",
          },
          {
            name: "Course 3 — Unsupervised Learning, Recommenders, Reinforcement Learning",
            path: "/assets/ml3.pdf",
          },
        ],
      },
    },
    
    {
      title: "𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑽𝒊𝒔𝒊𝒐𝒏 𝒊𝒏 𝑴𝒊𝒄𝒓𝒐𝒔𝒐𝒇𝒕 𝑨𝒛𝒖𝒓𝒆",
      provider: "𝑴𝒊𝒄𝒓𝒐𝒔𝒐𝒇𝒕",
      description:
        "Learned image classification, object detection, face analysis, and OCR using Microsoft Azure Computer Vision services. Worked with cloud-based APIs to analyze images and extract visual data for real applications.",
      files: {
      main: null,
      sub: [
          {
            name: "Computer Vision in Microsoft Azure",
            path: "/assets/cv.pdf",
          },
        ],  
      },
    },
    {
      title: "𝑶𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔 𝑹𝒆𝒔𝒆𝒂𝒓𝒄𝒉 𝑺𝒑𝒆𝒄𝒊𝒂𝒍𝒊𝒛𝒂𝒕𝒊𝒐𝒏",
      provider: "𝑵𝒂𝒕𝒊𝒐𝒏𝒂𝒍 𝑻𝒂𝒊𝒘𝒂𝒏 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚",
      description:
        "Covered linear programming, integer programming, network models, decision analysis, and optimization techniques. Applied mathematical models to real engineering and management problems using structured, data-driven methods.",
      files: {
      main: null,
      sub: [
          {
            name: "Course 1 — Operations Research (1): Models and Applications",
            path: "/assets/or1.pdf",
          },
          {
            name: "Course 2 — Operations Research (2): Optimization Algorithms",
            path: "/assets/or2.pdf",
          },
          {
            name: "Course 3 — Operations Research (3): Theory",
            path: "/assets/or3.pdf",
          },
          {
            name: "Course 4 — Operations Research (4): Capstone Project",
            path: null,
          },
        ],  
      },
    },
    
    {
      title: "𝑾𝒂𝒕𝒆𝒓 𝑹𝒆𝒔𝒐𝒖𝒓𝒄𝒆𝒔 𝒂𝒏𝒅 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕",
      provider: "𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝒐𝒇 𝑮𝒆𝒏𝒆𝒗𝒂 & 𝑷𝒐𝒍𝒊𝒕𝒆𝒄𝒏𝒊𝒄𝒐 𝒅𝒊 𝑴𝒊𝒍𝒂𝒏𝒐",
      description:
        "IDeveloped understanding of water resources systems, including hydrology fundamentals, surface and groundwater management, water allocation, and integrated water planning. Focused on sustainable use of water resources, demand management, risk assessment related to floods and droughts, and application of management principles to urban and regional water systems.",
      files: {
        main: null,
        sub: [
          {
            name: "Course 1 — Water Resources Management and Policy",
            path: "/assets/wr1.pdf",
          },
          {
            name: "Course 2 — Sustainable Urban Water Systems",
            path: "/assets/wr2.pdf",
          },
          {
            name: "Course 3 — Introduction to Household Water Treatment and Safe Storage",
            path: null,
          },
        ],
      },
    },
    {
      title: "𝑰𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏 𝒕𝒐 𝑬𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕𝒂𝒍 𝑺𝒄𝒊𝒆𝒏𝒄𝒆",
      provider: "𝑫𝒂𝒓𝒕𝒎𝒐𝒖𝒕𝒉 𝑪𝒐𝒍𝒍𝒆𝒈𝒆",
      description:
        "Built foundational understanding of environmental systems, including air, water, soil, and ecosystems, with focus on human impacts, sustainability, pollution control, and resource management. Developed ability to analyze environmental issues using scientific reasoning and apply concepts to engineering and planning decisions.",
      files: {
        main: "/assets/en.pdf",
        sub: [
          {
            name: "Course 1 — Environmental Science",
            path: "/assets/en1.pdf",
          },
          {
            name: "Course 2 — Population, Food, and Soil",
            path: "/assets/en2.pdf",
          },
          {
            name: "Course 3 — Energy and Environment",
            path: "/assets/en3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑯𝒆𝒂𝒍𝒕𝒉, 𝑺𝒂𝒇𝒆𝒕𝒚, 𝒂𝒏𝒅 𝑬𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕𝒂𝒍 (𝑯𝑺𝑬) 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈",
      provider: "𝑲𝒉𝒂𝒍𝒊𝒇𝒂 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚",
      description:
        "Built strong understanding of health, safety, and environmental principles in engineering practice, including hazard identification, risk assessment, accident prevention, environmental protection, and regulatory compliance. Applied HSE concepts to construction and infrastructure projects to improve workplace safety, reduce environmental impacts, and meet professional standards.",
      files: {
        main: "/assets/hs.pdf",
        sub: [
          {
            name: "Course 1 — Introduction to HSE Engineering",
            path: "/assets/hs1.pdf",
          },
          {
            name: "Course 2 — Risk Management and Industrial Safety",
            path: "/assets/hs2.pdf",
          },
          {
            name: "Course 3 — Environmental Protection and Sustainability",
            path: "/assets/hs3.pdf",
          },
        ],
      },
    },
    {
      title: "𝑰𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏 𝒕𝒐 𝑶𝑺𝑯𝑨: 𝑺𝒂𝒇𝒆𝒕𝒚 𝑺𝒕𝒂𝒏𝒅𝒂𝒓𝒅𝒔 𝒂𝒏𝒅 𝑪𝒐𝒎𝒑𝒍𝒊𝒂𝒏𝒄𝒆",
      provider: "𝑪𝒐𝒖𝒓𝒔𝒆𝒓𝒂",
      description:
        "Learned core principles of Occupational Safety and Health Administration standards, hazard identification, risk control, and regulatory compliance. Focused on workplace safety practices relevant to construction and engineering projects.",
      files: {
      main: null,
      sub: [
          {
            name: "Introduction to OSHA: Safety Standards and Compliance",
            path: "/assets/os1.pdf",
          },
        ],  
      },
    },
    
    
    {
      title: "𝑬𝑻𝑨𝑩𝑺",
      provider: "𝑨𝒑𝒆𝒙𝑬𝒅𝒈𝒆: 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆",
      description:
        "Developed practical skills in structural modeling and analysis using ETABS, including creation of building models, assignment of loads, load combinations, and interpretation of analysis results. Focused on analyzing reinforced concrete and steel structures, understanding structural behavior under gravity and lateral loads, and reviewing outputs for safe and efficient building design.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑬𝑻𝑨𝑩𝑺 𝑪𝒐𝒖𝒓𝒔𝒆 ",
            path: "/assets/e1.jfif",
          },
          {
            name: "𝑬𝑻𝑨𝑩𝑺 𝑾𝒐𝒓𝒌𝒔𝒉𝒐𝒑",
            path: "/assets/e2.jfif",
          },
        ],  
      },
    },
    {
      title: "𝑨𝒖𝒕𝒐𝒅𝒆𝒔𝒌 𝑹𝒆𝒗𝒊𝒕",
      provider: "𝑴𝒊𝒄𝒓𝒐𝑪𝑨𝑫𝑫 & 𝑨𝒑𝒆𝒙𝑬𝒅𝒈𝒆: 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆",
      description:
        "Developed practical BIM skills using Autodesk Revit, including 3D modeling of architectural and structural elements, creation of families, views, schedules, and coordinated drawings. Focused on model-based documentation, design coordination, and improving accuracy and efficiency in building and infrastructure projects.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑹𝒆𝒗𝒊𝒕 𝑪𝒐𝒖𝒓𝒔𝒆",
            path: "/assets/re2.jfif",
          },
          {
            name: "𝑹𝒆𝒗𝒊𝒕 𝑾𝒐𝒓𝒌𝒔𝒉𝒐𝒑",
            path: "/assets/re1.jfif",
          },
        ],  
      },
    },
    {
      title: "𝑨𝒖𝒕𝒐𝒅𝒆𝒔𝒌 𝑨𝒖𝒕𝒐𝑪𝑨𝑫",
      provider: "𝑴𝒊𝒄𝒓𝒐𝑪𝑨𝑫𝑫 & 𝑨𝒑𝒆𝒙𝑬𝒅𝒈𝒆: 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝑬𝒙𝒄𝒆𝒍𝒍𝒆𝒏𝒄𝒆",
      description:
        "Developed strong drafting and detailing skills using Autodesk AutoCAD, including creation of 2D drawings, layers, blocks, annotations, and layout management. Applied AutoCAD for engineering drawings, construction details, and technical documentation with focus on accuracy, standards, and efficient drafting workflows.",
      files: {
      main: null,
      sub: [
          {
            name: "𝑨𝒖𝒕𝒐𝑪𝑨𝑫 𝑪𝒐𝒖𝒓𝒔𝒆",
            path: "/assets/ac1.jfif",
          },
          {
            name: "𝑨𝒖𝒕𝒐𝑪𝑨𝑫 𝑾𝒐𝒓𝒌𝒔𝒉𝒐𝒑",
            path: "/assets/ac2.jfif",
          },
        ],  
      },
    },
    {
      title: "𝑯𝒐𝒘 𝒕𝒐 𝒘𝒓𝒊𝒕𝒆 𝒂 𝒓𝒆𝒔𝒆𝒂𝒓𝒄𝒉 𝒑𝒂𝒑𝒆𝒓",
      provider: "𝑻𝒉𝒆 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝒐𝒇 𝑭𝒂𝒊𝒔𝒂𝒍𝒂𝒃𝒂𝒅",
      description:
        "Developed practical skills in academic research writing, including structuring a paper, formulating research questions, conducting literature reviews, using citations correctly, and presenting results clearly. Focused on clarity, logical flow, ethical research practices, and meeting academic publication standards.",
      files: {
      main: null,
      sub: [
          {
            name: "How to write a research paper",
            path: "/assets/r1.pdf",
          },
        ],  
      },
    },
  ]

return (
    <section className="relative overflow-hidden rounded-2xl py-10 space-y-10">

      {/* Background Video */}
      <SectionBackground src="/videos/rt.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8 space-y-10">

        {/* Section Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Courses & Certifications
          </h2>
          <div className="mt-2 h-[2px] w-28 bg-accent/70 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-surface/70 backdrop-blur-sm p-5 rounded-xl border border-white/10
                         shadow-lg shadow-black/30
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <h3 className="font-medium text-white/90 mb-1">
                {cert.title}
              </h3>

              <p className="text-sm text-white/60 mb-3">
                {cert.provider}
              </p>

              <p className="text-sm text-white/80 leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Certificates area */}
              {cert.files ? (
                <div className="space-y-2 text-sm">
                  {/* Main certificate */}
                  {cert.files.main && (
                    <a
                      href={cert.files.main}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline block"
                    >
                      View Specialization Certificate
                    </a>
                  )}

                  {/* Sub certificates */}
                  {cert.files.sub && cert.files.sub.length > 0 && (
                    <div className="mt-3">
                      <p className="text-white/90 text-sm font-semibold underline mb-2">
                        Individual Course Certificates:
                      </p>
                      <ul className="space-y-1">
                        {cert.files.sub.map((subCert, i) => (
                          <li key={i}>
                            {subCert.path ? (
                              <a
                                href={subCert.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent/80 hover:underline text-sm"
                              >
                                {subCert.name}
                              </a>
                            ) : (
                              <span className="text-white/40 italic text-sm">
                                {subCert.name} (In Progress)
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white/40 text-sm italic">
                  Certificates will be added
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-white/50 text-sm italic">
          Additional certifications and professional courses will be added as learning progresses.
        </p>

      </div>
    </section>
  )
}