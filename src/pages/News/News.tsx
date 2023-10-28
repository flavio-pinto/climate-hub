import { ListGroup } from "react-bootstrap"
import useNewsData from "../../services/fetchNews"
import styles from "./News.module.css"
import { Link } from "react-router-dom"
import { Article } from "../../interfaces/Article"
import { FaNewspaper } from "react-icons/fa6"
import { RingLoader } from "react-spinners"

const News: React.FC = () => {
  const { news, error } = useNewsData()
  const isViewportHigh = window.innerHeight >= 1200
  const displayedNews = isViewportHigh ? news.slice(0, 5) : news.slice(0, 3)

  return (
    <main className={`${styles.news} p-4`}>
      <h2 className="m-0">
        Latest News{" "}
        <small>
          (powered by{" "}
          <a
            href="https://newyorktimesclonebyflavio.netlify.app/"
            target="_blank"
          >
            The New York Times Clone
          </a>
          )
        </small>
      </h2>
      {error ? (
        <div className={styles.errorContainer}>
          <p className={`${styles.errorText} d-block mx-auto my-5`}>
            The data retrieval encountered the following error: {error}
            <br />
            Try Refreshing the page.
          </p>
        </div>
      ) : news.length === 0 ? (
        <div className={styles.spinnerContainer}>
          <RingLoader
            className="d-block mx-auto my-5"
            size={180}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <ListGroup className={`${styles.newsContentList} mb-4`}>
          {displayedNews.map((article: Article) => (
            <Link
              className={`${styles.newsContentItem} d-block py-3`}
              to={article.url}
              target="_blank"
              key={article.url}
            >
              <ListGroup.Item>
                <h3>
                  <FaNewspaper className="me-2" />
                  {article.title}
                </h3>
                <p>{article.abstract}</p>
                <small>{article.byline}</small>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      )}
      <a
        className={styles.more}
        href="https://newyorktimesclonebyflavio.netlify.app/search/climate"
        target="_blank"
      >
        Want more news on climate change? Check out my clone of The New York
        Times!
      </a>
    </main>
  )
}

export default News
