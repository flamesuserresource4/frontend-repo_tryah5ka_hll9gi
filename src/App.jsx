import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-950">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Gallery />
      <CTA />
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-rose-900/70">
          © {new Date().getFullYear()} Hanabira — A serene, minimalist homage to Japan.
        </div>
      </footer>
    </div>
  )
}

export default App
