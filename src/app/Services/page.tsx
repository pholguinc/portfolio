import React from "react";
import RollingCard from "@/components/RollingCard";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-center mt-2 md:text-6xl">
        Mis <span className="text-purple-500">Servicios</span>
      </h1>
      <p className="text-lg text-gray-200 mt-4 max-w-2xl text-center md:text-xl md:mt-6">
        Ofrezco una variedad de servicios para ayudar a empresas y emprendedores a alcanzar sus objetivos digitales, estoy aquí para transformar tus ideas en realidad.
      </p>
      <RollingCard
        autoplay={true}   
        pauseOnHover={true}/>
    </div>
  );
}

export default Services;
