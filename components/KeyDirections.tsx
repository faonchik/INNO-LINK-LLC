import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const KeyDirections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const directions = [
    {
      img: 'https://static.tildacdn.com/tild3937-3530-4861-b166-356130396362/automotive.png',
      title: 'Производство компонентов для автомобильной отрасли'
    },
    {
      img: 'https://static.tildacdn.com/tild3637-3833-4664-b339-306631366166/car-wheel_1.png',
      title: 'Особый акцент на производство компонентов для прес-форм'
    },
    {
      img: 'https://static.tildacdn.com/tild3239-3133-4337-b137-636665623361/technology.png',
      title: 'Современные технологии и постоянные исследования'
    },
    {
      img: 'https://static.tildacdn.com/tild3139-3835-4162-b933-366263613135/network.png',
      title: 'Полное сопровождение клиентов от производства до поставки'
    }
  ];

  return (
    <div className="relative w-full" ref={sectionRef}>
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1280 200" 
          preserveAspectRatio="none"
          className="relative block w-full rotate-180"
          style={{ height: '8vw' }}
        >
          <path 
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="t-cover__wrapper t-valign_middle" style={{ height: '1171px' }}>
        {/* Фоновое изображение */}
        <div 
          className="t-cover__carrier absolute inset-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url('https://optim.tildacdn.com/tild3335-3033-4436-a134-313765383031/-/format/webp/WhatsApp_Image_2025-.jpeg')`,
            backgroundAttachment: 'scroll',
            height: '1171px'
          }}
        />
        
        {/* Затемнение */}
        <div 
          className="t-cover__filter absolute inset-0 w-full"
          style={{
            backgroundColor: 'rgb(0, 0, 0)',
            opacity: 0.3,
            height: '1171px'
          }}
        />
        
        {/* Контент */}
        <div className="t1031__wrapper relative z-10" data-hook-content="covercontent">
          <div className="t1031__textwrapper t-width t-width_8 mx-auto">
            <div 
              className={`t1031__title t-section_title t-title t-title_md text-center text-[30px] mb-8 text-white ${isVisible ? 'animate-fadeinleft' : ''}`}
              data-animate-style="fadeinleft"
              data-animate-group="yes"
              style={{ transitionDelay: '0s' }}
            >
              <div style={{ fontSize: '30px' }}>Наши ключевые направления</div>
            </div>
          </div>
          
          <ul className="t1031__blockswrapper t-list__container_inrow4 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {directions.map((direction, index) => (
              <li 
                key={index}
                className={`t1031__col t-list__item t-item t-col t-col_3 ${isVisible ? 'animate-fadeinleft' : ''}`}
                data-animate-style="fadeinleft"
                data-animate-chain="yes"
                style={{ 
                  transitionDelay: `${index * 0.16}s`
                }}
              >
                <div className="t1031__wrapper flex flex-col items-center text-center">
                  <div className="t1031__img w-[120px] h-[120px] mb-6">
                    <Image
                      src={direction.img}
                      alt={direction.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="t1031__title t-name t-name_md text-[20px] font-normal max-w-[250px] text-white">
                    <span style={{ fontWeight: 400 }}>{direction.title}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Нижний треугольник */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1280 200" 
          preserveAspectRatio="none"
          className="relative block w-full"
          style={{ height: '8vw' }}
        >
          <path 
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default KeyDirections; 