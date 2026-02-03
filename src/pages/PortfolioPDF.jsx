<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Muhammad Zaryab Ali – Portfolio</title>
<style>
  :root {
    --primary-color: #000;
    --bg-color: #f2f2f2;
    --slide-bg: #fff;
    --text-muted: #444;
  }

  body {
    margin: 0;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg-color);
    color: var(--primary-color);
    line-height: 1.4;
  }

  .toolbar {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .download-btn {
    background: var(--primary-color);
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  .slide {
    width: 95%;
    max-width: 1100px;
    min-height: 675px; /* 16:9 Aspect Ratio */
    margin: 40px auto;
    background: var(--slide-bg);
    padding: 50px;
    box-sizing: border-box;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h1 { margin: 0 0 10px 0; font-size: 2.5rem; }
  h2 {
    margin: 20px 0 12px 0;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 5px;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  h3 { margin: 15px 0 5px 0; font-size: 1.1rem; }
  p { margin: 5px 0 10px 0; }
  ul { margin: 5px 0 10px 20px; padding: 0; }
  li { margin-bottom: 3px; font-size: 0.9rem; }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  .muted { font-size: 0.9rem; color: var(--text-muted); }
  .highlight { font-weight: bold; color: #000; }

  @media print {
    body { background: white; }
    .toolbar { display: none; }
    .slide {
      page-break-after: always;
      box-shadow: none;
      margin: 0;
      width: 100%;
      height: 100vh;
      padding: 0.5in;
    }
  }
</style>
</head>
<body>

<div class="toolbar">
  <button class="download-btn" onclick="window.print()">Download PDF / Print</button>
</div>

<div class="slide">
  <h1>Muhammad Zaryab Ali</h1>
  <p class="muted">Civil Engineer | Transportation & Infrastructure | Data Analyst</p>
  <h2>Summary</h2>
  <p>
    Civil Engineering undergraduate at NED University with a strong focus on
    transportation engineering, infrastructure planning, and data-driven
    mobility solutions. Ranked 8th in department with a CGPA of 3.77.
  </p>
  <h2>Experience</h2>
  <p><strong>NESPAK:</strong> Engineering Intern – Transportation Design (June 2025 – July 2025)</p>
  <ul>
    <li>Prepared road alignment layouts and cross-sections; reviewed highway design standards.</li>
  </ul>
  <p><strong>ZKB (Yellow Line BRT):</strong> Engineering Intern – Infrastructure (Dec 2024 – Jan 2025)</p>
  <ul>
    <li>Bridge foundations, soil testing interpretation, and field survey coordination.</li>
  </ul>
</div>

<div class="slide">
  <h2>Education: University</h2>
  <h3>Bachelor of Engineering (Civil Engineering)</h3>
  <p class="muted">
    NED University of Engineering & Technology, Karachi, Pakistan<br>
    2022 – 2026 | <span class="highlight">CGPA: 3.77</span> | <span class="highlight">Ranked 8th in Department</span>
  </p>
  
  <h3>Core Courses Studied</h3>
  <div class="grid-2">
    <div>
      <p><strong>Transport & Management</strong></p>
      <ul>
        <li>Transportation Engineering – I & II</li>
        <li>Engineering Surveying – I & II</li>
        <li>Construction Project Management (Essentials & Modern)</li>
        <li>Quantity and Cost Estimation</li>
        <li>Architecture and Town Planning</li>
      </ul>
      <p><strong>Mathematics & Skills</strong></p>
      <ul>
        <li>Calculus, Linear Algebra, ODE</li>
        <li>Numerical Analysis, Probability & Statistics</li>
        <li>German Language – I & II</li>
        <li>Communication, Ethics, Community Service</li>
      </ul>
    </div>
    <div>
      <p><strong>Structures & Geotechnics</strong></p>
      <ul>
        <li>Structural Analysis – I & II</li>
        <li>Reinforced Concrete Design – I & II</li>
        <li>Design of Steel Structures</li>
        <li>Soil Mechanics – I & II</li>
        <li>Mechanics of Solids – I & II</li>
        <li>Geosynthetics and their Application</li>
      </ul>
      <p><strong>Fluid & Environmental</strong></p>
      <ul>
        <li>Environmental Engineering – I & II</li>
        <li>Hydraulics and Water Resources Engineering</li>
        <li>Fluid Mechanics – I & II</li>
      </ul>
    </div>
  </div>
</div>

<div class="slide">
  <h2>Education: Pre-University</h2>
  <p><strong>Intermediate (Pre-Engineering):</strong> Nabi Bagh ZM Govt Science College<br>
  <span class="muted">2020 – 2022 | Grade: A+ | College Topper</span></p>
  
  <p><strong>Matriculation (Science):</strong> Aisha Bawany Academy<br>
  <span class="muted">Completed 2020 | Grade: 1st Division</span></p>

  <h2>Key Projects</h2>
  <div class="grid-2">
    <div>
      <h3>Level of Service Analysis</h3>
      <p class="muted">Karsaz Road Traffic LOS analysis and improvement recommendations.</p>
    </div>
    <div>
      <h3>Rome–Florence Motorway Design</h3>
      <p class="muted">GIS route optimization and detailed highway design.</p>
    </div>
  </div>
  <div class="grid-2">
    <div>
      <h3>Orangi Nala Redesign</h3>
      <p class="muted">Hydraulic redesign using fluid mechanics principles.</p>
    </div>
  </div>
</div>

<div class="slide">
  <h2>Certifications: Transport & Infrastructure</h2>
  <div class="grid-2">
    <div>
      <h3>Sustainable Cities (Johns Hopkins)</h3>
      <ul>
        <li>Sustainable Regional Planning & Transport</li>
        <li>Sustainable Neighborhoods & Networks</li>
        <li>Green Construction & Streetscapes</li>
      </ul>
      <h3>Infrastructure (L&T EduTech)</h3>
      <ul>
        <li>Construction Practices in Metro Rails</li>
        <li>Airport Infrastructure & Construction</li>
        <li>Highway Geometry & Pavement Design</li>
      </ul>
    </div>
    <div>
      <h3>Highway & Pavement (L&T EduTech)</h3>
      <ul>
        <li>Geometric and Traffic Aspects</li>
        <li>Pavement Materials & Design (IRC/MoRTH)</li>
        <li>Pavement Construction Practices</li>
      </ul>
      <h3>Specialized Urban Systems</h3>
      <ul>
        <li><strong>Smart Cities:</strong> Urban Infra Management (EPFL)</li>
        <li><strong>Bitumen:</strong> Roads & Applications (Ponts ParisTech)</li>
        <li><strong>Traffic:</strong> Impact Assessment Study (UET Taxila)</li>
      </ul>
    </div>
  </div>
</div>

<div class="slide">
  <h2>Certifications: Management & GIS</h2>
  <div class="grid-2">
    <div>
      <h3>Project Management (CU Boulder)</h3>
      <ul>
        <li>Foundations, Initiation, Planning, Execution</li>
        <li>Agile Project Management</li>
      </ul>
      <h3>Oracle Primavera P6 (Packt/ApexEdge)</h3>
      <ul>
        <li>P6 PPM Professional (6 Course Series)</li>
        <li>Advanced Scheduling & Resource Management</li>
        <li>Primavera P6 Workshop</li>
      </ul>
      <h3>Operations Research (NTU)</h3>
      <ul>
        <li>Models, Applications, and Algorithms</li>
        <li>OR Theory & Capstone (In Progress)</li>
      </ul>
    </div>
    <div>
      <h3>GIS & Remote Sensing (UofT/L&T/Udemy)</h3>
      <ul>
        <li>GIS, Mapping, and Spatial Analysis Specialization</li>
        <li>Geospatial Technology for Construction</li>
        <li>QGIS Expert: Professional Maps</li>
        <li>Remote Sensing & Data Import</li>
      </ul>
      <h3>HSE & Safety</h3>
      <ul>
        <li>HSE Engineering (Khalifa University)</li>
        <li>OSHA Safety Standards & Compliance</li>
        <li>Environmental Science (Dartmouth College)</li>
      </ul>
    </div>
  </div>
</div>

<div class="slide">
  <h2>Certifications: Software & Technology</h2>
  <div class="grid-2">
    <div>
      <h3>Design & BIM</h3>
      <ul>
        <li><strong>AutoDesk Civil 3D:</strong> Roads & Highways Design</li>
        <li><strong>ETABS:</strong> Structural Modeling Workshop</li>
        <li><strong>Autodesk Revit:</strong> BIM Modeling & Coordination</li>
        <li><strong>AutoCAD:</strong> Drafting & Detailing Workshop</li>
      </ul>
      <h3>Data & Programming</h3>
      <ul>
        <li><strong>Python Programming:</strong> Meta Professional Certificate</li>
        <li><strong>Machine Learning:</strong> Stanford University</li>
        <li><strong>Computer Vision:</strong> Microsoft Azure</li>
      </ul>
    </div>
    <div>
      <h3>Water & Research</h3>
      <ul>
        <li><strong>Water Resources:</strong> Univ. of Geneva / Polimi</li>
        <li><strong>Research:</strong> How to write a research paper (UOF)</li>
      </ul>
      <h2>Languages</h2>
      <p class="muted">Urdu (Native), English (Professional), Punjabi, Sindhi, German (Elementary)</p>
      
      <h2>Contact</h2>
      <p>alizaryab938@gmail.com | linkedin.com/in/m-zaryab-ali</p>
    </div>
  </div>
</div>

</body>
</html>