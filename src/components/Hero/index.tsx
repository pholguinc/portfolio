"use client";
import React from "react";
import "@/components/Hero/index.css"; 

export default function Hero() {
  return (
    <section className="flex items-center justify-center text-white px-6 sm:mt-15">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 max-w-6xl w-full">
        {/* Imagen o avatar */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-84 lg:h-84 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/hero.jpeg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido textual */}
        <div className="w-full md:w-2/3 lg:w-2xl text-center md:text-left p-6 sm:p-2">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            <span className="text-purple-500 typing-effect" id="first-line">
              FullStack
            </span>
            <br />
            <span className="text-white typing-effect" id="second-line">
              Developer
            </span>
          </h1>

          <p className="text-sm sm:text-md lg:text-lg text-gray-300 leading-relaxed mb-6 text-justify md:text-left">
            Me destaco en el desarrollo de aplicaciones web, tanto front-end como back-end. Estoy familiarizado con herramientas como Node.js, Angular, TypeScript y Python. También utilizo bases de datos relacionales y no relacionales. Tengo experiencia con contenedores Docker e implementaciones en AWS.
          </p>

          <div className="flex justify-between gap-4 sm:gap-2">
            <a
              href="/Projects"
              className="w-40 lg:w-60 bg-purple-700 hover:bg-transparent hover:border border-purple-700 text-white font-bold py-2 px-6 rounded-full transition flex items-center justify-center"
            >
              Mis Proyectos
            </a>
            <a
              href="/Contact"
              className="w-40 lg:w-60 border text-white font-bold py-2 px-6 rounded-full bg-gray-600 transition flex items-center justify-center hover:border-gray-600 hover:bg-transparent"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
