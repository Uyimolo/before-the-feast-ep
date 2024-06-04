import { useEffect, useState } from 'react';
import AnnouncementVideo from './components/AnnouncementVideo';
import Footer from './components/Footer';
import FullPageTextSpinner from './components/FullPageTextSpinner';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracklist from './components/Tracklist';
import { motion } from 'framer-motion';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    const showMainContent = setTimeout(() => {
      setShowMainContent(true);
    }, 6000);
    return () => clearTimeout(showMainContent);
  }, []);

  if (!showMainContent) {
    return (
      <motion.div
        className='w-screen h-screen z-30 fixed top-0 left-0 overflow-hidden'
        initial={{ opacity: 1, display: 'block' }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{ duration: 6 }}>
        <FullPageTextSpinner />
      </motion.div>
    );
  }

  return (
    <div className='relative w-full overflow-hidden mx-auto max-w-[1500px] min-h-screen'>
      <Header />

      <main className='space-y-12 px-4 py-24 md:px-12 lg:px-20 lg:py-28'>
        <Hero />
        <AnnouncementVideo />
        <Tracklist />
      </main>

      <Footer />
    </div>
  );
}

export default App;
