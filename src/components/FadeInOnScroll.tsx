// components/FadeInOnScroll.tsx
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils'; // if you're using className utils

const FadeInOnScroll = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        `transition-all duration-1000 ease-out transform opacity-0 translate-y-8`,
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;