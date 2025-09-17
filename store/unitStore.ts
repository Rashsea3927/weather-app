import { create } from 'zustand';

export type UnitType = 'metric' | 'imperial';
export type TemperatureUnitType = 'celsius' | 'fahrenheit';
export type WindSpeedUnitType = 'km/h' | 'mph';
export type PrecipitationUnitType = 'mm' | 'in';

export type StoreState = {
  unit: UnitType;
  temperatureUnit: TemperatureUnitType;
  windSpeedUnit: WindSpeedUnitType;
  precipitationUnit: PrecipitationUnitType;
  setUnit: (unit: UnitType) => void;
  setTemperatureUnit: (unit: TemperatureUnitType) => void;
  setWindSpeedUnit: (unit: WindSpeedUnitType) => void;
  setPrecipitationUnit: (unit: PrecipitationUnitType) => void;
};

export const useUnitStore = create<StoreState>((set) => ({
  unit: 'metric',
  temperatureUnit: 'celsius',
  windSpeedUnit: 'km/h',
  precipitationUnit: 'mm',
  setUnit: (unit) =>
    set(() => ({
      unit,
      temperatureUnit: unit === 'metric' ? 'celsius' : 'fahrenheit',
      windSpeedUnit: unit === 'metric' ? 'km/h' : 'mph',
      precipitationUnit: unit === 'metric' ? 'mm' : 'in',
    })),
  setTemperatureUnit: (temperatureUnit) => set({ temperatureUnit }),
  setWindSpeedUnit: (windSpeedUnit) => set({ windSpeedUnit }),
  setPrecipitationUnit: (precipitationUnit) => set({ precipitationUnit }),
}));
