import { ChartWrapper } from "../helper.tsx";
import { ResponsiveTreeMap } from "@nivo/treemap";

// TreeMap Chart 데이터 타입
interface TreeMapDatum {
  name: string;
  loc?: number;
  children?: TreeMapDatum[];
}

// TreeMap Chart 시리즈 데이터 타입
const treeMapData: TreeMapDatum = {
  name: "nivo",
  children: [
    {
      name: "viz",
      children: [
        {
          name: "stack",
          children: [
            {
              name: "cchart",
              loc: 116743,
            },
            {
              name: "xAxis",
              loc: 93008,
            },
            {
              name: "yAxis",
              loc: 154077,
            },
            {
              name: "layers",
              loc: 33869,
            },
          ],
        },
        {
          name: "ppie",
          children: [
            {
              name: "chart",
              children: [
                {
                  name: "pie",
                  children: [
                    {
                      name: "outline",
                      loc: 194258,
                    },
                    {
                      name: "slices",
                      loc: 18925,
                    },
                    {
                      name: "bbox",
                      loc: 154032,
                    },
                  ],
                },
                {
                  name: "donut",
                  loc: 180033,
                },
                {
                  name: "gauge",
                  loc: 188038,
                },
              ],
            },
            {
              name: "legends",
              loc: 60186,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      children: [
        {
          name: "rgb",
          loc: 185019,
        },
        {
          name: "hsl",
          loc: 19734,
        },
      ],
    },
    {
      name: "utils",
      children: [
        {
          name: "randomize",
          loc: 69479,
        },
        {
          name: "resetClock",
          loc: 31080,
        },
        {
          name: "noop",
          loc: 92965,
        },
        {
          name: "tick",
          loc: 15870,
        },
        {
          name: "forceGC",
          loc: 157507,
        },
        {
          name: "stackTrace",
          loc: 62491,
        },
        {
          name: "dbg",
          loc: 87715,
        },
      ],
    },
    {
      name: "generators",
      children: [
        {
          name: "address",
          loc: 72607,
        },
        {
          name: "city",
          loc: 184237,
        },
        {
          name: "animal",
          loc: 81397,
        },
        {
          name: "movie",
          loc: 48018,
        },
        {
          name: "user",
          loc: 86640,
        },
      ],
    },
    {
      name: "set",
      children: [
        {
          name: "clone",
          loc: 141530,
        },
        {
          name: "intersect",
          loc: 118739,
        },
        {
          name: "merge",
          loc: 50186,
        },
        {
          name: "reverse",
          loc: 6604,
        },
        {
          name: "toArray",
          loc: 75113,
        },
        {
          name: "toObject",
          loc: 18071,
        },
        {
          name: "fromCSV",
          loc: 74483,
        },
        {
          name: "slice",
          loc: 159687,
        },
        {
          name: "append",
          loc: 171982,
        },
        {
          name: "prepend",
          loc: 171113,
        },
        {
          name: "shuffle",
          loc: 56539,
        },
        {
          name: "pick",
          loc: 189962,
        },
        {
          name: "plouc",
          loc: 126605,
        },
      ],
    },
    {
      name: "text",
      children: [
        {
          name: "trim",
          loc: 194017,
        },
        {
          name: "slugify",
          loc: 183608,
        },
        {
          name: "snakeCase",
          loc: 113516,
        },
        {
          name: "camelCase",
          loc: 73035,
        },
        {
          name: "repeat",
          loc: 5757,
        },
        {
          name: "padLeft",
          loc: 172252,
        },
        {
          name: "padRight",
          loc: 81274,
        },
        {
          name: "sanitize",
          loc: 71185,
        },
        {
          name: "ploucify",
          loc: 65271,
        },
      ],
    },
    {
      name: "misc",
      children: [
        {
          name: "greetings",
          children: [
            {
              name: "hey",
              loc: 150674,
            },
            {
              name: "HOWDY",
              loc: 31934,
            },
            {
              name: "aloha",
              loc: 70323,
            },
            {
              name: "AHOY",
              loc: 88596,
            },
          ],
        },
        {
          name: "other",
          loc: 48609,
        },
        {
          name: "path",
          children: [
            {
              name: "pathA",
              loc: 167465,
            },
            {
              name: "pathB",
              children: [
                {
                  name: "pathB1",
                  loc: 82165,
                },
                {
                  name: "pathB2",
                  loc: 103317,
                },
                {
                  name: "pathB3",
                  loc: 39332,
                },
                {
                  name: "pathB4",
                  loc: 113343,
                },
              ],
            },
            {
              name: "pathC",
              children: [
                {
                  name: "pathC1",
                  loc: 117753,
                },
                {
                  name: "pathC2",
                  loc: 99434,
                },
                {
                  name: "pathC3",
                  loc: 76783,
                },
                {
                  name: "pathC4",
                  loc: 97268,
                },
                {
                  name: "pathC5",
                  loc: 57930,
                },
                {
                  name: "pathC6",
                  loc: 72277,
                },
                {
                  name: "pathC7",
                  loc: 124953,
                },
                {
                  name: "pathC8",
                  loc: 150295,
                },
                {
                  name: "pathC9",
                  loc: 176892,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// NivoTreeMap Chart 컴포넌트
const NivoTreeMap = () => (
  <ChartWrapper>
    <ResponsiveTreeMap /* or TreeMap for fixed dimensions */
      data={treeMapData}
      identity="name"
      value="loc"
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      parentLabelPosition="left"
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
    />
  </ChartWrapper>
);

export default NivoTreeMap;
