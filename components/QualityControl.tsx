import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const QualityControl: React.FC = () => {
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

  const checkItems = [
    {
      text: 'Тщательный контроль на всех этапах производства'
    },
    {
      text: 'Проверка всей партии продукции на брак'
    },
    {
      text: 'Финальная ручная проверка более чем 100 специалистами'
    }
  ];

  return (
    <div 
      className="py-[60px] bg-[#032a62]" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[560px] mx-auto text-center text-white">
          <h2 
            className={`text-[30px] mb-[40px] md:mb-[20px] ${isVisible ? 'animate-fadeinup' : 'opacity-0'}`}
          >
            Контроль качества
          </h2>
          <p 
            className={`text-[20px] mb-[105px] md:mb-[45px] ${isVisible ? 'animate-fadeinup' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Наша <strong>система управления качеством</strong> включает несколько уровней проверки:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {checkItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-start gap-4 ${isVisible ? 'animate-fadeinup' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <img
                src="https://static.tildacdn.com/lib/icons/tilda/-/paint/ffffff--2-0-100/check_bullet_round_corner.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <div className="text-white text-lg font-normal">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityControl; 