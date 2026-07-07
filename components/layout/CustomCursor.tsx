"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.classList.add("hovering");
      follower.classList.add("hovering");
    };
    const onLeave = () => {
      cursor.classList.remove("hovering");
      follower.classList.remove("hovering");
    };

    window.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(animate);

    const addListeners = () => {
      document.querySelectorAll("a, button, input, textarea, select, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.body.style.cursor = "none";
    const styleEl = document.createElement("style");
    styleEl.textContent = "a,button,input,textarea,select,[role='button']{cursor:none!important;}";
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      document.body.style.cursor = "";
      styleEl.remove();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
}
