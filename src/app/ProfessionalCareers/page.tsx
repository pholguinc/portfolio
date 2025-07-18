import React from "react";
import ExperienceTime from "@/components/ExperienceTime";
const experienceItems = [
  {
    role: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    dateRange: "2024 — Present",
    description:
      "Build and maintain critical components across Klaviyo’s frontend. Advocate for accessibility best practices.",
    techs: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    role: "Lead Engineer",
    company: "Upstatement",
    dateRange: "2018 — 2024",
    description:
      "Built high-quality web experiences for clients. Led internal tool development and mentored engineering teams.",
    techs: ["React", "TypeScript", "Next.js", "WordPress"],
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
          resumeLink="/CV.pdf"
        />
      </div>
    </div>
  );
}

export default ProfessionalCareers;
