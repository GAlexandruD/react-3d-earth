import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

import EarthDayMap from "../assets/8k_earth_daymap.jpg";
import EarthNightMap from "../assets/8k_earth_nightmap.jpg";
import EarthNormalMap from "../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/8k_earth_clouds.jpg";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() / 6;
    cloudsRef.current.rotation.y = clock.getElapsedTime() / 6;
  });

  return (
    <>
      {
        //   <ambientLight intensity={1} />
      }
      <pointLight position={[2, 0, 5]} intensity={1.2} color="#f6f3ea" />
      <Stars
        radius={300}
        depth={60}
        count={5000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 2]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          transparent={true}
          side={THREE.DoubleSide}
        />
        ;
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
          target={[0, 0, 0]}
          minDistance={3.15}
          maxDistance={8}
        />
      </mesh>
    </>
  );
};

export default Earth;
