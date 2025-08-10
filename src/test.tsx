import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveStream } from "@nivo/stream";
import { ResponsiveRadar } from "@nivo/radar";
import { ResponsiveHeatMap } from "@nivo/heatmap";

// --- Type Definitions ---

// Bar Chart 데이터 타입
interface BarDatum {
  country: string;
  [key: string]: string | number;
}

// Pie Chart 데이터 타입
interface PieDatum {
  id: string;
  label: string;
  value: number;
  color: string;
}

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

// Stream Chart 데이터 타입
interface StreamDatum {
  [key: string]: number;
}

// Radar Chart 데이터 타입
interface RadarDatum {
  taste: string;
  [key: string]: string | number;
}

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

// Helper component for common chart properties
const ChartWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full text-gray-800">{children}</div>
);

// --- Chart Data ---

const barData: BarDatum[] = [
  {
    country: "AD",
    "hot dog": 153,
    burger: 15,
    sandwich: 157,
    kebab: 12,
    fries: 12,
    donut: 148,
  },
  {
    country: "AE",
    "hot dog": 12,
    burger: 130,
    sandwich: 189,
    kebab: 82,
    fries: 183,
    donut: 57,
  },
  {
    country: "AF",
    "hot dog": 131,
    burger: 143,
    sandwich: 159,
    kebab: 143,
    fries: 132,
    donut: 113,
  },
  {
    country: "AG",
    "hot dog": 10,
    burger: 191,
    sandwich: 11,
    kebab: 18,
    fries: 12,
    donut: 100,
  },
  {
    country: "AI",
    "hot dog": 199,
    burger: 156,
    sandwich: 16,
    kebab: 162,
    fries: 14,
    donut: 121,
  },
  {
    country: "AL",
    "hot dog": 13,
    burger: 161,
    sandwich: 118,
    kebab: 119,
    fries: 107,
    donut: 178,
  },
  {
    country: "AM",
    "hot dog": 11,
    burger: 12,
    sandwich: 171,
    kebab: 180,
    fries: 10,
    donut: 161,
  },
];

const pieData: PieDatum[] = [
  {
    id: "javascript",
    label: "JavaScript",
    value: 450,
    color: "hsl(111, 70%, 50%)",
  },
  { id: "python", label: "Python", value: 320, color: "hsl(27, 70%, 50%)" },
  { id: "go", label: "Go", value: 280, color: "hsl(183, 70%, 50%)" },
  { id: "rust", label: "Rust", value: 210, color: "hsl(315, 70%, 50%)" },
  {
    id: "typescript",
    label: "TypeScript",
    value: 150,
    color: "hsl(222, 70%, 50%)",
  },
];

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

const streamData: StreamDatum[] = [
  { Raoul: 13, Josiane: 11, Marcel: 19, Renée: 14, Paul: 18, Céline: 12 },
  { Raoul: 15, Josiane: 17, Marcel: 15, Renée: 12, Paul: 11, Céline: 14 },
  { Raoul: 11, Josiane: 18, Marcel: 14, Renée: 13, Paul: 12, Céline: 15 },
  { Raoul: 19, Josiane: 12, Marcel: 11, Renée: 15, Paul: 13, Céline: 17 },
  { Raoul: 12, Josiane: 14, Marcel: 17, Renée: 11, Paul: 15, Céline: 18 },
];

const radarData: RadarDatum[] = [
  { taste: "fruity", chardonay: 93, carmenere: 61, syrah: 114 },
  { taste: "bitter", chardonay: 90, carmenere: 75, syrah: 72 },
  { taste: "heavy", chardonay: 53, carmenere: 107, syrah: 93 },
  { taste: "strong", chardonay: 63, carmenere: 88, syrah: 56 },
  { taste: "sunny", chardonay: 110, carmenere: 60, syrah: 115 },
];

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

// --- Chart Components ---

const NivoBar = () => (
  <ChartWrapper>
    <ResponsiveBar
      data={barData}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
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

const NivoPie = () => (
  <ChartWrapper>
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#ddd"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      theme={{
        labels: { text: { fill: "#ddd" } },
        legends: { text: { fill: "#ddd" } },
        tooltip: { container: { background: "#333" } },
      }}
    />
  </ChartWrapper>
);

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

const NivoRadar = () => (
  <ChartWrapper>
    <ResponsiveRadar
      data={radarData}
      keys={["chardonay", "carmenere", "syrah"]}
      indexBy="taste"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: "color" }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: "nivo" }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [{ on: "hover", style: { itemTextColor: "#000" } }],
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

// --- Layout Components ---

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-800 rounded-lg shadow-2xl h-full flex flex-col p-6">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="flex-grow relative">{children}</div>
  </div>
);

const Sidebar = ({
  chartTypes,
  selectedChart,
  onSelectChart,
}: {
  chartTypes: string[];
  selectedChart: string;
  onSelectChart: (chart: string) => void;
}) => (
  <aside className="w-64 bg-gray-800 p-4 flex-shrink-0">
    <h1 className="text-white text-2xl font-bold mb-6">Nivo Charts</h1>
    <nav>
      <ul>
        {chartTypes.map((chart) => (
          <li key={chart} className="mb-2">
            <button
              onClick={() => onSelectChart(chart)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                selectedChart === chart
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {chart}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const Test = () => {
  const chartTypes = ["Bar", "Pie", "Line", "Stream", "Radar", "HeatMap"];

  const [selectedChart, setSelectedChart] = useState<string>(chartTypes[0]);

  const chartComponents: { [key: string]: React.ReactElement } = {
    Bar: <NivoBar />,
    Pie: <NivoPie />,
    Line: <NivoLine />,
    Stream: <NivoStream />,
    Radar: <NivoRadar />,
    HeatMap: <NivoHeatMap />,
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar
        chartTypes={chartTypes}
        selectedChart={selectedChart}
        onSelectChart={setSelectedChart}
      />
      <main className="flex-1 p-8 overflow-auto">
        <ChartCard title={`${selectedChart} Chart`}>
          {chartComponents[selectedChart]}
        </ChartCard>
      </main>
    </div>
  );
};

export default Test;
