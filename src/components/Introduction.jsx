import Button from './shared-components/Button';
import Paragraph from './shared-components/Paragraph';
import FramerReveal from './shared-components/FramerReveal';

const Introduction = () => {
  return (
    <FramerReveal
      className='space-y-6 lg:space-y-12 md:p-0'>
      <h1 className='font-semibold text-gray-100 text-3xl md:text-4xl md:text-center md:max-w-lg md:mx-auto lg:text-left lg:max-w-none lg:mx-0 lg:text-5xl xl:text-7xl'>
        Before The Feast! Pre-Order Now.
      </h1>

      <Paragraph className='md:text-center md:mx-auto lg:text-left lg:mx-0'>
        {`Falz's new album, "Before The Feast," is coming. Get ready for a sonic experience. Pre-order and be the first to hear it.`}
      </Paragraph>
      <a
        href='https://lnk.to/BeforeTheFeast'
        target='_blank'
        rel='noopener noreferrer'
        className='w-fit block md:mx-auto lg:mx-0'>
        <Button>Pre Order Now</Button>
      </a>
    </FramerReveal>
  );
};

export default Introduction;
