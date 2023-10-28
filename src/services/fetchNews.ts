import axios, { AxiosError, AxiosResponse } from "axios"
import { Article } from "../interfaces/Article"
import { useEffect, useState } from "react"
import { ArticleFromApi } from "../interfaces/ArticleFromApi"

interface NewsResult {
  news: Article[] | []
  error: string | null
}

const useNewsData = (): NewsResult => {
  const [news, setNews] = useState<Article[] | []>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/climate.json?api-key=${import.meta.env.VITE_NEWS_API_KEY}`

      try {
        const response: AxiosResponse = await axios.get(url)
        setNews(response.data.results.map((el: ArticleFromApi) => {
          return {
            title: el.title,
            abstract: el.abstract,
            url: el.url,
            byline: el.byline,
          };
        }))
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
  }, [])
  
  return { news, error }
}

export default useNewsData