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
import { Helmet } from "react-helmet"

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
    <>
      <Helmet>
        <title>ClimateHub - {section ? section.toLocaleUpperCase() : ""}</title>
      </Helmet>
      <main className={`${styles.content} d-flex flex-column flex-lg-row p-4`}>
        <Container fluid>
          <Row className={`${styles.contentRow} align-items-center`}>
            <Col xs={12} lg={8} xxl={6} className={`${styles.contentDescription} order-0 order-md-0 order-lg-0`}>
              <h2>{sectionData.name}</h2>
              <p>{sectionData.description}</p>
            </Col>
            <Col xs={12} lg={4} xxl={6} className="order-2 order-md-2 order-lg-1">
              <img
                className={`${styles.sectionImg}`}
                src={sectionData.image}
                alt=""
              />
            </Col>
            <Col xs={12} className={`order 1 order-md-1 order-lg-2`}>
              {error ? (
                <div className="py-5">
                  <p className={styles.errorMsg}>
                    The data retrieval encountered an error. Please try refreshing
                    the page."
                  </p>
                </div>
              ) : data ? (
                <>
                  {section === "temperature" && <TemperatureGraph data={data} />}
                  {section === "co2" && <Co2Graph data={data} />}
                  {section === "methane" && <MethaneGraph data={data} />}
                  {section === "no2" && <No2Graph data={data} />}
                  {section === "ice" && <ArticIceGraph data={data} />}
                </>
              ) : (
                <div className={styles.spinnerContainer}>
                  <RingLoader
                    className="d-block mx-auto my-5"
                    size={180}
                    aria-label="Loading Spinner"
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Sections
