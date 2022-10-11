export interface IVolumeRisk {
    volume: number;
    volatility_ptc: number;
    max_trades: number;
    taker_fee: number;
    maker_fee: number;
}

export interface IVolumeRiskResponse {
    data: IVolumeRisk[];
}