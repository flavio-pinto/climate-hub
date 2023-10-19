export interface TemperatureData {
  error: null | string
  result: TemperatureDataResult[]
}

export interface TemperatureDataResult {
  time: string
  station: string
  land: string
}