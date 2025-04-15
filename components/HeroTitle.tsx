import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="hero-title-wrapper w-full flex flex-col items-start pl-[20px] sm:pl-[30px] md:pl-[60px]">
      {/* Заголовок */}
      <div className="hero-title mb-2 md:mb-4">
        <h1 
          className="text-[64px] sm:text-[100px] md:text-[120px] lg:text-[150px] text-white font-normal text-left"
          style={{ 
            color: 'rgb(255, 255, 255)', 
            fontWeight: 400,
            lineHeight: 1.1
          }}
        >
          INNO LINK LLC
        </h1>
      </div>

      {/* Подзаголовок */}
      <div className="hero-subtitle">
        <p 
          className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white text-left"
          style={{ 
            color: 'rgb(255, 255, 255)',
            lineHeight: 1.3
          }}
        >
          Технологии будущего, качество без компромиссов!
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .hero-title h1 {
            font-size: 64px !important;
          }
          .hero-subtitle p {
            font-size: 20px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .hero-title h1 {
            font-size: 100px !important;
          }
          .hero-subtitle p {
            font-size: 24px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title h1 {
            font-size: 120px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTitle; 