import { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onHoverIn = () => setHovered(true);
    const onHoverOut = () => setHovered(false);

    window.addEventListener("mousemove", onMove);

    // Listen for hover events on interactive elements
    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    const animate = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.12;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ transform: `translate(${cursorPos.x - 5}px, ${cursorPos.y - 5}px)` }}
      />
      <div
        className={`custom-cursor-ring${hovered ? " hovered" : ""}`}
        style={{ transform: `translate(${ringPos.x - 18}px, ${ringPos.y - 18}px)` }}
      />
    </>
  );
}
