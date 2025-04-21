import React, { useState, useEffect } from 'react';

// Определяем интерфейс для партнера
interface Partner {
  src: string;
  style: {
    width: string;
    height: string;
  }
}

const Partners = () => {
  // Группировка партнеров по рядам согласно макету
  const firstRowPartners: Partner[] = [
    {
      src: "/partnerLogos/IMI.png",
      style: {
        width: '180px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Continental.png",
      style: {
        width: '240px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Honda.png",
      style: {
        width: '180px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/pirelli.png",
      style: {
        width: '280px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/SKF.png",
      style: {
        width: '180px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/himile.png",
      style: {
        width: '230px',
        height: 'auto'
      }
    }
  ];

  const secondRowPartners: Partner[] = [
    {
      src: "/partnerLogos/AMETEK.png",
      style: {
        width: '200px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Nokian Tyres.png",
      style: {
        width: '220px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Hankook.png",
      style: {
        width: '220px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/FLEXTRONICS.png",
      style: {
        width: '240px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Michelin.svg",
      style: {
        width: '250px',
        height: 'auto'
      }
    }
  ];

  // Используем хук useEffect для отслеживания размера экрана
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    // Функция для обновления ширины окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Устанавливаем начальное значение
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    
    // Очистка при размонтировании
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const getPartnerStyle = (partner: Partner) => {
    const baseStyle = { ...partner.style };
    
    if (windowWidth < 639) {
      // Уменьшаем размер для мобильных
      const scale = 0.75;
      return {
        ...baseStyle,
        width: `${parseInt(baseStyle.width) * scale}px`
      };
    }
    
    return baseStyle;
  };

  const containerStyle = {
    height: windowWidth < 639 ? '90px' : '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div id="partners" className="relative h-auto md:h-[700px] py-10 md:py-0">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://optim.tildacdn.com/tild6665-3265-4239-b438-633632373939/-/format/webp/WhatsApp_Image_2025-.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          height: '100%'
        }}
      />

      {/* Фильтр */}
      <div
        className="absolute inset-0"
        style={{
          height: '100%',
          backgroundColor: 'rgba(153, 153, 153, 0.7)'
        }}
      />

      {/* Контент */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full py-8 md:py-16">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 md:mb-4">
              Партнеры
            </h2>
            <p className="text-lg md:text-xl text-black">
              Мы поставляем компоненты ведущим мировым производителям, их подрядчиками и компаниям-производителям.
            </p>
          </div>

          <div className="w-full max-w-[1200px] border-red-500 border-2 rounded">
            {/* Контейнер для обоих рядов с фиксированным отступом */}
            <div className="space-y-8 md:space-y-16">
              {/* Первый ряд */}
              <div className={`grid ${windowWidth < 639 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-6'} gap-3 md:gap-4 border-b-2 border-red-500 pb-4`}>
                {firstRowPartners.map((partner, index) => (
                  <div
                    key={index}
                    style={containerStyle}
                    className={`flex justify-center items-center ${index === 0 ? 'border-l-2 border-red-500' : ''}`}
                  >
                    <img
                      src={partner.src}
                      alt=""
                      style={getPartnerStyle(partner)}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Второй ряд */}
              <div className={`grid ${windowWidth < 639 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-5'} gap-3 md:gap-8 border-b-2 border-red-500 pb-4`}>
                {secondRowPartners.map((partner, index) => (
                  <div
                    key={index}
                    style={containerStyle}
                    className={`flex justify-center items-center ${index === 0 ? 'border-l-2 border-red-500' : ''}`}
                  >
                    <img
                      src={partner.src}
                      alt=""
                      style={getPartnerStyle(partner)}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
