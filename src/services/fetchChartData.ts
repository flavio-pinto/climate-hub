import { useEffect, useState } from "react"
import axios, { AxiosResponse, AxiosError } from 'axios'
import { TemperatureData } from "../interfaces/TemperatureData"
import { Co2Data } from "../interfaces/Co2Data"
import { MethaneData } from "../interfaces/MethaneData"
import { No2Data } from "../interfaces/No2Data"
import { ArcticData } from "../interfaces/ArcticData"

interface ClimateDataResult {
  data: TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null
  error: string | null
}

const useClimateData = (section: string): ClimateDataResult => {
  const [data, setData] = useState<TemperatureData | Co2Data | MethaneData | No2Data | ArcticData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'https://global-warming.org/api/'
      const url = `${baseUrl}${section}`

      try {
        const response: AxiosResponse = await axios.get(url)
        setData(await response.data)
        setError(null)
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError

          if (axiosError.response) {
            console.error('Server response error:', axiosError.response.status, axiosError.response.data)
            setError(`Server response error: ${axiosError.response.status}`)
          } else if (axiosError.request) {
            console.error('No response from the server:', axiosError.request)
            setError('No response from the server')
          } else {
            console.error('Error configuring request:', axiosError.message)
            setError(`Error configuring request: ${axiosError.message}`)
          }
        } else {
          console.error('Unknown Error:', error)
          setError(`Unknown Error: ${error}`)
        }
      }
    }

    fetchData()
  }, [section])

  return { data, error }
}

export default useClimateData