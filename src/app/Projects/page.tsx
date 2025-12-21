import React from "react";
import ProjectCard from "@/components/ProjectsCard";

function Projects() {
  return (
    <div className="flex flex-col container mx-auto px-4 py-8 items-center align-center">
      <h1 className="text-5xl font-bold ">
        Mis <span className="text-purple-500">Proyectos</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 place-items-center">
        <ProjectCard
          title="Aplicación de Notificaciones con WebSockets"
          techs={["Nodejs", "Socket.io", "TypeScript"]}
          imageSrc="/web-socket.png"
          description="Aplicación de Notificaciones que permite a los usuarios recibir notificaciones en tiempo real."
          githubUrl="https://github.com/pholguinc/websocket"
          showLiveLink={false}
        />
        <ProjectCard
          title="Sistema de Gestión de Restaurantes"
          techs={["PHP", "JavaScript", "Bootstrap"]}
          imageSrc="/restaurante.png"
          description="Sistema de Gestión de Restaurantes que permite a los usuarios gestionar reservas, pedidos y menús."
          githubUrl="https://github.com/pholguinc/sistema-restaurante"
          showLiveLink={false}
        />
        <ProjectCard
          title="Sistema de Almacén e Inventario"
          techs={["ReactJS", "Tailwind CSS", "TypeScript", "Node.js", "ExpressJS"]}
          imageSrc="/inventario.png"
          description="Sistema de Almacén e Inventario que permite a los usuarios gestionar productos, categorías y proveedores, además de registro e incidencias y traspaso de material ente sedes."
          githubUrl="https://github.com/pholguinc/almacen-api"
          liveUrl="/"
        />
        <ProjectCard
          title="App Movil de gestión de asistencia con QR"
          techs={["Java", "Android Studio", "SQL Lite"]}
          imageSrc="/app-qr.png"
          description="Aplicación móvil que permite gestionar la asistencia de los empleados mediante códigos QR."
          githubUrl="https://github.com/pholguinc/appsubsidio-v2"
          liveUrl="/"
        />
        <ProjectCard
          title="Backend para consulta RUC SUNAT"
          techs={["Python", "FastAPI"]}
          imageSrc="/sunat-webscraping.jpeg"
          description="Backend para consulta RUC SUNAT con Webscraping"
          githubUrl="https://github.com/pholguinc/webscraping-sunat"
          liveUrl="/"
        />
        <ProjectCard
          title="Automatización de proyectos NestJS"
          techs={["Nodejs", "TypeScript", "NestJS"]}
          imageSrc="/nestjs-hexa-services.png"
          description="Librería para automatización de proyectos NestJS"
          githubUrl="https://www.npmjs.com/package/nest-hexa-services"
          liveUrl="/"
        />

        <ProjectCard
          title="App para Gestión de Soporte Técnico"
          techs={["Nodejs", "TypeScript", "NestJS"]}
          imageSrc="/soporte-app.png"
          description="App para gestión Soporte Técnico"
          githubUrl="https://github.com/pholguinc/soporte-app"
          liveUrl="/"
        />

        <ProjectCard
          title="Módulo de farmacia Arquitectura Hexagonal"
          techs={["Python", "Django", "Docker", "PostgreSQL"]}
          imageSrc="/farmacia-django.png"
          description="Backend para módulo de farmacia Arquitectura Hexagonal"
          githubUrl="https://github.com/pholguinc/farmacia-back"
          liveUrl="/"
        />

        <ProjectCard
          title="Landing para evento ASME EnginZone"
          techs={["ReactJS", "TypeScript", "Tailwind CSS"]}
          imageSrc="/asme.png"
          description="Landing para evento ASME EnginZone"
          githubUrl="https://github.com/pholguinc/asme"
          liveUrl="https://asme-rho.vercel.app/"
          showLiveLink={true}
        />

        <ProjectCard
          title="Servicio de envío de correos electrónicos"
          techs={["Nodejs", "TypeScript", "NestJS"]}
          imageSrc="/mail.png"
          description="Servicio de envío de correos electrónicos"
          githubUrl="https://github.com/pholguinc/mail-asme"
        />

        <ProjectCard
          title="Librería de componentes UI Angular"
          techs={["Angular", "TailwindCSS", "TypeScript"]}
          imageSrc="/twng-elements.png"
          description="Librería de componentes UI Angular"
          githubUrl="https://www.npmjs.com/package/twng-elements-ui"
          showLiveLink={true}
          liveUrl="https://twngelements-docs.vercel.app/"
        />

        <ProjectCard
          title="App PWA de Viajes Turísticos"
          techs={["NextJS", "TailwindCSS", "TypeScript", "Python", "NestJS", "PWA"]}
          imageSrc="/kodotakai.png"
          description="App PWA de Viajes Turísticos con recomendaciones e IA"
          githubUrl="https://github.com/orgs/Kodo-Takai/repositories"
          showLiveLink={true}
          liveUrl="https://frontend-app-kodotakai.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
