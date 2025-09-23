import Image from 'next/image';

const TodayForecast = () => {
  return (
    <section className='mb-8 lg:mb-12'>
      <div className='relative w-full h-[286px] rounded-3xl overflow-hidden mb-5 lg:mb-8'>
        <picture>
          <source srcSet='/assets/bg-today-large.svg' media='(min-width: 768px)' width={800} height={286} />
          <Image
            className='absolute top-0 left-0 -z-1 w-full h-full object-cover'
            src='/assets/bg-today-small.svg'
            width={343}
            height={286}
            alt=''
          />
        </picture>
        <div className='w-full h-full grid items-center md:px-6'>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='text-center mb-4 md:mb-0 md:text-left'>
              <h2 className='text-2xl tracking-normal leading-tight text-white font-bold mb-3'>Berlin, Germany</h2>
              <p className='text-lg tracking-normal leading-tight text-white/80 font-medium'>Tuesday, Aug 5, 2025</p>
            </div>
            <div className='flex gap-5 justify-center items-center mr-2'>
              <Image className='w-30 h-auto' src='/assets/icon-sunny.webp' width={320} height={320} alt='' />
              <p className='font-bricolage-grotesque italic text-8xl leading-none text-white font-semibold tracking-tight w-[152px]'>
                20&deg;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div className='p-5 bg-neutral-800 rounded-xl border border-neutral-600'>
          <p className='text-lg text-neutral-200 leading-tight tracking-normal mb-6'>Feels Like</p>
          <p className='text-3xl text-white leading-none tracking-normal lg:text-2xl xl:text-3xl'>22&deg;</p>
        </div>
        <div className='p-5 bg-neutral-800 rounded-xl border border-neutral-600'>
          <p className='text-lg text-neutral-200 leading-tight tracking-normal mb-6'>Humidity</p>
          <p className='text-3xl text-white leading-none tracking-normal lg:text-2xl xl:text-3xl'>46%</p>
        </div>
        <div className='p-5 bg-neutral-800 rounded-xl border border-neutral-600'>
          <p className='text-lg text-neutral-200 leading-tight tracking-normal mb-6'>Wind Speed</p>
          <p className='text-3xl text-white leading-none tracking-normal lg:text-2xl xl:text-3xl'>14 km/h</p>
        </div>
        <div className='p-5 bg-neutral-800 rounded-xl border border-neutral-600'>
          <p className='text-lg text-neutral-200 leading-tight tracking-normal mb-6'>Precipitation</p>
          <p className='text-3xl text-white leading-none tracking-normal lg:text-2xl xl:text-3xl'>0 mm</p>
        </div>
      </div>
    </section>
  );
};

export default TodayForecast;
