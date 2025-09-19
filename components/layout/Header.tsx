import SelectUnits from '@/components/select-units/SelectUnits';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex items-center justify-between mb-12 md:mb-16'>
      <Image className='w-auto h-7 md:h-10' priority src='/assets/logo.svg' width={197} height={40} alt='Weather Now' />
      <SelectUnits />
    </header>
  );
};

export default Header;
