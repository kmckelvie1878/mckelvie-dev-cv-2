import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

interface BackgroundTextProps {
  className?: string;
  text: string;
}

const TextWrapper = styled.div`
  position: relative;
  transform-origin: top center;
  top: 3rem;
  letter-spacing: -0.4rem;
  background-image: linear-gradient(to right, #8b5cf6, #2dd4bf);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

function BackgroundText({ text, className }: BackgroundTextProps) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const element = el.current;
      if (element !== null && element.textContent) {
        if (element.textContent.length > 5) {
          const margin = element.textContent.length > 10 ? -600 : -100 * (element.textContent.length - 5)
          const windowWidth = window.innerWidth;
          const scalableContainerWidth = windowWidth - margin;
          const scalableWidth = element.offsetWidth;
          element.style.transform = `scale(${scalableContainerWidth / scalableWidth})`;
        } else {
          element.style.fontSize = '32vw';
          element.style.lineHeight = '32vw';
          element.style.transform = 'scale(1)';
        }
      }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);



  return (
    <motion.div key={"bg-text"} initial={{opacity: 0}} animate={{opacity: 0.07}} transition={{duration: 1}} className={className}>
      <TextWrapper ref={el}>{text}</TextWrapper>
    </motion.div>
  );
}

const StyledBackgroundText = styled(BackgroundText)`
  position: fixed;
  font-size: 15rem;
  width: 100vw;
  top: 1rem;
  left: 50%;
  height: 100%;
  text-align: center;
  transform: translateX(-50%) scale(1);
  font-weight: 900;
  z-index: -1;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default StyledBackgroundText;