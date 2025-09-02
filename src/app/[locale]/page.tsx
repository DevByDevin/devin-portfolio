import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import MobileNav from '@/app/components/MobileNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pb-20 lg:pb-0">
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
