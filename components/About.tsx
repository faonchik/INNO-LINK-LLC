import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  // Отслеживаем ширину экрана
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isResizing, setIsResizing] = useState(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      setWindowWidth(window.innerWidth);
      
      // Сбросить флаг ресайза после небольшой задержки
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    };
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }
      }
    };
  }, []);

  // Определяем высоту изображения в зависимости от ширины экрана
  const getImageHeight = () => {
    if (windowWidth <= 320) {
      return '200px';
    } else if (windowWidth <= 768) {
      return '350px';
    } else if (windowWidth <= 1024) {
      return '500px';
    } else if (windowWidth <= 1440) {
      return '600px';
    } else {
      return '760px';
    }
  };

  // Определяем стили для изображения
  const getImageStyle = () => {
    const baseStyle = { 
      objectFit: 'cover' as const,
      transition: isResizing ? 'none' : 'all 0.3s ease-in-out'
    };
    
    if (windowWidth >= 1920) {
      return {
        ...baseStyle,
        objectPosition: 'center'
      };
    }
    
    return baseStyle;
  };

  return (
    <section id="about" className="bg-white w-full">
      <div className="w-full">
        <div className="flex flex-col 2xl:flex-row gap-[10px] items-start max-w-[1920px] mx-auto justify-between">
          {/* Левая колонка с изображением */}
          <div className={`w-full ${windowWidth >= 1920 ? '2xl:w-[50%]' : '2xl:w-[1014px]'}`}>
            <div className="w-full relative" style={{ height: getImageHeight() }}>
              <Image
                src="/assets/about-company-bg.jpg"
                alt="About company background"
                fill
                style={getImageStyle()}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
            </div>
          </div>

          {/* Правая колонка с текстом */}
          <div className={`w-full ${windowWidth >= 1920 ? '2xl:w-[45%]' : '2xl:w-[800px]'} pl-[10px]`}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
              <img
                src="https://optim.tildacdn.com/tild3832-3530-4263-a564-383539636336/-/resize/132x/-/format/webp/image.png"
                alt="INNO LINK LLC Logo"
                className="w-[176px] h-[128px] object-contain mr-[10px]"
              />
              <div
                className="tn-atom text-[42px] font-bold flex"
                style={{
                  transformOrigin: 'center center',
                  lineHeight: '46px'
                }}
              >
                О КОМПАНИИ
              </div>
            </div>
            <div
              className="text-[30px] mt-[60px]"
              style={{
                transformOrigin: 'center center',
                lineHeight: '50px',
                verticalAlign: 'middle',
                color: '#000000',
                fontFamily: 'Arial, Arial, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.5px',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderStyle: 'solid',
                wordBreak: 'normal'
              }}
            >
              <strong className="text-[32px]">INNO LINK LLC</strong> — это международная производственная компания, специализирующаяся на выпуске <strong>высококачественных компонентов</strong> для автомобильной, судостроительной и полупроводниковой промышленности. Благодаря современным технологиям и строгому контролю качества компания обеспечивает надежность и долговечность своей продукции.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
