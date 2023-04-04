import "./App.css";
import React from "react";
import { applyProps, Canvas, MeshProps } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { Mesh } from "three";
import { color } from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 5, 5] }}>
        <color attach="background" args={["goldenrod"]} />
        <Environment preset="city" />
        <Donut scale={[10, 10, 10]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
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
          enableZoom={false}
          panSpeed={0.5}
          maxAzimuthAngle={Math.PI / 4}
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
function Donut(props: MeshProps) {
  const { scene, materials } = useGLTF("/lighdonut.gltf") as any;
  React.useLayoutEffect(() => {
    scene.traverse((obj: Mesh) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }

      if (obj.name.match(/Icing\d{2,}/)) {
        let assign = materials.IcingMaterial.clone();
        applyProps(assign, {
          color: colors[Math.floor(Math.random() * colors.length)],
        });
        obj.material = assign;
      }
    });

    console.log(materials);
    applyProps(materials.SprinklesMaterial, {
      color: "orange",
    });
  });
  return <primitive object={scene} {...props} />;
}

export default App;
