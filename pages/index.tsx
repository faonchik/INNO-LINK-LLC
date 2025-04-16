import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AboutCompany from '../components/AboutCompany';
import KeyDirections from '../components/KeyDirections';
import Advantages from '../components/Advantages';
import Features from '../components/Features';
import ProductGallery from '../components/ProductGallery';
import ThreadedProducts from '../components/ThreadedProducts';
import SpringVents from '../components/SpringVents';
import ResearchDevelopment from '../components/ResearchDevelopment';
import ProductionProcess from '../components/ProductionProcess';
import QualityControl from '@/components/QualityControl';
import CoverImage from '@/components/CoverImage';
import Partners from '@/components/Partners';
import FAQ from '../components/FAQ';
import About from '../components/About';
import HeroTitle from '../components/HeroTitle';

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Инициализация ширины экрана
    setWindowWidth(window.innerWidth);
    setIsMounted(true);

    if (typeof window !== 'undefined' && isMounted) {
      const bgElement = document.querySelector('.background-image');
      if (bgElement) {
        bgElement.classList.add('blur-animation');
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);

  // Определяем, нужен ли параллакс-эффект
  const isParallaxEnabled = windowWidth >= 1440;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Первый блок с блюром */}
      <div className="t-cover relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Обертка для параллакса */}
        <div 
          className="absolute inset-0 w-full"
          style={{
            height: '150vh',
            top: '-25vh',
            transform: isParallaxEnabled ? `translateY(${scrollPosition * 0.5}px)` : 'none',
            willChange: isParallaxEnabled ? 'transform' : 'auto',
          }}
          data-content-cover-parallax={isParallaxEnabled ? "fixed" : ""}
          data-content-cover-height="100vh"
        >
          {/* Фоновое изображение с блюром */}
          <div 
            className="blur-animation absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: 'url("https://static.tildacdn.com/tild3133-3935-4533-b831-306437663762/noroot.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        {/* Затемнение */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: '-webkit-linear-gradient(top, rgba(51, 51, 51, 0.4), rgba(51, 51, 51, 0.4))'
          }}
        />

        {/* t-container */}
        <div className="w-full pt-[120px] xs:pt-[100px] sm:pt-[60px] md:pt-[180px] lg:pt-[200px] pl-[120px]">
          <div className="flex flex-col items-center relative z-[1] pt-[60px] xs:pt-[80px] sm:pt-[100px] md:pt-[120px] md:items-start"
            style={{ height: 'auto', minHeight: '900px' }}
          >
            <div className="flex items-center w-full">
              <div data-hook-content="covercontent" className="w-full">
                <HeroTitle />

                {/* Кнопки */}
                <div className="t181__button-wrapper w-full flex" style={{ marginTop: '60px' }}>
                  <a 
                    href="#rec928394316" 
                    className="t-btn mr-[10px]"
                    style={{ 
                      color: '#032a62', 
                      backgroundColor: '#ffffff',
                      padding: '15px 30px',
                      borderRadius: '0px',
                      fontSize: '14px',
                      fontWeight: 400,
                      display: 'inline-block',
                      minWidth: '145px',
                      border: '1px solid #f5f5f5'
                    }}
                  >
                    Продукты
                  </a>
                  <a 
                    href="#rec933317711" 
                    className="t-btn"
                    style={{ 
                      color: '#032a62', 
                      backgroundColor: '#ffffff',
                      padding: '15px 30px',
                      borderRadius: '0px',
                      fontSize: '14px',
                      fontWeight: 400,
                      display: 'inline-block',
                      minWidth: '145px',
                      border: '1px solid #f5f5f5'
                    }}
                  >
                    Контакты
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-16 w-full">
        <About />
      </section>

      <section id="key-directions" className="w-full">
        <KeyDirections />
      </section>

      <section id="advantages" className="w-full">
        <Advantages />
      </section>

      <section id="features" className="w-full">
        <Features />
      </section>

      <section id="products" className="w-full">
        <ProductGallery />
      </section>

      <section id="threaded-products" className="w-full">
        <ThreadedProducts />
      </section>

      <section id="spring-vents" className="w-full">
        <SpringVents />
      </section>

      <section id="research-development" className="w-full">
        <ResearchDevelopment />
      </section>

      <section id="production-process" className="w-full">
        <ProductionProcess />
      </section>

      <QualityControl />
      <Partners />
      <FAQ />
    </div>
  );
};

export default Home; 