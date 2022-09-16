import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { PointLight } from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./logo.gltf");
  const three = useThree();
  console.log(three.camera.position);

  return (
    <>
      <primitive object={gltf.scene} scale={6} />
    </>
  );
};

const Home: NextPage = () => {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 10, 5] }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
          />
          <ambientLight intensity={0.5} />
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
