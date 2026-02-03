export default function SectionBackground({ src }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bg/80" />
    </div>
  )
}
