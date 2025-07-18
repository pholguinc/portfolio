"use client";
import React, { useState } from "react";
import { ArrowLongUpRight } from "@mynaui/icons-react";

interface ExperienceItem {
  role: string;
  company: string;
  dateRange: string;
  description: string;
  techs: string[];
}

interface ExperienceSectionProps {
  sectionId?: string;
  heading?: string;
  items: ExperienceItem[];
  resumeLink?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  sectionId = "experience",
  heading = "Experience",
  items,
  resumeLink,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id={sectionId}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {heading}
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={`${item.role}-${item.company}`} className="mb-12">
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group w-full text-left relative grid p-10  rounded-lg transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 
    ${
      isActive
        ? "opacity-100 bg-[#262626]/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg"
        : "opacity-60"
    }
  `}
                >
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block" />
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={item.dateRange}
                  >
                    {item.dateRange}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="text-base font-bold leading-snug">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent block text-xl font-bold">
                        {item.role}
                      </span>
                      <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent text-md font-medium">
                        {item.company}
                      </span>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                      {item.description}
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {item.techs.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full border border-purple-500 px-3 py-1 text-xs font-medium leading-5 ">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        {resumeLink && (
          <div className="mt-12">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-500 focus-visible:text-purple-500 font-semibold group/link text-base"
              href={resumeLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Full Resume{" "}
              <span className="inline-block ml-1">
                <ArrowLongUpRight size={12} />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
