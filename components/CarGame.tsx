"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CarGame: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x232323);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    const obstacles: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.set(
        (Math.random() - 0.5) * 8,
        0.25,
        (Math.random() - 0.5) * 8
      );
      obstacles.push(box);
      scene.add(box);
    }

    // Load car model
    const loader = new GLTFLoader();
    let car: THREE.Object3D;
    loader.load("/toycar.glb", (gltf) => {
      car = gltf.scene;
      car.scale.set(0.2, 0.2, 0.2);
      car.position.set(0, 0, 0);
      scene.add(car);
    });

    // Camera position
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // Controls
    const keys = {
      w: false,
      s: false,
      a: false,
      d: false,
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.hasOwnProperty(event.key)) {
        keys[event.key as keyof typeof keys] = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (keys.hasOwnProperty(event.key)) {
        keys[event.key as keyof typeof keys] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Animation
    let velocity = 0;
    const acceleration = 0.002;
    const friction = 0.98;
    const rotationSpeed = 0.03;

    const detectCollision = (obj: THREE.Object3D) => {
      return obstacles.some((obstacle) => {
        const distance = obj.position.distanceTo(obstacle.position);
        return distance < 0.5;
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (car) {
        if (keys.w) {
          velocity = Math.min(velocity + acceleration, 0.1);
        } else if (keys.s) {
          velocity = Math.max(velocity - acceleration, -0.05);
        } else {
          velocity *= friction;
        }

        if (keys.a) {
          car.rotation.y += rotationSpeed;
        }
        if (keys.d) {
          car.rotation.y -= rotationSpeed;
        }

        const nextPosition = car.position.clone();
        nextPosition.x -= Math.sin(car.rotation.y) * velocity;
        nextPosition.z -= Math.cos(car.rotation.y) * velocity;

        if (!detectCollision({ position: nextPosition })) {
          car.position.copy(nextPosition);
        } else {
          velocity = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "20%", height: "100vh" }} />;
};

export default CarGame;
