import { Time } from "lightweight-charts";

export interface VolumeAtTime {
  time?: string|Time;
  volume?: number;
  sell_volume?: number;
  buy_volume?: number;
}
