import { useEffect, useState } from 'react';
import hamburger from '../assets/icons/hamburger-menu-svgrepo-com.svg';
import Navigation from './Navigation';
import Logo from './shared-components/Logo';
import { useMediaQuery } from 'react-responsive';
const Header = () => {
  const [DisplayNavigationMenu, setDisplayNavigationMenu] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    if (isDesktop) {
      setDisplayNavigationMenu(true);
    }
  }, [isDesktop]);
  return (
    <header className='bg-black/30 w-full max-w-[1800px] left-1/2 -translate-x-1/2 h-20 top-0 fixed left-0 flex items-center justify-between px-4 z-10 backdrop-grayscale backdrop-blur-sm md:px-12 lg:px-20'>
      <Logo />
      {DisplayNavigationMenu && (
        <Navigation setDisplayNavigationMenu={setDisplayNavigationMenu} />
      )}
      {/* ---Navigation Background (curtain) */}
      {DisplayNavigationMenu && !isDesktop && (
        <div
          className='w-full h-screen bg-white/40 absolute top-0 left-0'
          onClick={() => setDisplayNavigationMenu(false)}></div>
      )}
      {!DisplayNavigationMenu && (
        <img
          src={hamburger}
          alt='menu icon'
          className='w-12'
          onClick={() => setDisplayNavigationMenu(!DisplayNavigationMenu)}
        />
      )}
    </header>
  );
};

export default Header;
