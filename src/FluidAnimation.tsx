import React, { useEffect, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useFrame, useLoader } from "@react-three/fiber";

const FINAL_FRAME = 500;
export const FluidAnimation = () => {
  const [frameIndex, setFrameIndex] = useState<number>(1);

  const obj = useLoader(
    OBJLoader,
    `/public/fluid/fluid_mesh_${`${frameIndex}`.padStart(4, "0")}.obj`
  );

  useFrame(() => {
    setFrameIndex((frameIndex) => {
      return (frameIndex % FINAL_FRAME) + 1;
    });
  });

  const scale = 3.5;
  return (
    <primitive
      position={[0, 1, 0]}
      scale={[scale, scale, scale]}
      rotation={[-Math.PI / 2, 0, 0]}
      object={obj}
    />
  );
};
