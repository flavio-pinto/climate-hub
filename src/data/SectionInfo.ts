import Arctic from "../assets/images/arctic.png"
import No2 from "../assets/images/no2.png"
import Methane from "../assets/images/methane.png"
import Co2 from "../assets/images/co2.png"
import Temperature from "../assets/images/temperature-earth.png"
import { SectionInfo } from "../interfaces/SectionInfo"

export const temperature: SectionInfo = {
  name: "Temperature",
  apiEndpoint: "temperature-api",
  description: "The increase in global temperatures is a key driver of climate change. Human activities, such as the burning of fossil fuels and deforestation, release greenhouse gases into the atmosphere. These gases trap heat, leading to a warming effect known as the greenhouse effect. Rising temperatures result in extreme weather events, disruptions to ecosystems, and sea level rise. To mitigate this, we must transition to renewable energy, reduce our carbon footprint, promote sustainable practices, and enhance energy efficiency in all sectors.",
  image: Temperature,
  whatCanWeDo: [
    "Use renewable energy",
    "Reduce carbon footprint",
    "Support sustainable practices",
    "Promote energy efficiency"
  ]
}

export const co2: SectionInfo = {
  name: "CO2",
  apiEndpoint: "co2-api",
  description: "Carbon dioxide (CO2) is a colorless, odorless gas composed of one carbon atom and two oxygen atoms. It is a crucial component of Earth's atmosphere, playing a pivotal role in the carbon cycle. While essential for plant photosynthesis, excessive CO2 emissions from human activities, such as burning fossil fuels, contribute significantly to the greenhouse effect and climate change. Monitoring and mitigating CO2 levels have become imperative in addressing environmental challenges and promoting sustainable practices to ensure a balanced and habitable planet for future generations.",
  image: Co2,
  whatCanWeDo: [
    "Transition to Renewable Energy Sources",
    "Afforestation and Reforestation",
    "Promote Sustainable Transportation",
    "Improve Energy Efficiency"
  ]
}

export const methane: SectionInfo = {
  name: "Methane",
  apiEndpoint: "methane-api",
  description: "Methane is a greenhouse gas composed of carbon and hydrogen, primarily found in natural gas. Despite having a shorter atmospheric lifespan compared to CO2, methane has a significantly higher global warming potential in the short term. Activities associated with fossil fuel extraction and utilization, such as the oil and gas industry, are major sources of methane emissions. The increase in methane concentrations significantly contributes to climate change by accelerating global warming. Managing methane emissions has become a focal point for mitigating environmental impacts and slowing down climate change.",
  image: Methane,
  whatCanWeDo: [
    "Improve Waste Management",
    "Promote Sustainable Farming Practices",
    "Enhance Safety and Efficiency in Energy Production",
    "Reduce Emissions from the Oil and Gas Industry"
  ]
}

export const no2: SectionInfo = {
  name: "NO2",
  apiEndpoint: "nitrous-oxide-api",
  description: "Nitrogen dioxide (NO2) is a significant air pollutant primarily stemming from combustion processes in vehicles, industrial activities, and power plants. Though not a greenhouse gas itself, NO2 plays a pivotal role in atmospheric processes. In the context of climate change, the indirect impact of NO2 lies in its role in the formation of secondary pollutants, which not only contribute to global warming but also compromise air quality. To mitigate these effects, strategies involve adopting cleaner technologies, promoting sustainable transportation, and enforcing regulations aimed at reducing NO2 emissions.",
  image: No2,
  whatCanWeDo: [
    "Enhance Industrial Practices",
    "Improve Urban Planning",
    "Facilitate Telecommuting and Remote Work",
    "Encourage Green Building Practices"
  ]
}

export const ice: SectionInfo = {
  name: "Polar Glaciers",
  apiEndpoint: "arctic-api",
  description: "The polar ice caps are intricately linked to global warming. As Earth's temperature rises due to increased greenhouse gas emissions, these ice caps experience accelerated melting. This melting contributes to rising sea levels, posing a threat to coastal areas and ecosystems. Additionally, the reflective nature of ice plays a crucial role in maintaining Earth's temperature balance; as ice diminishes, more sunlight is absorbed by darker surfaces, further intensifying global warming. The loss of polar ice also impacts wildlife habitats, causing ecological disruptions.",
  image: Arctic,
  whatCanWeDo: [
    "Promote Research and Awareness",
    "Support Local Adaptation",
    "Encourage Sustainable Consumption Practices",
    "Preservation of Polar Ecosystems"
  ]
}
