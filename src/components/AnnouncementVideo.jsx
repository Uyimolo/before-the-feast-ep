import Button from './shared-components/Button';
import FramerReveal from './shared-components/FramerReveal';
import Heading2 from './shared-components/Heading2';

const AnnouncementVideo = () => {
  return (
    <div className='py-12 grid space-y-6 lg:gap-6 lg:space-y-0 lg:grid-cols-[60%,40%] items-center lg:py-20'>
      <FramerReveal className='space-y-6 lg:space-y-12 lg:order-2'>
        <Heading2>Get Ready to Feast! Watch the Official Announcement</Heading2>
        <a
          href='https://youtu.be/eQjZ3y0kKkA'
          target='_blank'
          rel='noopener noreferrer'
          className=' w-fit hidden lg:block '>
          <Button>See on Youtube</Button>
        </a>
      </FramerReveal>

      <FramerReveal
        delay={0.4}
        className='w-full aspect-video bg-[#08737D] md:mx-auto max-w-2xl lg:mx-0'>
        <iframe
          className='aspect-video w-full h-auto lg:order-1'
          src='https://www.youtube.com/embed/eQjZ3y0kKkA?si=QrwNtbL9uKHu8FHR'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen></iframe>
      </FramerReveal>
      <a
        href='https://youtu.be/eQjZ3y0kKkA'
        target='_blank'
        rel='noopener noreferrer'
        className='w-fit block lg:hidden md:mx-auto'>
        <Button>See on Youtube</Button>
      </a>
    </div>
  );
};

export default AnnouncementVideo;
