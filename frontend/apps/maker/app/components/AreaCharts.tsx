import { data } from "@/data/data";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card } from "@repo/ui/tailus-ui";
import { Text, Title } from "@repo/ui/tailus-ui/typography";
import { Custom } from "@repo/ui/tailus-ui/visualizations";
import { area, cartesianGrid } from "@tailus/themer";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const TwoAreasChart = () => {
  return (
    <Card className="space-y-6" variant="outlined">
      <div>
        <Title as="h2" size="lg" weight="medium" className="mb-1">
          New Orders
        </Title>
        <Text className="mb-0 mt-1" size="sm">
          Visualize your main activities data
        </Text>
      </div>
      <AspectRatio data-shade="900" ratio={16 / 9}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <YAxis
              className="text-[--caption-text-color]"
              width={40}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              height={12}
              className="text-[--caption-text-color]"
              dataKey="name"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{ stroke: "var(--ui-border-color)", strokeWidth: 1 }}
              content={<Custom payload={[]} active mixed label={""} />}
            />

            <CartesianGrid
              className={cartesianGrid()}
              horizontal={false}
              stroke="currentColor"
              strokeDasharray={3}
            />

            <Area
              className={area({ intent: "primary" })}
              fill="currentColor"
              stroke="currentColor"
              fillOpacity={0.05}
              dataKey="Gray"
              activeDot={{
                color: "var(--area-primary-stroke)",
                r: 3,
                stroke: "white",
              }}
            />
            <Area
              className={area({ intent: "accent" })}
              fill="currentColor"
              stroke="currentColor"
              fillOpacity={0.1}
              dataKey="Primary"
              activeDot={{
                color: "var(--area-accent-stroke)",
                r: 3,
                stroke: "white",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </AspectRatio>
    </Card>
  );
};
