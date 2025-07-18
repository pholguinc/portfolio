'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import SplashCursor from "@/components/SplashCursor";
import Particles from "@/components/Particles";
import Dock from "@/components/Navbar/index";
import {
  Home,
  Briefcase,
  RoomService,
  Code,
  AddQueue,
} from "@mynaui/icons-react";
import "./globals.css";


const items = [
  {
    icon: <Home size={30} />,
    label: "Inicio",
    href:"/",
  },
  {
    icon: <Briefcase size={30} />,
    label: "Desarrollo Profesional",
    href: "/ProfessionalTraining",
  },
  {
    icon: <RoomService size={30} />,
    label: "Servicios",
    href:"/Services",
  },
  {
    icon: <Code size={30} />,
    label: "Proyectos",
    href:"/Projects",
  },
  {
    icon: <AddQueue size={30} />,
    label: "Experiencia Profesional",
    href:"/ProfessionalCareers",
  },
];



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative z-10`}
      >
        <link rel="icon" href="/Favicon.ico" />
        <SplashCursor />
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Header />
          {children}
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>

      </body>
    </html>
  );
}
