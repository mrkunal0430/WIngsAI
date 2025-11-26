import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-slate-950 bg-white">
        <div className="bg-gradient-hero pointer-events-none fixed inset-0 -z-10 dark:opacity-70 opacity-30" />
        <Navbar />
        <main className="pt-20 md:pt-24 space-y-16 md:space-y-24 lg:space-y-28">
          <Hero />
          <LogoSlider />
          <Features />
          <Highlights />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
