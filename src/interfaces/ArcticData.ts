export interface ArcticData {
  error: null | string
  arcticData: ArcticDataElement[]
}

export interface ArcticDataElement {
  Column1: number;
  year: number;
  month: number;
  "data-type": string;
  hemisphere: string;
  extent: number;
  area: number;
  rank: number;
}