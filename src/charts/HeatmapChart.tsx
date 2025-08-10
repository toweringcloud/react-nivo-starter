import { ChartWrapper } from "../helper.tsx";
import { ResponsiveHeatMap } from "@nivo/heatmap";

// HeatMap Chart 데이터 포인트 타입
interface HeatMapPoint {
  x: string;
  y: number;
}

// HeatMap Chart 시리즈 데이터 타입
interface HeatMapSeries {
  id: string;
  data: HeatMapPoint[];
}

// HeatMap Chart 데이터 예시
const heatMapData: HeatMapSeries[] = [
  {
    id: "Japan",
    data: [
      { x: "plane", y: 10 },
      { x: "helicopter", y: 1 },
      { x: "boat", y: 2 },
    ],
  },
  {
    id: "France",
    data: [
      { x: "plane", y: 1 },
      { x: "helicopter", y: 8 },
      { x: "boat", y: 9 },
    ],
  },
  {
    id: "USA",
    data: [
      { x: "plane", y: 7 },
      { x: "helicopter", y: 3 },
      { x: "boat", y: 4 },
    ],
  },
];

// NivoHeatMap Chart 컴포넌트
const NivoHeatMap = () => (
  <ChartWrapper>
    <ResponsiveHeatMap
      data={heatMapData}
      margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
      valueFormat=">-.2s"
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "",
        legendOffset: 46,
      }}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 70,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: -72,
      }}
      colors={{
        type: "diverging",
        scheme: "red_yellow_blue",
        minValue: -10,
        maxValue: 10,
      }}
      emptyColor="#555555"
      legends={[
        {
          anchor: "bottom",
          translateX: 0,
          translateY: 30,
          length: 400,
          thickness: 8,
          direction: "row",
          tickPosition: "after",
          tickSize: 3,
          tickSpacing: 4,
          tickOverlap: false,
          tickFormat: ">-.2s",
          title: "Value →",
          titleAlign: "start",
          titleOffset: 4,
        },
      ]}
      theme={{
        axis: {
          ticks: { text: { fill: "#ddd" } },
          legend: { text: { fill: "#ddd" } },
        },
        legends: { title: { text: { fill: "#ddd" } } },
        tooltip: { container: { background: "#333" } },
      }}
    />
  </ChartWrapper>
);

export default NivoHeatMap;
