"use client";
import React, { useState } from "react";
import { Globe, BrandGithub } from "@mynaui/icons-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  techs: string[];
  imageSrc: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  showLiveLink?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techs,
  imageSrc,
  description,
  githubUrl,
  liveUrl,
  showLiveLink = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500 p-3 sm:p-4 text-white shadow-md hover:shadow-purple-600 transition duration-300 w-full max-w-[280px] sm:max-w-sm md:max-w-md min-h-[350px] sm:min-h-[380px] h-auto flex flex-col">
        <h2 className="text-base sm:text-xl font-extrabold mb-2 line-clamp-2 min-h-[48px] sm:min-h-[56px]">
          {title}
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 min-h-[24px] sm:min-h-[28px] items-center">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs border border-purple-500 text-white rounded-full px-2 sm:px-3 py-0.5 flex items-center justify-center leading-normal"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative w-full h-[140px] sm:h-[160px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 px-2">
          <div className="flex gap-3 text-white text-lg">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <BrandGithub className="hover:text-purple-400 transition" />
            </a>
            {showLiveLink && liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="hover:text-purple-400 transition" />
              </a>
            )}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="text-xs sm:text-sm bg-transparent border border-purple-500 px-4 sm:px-6 py-1 rounded-full hover:bg-purple-600 transition"
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f0c1d] border border-purple-500 p-6 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-lg text-white relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-purple-400 hover:text-purple-200 text-lg"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-sm mb-6">{description}</p>

            <div className="flex gap-4 justify-center text-lg">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <BrandGithub className="hover:text-purple-400 transition" />
              </a>
              {showLiveLink && liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="hover:text-purple-400 transition" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
