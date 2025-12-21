import React from "react";
import ExperienceTime from "@/components/ExperienceTime";
const experienceItems = [
  {
    role: "Analista Programador Full Stack",
    company: "WayTech",
    dateRange: "Noviembre 2025 - Actualmente",
    description: [
      "Me encargo del desarrollo de herramientas internas para los proyectos de la empresa",
      "Utilizamos el API de servicios externos de Google Maps utilizando JavaScript y Node-RED"
    ],
    techs: ["HTML5", "JavaScript", "Node-RED", "Git", "Github"],
  },
  {
    role: "Project Manager",
    company: "GeekCorp EIRL",
    dateRange: "Octubre 2025 - Actualmente",
    description: [
      "Gestioné proyectos de desarrollo de software para clientes. Dirigí el desarrollo de herramientas internas y mentoré equipos de desarrollo.",
      "Defino requisitos y especificaciones técnicas para los proyectos.",
      "Me encargo de la definición de estrategias de desarrollo y arquitectura de software."
    ],
    techs: ["Nodejs", "TypeScript", "MongoDB", "React Native", "Git", "Github", "Notion"],
  },
  {
    role: "Programador Backend",
    company: "New IP",
    dateRange: "Octubre 2024 - Noviembre 2025",
    description: [
      "Me encargé del desarrollo del Backend utilizando NestJS y TypeORM",
      "Implementé y gestioné servicios con AWS",
      "Implementé CI/CD con GitHub Actions para el despliegue continuo"
    ],
    techs: ["Nodejs", "TypeScript", "TypeORM", "AWS", "Git", "Github", "Docker", "SQL Server", "CI/CD"],
  },
  {
    role: "Analista Programador Full Stack",
    company: "DIRIS LIMA NORTE",
    dateRange: "Marzo 2025 - Agosto 2025",
    description: [
      "Me encargué del desarrollo del Backend de la plataforma de laboratorio",
      "Integré procedimientos almacenados de SQL Server para la gestión de datos",
      "Implementé interfaces modernas usando Angular"
    ],
    techs: ["Java", "Spring Boot", "TypeScript", "Angular", "Git", "Github", "Docker", "SQL Server", "CI/CD"],
  },
  {
    role: "Programador Full Stack",
    company: "NATIVE LAB",
    dateRange: "Octubre 2023 - Octubre 2024",
    description: [
      "Implementé un blog usando WordPress y elementor",
      "Desarrollé e implementé plugins para WordPress para funcionalidades provenientes de la Api de .Net",
      "Desarrollé interfaces modernas usando Angular"
    ],
    techs: ["WordPress", "PHP", "Typescript", "Angular", ".NET", "SQL Server"],
  },
  {
    role: "Analista Programador Full Stack",
    company: "ENGINZONE",
    dateRange: "Septiembre 2021 - Octubre 2024",
    description: [
      "Implementé el sdk y funcionalidades para la integración de pagos de Izipay",
      "Configuré el servidor de Digital Ocean en Ubuntu Server y configuré el entorno de desarrollo",
      "Integré CI/CD para el despliegue continuo con GitHub Actions",
      "Desarrollé funcionalidades del CRM según las necesidades con PHP y CodeIgniter"
    ],
    techs: ["PHP", "CodeIgniter", "JavaScript", "NestJS", "TypeScript", "MySQL", "Git", "GitHub", "DigitalOcean", "Ubuntu Server", "GitHub Actions"],
  },
];
function ProfessionalCareers() {
  return (
    <div className="flex flex-col container mx-auto px-4 py-8 items-center align-center">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        My <span className="text-purple-500">professional</span> career
      </h1>
      <div className="mt-12">
        <ExperienceTime
          sectionId="experience"
          heading="Experience"
          items={experienceItems}
        // resumeLink="/CV.pdf"
        />
      </div>
    </div>
  );
}

export default ProfessionalCareers;
