import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
      {/* Background gradient inspired by wabi-sabi pinks */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-rose-100 to-rose-50" />

      {/* Soft koi-inspired radial highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-12 w-[28rem] h-[28rem] bg-red-300/30 rounded-full blur-3xl" />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex flex-col justify-center">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.3em] uppercase text-rose-700/80">Kyoto inspired</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight text-rose-950">
              Serenity in Bloom
            </h1>
            <p className="mt-4 text-rose-900/80 text-lg">
              An elegant homage to Japanese minimalism – petals, wood, and still water. Crafted for calm, curated for chic.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#experience" className="px-6 py-3 rounded-full bg-rose-600 text-rose-50 hover:bg-rose-700 transition-colors shadow-sm shadow-rose-600/30">Begin Tour</a>
              <a href="#gallery" className="px-6 py-3 rounded-full border border-rose-300 text-rose-800 hover:bg-rose-100 transition-colors">View Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
