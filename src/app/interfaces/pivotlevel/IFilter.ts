export const INTERVAL = {
  m1: '1m',
  m5: '5m',
  m15: '15m',
  m30: '30m',
  h1: '1h',
  h2: '2h',
  h4: '4h',
  h6: '6h',
  h12: '12h',
  d1: '1d',
  w1: '1w',
  M1: '1M',
};
export const INTERVAL_LIST = [
  INTERVAL.m1,
  INTERVAL.m5,
  INTERVAL.m15,
  INTERVAL.m30,
  INTERVAL.h1,
  INTERVAL.h2,
  INTERVAL.h4,
  INTERVAL.h6,
  INTERVAL.h12,
  INTERVAL.d1,
  INTERVAL.w1,
  INTERVAL.M1,
];

export interface GenericFilter {
  symbol?: string;
  interval?: string;
  limit?: number;
}
