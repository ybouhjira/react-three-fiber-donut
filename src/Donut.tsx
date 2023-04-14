import {MeshProps} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import React from "react";
import {Mesh} from "three";

export function Donut(props: MeshProps) {
    const {scene} = useGLTF("/lighdonut.gltf");

    React.useLayoutEffect(() => {
        scene.traverse((obj) => {
            if ((obj as Mesh).isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        });
    });

    return <primitive object={scene} {...props} position={[0, 0, 0]}/>
}
