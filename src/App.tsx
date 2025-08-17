import { useState } from "react";

import NivoBar from "./charts/BarChart";
import NivoFunnel from "./charts/FunnelChart";
import NivoHeatMap from "./charts/HeatmapChart";
import NivoLine from "./charts/LineChart";
import NivoPie from "./charts/PieChart";
import NivoRadar from "./charts/RadarChart";
import NivoSankey from "./charts/SankeyChart";
import NivoScatter from "./charts/ScatterChart";
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
    <br />
    <ul className="text-sm">
      {chartTypes.map((menu) => (
        <li key={menu} className="mb-2 text-black">
          <button
            onClick={() => setSelectedMenu(menu)}
            className={`w-full text-left cursor-pointer rounded ${
              selectedMenu === menu
                ? "bg-blue-300 text-blue-600 font-bold"
                : "text-gray-400 border border-gray-600 hover:border-gray-300 hover:text-blue-600"
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
    Scatter: <NivoScatter />,
    Stream: <NivoStream />,
    TreeMap: <NivoTreeMap />,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Nivo Sample Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Using TypeScript, React, and TailwindCSS
        </p>
      </header>
      <br />
      <div className="flex gap-4">
        <Sidebar
          chartTypes={chartTypes}
          selectedMenu={selectedChart}
          setSelectedMenu={setSelectedChart}
        />
        <main className="flex-1 p-8 overflow-auto w-160 h-160">
          <ChartCard title={`${selectedChart} Chart`}>
            {chartComponents[selectedChart]}
          </ChartCard>
        </main>
      </div>
    </div>
  );
};

export default App;
