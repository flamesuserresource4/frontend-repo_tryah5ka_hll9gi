function Feature({ title, body }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-200 shadow-sm hover:shadow-rose-200/60 transition-shadow">
      <h3 className="text-xl font-semibold text-rose-950">{title}</h3>
      <p className="mt-2 text-rose-900/80 leading-relaxed">{body}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-950">An elegant, chic experience</h2>
          <p className="mt-3 text-rose-900/80">Simplicity, space, and soft light — a contemporary take on traditional Japanese sensibilities.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Feature title="Sakura Palette" body="Pale pinks and warm neutrals inspired by cherry blossoms in full bloom." />
          <Feature title="Shoji Light" body="Translucent layers and soft shadows echoing paper sliding doors." />
          <Feature title="Kintsugi Detail" body="Subtle gold accents that celebrate refined imperfections." />
        </div>
      </div>
    </section>
  )
}

export default Features
