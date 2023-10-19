import { useParams } from "react-router-dom";
import styles from "./Sections.module.css";
import { temperature, co2, methane, no2, ice } from "../../data/section-data";
import { SectionInfo } from "../../interfaces/SectionInfo";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const sectionDataMap: Record<string, SectionInfo> = {
  temperature,
  co2,
  methane,
  no2,
  ice,
};

const Sections: React.FC = () => {
  const { section } = useParams<{ section: string }>();

  if (!section || !sectionDataMap[section]) {
    return (
      <div>
        <p>Sezione non valida</p>
      </div>
    );
  }

  const sectionData = sectionDataMap[section];

  return (
    <main className={`${styles.content} d-flex p-4`}>
      {/* <ul>
        {sectionData.whatCanWeDo.map(data => (
          <li>{data}</li>
        ))}
      </ul> */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={8} className={styles.contentDescription}>
            <h2>{sectionData.name}</h2>
            <p>{sectionData.description}</p>
          </Col>
          <Col xs={12} lg={4} >
            {/* <ListGroup>
              <h3>What Can We Do?</h3>
              {sectionData.whatCanWeDo.map((data) => (
                <ListGroup.Item>{data}</ListGroup.Item>
              ))}
            </ListGroup> */}
            <img
              src="https://images.vexels.com/media/users/3/298390/isolated/lists/f659981c21d381aba498ac17f44d5b5d-global-warming-planet-earth-cartoon-character.png"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <ListGroup>
              <h3>What Can We Do?</h3>
              {sectionData.whatCanWeDo.map((data) => (
                <ListGroup.Item>{data}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Sections;
