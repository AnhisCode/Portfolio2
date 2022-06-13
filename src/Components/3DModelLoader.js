import { Canvas } from '@react-three/fiber';
import { Box } from './Model/Box';
import '../Sass/Canvas.scss';
import { OrbitControls } from '@react-three/drei';
import Computer from './Model/Computer';

export const ModelLoader = () => {
  return (
    // <Canvas className={'canvas'}>
    //   <OrbitControls enableZoom={false} />
    //   <ambientLight intensity={0.5} />
    //   <directionalLight position={[-2, 5, 2]} intensity={1} />
    //   <Box />
    // </Canvas>
    <Canvas className={'canvas'}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Computer />
    </Canvas>
  );
};
