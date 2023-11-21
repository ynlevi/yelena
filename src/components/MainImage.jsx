"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimate,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
function MainImage() {
  const [imageIndex, setImageIndex] = useState(0);
  const [scope, animate] = useAnimate();

  const target = useRef(null);

  const { scrollY } = useScroll();
  useEffect(() => {
    setTimeout(() => {
      animate(scope.current, { opacity: 0 }, { duration: 1 });
    }, 9500);
    const interval = setInterval(
      () =>
        setImageIndex((prev) => {
          animate(scope.current, { opacity: 1 }, { duration: 1 });
          setTimeout(() => {
            animate(scope.current, { opacity: 0 }, { duration: 1 });
          }, 9500);
          return prev + 1 > images.length - 1 ? 0 : prev + 1;
        }),
      10000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inset-0 w-full h-screen z-0 " ref={target}>
      <motion.img
        ref={scope}
        src={images[imageIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full w-full object-cover "
      />
      <div
        className="absolute inset-0  h-screen w-scree flex items-end bg-theme-dark z-20 "
        style={{ backgroundColor: "rgba(26, 5, 7, 0.45)" }}
      >
        <div className="h-fit w-11/12 ml-auto mb-5 mx-auto text-theme-yellow">
          <h1 className="text-6xl font-bold tracking-wider lg:text-7xl  ">
            <div className="-mb-4">ילנה</div>
            <div className="">וויסמן</div>
          </h1>
          <h2 className="text-xl font-semibold tracking-wider mt-1 lg:text-2xl">
            מעצבת פנים שמבינה אותך.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default MainImage;

const images = [
  "https://images.pexels.com/photos/19050701/pexels-photo-19050701/free-photo-of-large-windows-in-living-room.jpeg",
  "https://images.pexels.com/photos/6035357/pexels-photo-6035357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
