'use client';
import React, { useState } from 'react';
import Projects from './Projects';
import Scene from './Scene';

const AllIn: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div>
      <Projects setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
    </div>
  );
};

export default AllIn;
