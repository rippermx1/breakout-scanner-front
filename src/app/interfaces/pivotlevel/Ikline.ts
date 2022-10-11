import { Time } from "lightweight-charts";

export interface Ikline {
  close: number;
  high: number;
  low: number;
  open: number;
  time: string|Time;
  is_closed: boolean;
  volume: number;
  sma_200: number;
  sma_50: number;
  ema_13: number;
  vwap: number;
}

export interface IklineResponse {
  data: Ikline[];
}
