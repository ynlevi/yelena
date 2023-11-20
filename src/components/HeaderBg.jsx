"use client";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";

function HeaderBg() {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [350, 400],
    // Into these values:
    [1, 1]
  );
  const y = useTransform(scrollY, [250, 400], ["-200px", "0px"]);

  return (
    <motion.div
      ref={ref}
      className="h-20 w-full bg-transparent z-10 fixed top-0 before:bg-theme-dark before:absolute before:h-20 before:w-full before:inset-0 before:opacity-50 lg:hidden"
      style={{
        y,
        backdropFilter: "blur(6px)",
        "-webkitBackdropFilter": "blur(6px)",
      }}
    />
  );
}

export default HeaderBg;
