import { Col, Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import styles from "./Home.module.css"

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ClimateHub - Home</title>
      </Helmet>
      <main className={`${styles.home} d-flex align-items-center p-4`}>
        <Container fluid>
          <Row className="align-items-center py-4">
            <Col xs={12} lg={6} className={`${styles.homeContent}`}>
              <h2>ClimateHub</h2>
              <p>
                There is unequivocal evidence that Earth is warming at an
                unprecedented rate. Human activity is the principal cause.
                <br />
                <br />
                Human activities are driving the global warming trend observed
                since the mid-20th century.
                <br />
                <br />
                The effects of human-caused global warming are happening now, are
                irreversible on the timescale of people alive today, and will
                worsen in the decades to come.
                <br />
                <br />
                ClimateHub provides the robust scientific data needed to
                understand climate change.
              </p>
            </Col>
            <Col xs={12} lg={6} className={`${styles.earthContainer} d-flex justify-content-center`}>
              <div className={`${styles.earth}`}></div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Home
