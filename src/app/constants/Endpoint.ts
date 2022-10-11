export default class Endpoint {
  public static MICROSERVICE = {
    klines: '/klines',
    fractalLevels: '/fractal/levels',
    windowLevels: '/window/levels',
    symbols: '/symbols',
    volumeRisk: '/volume-risk',
  };
  public static SOCKET = {
    klines: '/klines',
    volumeAtTime: '/volume-at-time',
    stopKlines: '/stop/klines',
  }
}
