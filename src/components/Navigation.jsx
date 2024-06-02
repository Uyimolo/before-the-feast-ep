/* eslint-disable react/prop-types */
import { useMediaQuery } from 'react-responsive';
import closeMenu from '../assets/icons/close-circle-svgrepo-com.svg';
// import { cn } from '../lib/utils';
import Logo from './shared-components/Logo';

const Navigation = ({ setDisplayNavigationMenu }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigationData = [
    { name: 'Home', link: '#' },
    { name: 'About Falz', link: 'https://en.wikipedia.org/wiki/Falz' },
    {
      name: 'Music and More',
      link: 'https://music.apple.com/us/artist/falz/360389344',
    },
  ];
  return (
    <div
      className={
        'absolute w-[90%] max-w-[375px] left-1/2 -translate-x-1/2 top-32 bg-black grid items-center pl-6 rounded-3xl z-10 md:max-w-[450px] lg:relative lg:left-0 lg:top-0 lg:translate-x-0 lg:p-0 lg:w-fit lg:max-w-none lg:rounded-none'
      }>
      <div className='absolute w-full top-0 left-0 py-6 px-6 flex justify-between lg:hidden'>
        <Logo />
        <img
          src={closeMenu}
          alt='close navigation menu'
          className='w-8'
          onClick={() => setDisplayNavigationMenu(false)}
        />
      </div>
      <div className=' space-y-6 my-24 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6 lg:my-0'>
        {navigationData.map((navItem) => (
          <a
            key={navItem.name}
            href={navItem.link}
            target={navItem.name === 'Home' ? '' : '_blank'}
            rel='noopener noreferrer'
            className='text-white text-3xl lg:text-nowrap lg:text-lg xl:text-xl lg:hover:text-amber-100 transition'
            onClick={() => !isDesktop && setDisplayNavigationMenu(false)}>
            {navItem.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
