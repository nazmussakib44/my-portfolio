import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  useScroll,
  OrbitControls,
} from "@react-three/drei";
import { easing } from "maath";
import "../../util";

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  const autoOffset = useRef(0);

  useEffect(() => {
    const el = scroll.el;
    if (!el) return;

    el.classList.add("hide-scrollbar");

    let timeout;

    const markUserScrolling = () => {
      el.dataset.userScrolling = "true";
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        el.dataset.userScrolling = "false";
      }, 900);
    };

    el.addEventListener("wheel", markUserScrolling, { passive: true });
    el.addEventListener("touchmove", markUserScrolling, { passive: true });

    return () => {
      el.removeEventListener("wheel", markUserScrolling);
      el.removeEventListener("touchmove", markUserScrolling);
      clearTimeout(timeout);
    };
  }, [scroll]);

  useFrame((state, delta) => {
    if (!ref.current || !scroll.el) return;

    const el = scroll.el;
    const isUserScrolling = el.dataset.userScrolling === "true";

    if (!isUserScrolling) {
      autoOffset.current += delta * 0.03;

      if (autoOffset.current > 1) {
        autoOffset.current = 0;
      }

      const containerLength = el.clientHeight;
      const scrollLength = el.scrollHeight - containerLength;
      el.scrollTo({
        top: autoOffset.current * scrollLength,
        behavior: "auto",
      });
    } else {
      autoOffset.current = scroll.offset;
    }

    ref.current.rotation.y = -scroll.offset * Math.PI * 2;

    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 1.2, state.pointer.y * 0.4 + 0.5, 8.5],
      0.25,
      delta
    );

    state.camera.lookAt(0, 0, 0);
    state.events.update();
  });

  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 3.1, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={`card-${i}`}
      url={`${(i % 8) + 1}.png`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;

    easing.damp3(
      ref.current.scale,
      hovered ? [1.04, 1.04, 1.04] : [1, 1, 1],
      0.15,
      delta
    );
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.08 : 0.05,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.25, 0.2, delta);
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={(e) => {
        e.stopPropagation();
        hover(true);
      }}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <planeGeometry args={[1.45, 1.9]} />
    </Image>
  );
}

function Album() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[320px,1fr] lg:items-center">
          <div>
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Gallery
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base leading-7 mb-6">
              A visual collection of selected work, interfaces, and project
              snapshots presented in an interactive carousel.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                UI Screens
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Product Work
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                Visual Showcase
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
            <div className="relative h-[420px] md:h-[520px] bg-gradient-to-br from-white via-gray-50 to-gray-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(243,244,246,0.82),rgba(229,231,235,0.45))]" />

              <Canvas camera={{ position: [0, 0, 8.5], fov: 35 }}>
                <fog attach="fog" args={["#f3f4f6", 5, 12]} />
                <ambientLight intensity={1.2} />
                <directionalLight position={[2, 3, 4]} intensity={1} />
                <directionalLight position={[-2, -1, 3]} intensity={0.35} />

                <ScrollControls pages={4} infinite damping={0.18}>
                  <Rig rotation={[0, 0.08, 0]}>
                    <Carousel />
                  </Rig>
                </ScrollControls>

                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Album;