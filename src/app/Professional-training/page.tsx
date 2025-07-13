"use client";

import { useState, useEffect } from "react";
import TrainingItem from "@/components/TimeLine"; 

export default function ProfessionalTraining() {
  const trainingData = [
    {
      date: "Jan 2020",
      title: "Systems engineering",
      institution: "University Cesar Vallejo",
      description:
        "University program focused on software development, databases, networking, and systems analysis.",
      hasCertificate: true,
    },
    {
      date: "Mar 2021",
      title: "Web Scraping with Python",
      institution: "University Cesar Vallejo",
      description:
        "Data extraction and automation using Python tools for academic and professional use.",
      hasCertificate: true,
    },
    {
      date: "Jan 2022",
      title: "NestJS + GraphQL",
      institution: "Udemy",
      description:
        "Built scalable APIs combining Node.js frameworks with efficient GraphQL queries.",
      hasCertificate: true,
    },
    {
      date: "Jul 2020",
      title: "Web Development Path: Node.js",
      institution: "Platzi",
      description:
        "Completed full-stack web training with JavaScript, Node.js, Express, and REST API practices.",
      hasCertificate: false,
    },
  ];

  const [courseCount, setCourseCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);

  useEffect(() => {
    let courses = 0;
    let certificates = 0;

    trainingData.forEach((item) => {
      courses++;
      if (item.hasCertificate) {
        certificates++;
      }
    });

    setCourseCount(courses);
    setCertificateCount(certificates);
  }, []);

  return (
    <div className="p-6 text-white ">
      <h2 className="text-2xl font-bold text-purple-500 mb-10">
        Professional training
      </h2>
      <div className="grid justify-between max-w-3xl grid-cols-2 gap-6 mx-auto my-8 md:grid-cols-4 md:gap-6">
        <div className="px-4 border-2 border-transparent border-e-gray-100">
          <p className="text-purple-400 flex mb-2 text-xl font-semibold md:text-4xl ">
            +{courseCount}
          </p>
          <span className="text-white text-xl">Courses complete</span>
        </div>
        <div>
          <p className="text-purple-400 flex mb-2 text-xl font-semibold md:text-4xl ">
            +{certificateCount}
          </p>
          <span className="text-white text-xl">certificates obtained</span>
        </div>
      </div>

      <div className="space-y-8">
        {trainingData.map((item) => (
          <TrainingItem key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </div>
  );
}
