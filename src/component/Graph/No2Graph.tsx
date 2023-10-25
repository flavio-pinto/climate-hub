import { useEffect, useState } from "react";
import { ArcticData } from "../../interfaces/ArcticData";
import { Co2Data } from "../../interfaces/Co2Data";
import { MethaneData } from "../../interfaces/MethaneData";
import { No2Data, No2DataElement } from "../../interfaces/No2Data";
import { TemperatureData } from "../../interfaces/TemperatureData";
import styles from "./Graph.module.css";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Tooltip } from "react-bootstrap";

type Props = {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null;
}

interface Co2ChartData {
  year: string
  ppb: string
}

const No2Graph: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<Co2ChartData[]>([])

  useEffect(() => {
    if(data && "nitrous" in data) {
      setChartData(
        (data as No2Data).nitrous
          .filter((obj: No2DataElement) => obj.date.includes(".10"))
          .map((obj: No2DataElement) => {
            return {
              year: obj.date.replace(".10", ""),
              ppb: obj.average,
            };
          })
      );
    }
  }, [data]);

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="99%" height="100%">
      <LineChart
					data={chartData}
					syncId="id"
					margin={{
						top: 10,
						right: 30,
						left: 10,
						bottom: 30,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						label={{ value: "Year", position: 'bottom', offset: 17 }}
						dataKey="year"
						angle={-35}
						tickMargin={10}
					/>
					<YAxis
						label={{ value: "Ppb", angle: -90, position: 'insideLeft', offset: 0 }}
						dataKey="ppb"
						type="number"
						domain={['dataMin', 'auto']}
						tickMargin={5}
					/>
					<Tooltip />
					<Line
						type="monotone"
						dataKey="ppb"
						dot={{ strokeWidth: 2, r: 2 }}
						stroke="#f87575"
						strokeWidth={2}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default No2Graph