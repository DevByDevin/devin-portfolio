import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <Header />
      <main className='pb-20 lg:pb-0'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
