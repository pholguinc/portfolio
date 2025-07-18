"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type NavbarItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  href: string;
  className?: string;
};

export type NavbarProps = Readonly<{
  items: NavbarItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
}>;

export type NavbarItemProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  href: string;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
}>;

function NavbarItem({
  children,
  className = "",
  href,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: NavbarItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
    >
      <button className="w-full h-full">
        <Link href={href}> 
          {children}
        </Link>
      </button>
    </motion.div>
  );
}

export type NavbarLabelProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  isHovered: MotionValue<number>;
}>;

function NavbarLabel({ children, className = "", ...rest }: NavbarLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type NavbarIconProps = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

function NavbarIcon({ children, className = "" }: NavbarIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Navbar({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: NavbarProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="mx-2 flex max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-full border-neutral-700 border-2 pb-2 px-4 z-50 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,1),_rgba(6,0,16,1))] `}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application navbar"
      >
        {items.map((item) => (
          <NavbarItem
            key={item.href} // Use href as a unique key
            href={item.href}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <NavbarIcon>{item.icon}</NavbarIcon>
            <NavbarLabel isHovered={isHovered}>{item.label}</NavbarLabel>
          </NavbarItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
