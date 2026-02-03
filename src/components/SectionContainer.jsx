import { AnimatePresence, motion } from "framer-motion"

// Import ALL your sections
import Summary from "../sections/Summary"
import Education from "../sections/Education"
import Specialization from "../sections/Specialization"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Experience from "../sections/Experience"
import Courses from "../sections/Courses"
import Languages from "../sections/Languages"
import Contact from "../sections/Contact"

// Map all sections
const sections = {
  summary: <Summary />,
  education: <Education />,
  specialization: <Specialization />,
  skills: <Skills />,
  projects: <Projects />,
  experience: <Experience />,
  courses: <Courses />,
  languages: <Languages />,
  contact: <Contact />
}

export default function SectionContainer({ activeSection }) {
  return (
    <main className="pt-24 max-w-7xl mx-auto px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {sections[activeSection]}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}