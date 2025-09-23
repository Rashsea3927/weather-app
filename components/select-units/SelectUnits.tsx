'use client';

import UnitsContent from '@/components/select-units/UnitsContent';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';

const SelectUnits = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='w-[89px] bg-neutral-800 gap-[6px] py-2 text-sm leading-tight tracking-normal rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-neutral-700 md:w-[119px] md:text-base md:py-3 md:gap-[10px] md:rounded-lg'>
          <Image className='w-[14px] h-auto md:w-4' src='/assets/icon-units.svg' width={16} height={16} alt='' />
          Units
          <Image
            className='w-[9px] h-[14px] md:w-3 md:h-[18px]'
            src='/assets/icon-dropdown.svg'
            width={13}
            height={8}
            alt=''
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='end'
        sideOffset={10}
        className='px-2 py-[6px] bg-neutral-800 shadow-md w-[214px] border border-neutral-600 rounded-xl'
      >
        <UnitsContent />
      </PopoverContent>
    </Popover>
  );
};

export default SelectUnits;
