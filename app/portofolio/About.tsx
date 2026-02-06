import BlurText from "../lib/animations/BlurText";
import Masonry from "../lib/animations/Masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardSwap, { Card } from "../lib/animations/CardSwap";
import Image from "next/image";

const About = () => {
  const items = [
    {
      id: "1",
      img: "/Background/Clothers.jpg",
      url: "https://example.com/one",
      height: 620,
    },
    {
      id: "2",
      img: "/Background/Photos.jpg",
      url: "https://example.com/two",
      height: 400,
    },
    {
      id: "3",
      img: "/Background/Univ.jpg",
      url: "https://example.com/three",
      height: 580,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* About Text */}
        <div>
          <BlurText
            text="My name is Donny Zaki Huda, and I’m an Electronics and Instrumentation student at Universitas Gadjah Mada with a strong interest in software or web development. I enjoy building practical applications, particularly in full-stack web development, and exploring how code can solve real problems. I’ve worked on several projects such as netScore, a login page gallery repository, and a random utility code generator. More of my work and experiments can be found on my GitHub profile linked on this page."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-zinc-300 text-lg text-justify leading-relaxed"
          />
        </div>

        {/* Masonry Gallery */}
        <div className="h-110">
          <div
            style={{ height: "200px", width: "500px", position: "relative" }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={2000}
              pauseOnHover={false}
            >
              {items.map((item, index) => (
                <Card>
                  <Image
                    key={index}
                    width={600}
                    height={600}
                    src={item.img}
                    alt={item.id}
                    className="rounded-lg border border-none"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* GitHub Card */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Projects
      </h1>
      <div className="border border-blue-600 w-10" />
      <div className="flex justify-center items-center max-w-full">
        <div className="bg-[#111116] border border-white/5 rounded-lg p-6 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1a1a1f] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl text-white"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <p className="text-zinc-400 text-sm">
                  View my projects and contributions
                </p>
              </div>
            </div>

            <a
              href="https://github.com/Lamberto673?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[rgb(227,226,226)] hover:bg-white text-gray-900 text-sm font-medium rounded-lg transition-colors"
            >
              View Profile
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
