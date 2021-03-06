import { NameTitle } from '../Template/NameTitle';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import mountainPicture from '../Images/test.png';
import birdPicture from '../Images/Bird.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Sass/Home.scss';
import { useEffect, useRef, useState } from 'react';
import { ModelLoader } from '../Components/3DModelLoader';

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Parallax pages={1.5} className={'h-96'}>
        <NameTitle />
        <ParallaxLayer speed={1}>
          <img
            src={mountainPicture}
            alt="mountain top"
            className={
              'absolute bottom-[-550px] left-[-4000px] brightness-200 z-10'
            }
          />
          <img
            src={birdPicture}
            alt="birds"
            className={'absolute bottom-[500px] left-[100px] w-[100px]'}
          />
        </ParallaxLayer>
        <ParallaxLayer speed={1.3}>
          <img
            src={mountainPicture}
            alt="mountain top"
            className={
              'absolute bottom-[-625px] left-[-7000px] brightness-150 z-20'
            }
          />
        </ParallaxLayer>
        <ParallaxLayer speed={1.8}>
          <img
            src={mountainPicture}
            alt="mountain top"
            className={'absolute bottom-[-700px] left-[-6000px] z-30'}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={1.8}>
          {/*test*/}
          <div className={'h-[2000px] bg-brown z-20 text-center'}>
            <div className={'w-auto text-orange-300 text-8xl'}>Who am I?</div>
            <div
              className={
                'rounded-lg bg-orange-300 xl:mx-64 md:mx-12 mx-4 drop-shadow-2xl'
              }
            >
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-24 md:px-[90px] px-[20px] py-12 ">
                <div className={'model-container'}>
                  <ModelLoader />
                </div>
                <div className={'text-brown font-bold'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ornare lorem dignissim eros ornare ornare. Cras felis massa,
                  interdum quis lacus id, commodo efficitur orci. Mauris eu
                  turpis nisi. Integer eu odio vulputate, imperdiet metus sed,
                  feugiat arcu. Vestibulum sit amet justo facilisis, scelerisque
                  magna sit amet, pulvinar nunc. Etiam maximus orci eget dolor
                  sollicitudin, ac euismod nunc suscipit. Nunc ornare sem ac
                  mauris porttitor, at placerat sem maximus. Nam volutpat dui
                  venenatis magna bibendum, eu mattis massa malesuada. Maecenas
                  pretium accumsan diam. Suspense accumsan nisi libero, et
                  pulvinar odio placerat aliquam. Nullam eu efficient tortor,
                  sit amet dictum erat. Fusce sollicitudin quis neque eget
                  dignissim. Proin mi purus, ultrices sed quam quis, lobortis
                  malesuada quam. Fusce nunc eros, porttitor a tortor non,
                  accumsan consectetur dui. Quisque hendrerit lectus sed diam
                  ullamcorper placerat. Aenean ac ullamcorper erat, non accumsan
                  ipsum. Cras eu accumsan lacus. Phasellus feugiat sagittis ante
                  vel consequat. Suspendisse accumsan, diam at accumsan aliquet,
                  nulla urna tristique augue, non faucibus enim neque in quam.
                  Fusce commodo porta tortor ut pretium. Nulla eu dictum est.
                  Integer vel tincidunt neque, sit amet iaculis nisl. Nullam ac
                  cursus lacus. Praesent pharetra pretium eros eu bibendum.
                  Suspendisse potenti. Mauris vitae ligula sit amet quam
                  faucibus consectetur sed in elit. Maecenas a ex ut libero
                  maximus lacinia vitae sit amet orci. Pellentesque mollis,
                  velit et fermentum ornare, ligula dolor gravida neque, ac
                  semper sapien orci sit amet ante. Morbi et dictum tortor, nec
                  rhoncus arcu. In suscipit at erat id porttitor. Praesent
                  volutpat elit ac porttitor tincidunt. Nam erat augue,
                  elementum iaculis consectetur quis, tristique a
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
