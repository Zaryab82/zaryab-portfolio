const navItems = [
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "specialization", label: "Specialization" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "courses", label: "Courses" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
]

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        
        {/* Name */}
        <span className="font-semibold tracking-wide shrink-0">
          Zaryab Ali
        </span>

        {/* Navigation */}
        <ul
          className="
            flex gap-4 text-sm
            overflow-x-auto
            whitespace-nowrap
            scrollbar-hide
            flex-1
          "
        >
          {navItems.map(item => (
            <li
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                cursor-pointer transition
                px-3 py-1 rounded-full
                shrink-0
                ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {item.label}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}
