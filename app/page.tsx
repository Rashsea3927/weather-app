import DailyForecast from '@/components/DailyForecast';
import HourlyForecast from '@/components/HourlyForecast';
import SearchForm from '@/components/SearchForm';
import TodayForecast from '@/components/TodayForecast';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <main>
      <h1 className='font-bricolage-grotesque text-5xl text-white leading-tight tracking-normal text-center font-bold mb-12 md:w-[482px] md:mx-auto lg:mb-16 lg:w-auto'>
        How’s the sky looking today?
      </h1>
      <SearchForm />
      <div className='lg:grid lg:grid-cols-12 lg:gap-4 lg:h-[688px] xl:gap-8 xl:h-[698px]'>
        <div className='mb-8 lg:col-span-8 lg:mb-0'>
          <TodayForecast />
          <DailyForecast />
        </div>
        <ScrollArea className='bg-neutral-800 px-6 rounded-3xl lg:col-span-4 lg:max-h-[688px] xl:max-h-[698px]'>
          <HourlyForecast />
        </ScrollArea>
      </div>
    </main>
  );
}
