import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
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
      duration: 0.3,
    },
  },
};

export default function BackgroundWord({
  text,
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
    <Wrapper>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.035 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}

const Wrapper = styled(motion.p)`
  font-size: clamp(1.6rem, 2vw, 2rem);
  text-align: left;
  margin-bottom: 3rem;
  max-width: 60rem;
  @media only screen and (max-width: 480px) {
    margin: 5rem 0;
    max-width: 50rem;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }
`