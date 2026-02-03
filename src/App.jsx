import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import SectionContainer from "./components/SectionContainer"

const sectionOrder = [
  "summary",
  "education",
  "specialization",
  "skills",
  "projects",
  "experience",
  "courses",
  "languages",
  "contact",
]

export default function App() {
  const [activeSection, setActiveSection] = useState("summary")

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return

      const currentIndex = sectionOrder.indexOf(activeSection)
      if (currentIndex === -1) return

      if (e.key === "ArrowRight") {
        // Next section
        const nextIndex = Math.min(currentIndex + 1, sectionOrder.length - 1)
        setActiveSection(sectionOrder[nextIndex])
      }

      if (e.key === "ArrowLeft") {
        // Previous section
        const prevIndex = Math.max(currentIndex - 1, 0)
        setActiveSection(sectionOrder[prevIndex])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection])

  return (
    <div className="min-h-screen">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <SectionContainer activeSection={activeSection} />
    </div>
  )
}
