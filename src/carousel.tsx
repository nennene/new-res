import { useState } from "react";

type HeroCarouselProps = {
  images: string[];
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="relative h-56 overflow-hidden rounded-base md:h-96">
        {images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute block w-full top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              transition-opacity duration-300 ease-linear
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex h-full px-4 items-center group focus:outline-none"
      >
        <span className="inline-flex w-10 h-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white/50">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex h-full px-4 items-center group focus:outline-none"
      >
        <span className="inline-flex w-10 h-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white/50">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HeroCarousel;

