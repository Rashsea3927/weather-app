import Image from 'next/image';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DailyForecast = () => {
  return (
    <section>
      <h3 className='text-xl text-white leading-tight tracking-normal font-semibold mb-5'>Daily Forecast</h3>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-7'>
        {weekDays.map((day) => (
          <div
            key={day}
            className='flex flex-col items-center gap-4 px-[10px] py-4 bg-neutral-800 rounded-xl border border-neutral-600 text-center'
          >
            <p className='text-lg text-white leading-tight tracking-normal'>{day}</p>
            <Image className='w-15 h-auto' src='/assets/icon-sunny.webp' width={320} height={320} alt='' />
            <div className='flex items-center justify-between w-full'>
              <p className='text-base leading-tight tracking-normal text-white'>20&deg;</p>
              <p className='text-base leading-tight tracking-normal text-white'>25&deg;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
