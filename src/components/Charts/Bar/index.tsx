
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
    "country": "MAY",
    "hot dog": 50,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 45,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 33,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "JUNE",
    "hot dog": 33,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 15,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 5,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 45,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 26,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "JULY",
    "hot dog": 33,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 50,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 50,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "AUGUST",
    "hot dog": 33,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 50,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 22,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "SEPTEMBER",
    "hot dog": 33,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 45,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 22,
    "donutColor": "hsl(122, 70%, 50%)"
  },
  {
    "country": "OCT",
    "hot dog": 33,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 50,
    "burgerColor": "hsl(303, 70%, 50%)",
    "sandwich": 15,
    "sandwichColor": "hsl(265, 70%, 50%)",
    "kebab": 45,
    "kebabColor": "hsl(315, 70%, 50%)",
    "fries": 41,
    "friesColor": "hsl(313, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(122, 70%, 50%)"
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
        borderRadius={6}
        enableGridY={false}
        indexBy="country"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        
        labelTextColor={{
            from: 'black',
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
        groupMode='grouped'
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default MyResponsiveBar;