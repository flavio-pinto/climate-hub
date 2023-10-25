import { useEffect, useState } from "react";
import { ArcticData, ArcticDataElement } from "../../interfaces/ArcticData";
import { Co2Data } from "../../interfaces/Co2Data";
import { MethaneData } from "../../interfaces/MethaneData";
import { No2Data } from "../../interfaces/No2Data";
import { TemperatureData } from "../../interfaces/TemperatureData";
import styles from "./Graph.module.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "react-bootstrap";

type Props = {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null;
};

interface ArticIceGraphData {
  year: number;
  extent: number;
  area: number;
}

const ArticIceGraph: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<ArticIceGraphData[]>([]);

  useEffect(() => {
    if (data && "arcticData" in data) {
      setChartData(
        (data as ArcticData).arcticData.map((obj: ArcticDataElement) => {
          return {
            year: obj.year,
            extent: obj.extent,
            area: obj.area,
          };
        })
      );
    }
  }, [data]);

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={chartData}
          syncId="id"
          margin={{
            top: 10,
            right: 30,
            left: 2,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{ value: "Year", position: "bottom", offset: 17 }}
            dataKey="year"
            angle={-35}
            tickMargin={10}
          />
          <YAxis
            label={{
              value: "Km2 (in millions)",
              angle: -90,
              position: "insideLeft",
              offset: 10,
            }}
            tickMargin={10}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="extent"
            stroke=""
            fill="#63dfe4"
            dot={{ stroke: "#000", r: 0.5 }}
          />
          <Area
            type="monotone"
            dataKey="area"
            stroke=""
            fill="#6c8dfa"
            dot={{ stroke: "#000", r: 0.5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ArticIceGraph;
