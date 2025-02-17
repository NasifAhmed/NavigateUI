'use client';
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const codeStr = `import { useCallback, useEffect, useState } from "react";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = ['https://source.unsplash.com/1200x670/?nature','https://source.unsplash.com/1200x670/?hill','https://source.unsplash.com/1200x670/?mountain','https://source.unsplash.com/1200x670/?river','https://source.unsplash.com/1200x670/?sea'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1), [sliderImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-[240px] w-full md:h-[470px] lg:h-[670px] relative overflow-hidden">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={\`rounded-full duration-300 bg-white \${currentSlider === inx ? "w-8" : "w-2"} h-2\`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-300 flex transform-gpu" style={{ transform: \`translateX(-\${currentSlider * 100}%)\`}}>
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-72 bg-black/20 sm:h-96 md:h-[670px] object-cover" alt={\`Slider - \${inx + 1}\`}/>
          ))}
        </div>
    </div>
  );
};
`;
export const Carousel1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliderImages = [
        'https://source.unsplash.com/1200x670/?nature',
        'https://source.unsplash.com/1200x670/?hill',
        'https://source.unsplash.com/1200x670/?mountain',
        'https://source.unsplash.com/1200x670/?river',
        'https://source.unsplash.com/1200x670/?sea'
    ];

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));

    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
    }, [sliderImages.length]);
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [nextSlider, currentSlider]);
    return (
        <CodeBox codeStr={codeStr}>
            <div className="relative h-[240px] w-full overflow-hidden md:h-[470px] lg:h-[670px]">
                {/* arrow left */}
                <button onClick={prevSlider} className="absolute left-3 top-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 md:h-8 md:w-8">
                    <svg className="icon h-4 w-4 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#0095FF"
                                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                            ></path>
                        </g>
                    </svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="absolute right-3 top-1/2 z-50  flex h-6 w-6 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 md:h-8 md:w-8">
                    <svg className="icon h-4 w-4 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#0095FF"
                                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                            ></path>
                        </g>
                    </svg>
                </button>
                {/* dots */}
                <div className="absolute bottom-4 z-50 flex w-full items-center justify-center gap-1 rounded-full">
                    {sliderImages.map((_, inx) => (
                        <button
                            key={inx}
                            onClick={() => {
                                setCurrentSlider(inx);
                            }}
                            className={`rounded-full bg-white duration-300 ${currentSlider === inx ? 'w-8' : 'w-2'} h-2`}
                        ></button>
                    ))}
                </div>
                {/* Carousel container */}
                <div
                    className="relative flex transform-gpu duration-300 ease-linear"
                    style={{
                        transform: `translateX(-${currentSlider * 100}%)`
                    }}
                >
                    {/* sliders */}
                    {sliderImages.map((_, inx) => (
                        <Image key={_} width={1200} height={640} src={_} className="h-72 min-w-full bg-black/20 object-cover sm:h-96 md:h-[670px]" alt={`Slider - ${inx + 1}`} />
                    ))}
                </div>
            </div>
        </CodeBox>
    );
};
