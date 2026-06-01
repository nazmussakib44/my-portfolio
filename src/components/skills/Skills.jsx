import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 1.45,
    letterSpacing: -0.03,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.material.color.lerp(
      color.set(hovered ? "#111827" : "#4b5563"),
      0.08
    );
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        {...fontProps}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ slugs, radius = 12 }) {
  const groupRef = useRef();

  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();

    slugs.forEach((slug, index) => {
      const phi = Math.acos(-1 + (2 * (index + 1)) / (slugs.length + 1));
      const theta = Math.sqrt((slugs.length + 1) * Math.PI) * phi;

      const position = new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phi, theta)
      );

      temp.push([position, slug]);
    });

    return temp;
  }, [slugs, radius]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0012;
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
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
    "FastAPI",
    "S3",
    "Rekognition",
    "EC2",
    "Maps API",
    "Three.js",
    "Konva.js",
    "Chart.js",
    "React Native",
    "WordPress",
    "Shopify",
    "Tailwind",
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[320px,1fr] lg:items-center">
          <div>
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Skills
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base leading-7 mb-6">
              Technologies and tools I use to build reliable, scalable, and
              user-focused digital products.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Frontend
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Backend
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Cloud
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Tools
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[420px] md:h-[500px] bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(243,244,246,0.75),rgba(229,231,235,0.45))]" style={{borderBottom: '10px solid #374151',
    borderTop: '10px solid #374151'}} />

              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 22], fov: 50 }}>
                <fog attach="fog" args={["#f3f4f6", 18, 34]} />
                <ambientLight intensity={1.15} />
                <directionalLight position={[3, 3, 2]} intensity={0.7} />

                <Suspense fallback={null}>
                  <group rotation={[0.15, 0.2, 0]}>
                    <Cloud slugs={slugs} radius={12} />
                  </group>
                </Suspense>

                <TrackballControls
                  noPan
                  noZoom
                  rotateSpeed={1.4}
                  dynamicDampingFactor={0.08}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;