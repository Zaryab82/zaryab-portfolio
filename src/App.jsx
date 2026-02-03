import { useState, useEffect, useRef } from "react"
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

  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return

      const currentIndex = sectionOrder.indexOf(activeSection)
      if (currentIndex === -1) return

      if (e.key === "ArrowRight") {
        const nextIndex = Math.min(
          currentIndex + 1,
          sectionOrder.length - 1
        )
        setActiveSection(sectionOrder[nextIndex])
      }

      if (e.key === "ArrowLeft") {
        const prevIndex = Math.max(currentIndex - 1, 0)
        setActiveSection(sectionOrder[prevIndex])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  function handleTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    // Ignore vertical scrolling
    if (Math.abs(dy) > Math.abs(dx)) return

    const currentIndex = sectionOrder.indexOf(activeSection)
    if (currentIndex === -1) return

    // Swipe threshold
    if (dx < -60 && currentIndex < sectionOrder.length - 1) {
      setActiveSection(sectionOrder[currentIndex + 1])
    }

    if (dx > 60 && currentIndex > 0) {
      setActiveSection(sectionOrder[currentIndex - 1])
    }
  }

  return (
    <div
      className="min-h-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <SectionContainer activeSection={activeSection} />
    </div>
  )
}
