/* type Props = {} */

import useNewsData from "../../services/fetchNews"

const News: React.FC = (/* props: Props */) => {
  const { news, error } = useNewsData()
  console.log(news)
  
  
  return (
    <div>News</div>
  )
}

export default News