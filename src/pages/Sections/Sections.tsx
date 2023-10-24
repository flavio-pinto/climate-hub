import { useParams } from "react-router-dom";
import useClimateData from "../../services/fetchChartData";
import styles from "./Sections.module.css";
import { temperature, co2, methane, no2, ice } from "../../data/SectionInfo";
import { SectionInfo } from "../../interfaces/SectionInfo";
import { Col, Container, Row } from "react-bootstrap";
import TemperatureGraph from "../../component/Graph/TemperatureGraph";
import Co2Graph from "../../component/Graph/Co2Graph";
import MethaneGraph from "../../component/Graph/MethaneGraph";

const sectionDataMap: Record<string, SectionInfo> = {
  temperature,
  co2,
  methane,
  no2,
  ice,
};

const Sections: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const sectionData = sectionDataMap[section as string];
  const { data, error } = useClimateData(sectionData.apiEndpoint);
  

  if (!section || !sectionDataMap[section]) {
    return (
      <div>
        <p>Sezione non valida</p>
      </div>
    );
  }

  return (
    <main className={`${styles.content} d-flex flex-column flex-lg-row p-4`}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} lg={8} className={styles.contentDescription}>
            <h2>{sectionData.name}</h2>
            <p>{sectionData.description}</p>
          </Col>
          <Col xs={12} lg={4}>
            <img
              src="https://images.vexels.com/media/users/3/298390/isolated/lists/f659981c21d381aba498ac17f44d5b5d-global-warming-planet-earth-cartoon-character.png"
              alt=""
            />
          </Col>
          
        </Row>
        {/* <TemperatureGraph data={data} />
        <Co2Graph data={data} /> */}
        <MethaneGraph data={data} />
      </Container>
    </main>
  );
};

export default Sections;
