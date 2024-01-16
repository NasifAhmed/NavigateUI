import { useEffect, useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useEffect, useState } from "react";

export const Carousel5 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://source.unsplash.com/1200x640/?nature", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://source.unsplash.com/1200x640/?hill", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://source.unsplash.com/1200x640/?mountain", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://source.unsplash.com/1200x640/?river", title: "Escape 4",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://source.unsplash.com/1200x640/?sea", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
      <>
                <div
                    className="w-full h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                    style={{ backgroundImage: \`url(\${sliders[currentSlider].img})\` }}
                >
                    {/* text container here */}
                    <div className={"drop-shadow-lg text-white text-center px-5">
                        <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                        <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                    </div>
                </div>
                {/* slider container */}
                <div className="flex justify-center items-center gap-3 p-2">
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img
                            onClick={() => setCurrentSlider(inx)}
                            key={inx}
                            src={slide.img}
                            className={\`w-fit lg:w-20 h-6 sm:h-8 md:h-12 \${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer\`}
                            alt={slide.title}
                        />
                    ))}
                </div>
            </>
  )};
`;

const sliders = [
    {
        img: 'https://source.unsplash.com/1200x640/?nature',
        title: 'Escape 1',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://source.unsplash.com/1200x640/?hill',
        title: 'Escape 2',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://source.unsplash.com/1200x640/?mountain',
        title: 'Escape 3',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://source.unsplash.com/1200x640/?river',
        title: 'Escape 4',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://source.unsplash.com/1200x640/?sea',
        title: 'Escape 5',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    }
];
export const Carousel5 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <CodeBox codeStr={codeStr}>
            <>
                <div
                    className="w-full h-96 md:h-[540px] lg:h-[640px] xl:h-[780px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                    style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
                >
                    {/* text container here */}
                    <div className="drop-shadow-lg text-white ease-linear duration-300 text-center px-5">
                        <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                        <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                    </div>
                </div>
                {/* slider container */}
                <div className="flex justify-center items-center gap-3 p-2">
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img
                            onClick={() => setCurrentSlider(inx)}
                            key={inx}
                            src={slide.img}
                            className={`w-fit lg:w-20 h-6 sm:h-8 md:h-12 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                            alt={slide.title}
                        />
                    ))}
                </div>
            </>
        </CodeBox>
    );
};
