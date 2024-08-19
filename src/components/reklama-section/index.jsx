"use client";

import { Icons } from "@/icons";
import { useRef, useEffect, useState } from "react";

export default function ReklamaSection() {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.warn("Video playback failed due to user interaction requirement:", error);
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
        // Initialize progress state for each video
        setProgress((prev) => [...prev, 0]);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch((error) => {
            console.warn("Video playback failed:", error);
          });
        }
      });
      // Remove event listeners after interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleTimeUpdate = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress((prev) => {
        const updatedProgress = [...prev];
        updatedProgress[index] = currentProgress;
        return updatedProgress;
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-[100vw] h-[100vh] overflow-y-scroll snap-y snap-mandatory"
    >
      {["/reklama/reklama.mp4", "/reklama/reklama2.mp4", "/reklama/reklama3.mp4", "/reklama/reklama4.mp4", "/reklama/reklama5.mp4"].map(
        (src, index) => (
          <div key={index} className="w-full flex items-center bg-[black] relative h-[100vh] snap-start">
            
            <div className="absolute flex flex-col gap-[17px] top-[50%] translate-y-[-50%] right-[16px]">
              <div className="flex flex-col gap-[4px] items-center">
                <Icons.heart fill='#fff' />
                <p className="font-[500] text-[14px] leading-[17px] text-[white]/60">139</p>
              </div>

              <div className="flex flex-col gap-[4px] items-center">
                <Icons.coment fill='#fff' />
                <p className="font-[500] text-[14px] leading-[17px] text-[white]/60">39</p>
              </div>

              <div className="flex flex-col gap-[4px] items-center">
                <Icons.share fill='#fff' />
                <p className="font-[500] text-[14px] leading-[17px] text-[white]/60">47</p>
              </div>

              <div className="flex flex-col gap-[4px] items-center">
                <Icons.save fill='#fff' />
                <p className="font-[500] text-[14px] leading-[17px] text-[white]/60">7</p>
              </div>
            </div>

            {/* data */}
            <div className="px-[16px] absolute bottom-[140px]">
              <div className="flex gap-[4px] items-center mb-[5px]">
                <p className="text-[13px] font-[500] leading-[15.5px] text-[white]">Развернуть</p>
                <Icons.arrow fill='#fff' width='16px' height='16px' className='rotate-[-90deg]' />
              </div>

              <p className="text-[14px] font-[400] leading-[17px] text-[white]">Uzum sizga persil parashoning cheqirmasini taqdim etadi</p>
            </div>

            {/* Order */}
            <div className="w-full absolute bottom-[100px] flex justify-center gap-[22px]">
              <a href="www.uzummarket.uz" target="_blank" className="text-[white] leading-[17px] font-[500] text-[14px]">www.uzummarket.uz</a>
              <span className="h-[16px] w-[1px] bg-[white]"></span>
              <a href="www.uzummarket.uz" target="_blank" className="text-[white] leading-[17px] font-[500] text-[14px]">Buyurtma berish</a>
            </div>

            {/* progress */}
            <div className="absolute bottom-[8.5%] z-[9999] left-[0] w-full h-[4px] bg-[white]/40">
              <div
                className="h-full bg-[white] transition-all"
                style={{ width: `${progress[index]}%` }}
              ></div>
            </div>

            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              className="w-full h-[auto] object-cover"
              preload="none"
              loop
              onClick={() => handleVideoClick(index)}
              onTimeUpdate={() => handleTimeUpdate(index)}
            />
          </div>
        )
      )}
    </section>
  );
}
