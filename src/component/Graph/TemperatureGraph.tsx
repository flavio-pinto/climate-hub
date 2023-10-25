import React, { useEffect, useState } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { TemperatureData, TemperatureDataResult } from "../../interfaces/TemperatureData"
import { Co2Data } from "../../interfaces/Co2Data"
import { MethaneData } from "../../interfaces/MethaneData"
import { No2Data } from "../../interfaces/No2Data"
import { ArcticData } from "../../interfaces/ArcticData"
import styles from "./Graph.module.css"

type Props = {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null
}

interface TemperatureChartData {
  time: string
  temperature: string
}

const Graph: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<TemperatureChartData[]>([])

  useEffect(() => {
    if(data && "result" in data) {
      setChartData(
        (data as TemperatureData).result
          .filter((obj: TemperatureDataResult) => obj.time.includes(".04"))
          .map((obj: TemperatureDataResult) => {
            return {
              time: obj.time.replace(".04", ""),
              temperature: obj.station,
            }
          })
      )
    }
  }, [data])

  const gradientOffset = () => {
    const maxCelsius = Math.max(...chartData.map((i) => Number(i.temperature)))
    const minCelsius = Math.min(...chartData.map((i) => Number(i.temperature)))

    if (maxCelsius <= 0) {
      return 0
    }
    if (minCelsius >= 0) {
      return 1
    }

    return maxCelsius / (maxCelsius - minCelsius)
  }

  const offset = gradientOffset()

  if (chartData.length === 0) {
    return <h3>Errore: Nessun dato disponibile per generare il grafico.</h3>
  }

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="99%">
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
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={offset} stopColor="#f87575" stopOpacity={1} />
              <stop offset={offset} stopColor="#5c95ff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{ value: "Year", position: "bottom", offset: 17 }}
            dataKey="time"
            angle={-35}
            interval={19}
            tickMargin={10}
          />
          <YAxis
            label={{
              value: "Celsius",
              angle: -90,
              position: "insideLeft",
              offset: 10,
            }}
            dataKey="temperature"
            type="number"
            domain={["min - 1.49", "auto"]}
            allowDataOverflow={true}
            allowDecimals={false}
            tickMargin={10}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temperature"
            dot={{ stroke: "#000", r: 0.5 }}
            stroke=""
            fill="url(#splitColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
