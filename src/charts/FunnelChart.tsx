import { ChartWrapper } from "../helper.tsx";
import { ResponsiveFunnel } from "@nivo/funnel";

// Funnel Chart 데이터 포인트 타입
interface FunnelDatum {
  id: string;
  value: number;
  label: string;
  [key: string]: string | number;
}

// Funnel Chart 데이터 예시
const funnelData: FunnelDatum[] = [
  {
    id: "step_sent",
    value: 62231,
    label: "Sent",
  },
  {
    id: "step_viewed",
    value: 39888,
    label: "Viewed",
  },
  {
    id: "step_clicked",
    value: 31234,
    label: "Clicked",
  },
  {
    id: "step_add_to_card",
    value: 19452,
    label: "Add To Card",
  },
  {
    id: "step_purchased",
    value: 14777,
    label: "Purchased",
  },
];

// NivoFunnel Chart 컴포넌트
const NivoFunnel = () => (
  <ChartWrapper>
    <ResponsiveFunnel /* or Funnel for fixed dimensions */
      data={funnelData}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=">-.4s"
      colors={{ scheme: "spectral" }}
      borderWidth={20}
      labelColor={{ from: "color", modifiers: [["darker", 3]] }}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      afterSeparatorLength={100}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
    />
  </ChartWrapper>
);

export default NivoFunnel;
