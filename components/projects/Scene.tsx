'use client';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';

type SceneProps = {
  activeMenu: number | null;
};

const Scene: React.FC<SceneProps> = ({ activeMenu }) => {
  return (
    <div className='fixed inset-0 w-full h-full z-0'>
      <Canvas>
        <Model activeMenu={activeMenu} />
      </Canvas>
    </div>
  );
};

export default Scene;
