import '../Sass/NameTitle.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect } from 'react';
import AOS from 'aos';

export const NameTitle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className={
        'bg-orange-300 h-[70%] grid justify-items-center relative overflow-hidden'
      }
    >
      <div className={'h-32 w-[100%] grid justify-items-center'}>
        <p
          className={
            'font-mono lg:text-[800%] text-[600%] font-semibold text-brown underline pt-[100px]'
          }
          data-aos="fade-up"
        >
          Anh Dao
        </p>
      </div>
    </div>
  );
};
