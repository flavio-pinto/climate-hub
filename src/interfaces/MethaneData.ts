export interface MethaneData {
  methane: MethaneDataElement[]
}

export interface MethaneDataElement {
  date: string
  average: string
  trend: string
  averageUnc: string
  trendUnc: string
}