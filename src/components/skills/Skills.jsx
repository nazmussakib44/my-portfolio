import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ slugs, radius = 20 }) {
  // Create words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    slugs.forEach((slug, index) => {
      // Calculate phi and theta angles for spherical distribution
      const phi = Math.acos(-1 + (2 * (index + 1)) / (slugs.length + 1));
      const theta = Math.sqrt((slugs.length + 1) * Math.PI) * phi;
      // Calculate position based on spherical coordinates
      const position = new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phi, theta)
      );
      temp.push([position, slug]);
    });
    return temp;
  }, [slugs, radius]);

  const groupRef = useRef();

  // Use useFrame to update rotation for auto-rotation
  useFrame(() => {
    groupRef.current.rotation.y += 0.001; // Adjust the speed as needed
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );
}

function Skills() {
  const slugs = [
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "AWS",
    "JavaScript",
    "React",
    "Vue.js",
    "jQuery",
    "Django (DRF)",
    "Rest Knox",
    "FastAPI",
    "S3",
    "Rekognition",
    "EC2",
    "Maps API",
    "Cloud Storage",
    "Wallet API",
    "Street View",
    "Three.js",
    "Konva.js",
    "Chart.js",
    "GreenSock",
    "A-Frame",
    "Panellum",
    "FullCalendar",
    "Draggable",
    "Drawflow",
    "React Native",
    "NativeScript-Vue",
    "WordPress",
    "Shopify"
  ];

  return (
    <section className="container max-w-screen-xl mx-auto px-4">
      <div style={{ backgroundColor: "black", borderRadius:"10px" }} className="text-center">
        <div
          style={{ maxWidth: "100%", height: "500px", margin: "0 auto" }}
          className="relative flex h-full w-full max-w-[32rem] flex items-center justify-center overflow-hidden rounded-lg bg-background hide-scrollbar"
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 50 }}>
            <fog attach="fog" args={["#202025", 0, 80]} />
            <Suspense fallback={null}>
              <group rotation={[10, 10.5, 10]}>
                <Cloud slugs={slugs} radius={20} />
              </group>
            </Suspense>
            <TrackballControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Skills;
