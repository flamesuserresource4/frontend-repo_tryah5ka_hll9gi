function Gallery() {
  const items = [
    'https://images.unsplash.com/photo-1523417371948-40667b843883?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547314840-8f30d078e738?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578926375605-eaf7559b1453?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542367597-8849ebae422f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558980664-10ed322b1d99?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593529467220-9cf2e909923b?q=80&w=1600&auto=format&fit=crop'
  ];

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-8">
          <h3 className="text-3xl font-semibold text-rose-950">Gallery</h3>
          <p className="mt-3 text-rose-900/80">A quiet curation of blossoms, tea, and timber.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((src, i) => (
            <div key={i} className="group aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-rose-200">
              <img src={src} alt="Japan aesthetic" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
