import { TemperatureData } from "../../interfaces/TemperatureData";
import { Co2Data } from "../../interfaces/Co2Data";
import { MethaneData, MethaneDataElement } from "../../interfaces/MethaneData";
import { No2Data } from "../../interfaces/No2Data";
import { ArcticData } from "../../interfaces/ArcticData";
import { useEffect, useState } from "react";
import styles from "./Graph.module.css";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Tooltip } from "react-bootstrap";

type Props = {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null;
}

interface MethaneChartData {
  year: string
  ppb: string
}

const MethaneGraph: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<MethaneChartData[]>([])

  useEffect(() => {
    if (data && "methane" in data) {
      setChartData((data as MethaneData).methane
        .filter((obj: MethaneDataElement) => obj.date.includes('.10'))
        .map((obj: MethaneDataElement) => ({
          year: obj.date.replace('.10', ''),
          ppb: obj.average,
        } as MethaneChartData))
      );
    }
  }, [data]);

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="99%" height="100%">
      <BarChart
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
						label={{ value: 'Year', position: 'bottom', offset: 17 }}
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
					<Bar type="monotone" dataKey="ppb" fill="#FFC0CB" barSize={12} />
				</BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MethaneGraph