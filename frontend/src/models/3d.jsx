import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function Threedimensional() {
  // Using the useGLTF hook to load the .glb model
  const { scene } = useGLTF("/chartify3dmodel.glb");

  return (
    <primitive object={scene} scale={[2, 2, 2]} rotation={[-0.3, -2.1, 0.5]} />
  );
}

export default function Threemodel() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Threedimensional />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
}
