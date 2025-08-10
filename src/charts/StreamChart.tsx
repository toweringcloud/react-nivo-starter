import { ChartWrapper } from "../helper.tsx";
import { ResponsiveStream } from "@nivo/stream";

// Stream Chart 데이터 타입
interface StreamDatum {
  [key: string]: number;
}

// Stream Chart 데이터 예시
const streamData: StreamDatum[] = [
  { Raoul: 13, Josiane: 11, Marcel: 19, Renée: 14, Paul: 18, Céline: 12 },
  { Raoul: 15, Josiane: 17, Marcel: 15, Renée: 12, Paul: 11, Céline: 14 },
  { Raoul: 11, Josiane: 18, Marcel: 14, Renée: 13, Paul: 12, Céline: 15 },
  { Raoul: 19, Josiane: 12, Marcel: 11, Renée: 15, Paul: 13, Céline: 17 },
  { Raoul: 12, Josiane: 14, Marcel: 17, Renée: 11, Paul: 15, Céline: 18 },
];

// NivoStream Chart 컴포넌트
const NivoStream = () => (
  <ChartWrapper>
    <ResponsiveStream
      data={streamData}
      keys={["Raoul", "Josiane", "Marcel", "Renée", "Paul", "Céline"]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType="silhouette"
      colors={{ scheme: "nivo" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#2c998f",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "#e4c912",
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={[
        { match: { id: "Paul" }, id: "dots" },
        { match: { id: "Marcel" }, id: "squares" },
      ]}
      dotSize={8}
      dotColor={{ from: "color" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [{ on: "hover", style: { itemTextColor: "#000000" } }],
        },
      ]}
      theme={{
        axis: {
          ticks: { text: { fill: "#ddd" } },
          legend: { text: { fill: "#ddd" } },
        },
        legends: { text: { fill: "#ddd" } },
        tooltip: { container: { background: "#333" } },
      }}
    />
  </ChartWrapper>
);

export default NivoStream;
