import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/nav/Nav";
import AllIn from "@/components/projects/AllIn";
import ResumeDownload from "@/components/Resume";
import Stock from "@/components/stock/Stock";

export default function Home() {
  return (
    <main className="bg-black ">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <AllIn />
      </div>
      <div id="stack">
      <Stock />

      </div>
      <div id="resume">
        <ResumeDownload />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
