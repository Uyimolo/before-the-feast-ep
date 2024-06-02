/* eslint-disable react/prop-types */
import { cn } from '../../lib/utils';

const Paragraph = ({ children, className = '' }) => {
  return (
    <p
      className={cn(
        'text-base text-gray-100 leading-6 max-w-lg lg:text-lg lg:text-left lg:mx-0 xl:text-2xl',
        className
      )}>
      {children}
    </p>
  );
};

export default Paragraph;
