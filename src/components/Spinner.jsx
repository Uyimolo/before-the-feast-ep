/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Spinner({ text, radius, fontSize, letterSpacing }) {
  const characters = text.split('');

  return (
    <motion.div
      className='relative aspect-square '
      style={{ width: radius * 2 }}>
      <p aria-label={text} />
      <p aria-hidden='true' className='text'>
        {characters.map((character, i) => (
          <motion.span
            key={i}
            className={`absolute top-0 left-1/2 text-white font-extrabold tracking-tight`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
            }}>
            {character}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
