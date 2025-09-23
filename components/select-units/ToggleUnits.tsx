import { UnitOption } from '@/components/select-units/UnitsContent';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ToggleUnitsProps<T extends string> = {
  title: string;
  value: T;
  changeValue: (value: T) => void;
  options: UnitOption<T>[];
};

const ToggleUnits = <T extends string>({ title, value, changeValue, options }: ToggleUnitsProps<T>) => {
  const handleChangeValue = (nextValue: string | undefined) => {
    if (!nextValue || nextValue === value) return;
    changeValue(nextValue as T);
  };

  return (
    <div className='pb-1 not-last:mb-[10px] not-last:border-b not-last:border-neutral-600'>
      <p className='mb-2 text-sm font-medium leading-tight tracking-normal text-neutral-300'>{title}</p>
      <ToggleGroup type='single' value={value} onValueChange={handleChangeValue} aria-label='Select Unit'>
        {options.map((option) => (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            className={cn(
              'w-full mb-1 px-2 py-[10px] cursor-pointer justify-between text-white text-base leading-tight tracking-normal rounded-lg',
              value === option.value && 'bg-neutral-700'
            )}
          >
            {option.label}
            {value === option.value && <Image src='/assets/icon-checkmark.svg' width={14} height={11} alt='' />}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ToggleUnits;
