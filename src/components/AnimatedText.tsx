import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', id }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = useMemo(() => text.split(' '), [text]);
  const totalChars = useMemo(() => text.replace(/\s/g, '').length, [text]);

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      id={id}
      className={`${className} flex flex-wrap justify-center gap-x-[0.25em] md:gap-x-[0.3em]`}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-flex">
          {word.split('').map((char, charIndex) => {
            const start = globalCharIndex / totalChars;
            const end = Math.min(1, start + 1 / totalChars);
            globalCharIndex++;
            return (
              <Char
                key={`char-${wordIndex}-${charIndex}-${char}`}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};
