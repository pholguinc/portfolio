import React from "react";
import { BrandLinkedin, BrandGithub } from "@mynaui/icons-react";
export default function Header() {
  const iconClass = "w-8 h-8 md:w-12 md:h-12 hover:opacity-70 transition";
  return (
    <header className="text-white px-10 py-5">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl md:text-4xl font-bold hover:scale-115 transition-transform duration-300">
          <a href="/">
            Pedro{" "}
            <span className="bg-gradient-to-b from-purple-600 to-stone-900 bg-clip-text text-transparent">
              /Dev
            </span>
          </a>
        </h1>

        <nav>
          <ul className="flex space-x-10 ">
            <li className="hover:scale-120 transition-transform duration-300">
              <a
                href="https://www.linkedin.com/in/pedroholguinc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandLinkedin className={iconClass} />
              </a>
            </li>
            <li className="hover:scale-120 transition-transform duration-300">
              <a
                href="https://github.com/pholguinc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandGithub className={iconClass} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
