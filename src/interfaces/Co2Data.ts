export interface Co2Data {
  co2: Co2DataElement[]
}

export interface Co2DataElement {
  year: string
  month: string
  day: string
  cycle: string
  trend: string
}