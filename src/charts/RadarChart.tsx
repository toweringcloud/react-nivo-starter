import { ChartWrapper } from "../helper.tsx";
import { ResponsiveRadar } from "@nivo/radar";

// Radar Chart 데이터 타입
interface RadarDatum {
  taste: string;
  chardonay: number;
  carmenere: number;
  syrah: number;
  [key: string]: string | number;
}

// Radar Chart 시리즈 데이터 타입
const radarData: RadarDatum[] = [
  {
    taste: "fruity",
    chardonay: 71,
    carmenere: 65,
    syrah: 32,
  },
  {
    taste: "bitter",
    chardonay: 94,
    carmenere: 120,
    syrah: 40,
  },
  {
    taste: "heavy",
    chardonay: 69,
    carmenere: 89,
    syrah: 92,
  },
  {
    taste: "strong",
    chardonay: 54,
    carmenere: 77,
    syrah: 81,
  },
  {
    taste: "sunny",
    chardonay: 48,
    carmenere: 87,
    syrah: 28,
  },
];

// NivoRadar Chart 컴포넌트
const NivoRadar = () => (
  <ChartWrapper>
    <ResponsiveRadar /* or Radar for fixed dimensions */
      data={radarData}
      keys={["chardonay", "carmenere", "syrah"]}
      indexBy="taste"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      blendMode="multiply"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          symbolShape: "circle",
        },
      ]}
    />
  </ChartWrapper>
);

export default NivoRadar;
