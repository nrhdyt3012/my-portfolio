import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, threshold = 0.1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      {
        threshold: threshold, // Lebih rendah = lebih cepat trigger
        rootMargin: "0px 0px -20px 0px", // Kurangi rootMargin negatif
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
