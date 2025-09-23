'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const HourlyForecast = () => {
  const now = new Date();
  const todayIndex = now.getDay();
  const today = days[todayIndex];
  const nextDays = Array.from({ length: 6 }, (_, i) => days[(todayIndex + i + 1) % 7]);
  const hour = now.getHours();
  const hoursArray = Array.from({ length: 24 - hour }, (_, i) => {
    const h = hour + i;
    const ampm = h < 12 ? 'AM' : 'PM';
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    return `${displayHour} ${ampm}`;
  });

  return (
    <section className='py-6'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-xl text-white leading-tight tracking-normal font-semibold'>Hourly forecast</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='w-30 bg-neutral-600 gap-3 py-2 text-sm leading-tight tracking-normal rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-neutral-700'>
              {today}
              <Image
                className='w-[9px] h-[14px] md:w-3 md:h-[18px]'
                src='/assets/icon-dropdown.svg'
                width={13}
                height={8}
                alt=''
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent align='end' sideOffset={10} className='w-[214px] bg-neutral-800 border border-neutral-600'>
            <div>
              <ToggleGroup className='flex flex-col' type='single' value='days' aria-label='Select Day'>
                {nextDays.map((day) => (
                  <ToggleGroupItem
                    key={day}
                    value={day}
                    className='text-white text-base leading-tight tracking-normal px-2 py-[10px] hover:bg-neutral-700 rounded-lg'
                  >
                    {day}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {hoursArray.map((time) => (
        <div
          key={time}
          className='flex items-center justify-between pl-3 pr-4 border border-neutral-600 bg-neutral-700 rounded-lg h-[60px] mb-4 last:mb-0'
        >
          <div className='flex items-center gap-2'>
            <Image className='w-10 h-auto' src='/assets/icon-storm.webp' width={320} height={320} alt='Weather Icon' />
            <span className='text-white font-medium text-xl leading-tight tracking-normal'>{time}</span>
          </div>
          <span className='text-white text-base leading-tight tracking-normal'>20&deg;</span>
        </div>
      ))}
    </section>
  );
};

export default HourlyForecast;
