import { motion } from 'framer-motion';

import Spinner from './Spinner';

export default function FullPageTextSpinner() {
  return (
    <div className='relative h-screen w-screen'>
      <motion.div
        className='absolute right-[-535px] bottom-[-840px]'
        initial={{ rotate: 45 }}
        animate={{ rotate: -315 }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}>
        <Spinner
          text='FEAST FEAST FEAST FEAST FEAST'
          radius={800}
          fontSize='150px'
          letterSpacing={11}
        />
      </motion.div>
      <motion.div
        className='absolute right-[-385px] bottom-[-695px]'
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}>
        <Spinner
          text='FEAST FEAST FEAST FEAST'
          radius={650}
          fontSize='150px'
          letterSpacing={15}
        />
      </motion.div>
      <motion.div
        className='absolute right-[-200px] bottom-[-510px]'
        initial={{ rotate: -5 }}
        animate={{ rotate: -365 }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}>
        <Spinner
          text='FEAST FEAST FEAST'
          radius={480}
          fontSize='150px'
          letterSpacing={21}
        />
      </motion.div>
    </div>
  );
}
