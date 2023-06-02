"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import { setEyePosition } from "../../GlobalRedux/eyeSlice";
import Image from "next/image";

const Eyes = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  //const eyes = useRef<HTMLImageElement>(null);
  const anchor = useRef<HTMLImageElement>(null);

  // Track mouse position and update eye position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (anchor.current !== null) {
        const rekt = anchor.current.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
        const eyes = window.document.querySelectorAll(".eyes");

        setEyePosition({ x, y });

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      }

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Get eye position from Redux store
  // const { x, y } = useSelector((state: RootState) => state.eye.position);

  const angle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
  };
  return (
    <>
      <Image src="/eye.png" alt="eyes" width={100} height={100} ref={anchor} />
      <div id="eyes">
        <Image
          src="/eyedot.png"
          alt="eyesdot"
          width={20}
          height={0.8}
          id="eyes"
          className="absolute bottom-14 left-64 rounded-full"
          style={{ transform: `rotate(${90 + angleDeg}deg)` }}
        />
        <Image
          src="/eyedot.png"
          alt="eyesdot"
          width={20}
          height={0.8}
          id="eyes"
          className="absolute bottom-14 left-52 rounded-full"
          style={{ transform: `rotate(${90 + angleDeg}deg)` }}
        />
      </div>
    </>
  );
};

export default Eyes;
