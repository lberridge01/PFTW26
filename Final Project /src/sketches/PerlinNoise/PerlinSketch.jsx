import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import p5 from "p5";
import sketch from "./sketch";

function PerlinSketch() {
  const sketchRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    window.p5 = p5;

    import("p5.sound").then(() => {
      if (!p5InstanceRef.current) {
        p5InstanceRef.current = new p5(sketch, sketchRef.current);
      }
    });

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.cleanup?.();
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ice">Ice Cracking</Link>
        <Link to="/thunderstorm">Thunderstorm</Link>
        <Link to="/space">Sounds of Space</Link>
        <Link to="/flower">Blooming Flowers</Link>
      </nav>
      <div ref={sketchRef}></div>;
    </div>
  );
}

export default PerlinSketch;
