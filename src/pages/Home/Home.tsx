import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";

/* type Props = {} */

const Home: React.FC = (/* props: Props */) => {
  return (
    <main className={`${styles.home} d-flex align-items-center p-4`}>
      {/* <div className={`${styles.homeContent}`}>
        <h2>ClimateHub</h2>
        <p>
          There is unequivocal evidence that Earth is warming at an
          unprecedented rate. Human activity is the principal cause.
          <br />
          Human activities are driving the global warming trend observed since
          the mid-20th century.
          <br />
          The effects of human-caused global warming are happening now, are
          irreversible on the timescale of people alive today, and will worsen
          in the decades to come.
          <br />
          ClimateHub provides the robust scientific data needed to understand
          climate change.
        </p>
      </div>
      <div className={`${styles.earth}`}></div> */}
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className={`${styles.homeContent}`}>
            <h2>ClimateHub</h2>
            <p>
              There is unequivocal evidence that Earth is warming at an
              unprecedented rate. Human activity is the principal cause.
              <br /><br />
              Human activities are driving the global warming trend observed
              since the mid-20th century.
              <br /><br />
              The effects of human-caused global warming are happening now, are
              irreversible on the timescale of people alive today, and will
              worsen in the decades to come.
              <br /><br />
              ClimateHub provides the robust scientific data needed to
              understand climate change.
            </p>
          </Col>
          <Col xs={12} lg={6} className={`${styles.earthContainer}`}><div className={`${styles.earth}`}></div></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
