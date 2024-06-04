import albumCover from '../assets/images/before-the-feast.jfif';
import CountdownTimer from './CountdownTimer';
import Introduction from './Introduction';
import FramerReveal from './shared-components/FramerReveal';

const Hero = () => {
  return (
    <div className='relative space-y-6 pb-6 grid items-center lg:grid-cols-2 md:border-none md:gap-6 md:space-y-0 lg:gap-12 lg:pb-12'>
      <FramerReveal
        className='relative bg-[#08737D] aspect-square h-fit grid-item md:max-w-lg md:mx-auto lg:mx-0 lg:max-w-none lg:order-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          // delay:0,
        }}>
        <img
          src={albumCover}
          alt='before the feast album cover'
          className='w-full aspect-square'
        />

        <CountdownTimer />
      </FramerReveal>

      <Introduction />
    </div>
  );
};

export default Hero;
