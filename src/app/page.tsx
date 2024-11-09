import Header from './components/header';
import HeroSection from './components/heroSection';
import About from './components/about';
import Menu from './components/menu';
import Testimonials from './components/testimonials';
import ContactForm from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Menu />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

