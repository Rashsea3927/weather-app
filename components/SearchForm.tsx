import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const SearchForm = () => {
  return (
    <form className='flex flex-col gap-3 mb-8 md:flex-row md:gap-4 lg:w-[656px] lg:mx-auto lg:mb-12'>
      <div className='relative md:flex-1'>
        <Input
          className='pl-14 pr-6 py-[18px] bg-neutral-800 rounded-xl border-none h-14 text-white text-xl font-medium tracking-normal leading-tight placeholder:text-neutral-200'
          placeholder='Search for a place...'
        />
        <Image
          className='absolute top-1/2 left-4 -translate-y-1/2 w-5 h-auto'
          src='/assets/icon-search.svg'
          width={21}
          height={21}
          alt='Search Place'
        />
      </div>
      <Button className='bg-blue-500 rounded-xl w-full h-14 text-white text-xl font-medium tracking-normal leading-tight md:w-[114px]'>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
