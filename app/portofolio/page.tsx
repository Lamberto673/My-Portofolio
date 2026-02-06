import React from "react";
import BlurText from "../lib/animations/BlurText";
import Image from "next/image";
import About from "./About";
import Achievement from "./Achievement";
import Contact from "./Contact";
import Skill from "./Skill";
import OtherSkills from "./OtherSkills";
import Prism from "../lib/animations/Prism";
import Carousel from "./Carousel";

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex justify-center items-center"
      >
        <div className="absolute inset-0">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={0.5}
            suspendWhenOffscreen={true}
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <BlurText
            text="Welcome to my Page"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl text-white font-bold tracking-tight"
          />
          <p className="mt-4 text-lg text-zinc-300 max-w-xl mx-auto">
            Electronics & Instrumentation Student
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-indigo-500 mb-10" />
          <About />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-[#111116]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Achievements
            </h2>
            <p className="text-zinc-400">Recognition and accomplishments</p>
          </div>
          <Achievement />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Skills
            </h2>
            <p className="text-zinc-400">Stack I work with</p>
          </div>
          <Skill />
          <div className="text-center mb-10 mt-12">
            <p className="text-zinc-400">Other skills I have</p>
          </div>

          <OtherSkills />
          <div className="text-center mb-10 mt-12">
            <p className="text-zinc-400">Some of my photos</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Carousel
      <section>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Skills
            </h2>
          </div>
          <Carousel />
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111116]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-zinc-400">
              Let&apos;s connect and build something together
            </p>
          </div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0f] border-t border-white/5">
        <p className="text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Donny Zaki Huda
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
