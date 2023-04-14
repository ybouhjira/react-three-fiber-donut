import "./App.css";
import React from "react";
import {Canvas} from "@react-three/fiber";
import {AccumulativeShadows, Environment, OrbitControls, RandomizedLight,} from "@react-three/drei";
import {color} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {Donut} from "./Donut";

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["goldenrod"]} />
        <Environment preset="city" />
        <Donut scale={[1, 1, 1]} position={[0, 0.4, 0]} rotation={[0, 0, 0]} />
        <AccumulativeShadows
          temporal
          frames={100}
          color="goldenrod"
          alphaTest={0.65}
          opacity={2}
          scale={14}
          position={[0, 0, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={4}
            ambient={0.5}
            bias={0.001}
            position={[5, 5, -10]}
          />
        </AccumulativeShadows>
        <OrbitControls
          enablePan={false}
          /*enableZoom={false}
           */
        />
      </Canvas>
    </div>
  );
}

const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#ffffff",
  "#000000",
];

export default App;
