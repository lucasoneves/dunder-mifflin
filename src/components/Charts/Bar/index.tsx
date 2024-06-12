
"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.o
const data = [
  {
    "country": "AD",
    "hot dog": 129,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 200,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 96,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 137,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 163,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 21,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 195,
    "hot dogColor": "hsl(295, 70%, 50%)",
    "burger": 2,
    "burgerColor": "hsl(13, 70%, 50%)",
    "sandwich": 166,
    "sandwichColor": "hsl(70, 70%, 50%)",
    "kebab": 111,
    "kebabColor": "hsl(108, 70%, 50%)",
    "fries": 44,
    "friesColor": "hsl(93, 70%, 50%)",
    "donut": 128,
    "donutColor": "hsl(140, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 64,
    "hot dogColor": "hsl(53, 70%, 50%)",
    "burger": 40,
    "burgerColor": "hsl(246, 70%, 50%)",
    "sandwich": 114,
    "sandwichColor": "hsl(264, 70%, 50%)",
    "kebab": 3,
    "kebabColor": "hsl(75, 70%, 50%)",
    "fries": 200,
    "friesColor": "hsl(52, 70%, 50%)",
    "donut": 25,
    "donutColor": "hsl(320, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 117,
    "hot dogColor": "hsl(200, 70%, 50%)",
    "burger": 164,
    "burgerColor": "hsl(337, 70%, 50%)",
    "sandwich": 95,
    "sandwichColor": "hsl(306, 70%, 50%)",
    "kebab": 145,
    "kebabColor": "hsl(230, 70%, 50%)",
    "fries": 198,
    "friesColor": "hsl(114, 70%, 50%)",
    "donut": 125,
    "donutColor": "hsl(43, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 58,
    "hot dogColor": "hsl(59, 70%, 50%)",
    "burger": 159,
    "burgerColor": "hsl(249, 70%, 50%)",
    "sandwich": 47,
    "sandwichColor": "hsl(197, 70%, 50%)",
    "kebab": 64,
    "kebabColor": "hsl(284, 70%, 50%)",
    "fries": 68,
    "friesColor": "hsl(202, 70%, 50%)",
    "donut": 61,
    "donutColor": "hsl(307, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 197,
    "hot dogColor": "hsl(287, 70%, 50%)",
    "burger": 132,
    "burgerColor": "hsl(33, 70%, 50%)",
    "sandwich": 70,
    "sandwichColor": "hsl(182, 70%, 50%)",
    "kebab": 41,
    "kebabColor": "hsl(229, 70%, 50%)",
    "fries": 148,
    "friesColor": "hsl(271, 70%, 50%)",
    "donut": 50,
    "donutColor": "hsl(303, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 124,
    "hot dogColor": "hsl(24, 70%, 50%)",
    "burger": 168,
    "burgerColor": "hsl(263, 70%, 50%)",
    "sandwich": 13,
    "sandwichColor": "hsl(109, 70%, 50%)",
    "kebab": 139,
    "kebabColor": "hsl(233, 70%, 50%)",
    "fries": 95,
    "friesColor": "hsl(264, 70%, 50%)",
    "donut": 81,
    "donutColor": "hsl(246, 70%, 50%)"
  }
]
const MyResponsiveBar = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default MyResponsiveBar;