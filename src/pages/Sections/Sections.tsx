import { useParams } from "react-router-dom"
import useClimateData from "../../services/fetchChartData"
import styles from "./Sections.module.css"
import { temperature, co2, methane, no2, ice } from "../../data/SectionInfo"
import { SectionInfo } from "../../interfaces/SectionInfo"
import { Col, Container, Row } from "react-bootstrap"
import TemperatureGraph from "../../component/Graph/TemperatureGraph"
import Co2Graph from "../../component/Graph/Co2Graph"
import MethaneGraph from "../../component/Graph/MethaneGraph"
import No2Graph from "../../component/Graph/No2Graph"
import ArticIceGraph from "../../component/Graph/ArticIceGraph"
import { RingLoader } from "react-spinners"

const sectionDataMap: Record<string, SectionInfo> = {
  temperature,
  co2,
  methane,
  no2,
  ice,
}

const Sections: React.FC = () => {
  const { section } = useParams<{ section: string }>()
  const sectionData = sectionDataMap[section as string]
  const { data, error } = useClimateData(sectionData.apiEndpoint)

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
        {error ? ( // Verifica se c'è un errore
          <div className="py-5">
            <p className={styles.errorMsg}>
              The data retrieval encountered an error. Please try refreshing the page."
            </p>
          </div>
        ) : data ? ( // Se non c'è errore e ci sono dati, visualizza il grafico
          <>
            {section === "temperature" && <TemperatureGraph data={data} />}
            {section === "co2" && <Co2Graph data={data} />}
            {section === "methane" && <MethaneGraph data={data} />}
            {section === "no2" && <No2Graph data={data} />}
            {section === "ice" && <ArticIceGraph data={data} />}
          </>
        ) : (
          // Altrimenti, mostra lo spinner di caricamento
          <div className={styles.spinnerContainer}>
            <RingLoader
              className="d-block mx-auto my-5"
              size={180}
              aria-label="Loading Spinner"
            />
          </div>
        )}
      </Container>
    </main>
  )
}

export default Sections
