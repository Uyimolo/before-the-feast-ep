import albumCover from '../assets/images/before-the-feast.jfif';
import CountdownTimer from './CountdownTimer';
import Introduction from './Introduction';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative space-y-6 pb-6 grid items-center md:grid-cols-2 md:border-none md:gap-6 md:space-y-0 lg:gap-12 lg:pb-12'>
      <motion.div
        className='relative bg-[#08737D] aspect-square h-fit grid-item md:order-2'
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          delay: 5,
        }}>
        <img
          src={albumCover}
          alt='before the feast album cover'
          className='w-full aspect-square'
        />

        <CountdownTimer />
      </motion.div>

      <Introduction />
    </div>
  );
};

export default Hero;
