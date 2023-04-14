import {MeshProps} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import React from "react";
import {Mesh} from "three";

export function Donut(props: MeshProps) {
    const {scene, materials} = useGLTF("/lighdonut.gltf") as any;
    React.useLayoutEffect(() => {
        scene.traverse((obj: Mesh) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        });
    });

    return <primitive object={scene} {...props} />;
}
