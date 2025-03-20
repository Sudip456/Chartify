import { AxesHelper } from "three";
import { useRef } from "react";

import { useHelper } from "@react-three/drei";

function Axes() {
  const axesRef = useRef();
  useHelper(axesRef, AxesHelper, 5); // 5 is the size of the axes

  return <primitive object={new AxesHelper(5)} ref={axesRef} />;
}

export default Axes;
