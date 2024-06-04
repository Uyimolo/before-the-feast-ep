import Button from './shared-components/Button';
import Heading2 from './shared-components/Heading2';
import FramerReveal from './shared-components/FramerReveal';

const Tracklist = () => {
  const tracklistData = [
    { title: 'How Many', featuring: ['Crayon'] },
    { title: 'Popping Tonight', featuring: ['Shaybo', 'Phyno'] },
    {
      title: 'Chop The Life',
      featuring: null,
    },
    {
      title: 'Who Go Pay',
      featuring: ['Adekunle Gold'],
    },
    {
      title: 'Shake Kaka',
      featuring: null,
    },
    {
      title: 'Ndi Ike',
      featuring: ['Flavour', 'Odumodublvck'],
    },
  ];

  return (
    <section className=''>
      <div className='space-y-6 bg-[#08737D] px-4 py-14 my-12 grid items-center md:border-none md:px-12 md:gap-6 lg:gap-12 lg:space-y-0 lg:grid-cols-2 xl:px-[10%] xl:py-24 lg:my-20'>
        <FramerReveal className='lg:space-y-8'>
          <Heading2>Before The Feast: The Complete Tracklist</Heading2>
          <a
            href='https://x.com/falzthebahdguy/status/1796614403300696375'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden lg:block'>
            <Button>See Tracklist</Button>
          </a>
        </FramerReveal>
        <FramerReveal delay={0.4}>
          {' '}
          <ul className='space-y-2'>
            {tracklistData.map((track) => (
              <li
                className='flex flex-wrap gap-2 text-gray-100 text-base  md:w-fit md:mx-auto lg:text-2xl lg:mx-0'
                key={track.title}>
                <p className='text-white'>
                  {track.title}{' '}
                  {track.featuring && (
                    <span className='ml-2 font-normal text-gray-300'>{`feat ${track.featuring.join(
                      ', '
                    )}`}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </FramerReveal>
        <FramerReveal className='md:mx-auto lg:hidden'>
          <a
            className=''
            href='https://x.com/falzthebahdguy/status/1796614403300696375'
            target='_blank'
            rel='noopener noreferrer'>
            <Button>See Tracklist</Button>
          </a>
        </FramerReveal>
      </div>
    </section>
  );
};

export default Tracklist;
