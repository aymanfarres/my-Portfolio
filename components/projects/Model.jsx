
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { useTexture, useAspect } from '@react-three/drei';
import useMouse from './UseMouse';
import useDimension from './UseDimension';
import { projects } from '../../app/data';

export const vertex = `
varying vec2 vUv;
uniform vec2 uDelta;
uniform float uAmplitude;
float PI = 3.141592653589793238;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.x += sin(uv.y * PI) * uDelta.x * uAmplitude;
    newPosition.y += sin(uv.x * PI) * uDelta.y * uAmplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

export const fragment = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uAlpha;
void main() {
    vec3 texture = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(texture, uAlpha);
}
`;



export default function Model({ activeMenu }) {
  const plane = useRef(null);
  const { viewport } = useThree();
  const dimension = useDimension();
  const mouse = useMouse();
  const opacity = useMotionValue(0);
  
  // Load all textures using useTexture
  const textures = useTexture(projects.map((project) => project.img));
  
  // Ensure there is at least one texture available
  const { width, height } = textures[0]?.image || { width: 1, height: 1 }; // Default to 1 to prevent NaN issues
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const scale = useAspect(width, height, 0.225);
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    if (activeMenu !== null) {
      if (plane.current) {
        plane.current.material.uniforms.uTexture.value = textures[activeMenu];
        animate(opacity, 1, {
          duration: 0.2,
          onUpdate: (latest) => {
            if (plane.current) {
              plane.current.material.uniforms.uAlpha.value = latest;
            }
          },
        });
      }
    } else {
      animate(opacity, 0, {
        duration: 0.2,
        onUpdate: (latest) => {
          if (plane.current) {
            plane.current.material.uniforms.uAlpha.value = latest;
          }
        },
      });
    }
  }, [activeMenu, textures, opacity]);

  const uniforms = useRef({
    uDelta: { value: { x: 0, y: 0 } },
    uAmplitude: { value: 0.0005 },
    uTexture: { value: textures[0] },
    uAlpha: { value: 0 },
  });

  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();

    if (Math.abs(x - smoothX) > 1) {
      smoothMouse.x.set(lerp(smoothX, x, 0.1));
      smoothMouse.y.set(lerp(smoothY, y, 0.1));
      if (plane.current) {
        plane.current.material.uniforms.uDelta.value = {
          x: x - smoothX,
          y: -1 * (y - smoothY),
        };
      }
    }
  });

  const x = useTransform(smoothMouse.x, [0, dimension.width], [-viewport.width / 2, viewport.width / 2]);
  const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2, -viewport.height / 2]);

  return (
    <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
        transparent={true}
      />
    </motion.mesh>
  );
}
