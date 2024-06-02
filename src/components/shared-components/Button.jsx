/* eslint-disable react/prop-types */

import { cn } from '../../lib/utils';

const Button = ({ children, className = '' }) => {
  return (
    <button
      className={cn(
        'bg-gradient-to-t from-gray-700 to-black w-fit text-amber-100 border border-amber-100 px-6 py-4 rounded-lg focus:border-white hover:from-black hover:to-gray-700 transition',
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
