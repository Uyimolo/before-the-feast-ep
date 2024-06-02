import { motion } from 'framer-motion';
import Button from './shared-components/Button';
import Paragraph from './shared-components/Paragraph';

const Introduction = () => {
  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: 'easeOut',
        delay: 5,
      }}
      className='space-y-6 lg:space-y-12 md:p-0'>
      <h1 className='font-semibold text-gray-100 text-3xl md:text-4xl lg:text-5xl xl:text-7xl'>
        Before The Feast! Pre-Order Now.
      </h1>

      <Paragraph>
        {`Falz's new album, "Before The Feast," is coming. Get ready for a sonic experience. Pre-order and be the first to hear it.`}
      </Paragraph>
      <a
        href='https://lnk.to/BeforeTheFeast'
        target='_blank'
        rel='noopener noreferrer'
        className='w-fit block'>
        <Button>Pre Order Now</Button>
      </a>
    </motion.div>
  );
};

export default Introduction;
