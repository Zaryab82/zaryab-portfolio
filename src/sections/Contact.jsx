import { FaEnvelope, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa"
import SectionBackground from "../components/SectionBackground"

export default function Contact() {
  return (
    <section className="relative overflow-hidden rounded-2xl py-10">

      {/* Background Video */}
      <SectionBackground src="/videos/intersec.mp4" />

      {/* Content */}
      <div className="relative z-10 px-8">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Contact
          </h2>
          <div className="mt-2 h-[2px] w-20 bg-accent/70 rounded-full" />
        </div>

        <div className="bg-surface/70 backdrop-blur-sm p-8 rounded-xl max-w-2xl border border-white/10 shadow-lg shadow-black/30">

          <div className="space-y-6">
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              My goal is to build a strong career in civil and transportation engineering with a primary focus on project planning, transportation planning, and travel demand modelling. I aim to work on infrastructure projects that improve mobility, safety, and efficiency in urban areas. My interests include project planning and scheduling, cost control, travel demand analysis, mode choice modelling, traffic forecasting, and data-driven planning approaches. I seek to apply analytical and planning tools to support informed decision making in real transportation projects. In the long term, I aim to contribute to large-scale transportation projects and grow into roles involving project planning, transportation planning, and consultancy.
            </p>
          </div>

          {/* SOCIAL MEDIA BUTTONS */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Connect with me:</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:alizaryab938@gmail.com"
                className="flex items-center gap-2 bg-white/10 hover:bg-accent px-4 py-2 rounded-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope /> Email
              </a>

              <a
                href="https://wa.me/923102371324"
                className="flex items-center gap-2 bg-white/10 hover:bg-green-500 px-4 py-2 rounded-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="https://linkedin.com/in/m-zaryab-ali"
                className="flex items-center gap-2 bg-white/10 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* DOWNLOAD PORTFOLIO PDF */}
          <div className="mt-6">
            <a
              href="/portfolio-pdf.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition"
            >
              <FaDownload />
              Download Full Portfolio (PDF)
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
