import { ListGroup } from "react-bootstrap";
import useNewsData from "../../services/fetchNews";
import styles from "./News.module.css";
import { Link } from "react-router-dom";
import { Article } from "../../interfaces/Article";
import { FaNewspaper } from "react-icons/fa6";

/* type Props = {} */

const News: React.FC = (/* props: Props */) => {
  const { news, error } = useNewsData();

  return (
    <main className={`${styles.news} p-4`}>
      <h2>
        Latest News <small>(powered by <a href="https://newyorktimesclonebyflavio.netlify.app/" target="_blank">The New York Times Clone</a>)</small>
      </h2>
      <ListGroup className={`${styles.newsContentList} mb-5`}>
        {news.map((article: Article) => (
          <>
            <Link
              className={`${styles.newsContentItem} d-block py-3`}
              to={article.url}
              target="_blank"
            >
              <ListGroup.Item>
                <h3><FaNewspaper className="me-2" />{article.title}</h3>
                <p>{article.abstract}</p>
                <small>{article.byline}</small>
              </ListGroup.Item>
            </Link>
            <hr />
          </>
        ))}
      </ListGroup>
      <a className={styles.more} href="https://newyorktimesclonebyflavio.netlify.app/search/climate" target="_blank">Want more news on climate change? Check out my clone of The New York Times!</a>
    </main>
  );
};

export default News;
