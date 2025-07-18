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
      </div>
    </div>
  );
}

export default Projects;
