import React, { useEffect, useState } from 'react';

export const Box = () => {
  const [xRotation, setXRotation] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setXRotation(xRotation + 0.01);
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <mesh rotation={[xRotation, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
};
