import "./App.css";
import React, { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame, Camera } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

function App() {
  const [count, setCount] = useState(0);
  const cameraPosition = new Vector3(0, 2, 0);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 75, near: 0.1, far: 1000 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <axesHelper args={[1000]} />
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        {Array.from({ length: 10 }, (_, i) => (
          <mesh
            rotation={[0, Math.PI / 4, 0]}
            position={[
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
            ]}
          >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}

export default App;
