"use client";
import React, { useEffect, useState } from "react";
import {
  Pencil,
  BrandChrome,
  Mobile,
  FileText,
  Search,
} from "@mynaui/icons-react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "framer-motion";

const CARD_CONTENT = [
  {
    icon: <Pencil size={30} />,
    title: "Diseño Web",
    description:
      "Gestion fácilmente el contenido de tu sitio web  con una interfaz intuitiva y amigable, olvídese de la complejidad técnica y concéntrese en lo que realmente importa: su negocio.",
  },
  {
    icon: <BrandChrome size={30} />,
    title: "Aplicaciones Web",
    description:
      "Desarrollo aplicaciones web personalizadas que se adaptan a tus necesidades específicas, utilizando las últimas tecnologías y mejores prácticas de desarrollo.",
  },
  {
    icon: <Mobile size={30} />,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo aplicaciones móviles nativas y multiplataforma que ofrecen una experiencia de usuario excepcional en dispositivos iOS y Android.",
  },
  {
    icon: <Mobile size={30} />,
    title: "Automatización de Procesos",
    description:
      "Ofrecemos soluciones de automatización de procesos para mejorar la eficiencia y reducir costos en tu negocio.",
  },
 
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  content?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  content = [],
}) => {
  const galleryContent = content.length > 0 ? content : CARD_CONTENT;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryContent.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.2;
  const radius: number = (cylinderWidth / (2 * Math.PI)) * 0.6; 


  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  }, [autoplay]);

  useEffect(() => {
    if (!autoplay) {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-110 w-full  overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryContent.map((contentItem, i) => (
            <div
              key={contentItem.title}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-300/30 rounded-md p-6 border border-purple-500  hover:shadow-purple-600 transition duration-300 shadow-lg transform transition-all duration-300 ease-out group-hover:scale-105 h-50 w-auto sm:h-48 sm:w-50 md:h-50 md:w-62 xl:w-65">
                <div className="flex items-center space-x-2 justify-start">
                  {contentItem.icon && <span>{contentItem.icon}</span>}
                  <h3 className="text-sm md:text-md lg:text-lg font-extrabold">
                    {contentItem.title}
                  </h3>
                </div>
                <p className="text-xs text-center mt-4">
                  {contentItem.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
