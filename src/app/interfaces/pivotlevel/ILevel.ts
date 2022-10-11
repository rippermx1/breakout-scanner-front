import { Time } from 'lightweight-charts';

export interface ILevel {
  time: string | Time;
  value: number;
  type: string;
}

export interface ILevelResponse {
  data: ILevel[];
}

export const TYPE = {
    fractal: 'fractal',
    window: 'window',
}

export const LEVEL_TYPE = {
  support: 'support',
  resistance: 'resistance',
}