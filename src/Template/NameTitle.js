import '../Sass/NameTitle.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const NameTitle = () => {
  return (
    <div
      className={
        'bg-orange-300 h-[600px] grid justify-items-center relative overflow-hidden'
      }
    >
      <div className={'h-32 w-[100%] grid justify-items-center'}>
        <p
          className={
            'font-mono lg:text-[800%] text-[600%] font-semibold text-brown underline pt-[100px]'
          }
        >
          Anh Dao
        </p>
      </div>
    </div>
  );
};
