export interface MethaneData {
  methane: MethaneDataElement[]
}

interface MethaneDataElement {
  date: string
  average: string
  trend: string
  averageUnc: string
  trendUnc: string
}