import { ChartWrapper } from "../helper.tsx";
import { ResponsiveLine } from "@nivo/line";

// Line Chart 데이터 포인트 타입
interface LinePoint {
  x: string;
  y: number;
}

// Line Chart 시리즈 데이터 타입
interface LineSeries {
  id: string;
  data: LinePoint[];
}

// Line Chart 데이터 예시
const lineData: LineSeries[] = [
  {
    id: "Japan",
    data: [
      { x: "plane", y: 7 },
      { x: "helicopter", y: 1 },
      { x: "boat", y: 9 },
      { x: "train", y: 4 },
      { x: "subway", y: 10 },
      { x: "bus", y: 3 },
      { x: "car", y: 3 },
      { x: "moto", y: 6 },
      { x: "bicycle", y: 5 },
      { x: "horse", y: 2 },
      { x: "skateboard", y: 8 },
      { x: "others", y: 1 },
    ],
  },
  {
    id: "France",
    data: [
      { x: "plane", y: 10 },
      { x: "helicopter", y: 1 },
      { x: "boat", y: 2 },
      { x: "train", y: 8 },
      { x: "subway", y: 6 },
      { x: "bus", y: 4 },
      { x: "car", y: 9 },
      { x: "moto", y: 7 },
      { x: "bicycle", y: 6 },
      { x: "horse", y: 1 },
      { x: "skateboard", y: 4 },
      { x: "others", y: 1 },
    ],
  },
  {
    id: "USA",
    data: [
      { x: "plane", y: 1 },
      { x: "helicopter", y: 8 },
      { x: "boat", y: 9 },
      { x: "train", y: 7 },
      { x: "subway", y: 2 },
      { x: "bus", y: 9 },
      { x: "car", y: 10 },
      { x: "moto", y: 7 },
      { x: "bicycle", y: 3 },
      { x: "horse", y: 4 },
      { x: "skateboard", y: 2 },
      { x: "others", y: 5 },
    ],
  },
];

// NivoLine Chart 컴포넌트
const NivoLine = () => (
  <ChartWrapper>
    <ResponsiveLine
      data={lineData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
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

export default NivoLine;
