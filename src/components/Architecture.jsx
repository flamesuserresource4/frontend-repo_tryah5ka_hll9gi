function Architecture() {
  return (
    <section id="architecture" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-rose-200">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
            alt="Japanese architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-rose-950">Timber, stone, and silence</h3>
          <p className="mt-3 text-rose-900/80 leading-relaxed">
            Clean lines meet natural textures. Inspired by machiya townhouses and the rhythm of engawa verandas — designed for stillness and flow.
          </p>
          <ul className="mt-6 space-y-3 text-rose-900/80">
            <li>• Hinoki and cedar tones</li>
            <li>• Paper-diffused daylight</li>
            <li>• Garden frames and courtyards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
