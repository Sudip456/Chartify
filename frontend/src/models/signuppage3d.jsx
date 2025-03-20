import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function Threedimensional() {
  // Using the useGLTF hook to load the .glb model
  const { scene } = useGLTF("/plant.glb");

  return (
    <primitive
      object={scene}
      scale={[4, 4, 4]}
      rotation={[-Math.PI / 13, -Math.PI / 12, Math.PI / 10]}
    />
  );
}

export default function Signupmodel() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[10, 10, 15]} intensity={1} />
      <directionalLight position={[10, 5, 5]} intensity={1} />
      <directionalLight position={[10, 5, 5]} intensity={1} />
      <directionalLight position={[-10, 5, 5]} intensity={1} />
      <Threedimensional />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </Canvas>
  );
}
