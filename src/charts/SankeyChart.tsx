import { ChartWrapper } from "../helper.tsx";
import { ResponsiveSankey } from "@nivo/sankey";

// Sankey Chart 데이터 타입
interface SankeyDatum {
  nodes: {
    id: string;
    nodeColor: string;
  }[];
  links: {
    source: string;
    target: string;
    value: number;
  }[];
}

// Sankey Chart 시리즈 데이터 타입
const sankeyData: SankeyDatum = {
  nodes: [
    {
      id: "John",
      nodeColor: "hsl(267, 70%, 50%)",
    },
    {
      id: "Raoul",
      nodeColor: "hsl(89, 70%, 50%)",
    },
    {
      id: "Jane",
      nodeColor: "hsl(327, 70%, 50%)",
    },
    {
      id: "Marcel",
      nodeColor: "hsl(13, 70%, 50%)",
    },
    {
      id: "Ibrahim",
      nodeColor: "hsl(96, 70%, 50%)",
    },
    {
      id: "Junko",
      nodeColor: "hsl(157, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "Jane",
      target: "John",
      value: 158,
    },
    {
      source: "Junko",
      target: "Ibrahim",
      value: 148,
    },
    {
      source: "Raoul",
      target: "John",
      value: 59,
    },
    {
      source: "Raoul",
      target: "Marcel",
      value: 116,
    },
    {
      source: "Raoul",
      target: "Ibrahim",
      value: 121,
    },
    {
      source: "Raoul",
      target: "Jane",
      value: 98,
    },
    {
      source: "John",
      target: "Ibrahim",
      value: 47,
    },
    {
      source: "Marcel",
      target: "John",
      value: 46,
    },
    {
      source: "Marcel",
      target: "Jane",
      value: 76,
    },
  ],
};

// NivoSankey Chart 컴포넌트
const NivoSankey = () => (
  <ChartWrapper>
    <ResponsiveSankey /* or Sankey for fixed dimensions */
      data={sankeyData}
      margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
      align="justify"
      colors={{ scheme: "category10" }}
      nodeOpacity={1}
      nodeHoverOthersOpacity={0.35}
      nodeThickness={18}
      nodeSpacing={24}
      nodeBorderWidth={0}
      nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
      nodeBorderRadius={3}
      linkOpacity={0.5}
      linkHoverOthersOpacity={0.1}
      linkContract={3}
      enableLinkGradient={true}
      labelPosition="outside"
      labelOrientation="vertical"
      labelPadding={16}
      labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 130,
          itemWidth: 100,
          itemHeight: 14,
          itemDirection: "right-to-left",
          itemsSpacing: 2,
          itemTextColor: "#999",
          symbolSize: 14,
        },
      ]}
    />
  </ChartWrapper>
);

export default NivoSankey;
