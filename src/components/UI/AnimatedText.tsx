
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  as?: React.ElementType;
  animation?: 'reveal' | 'fade-in' | 'fade-in-up';
  delay?: number;
}

const AnimatedText = ({
  text,
  className,
  once = true,
  as: Tag = 'div',
  animation = 'reveal',
  delay = 0
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (textRef.current) {
            textRef.current.style.opacity = '1';
            
            if (animation === 'reveal') {
              textRef.current.classList.add('animate-text-reveal');
            } else if (animation === 'fade-in') {
              textRef.current.classList.add('animate-fade-in');
            } else if (animation === 'fade-in-up') {
              textRef.current.classList.add('animate-fade-in-up');
            }
            
            if (once) {
              observer.disconnect();
            }
          }
        } else if (!once) {
          if (textRef.current) {
            textRef.current.style.opacity = '0';
            
            if (animation === 'reveal') {
              textRef.current.classList.remove('animate-text-reveal');
            } else if (animation === 'fade-in') {
              textRef.current.classList.remove('animate-fade-in');
            } else if (animation === 'fade-in-up') {
              textRef.current.classList.remove('animate-fade-in-up');
            }
          }
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, [once, animation]);

  return (
    <Tag
      ref={textRef}
      className={cn(
        "opacity-0 overflow-hidden",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </Tag>
  );
};

export default AnimatedText;
