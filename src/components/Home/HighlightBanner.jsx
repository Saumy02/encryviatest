import React, { useEffect, useMemo, useRef, useState } from 'react';

const HighlightBanner = ({ slides }) => {
  const memoizedSlides = useMemo(() => (Array.isArray(slides) ? slides : []), [slides]);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex, memoizedSlides.length]);

  if (memoizedSlides.length === 0) return null;

  return (
    <section
      className="relative py-10 px-4 text-white flex flex-col items-center overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}
    >
      <div className="flex flex-wrap justify-center items-start gap-6 max-w-7xl mx-auto pb-2">
        {memoizedSlides.map((slide, index) => (
          <div
            key={`${slide.type}-${slide.url}-${index}`}
            className="flex flex-col items-center text-center p-4 flex-shrink-0"
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <div className="rounded-full overflow-hidden flex items-center justify-center bg-gray-800 shadow-2xl mb-4 w-[238px] h-[377px] border border-white/10">
              {slide.type === 'video' ? (
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  src={slide.url}
                  muted
                  loop
                  playsInline
                  preload={index === activeIndex ? 'metadata' : 'none'}
                  autoPlay={index === activeIndex}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.url}
                  alt={slide.title || 'highlight'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`text-xl font-semibold transition-colors ${index === activeIndex ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {slide.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(HighlightBanner);
