import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

function Threedimensional() {
  // Using the useGLTF hook to load the .glb model
  const { scene } = useGLTF("/loginpage.glb");

  return (
    <primitive
      object={scene}
      scale={[0.07, 0.07, 0.07]}
      rotation={[-Math.PI / 8, (2 * Math.PI) / 9, Math.PI / 15]}
    />
  );
}

export default function Loginmodel() {
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
