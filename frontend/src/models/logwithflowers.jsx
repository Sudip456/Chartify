import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function Threedimensional() {
  // Using the useGLTF hook to load the .glb model
  const { scene } = useGLTF("/logwithflowers.glb");

  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}
      rotation={[-Math.PI / 11, -Math.PI / 10, Math.PI / 14]}
    />
  );
}

export default function Logmodel() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[10, 10, 15]} intensity={1} />
      <directionalLight position={[15, 10, 15]} intensity={1} />
      <directionalLight position={[15, 10, -15]} intensity={1} />
      <directionalLight position={[15, -10, 15]} intensity={1} />
      <directionalLight position={[-5, 5, 15]} intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <Threedimensional />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
}
