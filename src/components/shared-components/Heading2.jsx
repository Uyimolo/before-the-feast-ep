/* eslint-disable react/prop-types */

import { cn } from '../../lib/utils';

const Heading2 = ({ children, className = '' }) => {
  return (
    <h2
      className={cn(
        'text-2xl text-gray-100 font-semibold max-w-lg md:mx-auto md:text-center md:text-3xl lg:text-left lg:mx-0 lg:max-w-sm lg:text-4xl',
        className
      )}>
      {children}
    </h2>
  );
};

export default Heading2;
