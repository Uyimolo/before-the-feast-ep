import AnnouncementVideo from './components/AnnouncementVideo';
import Footer from './components/Footer';
import FullPageTextSpinner from './components/FullPageTextSpinner';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracklist from './components/Tracklist';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='relative w-full overflow-hidden mx-auto max-w-[1500px] min-h-screen'>
      <Header />
      <motion.div
        className=''
        initial={{ opacity: 1, display: 'block' }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{ duration: 5 }}>
        <FullPageTextSpinner />
      </motion.div>

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
