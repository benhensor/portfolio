import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.12,
    },
  },
};

export default function BackgroundWord({
  text,
  el: Wrapper = 'p',
  style,
  once,
  repeatDelay,
  animation = defaultAnimations,
}) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper style={style}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.015 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span style={{ display: 'block' }} key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span style={{ display: 'inline-block' }}  key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    style={{ display: 'inline-block' }} 
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span style={{ display: 'inline-block' }} >&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}