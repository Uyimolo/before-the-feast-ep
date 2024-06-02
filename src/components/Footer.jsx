import instagram from '../assets/icons/instagram-1-svgrepo-com.svg';
import twitter from '../assets/icons/twitter-color-svgrepo-com.svg';
import tiktok from '../assets/icons/tiktok-logo-logo-svgrepo-com.svg';
import spotify from '../assets/icons/spotify-color-svgrepo-com.svg';
import audiomack from '../assets/icons/audiomack-svgrepo-com.svg';
import boomplay from '../assets/icons/boomplay-svgrepo-com.svg';
import youtubeMusic from '../assets/icons/youtube-music-song-multimedia-audio-svgrepo-com.svg';
const Footer = () => {
  const mediaData = [
    [
      'Join the bahd guys club',
      [
        {
          platform: 'Twitter',
          icon: twitter,
          link: 'https://twitter.com/falzthebahdguy',
        },
        {
          platform: 'Instagram',
          icon: instagram,
          link: 'https://instagram.com/falzthebahdguy',
        },
        {
          platform: 'Tiktok',
          icon: tiktok,
          link: 'https://tiktok.com/falzthebahdguy',
        },
      ],
    ],
    [
      'Listen to more songs by Falz',
      [
        {
          platform: 'Audiomack',
          icon: audiomack,
          link: 'https://twitter.com/falzthebahdguy',
        },
        {
          platform: 'Spotify',
          icon: spotify,
          link: 'https://instagram.com/falzthebahdguy',
        },
        {
          platform: 'Youtube Music',
          icon: youtubeMusic,
          link: 'https://tiktok.com/falzthebahdguy',
        },
        {
          platform: 'Boomplay',
          icon: boomplay,
          link: 'https://tiktok.com/falzthebahdguy',
        },
      ],
    ],
  ];

  return (
    <footer className='bg-black w-full flex flex-col space-y-12 px-4 py-12 md:flex-row md:space-y-0 md:justify-between md:px-12 lg:px-20'>

        
      {/* Map over parent get individual social data */}
      {mediaData.map((mediaType, index) => (
        <div className='space-y-2 w-fit' key={index}>
          {/* Get Headings mediatype[0] */}
          <p className='text-white text-sm md:text-left'>
            {mediaType[0]}
          </p>
          <div className='flex space-x-6'>
            {/* Map over children to get icons and links */}
            {mediaType[1].map((account) => (
              <div key={account.platform} className=''>
                <a href={account.link} target='_blank' rel='noreferrer'>
                  <img
                    src={account.icon}
                    alt={`visit falz on ${account.platform}`}
                    className='w-8'
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
