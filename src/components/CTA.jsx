function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-rose-100/70 backdrop-blur-sm border border-rose-200 p-10 text-center">
          <h3 className="text-3xl font-semibold text-rose-950">Reserve a serene moment</h3>
          <p className="mt-2 text-rose-900/80 max-w-2xl mx-auto">Private viewings, tea ceremonies, and architecture tours — crafted to your pace.</p>
          <form className="mt-8 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <input type="text" placeholder="Your name" className="px-4 py-3 rounded-xl border border-rose-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-rose-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            <button className="px-6 py-3 rounded-xl bg-rose-600 text-rose-50 hover:bg-rose-700 transition-colors">Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
