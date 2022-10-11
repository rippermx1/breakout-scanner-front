// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8001',
  socketUrl: 'http://127.0.0.1:8001/ws',
  pivotLevelScannerSocketUrl: 'ws://localhost:8002',
  volumeScannerSocketUrl: 'ws://localhost:8003',
  mainSocketServer: 'ws://localhost:8001/ws'
};