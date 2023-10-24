import { useEffect, useState } from "react";
import styles from "./Graph.module.css";
import { TemperatureData } from "../../interfaces/TemperatureData";
import { Co2Data, Co2DataElement } from "../../interfaces/Co2Data";
import { MethaneData } from "../../interfaces/MethaneData";
import { No2Data } from "../../interfaces/No2Data";
import { ArcticData } from "../../interfaces/ArcticData";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "react-bootstrap";

type Props = {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null;
};

interface Co2ChartData {
  year: string
  ppm: string
}

const Co2Graph: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<Co2ChartData[]>([]);

  useEffect(() => {
    if (data && "co2" in data) {
      setChartData((data as Co2Data).co2
        .filter((obj: Co2DataElement) => obj.month === "1" && obj.day === "1")
        .map((obj: Co2DataElement) => ({
          year: obj.year,
          ppm: obj.trend,
        } as Co2ChartData))
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
            right: 20,
            left: 10,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{
              value: "Year",
              position: "bottom",
              offset: 17,
            }}
            padding={{ left: 30, right: 30 }}
            dataKey="year"
            angle={-35}
            tickMargin={10}
          />
          <YAxis
            label={{
              value: "Ppm",
              angle: -90,
              position: "insideLeft",
              offset: 0,
            }}
            dataKey="ppm"
            type="number"
            domain={["dataMin", "auto"]}
            tickMargin={5}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ppm"
            dot={{ strokeWidth: 2, r: 2 }}
            stroke="#6c8dfa"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Co2Graph;
