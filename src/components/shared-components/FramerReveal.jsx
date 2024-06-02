/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const FramerReveal = ({ children, className = '', delay=0.2, revealVariants }) => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: false});
 const controls = useAnimation();

 const defaultVariants = {
   hidden: { opacity: 0, y: 120 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.5,
       ease: 'easeOut',
       damping: 8,
       delay: delay,
       stiffness: 100,
     },
   },
 };

  const variants = revealVariants ? revealVariants : defaultVariants;

 useEffect(() => {
   if (isInView) {
     controls.start('visible');
   } else {
     controls.start('hidden');
   }
 }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={controls}
      className={className}>
      {children}
    </motion.div>
  );
};

export default FramerReveal;
