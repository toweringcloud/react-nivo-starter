import { ChartWrapper } from "../helper.tsx";
import { ResponsivePie } from "@nivo/pie";

// Pie Chart 데이터 타입
interface PieDatum {
  id: string;
  label: string;
  value: number;
  color: string;
}

// Pie Chart 시리즈 데이터 타입
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

// NivoPie Chart 컴포넌트
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

export default NivoPie;
