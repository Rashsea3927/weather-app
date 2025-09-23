import ToggleUnits from '@/components/select-units/ToggleUnits';
import { Button } from '@/components/ui/button';
import { PrecipitationUnitType, TemperatureUnitType, useUnitStore, WindSpeedUnitType } from '@/store/unitStore';

export type UnitOption<T extends string> = {
  value: T;
  label: string;
};

const temperatureOptions: UnitOption<TemperatureUnitType>[] = [
  { value: 'celsius', label: 'Celsius (°C)' },
  { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
];

const windSpeedOptions: UnitOption<WindSpeedUnitType>[] = [
  { value: 'km/h', label: 'km/h' },
  { value: 'mph', label: 'mph' },
];

const precipitationOptions: UnitOption<PrecipitationUnitType>[] = [
  { value: 'mm', label: 'Millimeters (mm)' },
  { value: 'in', label: 'Inches (in)' },
];

const UnitsContent = () => {
  const unit = useUnitStore((state) => state.unit);
  const temperatureUnit = useUnitStore((state) => state.temperatureUnit);
  const windSpeedUnit = useUnitStore((state) => state.windSpeedUnit);
  const precipitationUnit = useUnitStore((state) => state.precipitationUnit);

  const setUnit = useUnitStore((state) => state.setUnit);
  const setTemperatureUnit = useUnitStore((state) => state.setTemperatureUnit);
  const setWindSpeedUnit = useUnitStore((state) => state.setWindSpeedUnit);
  const setPrecipitationUnit = useUnitStore((state) => state.setPrecipitationUnit);

  const handleSwitchUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
  };

  return (
    <div>
      <Button
        onClick={handleSwitchUnit}
        className='w-full justify-start mb-1 px-2 py-[10px] text-white text-base leading-tight tracking-normal cursor-pointer hover:bg-neutral-700 rounded-lg focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-white'
      >
        Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
      </Button>
      {/* Temperature */}
      <ToggleUnits
        title='Temperature'
        value={temperatureUnit}
        changeValue={setTemperatureUnit}
        options={temperatureOptions}
      />
      {/* Wind Speed */}
      <ToggleUnits title='Wind Speed' value={windSpeedUnit} changeValue={setWindSpeedUnit} options={windSpeedOptions} />
      {/* Precipitation */}
      <ToggleUnits
        title='Precipitation'
        value={precipitationUnit}
        changeValue={setPrecipitationUnit}
        options={precipitationOptions}
      />
    </div>
  );
};

export default UnitsContent;
