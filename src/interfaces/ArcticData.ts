export interface ArcticData {
  error: null | string
  arcticData: ArcticDataResult[]
}

export interface ArcticDataResult {
  Column1: number;
  year: number;
  month: number;
  "data-type": string;
  hemisphere: string;
  extent: number;
  area: number;
  rank: number;
}