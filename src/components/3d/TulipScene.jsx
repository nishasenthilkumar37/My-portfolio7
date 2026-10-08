import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Tulip Blossom and Stem Component
function TulipFlower({ mousePosition }) {
  const groupRef = useRef();
  const flowerHeadRef = useRef();
  const stemRef = useRef();
  const leavesRef = useRef();

  // Create customized petal geometry using Lathe or parametric curve
  const { petalGeometries, petalMaterials } = useMemo(() => {
    const geometries = [];
    const materials = [];

    // Curve profile for tulip petal
    const points = [];
    points.push(new THREE.Vector2(0.05, -0.4));
    points.push(new THREE.Vector2(0.25, -0.2));
    points.push(new THREE.Vector2(0.42, 0.1));
    points.push(new THREE.Vector2(0.48, 0.4));
    points.push(new THREE.Vector2(0.35, 0.7));
    points.push(new THREE.Vector2(0.15, 0.95));
    points.push(new THREE.Vector2(0.0, 1.0));

    // Outer and Inner Petal Materials with velvet sheen and gradient colors
    const colors = [
      '#f472b6', // vibrant rose
      '#fb7185', // soft coral rose
      '#e11d48', // deep crimson
      '#e6c88b', // warm champagne gold edge
      '#f43f5e', // rose petal
      '#fda4af'  // pale petal highlight
    ];

    for (let i = 0; i < 6; i++) {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.25, 0.2, 0.35, 0.6, 0.28, 0.95);
      shape.bezierCurveTo(0.15, 1.05, -0.15, 1.05, -0.28, 0.95);
      shape.bezierCurveTo(-0.35, 0.6, -0.25, 0.2, 0, 0);

      const extrudeSettings = {
        depth: 0.04,
        bevelEnabled: true,
        bevelSegments: 5,
        steps: 2,
        bevelSize: 0.03,
        bevelThickness: 0.02
      };

      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometries.push(geom);

      const mat = new THREE.MeshPhysicalMaterial({
        color: colors[i % colors.length],
        emissive: new THREE.Color('#831843'),
        emissiveIntensity: 0.15,
        roughness: 0.35,
        metalness: 0.1,
        clearcoat: 0.3,
        clearcoatRoughness: 0.2,
        transmission: 0.25, // delicate subsurface translucency
        thickness: 0.5,
        side: THREE.DoubleSide
      });
      materials.push(mat);
    }

    return { petalGeometries: geometries, petalMaterials: materials };
  }, []);

  // Stem curve
  const stemGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -2.4, 0),
      new THREE.Vector3(0.08, -1.6, 0.05),
      new THREE.Vector3(-0.06, -0.8, -0.04),
      new THREE.Vector3(0.02, 0, 0.02),
      new THREE.Vector3(0, 0.2, 0)
    ]);
    return new THREE.TubeGeometry(curve, 32, 0.065, 12, false);
  }, []);

  // Leaf geometries
  const leafGeometries = useMemo(() => {
    const leaves = [];
    for (let i = 0; i < 2; i++) {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.quadraticCurveTo(0.35, 0.6, 0.2, 1.6);
      shape.quadraticCurveTo(0.0, 2.1, -0.05, 2.3);
      shape.quadraticCurveTo(-0.15, 1.4, -0.2, 0.8);
      shape.quadraticCurveTo(-0.1, 0.2, 0, 0);

      const geom = new THREE.ExtrudeGeometry(shape, {
        depth: 0.02,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 2,
        bevelSize: 0.015,
        bevelThickness: 0.01
      });
      leaves.push(geom);
    }
    return leaves;
  }, []);

  // Animation frame loop
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating bob
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
      
      // Target rotation influenced by mouse
      const targetRotY = (mousePosition.x * 0.4) + Math.sin(t * 0.5) * 0.15;
      const targetRotX = (-mousePosition.y * 0.3) + Math.cos(t * 0.7) * 0.1;

      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
      groupRef.current.rotation.z = Math.sin(t * 0.9) * 0.06;
    }

    if (flowerHeadRef.current) {
      // Subtle breathing / bloom expansion
      const scale = 1 + Math.sin(t * 1.5) * 0.03;
      flowerHeadRef.current.scale.set(scale, scale * 1.02, scale);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.25, 1.25, 1.25]}>
      {/* Central Flower Head */}
      <group ref={flowerHeadRef} position={[0, 0.25, 0]}>
        {/* Flower Center Stamen Glow */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#f59e0b"
            emissiveIntensity={1.8}
            roughness={0.2}
          />
        </mesh>

        {/* Small Stamen Rods */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <mesh
              key={`stamen-${idx}`}
              position={[Math.cos(rad) * 0.1, 0.5, Math.sin(rad) * 0.1]}
              rotation={[0.15 * Math.sin(rad), 0, -0.15 * Math.cos(rad)]}
            >
              <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
              <meshStandardMaterial color="#fef08a" emissive="#eab308" emissiveIntensity={1} />
            </mesh>
          );
        })}

        {/* Outer 3 Petals */}
        {[0, 120, 240].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <group
              key={`outer-petal-${i}`}
              rotation={[0, rad, 0]}
            >
              <mesh
                geometry={petalGeometries[i]}
                material={petalMaterials[i]}
                position={[0, 0, 0.22]}
                rotation={[-0.32, 0, 0]}
                scale={[1.15, 1.2, 1.15]}
              />
            </group>
          );
        })}

        {/* Inner 3 Petals (Offset by 60 deg) */}
        {[60, 180, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <group
              key={`inner-petal-${i}`}
              rotation={[0, rad, 0]}
            >
              <mesh
                geometry={petalGeometries[i + 3]}
                material={petalMaterials[i + 3]}
                position={[0, 0.08, 0.18]}
                rotation={[-0.18, 0, 0]}
                scale={[1.0, 1.1, 1.0]}
              />
            </group>
          );
        })}
      </group>

      {/* Stem */}
      <mesh ref={stemRef} geometry={stemGeometry} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#15803d"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Leaves */}
      <group ref={leavesRef}>
        {/* Left Leaf */}
        <mesh
          geometry={leafGeometries[0]}
          position={[-0.05, -1.6, 0.05]}
          rotation={[0.25, 0.4, -0.38]}
          scale={[0.9, 0.9, 0.9]}
        >
          <meshStandardMaterial
            color="#16a34a"
            roughness={0.35}
            metalness={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Right Leaf */}
        <mesh
          geometry={leafGeometries[1]}
          position={[0.08, -1.9, -0.05]}
          rotation={[-0.15, -0.5, 0.45]}
          scale={[0.85, 0.85, 0.85]}
        >
          <meshStandardMaterial
            color="#15803d"
            roughness={0.35}
            metalness={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function TulipScene({ className = "" }) {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`w-full h-full relative ${className}`} aria-label="3D Floating Tulip Scene">
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.75} />
        {/* Warm key light for flower petals */}
        <directionalLight position={[4, 5, 4]} intensity={2.2} color="#fff8e7" />
        {/* Soft rose fill light */}
        <directionalLight position={[-4, 2, -3]} intensity={1.5} color="#fda4af" />
        {/* Golden accent rim light */}
        <pointLight position={[0, -2, 2]} intensity={1.2} color="#e6c88b" distance={8} />

        <Float
          speed={1.6}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[-0.15, 0.15]}
        >
          <TulipFlower mousePosition={mousePos.current} />
        </Float>

        {/* Ambient floating golden pollen */}
        <Sparkles
          count={45}
          scale={[3.5, 3.5, 3.5]}
          size={2.8}
          speed={0.6}
          color="#fde047"
          opacity={0.6}
        />
      </Canvas>
    </div>
  );
}
