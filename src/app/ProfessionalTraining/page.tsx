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
        "Actualmente estoy cursando la carrera de ingeniería de sistemas en la Universidad César Vallejo, donde he adquirido conocimientos fundamentales en programación, bases de datos y desarrollo de software.",
      hasCertificate: false,
      certificateLink: "webscraping-python.pdf",
    },
    {
      date: "Feb 2023",
      title: "Web Scraping with Python",
      institution: "University Cesar Vallejo",
      description:
        "Taller práctico de web scraping utilizando Python y bibliotecas como BeautifulSoup y Scrapy.",
      hasCertificate: true,
      certificateLink: "webscraping-python.pdf",
    },
  
  
    {
      date: "Agos 2023",
      title: "Universidad Angular - De Cero a Experto",
      institution: "Udemy",
      description:"Curso básico de Angular desde cero hasta experto, cubriendo todos los aspectos fundamentales y avanzados del framework.",
      hasCertificate: true,
      certificateLink: "https://www.udemy.com/certificate/UC-9e7e515e-1a1b-494b-8b7e-f2e95574060f/"

    },
    {
      date: "Agos 2023",
      title: "Angular Avanzado: Lleva tus bases al siguiente nivel - 2022",
      institution: "Udemy",
      description:
        "MEAN, Google Signin, JWT, carga de archivos, lazyload, optimizaciones, Git, GitHub, panel administrativo, etc.",
      hasCertificate: true,
      certificateLink: "https://www.udemy.com/certificate/UC-9e7e515e-1a1b-494b-8b7e-f2e95574060f",
    },
    {
      date: "Mar 2024",
      title: "NestJS + Microservicios: Aplicaciones escalables y modulares",
      institution: "DevTalles",
      description: "Curso de NestJS para construir aplicaciones escalables y modulares utilizando microservicios, Docker y Kubernetes y NATS",
      hasCertificate: true,
      certificateLink: "https://cursos.devtalles.com/certificates/nyebozowta",
    },
    {
      date: "Jun 2024",
      title: "Node - Autenticación Rest con Clean Architecture",
      institution: "DevTalles",
      description: "Curso de Node.js para implementar autenticación RESTful utilizando Clean Architecture, JWT y Bcrypt, con enfoque en buenas prácticas de desarrollo en Clean Architecture.",
      hasCertificate: true,
      certificateLink: "https://cursos.devtalles.com/certificates/vyeidt2ae0",
    },
    {
      date: "Jun 2024",
      title: "Nest: Desarrollo backend escalable con Node",
      institution: "DevTalles",
      description: "Curso completo de NestJS para construir aplicaciones backend escalables con Node.js utilizando TypeScript y Clean Code.",
      hasCertificate: true,
      certificateLink: "https://cursos.devtalles.com/certificates/53ffmgsayl",
    },
    {
      date: "Jul 2024",
      title: "NestJS + Reportes: Genera PDFs desde Node",
      institution: "DevTalles",
      description: "Curso práctico de NestJS para generar reportes en PDF desde Node.js, utilizando herramientas como PDFMake",
      hasCertificate: true,
      certificateLink: "https://cursos.devtalles.com/certificates/oryyqrel9g",
    },
    {
      date: "May 2025",
      title: "Flutter - Móvil: De Cero a Experto",
      institution: "Udemy",
      description: "Curso completo de Flutter para desarrollar aplicaciones móviles nativas de alta calidad con Dart, cubriendo desde los fundamentos hasta técnicas avanzadas con Clean Architecture.",
      hasCertificate: true,
      certificateLink: "https://www.udemy.com/certificate/UC-cef0e341-0fb7-4ca3-806d-d3a3debe5c1a",
    },
    {
      date: "Jun 2025",
      title: "Curso de ReactJS",
      institution: "Platzi",
      description: "Curso práctico de ReactJS para construir interfaces de usuario interactivas y dinámicas utilizando la biblioteca de React.",
      hasCertificate: true,
      certificateLink: "https://platzi.com/p/holguinpedro90/curso/11887-course/diploma/detalle/",
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
          Desarrollo <span className="text-purple-500">Profesional</span>
        </h2>
        <div
          className="grid justify-between max-w-3xl grid-cols-2 gap-6 mt-12 md:grid-cols-4 md:gap-6"
        >
          <div className="px-4 border-2 border-transparent border-e-gray-100">
            <p className="text-purple-500 flex mb-2 text-2xl font-semibold md:text-4xl ">
              +{courseCount}
            </p>
            <span className="text-white text-xl">Cursos completos</span>
          </div>
          <div>
            <p className="text-purple-500 flex mb-2 text-2xl font-semibold md:text-4xl ">
              +{certificateCount}
            </p>
            <span className="text-white text-xl">Certificados obtenidos</span>
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
