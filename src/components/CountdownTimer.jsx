import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = (launchDate) => {
    const now = new Date();
    const timeDifference = launchDate - now;

    // Calculate days, hours, minutes, and seconds
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const updateCountdown = () => {
    const launchDate = new Date('June 7, 2024 00:00:00');

    const { days, hours, minutes, seconds } = getTimeRemaining(launchDate);

    setDays(days.toString().padStart(2, '0'));
    setHours(hours.toString().padStart(2, '0'));
    setMinutes(minutes.toString().padStart(2, '0'));
    setSeconds(seconds.toString().padStart(2, '0'));
  };
  useEffect(() => {
    if (new Date() < new Date('June 7, 2024 00:00:00')) {
      const timer = setTimeout(updateCountdown, 1000);
      return () => clearTimeout(timer);
    }
    return;
  });

  // show 0000000 if launch date has passed

  useEffect(() => {
    if (new Date() > new Date('June 7, 2024 00:00:00')) {
      const zero = 0;
      setDays(zero.toString().padStart(2, '0'));
      setHours(zero.toString().padStart(2, '0'));
      setMinutes(zero.toString().padStart(2, '0'));
      setSeconds(zero.toString().padStart(2, '0'));
    }
  }, []);

  const timerDisplayData = [
    { timeframe: `${days > 1 ? 'Days' : 'Day'}`, duration: days },
    { timeframe: `${hours > 1 ? 'Hours' : 'Hour'}`, duration: hours },
    { timeframe: `${minutes > 1 ? 'Minutes' : 'Minute'}`, duration: minutes },
    { timeframe: `${seconds > 1 ? 'Seconds' : 'Second'}`, duration: seconds },
  ];
  return (
    <div className='w-full top-0 left-1/2 absolute -translate-x-1/2 grid grid-cols-4 gap-1 items-center py-2 px-4 bg-black/30'>
      {timerDisplayData.map((data) => (
        <div
          key={data.timeframe}
          className='flex flex-col gap-1 justify-center items-center p-3 bg-black/60'>
          <p className='text-white text-base lg:text-xl'>{data.duration}</p>
          <p className='text-white text-base lg:text-xl'>{data.timeframe}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
