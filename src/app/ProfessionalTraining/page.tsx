"use client";

import { useState, useEffect } from "react";
import TrainingItem from "@/components/TimeLine";
import MetaBalls from "@/components/MetaBalls";

export default function ProfessionalTraining() {
  const trainingData = [
    {
      date: "Jan 2020",
      title: "Systems engineering",
      institution: "University Cesar Vallejo",
      description:
        "University program focused on software development, databases, networking, and systems analysis.",
      hasCertificate: true,
      certificateLink: "/certificates/systems-engineering.pdf",
    },
    {
      date: "Mar 2021",
      title: "Web Scraping with Python",
      institution: "University Cesar Vallejo",
      description:
        "Data extraction and automation using Python tools for academic and professional use.",
      hasCertificate: true,
      certificateLink: "/certificates/web-scraping-python.pdf",
    },
    {
      date: "Jan 2022",
      title: "NestJS + GraphQL",
      institution: "Udemy",
      description:
        "Built scalable APIs combining Node.js frameworks with efficient GraphQL queries.",
      hasCertificate: true,
      certificateLink: "/certificates/nestjs-graphql.pdf",
    },
    {
      date: "Jul 2020",
      title: "Web Development Path: Node.js",
      institution: "Platzi",
      description:
        "Completed full-stack web training with JavaScript, Node.js, Express, and REST API practices.",
      hasCertificate: false,
      certificateLink: "/certificates/web-development-nodejs.pdf",
    },
  ];

  const [courseCount, setCourseCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    let courses = 0;
    let certificates = 0;

    trainingData.forEach((item) => {
      courses++;
      if (item.hasCertificate) {
        certificates++;
      }
    });

    // Function to animate the counter with slower speed
    const animateCounter = (finalValue: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < finalValue) {
          current++;
          setter(current);
        } else {
          clearInterval(interval);
        }
      }, 100); // Slower update interval (100ms instead of 50ms)
    };

    // Start animating counters
    animateCounter(courses, setCourseCount);
    animateCounter(certificates, setCertificateCount);

    // Detect screen size change and update state accordingly
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-6 text-white">
      <div className="w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6">
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Professional <span className="text-purple-500">training</span>
        </h2>
        <div
          className="grid justify-between max-w-3xl grid-cols-2 gap-6 mt-12 md:grid-cols-4 md:gap-6"
        >
          <div className="px-4 border-2 border-transparent border-e-gray-100">
            <p className="text-purple-500 flex mb-2 text-2xl font-semibold md:text-4xl ">
              +{courseCount}
            </p>
            <span className="text-white text-xl">Courses complete</span>
          </div>
          <div>
            <p className="text-purple-500 flex mb-2 text-2xl font-semibold md:text-4xl ">
              +{certificateCount}
            </p>
            <span className="text-white text-xl">certificates obtained</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mt-10 space-y-8 md:space-x-10 md:space-y-0">
          <div className="flex-1">
            {/* Timeline content */}
            <div className="space-y-8">
              {trainingData.map((item) => (
                <TrainingItem key={`${item.title}-${item.date}`} item={item} />
              ))}
            </div>
          </div>

          {/* MetaBalls component on the right, fixed and centered */}
          {isDesktop && (
            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 md:w-1/3  mt-8">
              <MetaBalls
                color="#ffffff"
                cursorBallColor="#ffffff"
                cursorBallSize={1}
                ballCount={20}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
