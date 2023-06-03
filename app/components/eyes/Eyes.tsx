"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import { setEyePosition } from "../../GlobalRedux/eyeSlice";
import Image from "next/image";

const Eyes = () => {
  //const eyes = useRef<HTMLImageElement>(null);
  const anchor = useRef<HTMLImageElement>(null);
  let [a, seta] = useState(0);
  // Track mouse position and update eye position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log(anchor.current);
      if (anchor.current !== null) {
        const rekt = anchor.current.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
        //const eyes = window.document.querySelectorAll(".eyes");
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        seta(angleDeg);
        console.log(angleDeg);
      }

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    };
  }, [anchor]);

  // Get eye position from Redux store
  // const { x, y } = useSelector((state: RootState) => state.eye.position);

  const angle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
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
          style={{ transform: `rotate(${90 + a}deg)` }}
        />
        <Image
          src="/eyedot.png"
          alt="eyesdot"
          width={20}
          height={0.8}
          id="eyes"
          className="absolute bottom-14 left-52 rounded-full"
          style={{ transform: `rotate(${90 + a}deg)` }}
        />
      </div>
    </>
  );
};

export default Eyes;
