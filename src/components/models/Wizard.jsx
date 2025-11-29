




"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization

  const { nodes, materials } = useGLTF('models15/19.glb')


  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.rotation.y =
   -0.35 + Math.sin(state.clock.elapsedTime) * 0.23;
  });


  return (

          <group ref={modelRef}>

    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 1.1, 1.4]}>
        <group scale={1.411}>
          <group rotation={[-Math.PI / 2, 9, 2]}>
            <group rotation={[Math.PI / 2, -1.4, 9]} scale={0.01}>
              <group rotation={[Math.PI, 0, 0]} scale={110.41}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchConcreteBase_0.geometry}
                  material={materials.BenchConcreteBase}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Bench_BenchWood_0.geometry}
                  material={materials.BenchWood}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0001.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0002.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0003.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0004.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0005.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.CeillingWire_CeillingWire_0006.geometry}
                  material={materials.CeillingWire}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Emissive_0.geometry}
                  material={materials.Emissive}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Lamp_0.geometry}
                  material={materials.Lamp}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_CeillingWire_0.geometry}
                  material={materials.CeillingWire}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LampBase_Emissive_0.geometry}
                  material={materials.Emissive}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsInside_001_Painting_0.geometry}
                material={materials.Painting}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.PaitingsOutside_Painting_0.geometry}
                material={materials.Painting}
                rotation={[-Math.PI / 2, 0.099, 0]}
                scale={100}
              />
              <group rotation={[-Math.PI / 2, 0, 0]} scale={[50, 22.5, 50]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Ceilling_0.geometry}
                  material={materials.Ceilling}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Emissive_0.geometry}
                  material={materials.Emissive}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Floor_0.geometry}
                  material={materials.Floor}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Walls_Walls_0.geometry}
                  material={materials.Walls}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_d5d7a45d-0f3d-443e-a721-a52008c88198'].geometry}
        material={materials['tripo_mat_d5d7a45d-0f3d-443e-a721-a52008c88198']}
        position={[-243.812, 123.317, 22.795]}
        rotation={[-0.005, -0.036, 0]}
        scale={[169.511, 285.253, 259.532]}
      />



                      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[3, 0, 0]} scale={44.381}>
          <group
            position={[5.199, 6.042, -0.041]}
            rotation={[-Math.PI / 2, 0.793, 0]}
            scale={[1, 0.576, 1]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group position={[83.707, -55.65, -482.33]} rotation={[Math.PI, 0, 0.002]} scale={0}>
                

                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_DarkBlestyshka_001_0.geometry}
                  material={materials.DarkBlestyshka_001}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Fara_0.geometry}
                  material={materials.Fara}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Glass_0.geometry}
                  material={materials.Glass}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_GrenEmissive_0.geometry}
                  material={materials.GrenEmissive}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_GunMetal_0.geometry}
                  material={materials.GunMetal}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Kamuflage_001_0.geometry}
                  material={materials.Kamuflage_001}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_LightBlestyashka_001_0.geometry}
                  material={materials.LightBlestyashka_001}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_RedEmissive_0.geometry}
                  material={materials.RedEmissive}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Remni_0.geometry}
                  material={materials.Remni}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_RoketMetalR_0.geometry}
                  material={materials.RoketMetalR}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Rubber_001_0.geometry}
                  material={materials.Rubber_001}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_SolidKamuflage_001_0.geometry}
                  material={materials.SolidKamuflage_0010}
                  position={[-0.009, 0.433, 1.505]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Korpus_low_Yashik_0.geometry}
                  material={materials.Yashik}
                  position={[-0.009, 0.433, 1.505]}
                />
              </group>
              <group position={[78.02, 0, -367.421]} scale={0}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_BlackMetall_0.geometry}
                  material={materials.BlackMetall}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_DarkBlestyshka_0.geometry}
                  material={materials.DarkBlestyshka}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_Kamuflage_0.geometry}
                  material={materials.Kamuflage}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_LightBlestyashka_0.geometry}
                  material={materials.LightBlestyashka}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_RoketMetalW_0.geometry}
                  material={materials.RoketMetalW}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_Rubber_0.geometry}
                  material={materials.Rubber}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_SolidKamuflage_0.geometry}
                  material={materials.SolidKamuflage}
                  position={[-12366.34, -15651.324, -509.476]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Zadnica_low_ZadnieFanari_0.geometry}
                  material={materials.ZadnieFanari}
                  position={[-12366.34, -15651.324, -509.476]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Korpus_low_SolidKamuflage_001_0001.geometry}
        material={materials['RoketMetalR.001']}
        position={[-245.397, 128.996, 73.829]}
        rotation={[-0.005, -0.036, 0]}
        scale={[169.511, 285.253, 259.532]}
      />
    
    </group> </group>
)}  
  );
  
  




export default Wizard;
useGLTF.preload("/models15/19.glb");
