import { useParams } from "react-router-dom";
import { temperature, co2, methane, no2, ice } from "../../data/section-data";
import { SectionInfo } from "../../interfaces/SectionInfo";

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
    <main className="content">
      <h1>{sectionData.name}</h1>
      <p>{sectionData.description}</p>
      <ul>
        {sectionData.whatCanWeDo.map(data => (
          <li>{data}</li>
        ))}
      </ul>
    </main>
  );
};

export default Sections;
