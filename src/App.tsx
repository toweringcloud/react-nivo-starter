import { useState } from "react";

import NivoBar from "./charts/BarChart";
import NivoFunnel from "./charts/FunnelChart";
import NivoHeatMap from "./charts/HeatmapChart";
import NivoLine from "./charts/LineChart";
import NivoPie from "./charts/PieChart";
import NivoRadar from "./charts/RadarChart";
import NivoSankey from "./charts/SankeyChart";
import NivoScatterPlot from "./charts/ScatterChart";
import NivoStream from "./charts/StreamChart";
import NivoTreeMap from "./charts/TreemapChart";

const Sidebar = ({
  chartTypes,
  selectedMenu,
  setSelectedMenu,
}: {
  chartTypes: string[];
  selectedMenu: string;
  setSelectedMenu: (chart: string) => void;
}) => (
  <nav className="w-40 p-4 border-r border-slate-700">
    <h2 className="text-xl font-semibold mb-4">Chart Types</h2>
    <ul className="text-sm">
      {chartTypes.map((menu) => (
        <li key={menu} className="mb-2 text-black">
          <button
            onClick={() => setSelectedMenu(menu)}
            className={`w-full text-left hover:bg-blue-200 hover:text-black cursor-pointer rounded ${
              selectedMenu === menu
                ? "bg-blue-200 text-blue-700 font-bold"
                : "text-gray-500"
            }`}
          >
            {menu}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

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

const App = () => {
  const chartTypes = [
    "Bar",
    "Funnel",
    "HeatMap",
    "Line",
    "Pie",
    "Radar",
    "Sankey",
    "ScatterPlot",
    "Stream",
    "TreeMap",
  ];
  const [selectedChart, setSelectedChart] = useState<string>(chartTypes[0]);

  const chartComponents: { [key: string]: React.ReactElement } = {
    Bar: <NivoBar />,
    Funnel: <NivoFunnel />,
    HeatMap: <NivoHeatMap />,
    Line: <NivoLine />,
    Pie: <NivoPie />,
    Radar: <NivoRadar />,
    Sankey: <NivoSankey />,
    Scatter: <NivoScatterPlot />,
    Stream: <NivoStream />,
    TreeMap: <NivoTreeMap />,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Nivo Example Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Using TypeScript, React, and TailwindCSS
        </p>
      </header>
      <div className="flex">
        <Sidebar
          chartTypes={chartTypes}
          selectedMenu={selectedChart}
          setSelectedMenu={setSelectedChart}
        />
        <main className="flex-1 p-8 overflow-auto w-128">
          <ChartCard title={`${selectedChart} Chart`}>
            {chartComponents[selectedChart]}
          </ChartCard>
        </main>
      </div>
    </div>
  );
};

export default App;
