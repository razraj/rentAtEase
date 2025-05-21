import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card } from "@repo/ui/tailus-ui";
import { Text, Title } from "@repo/ui/tailus-ui/typography";
import { Custom } from "@repo/ui/tailus-ui/visualizations";
import { area, cartesianGrid } from "@tailus/themer";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { barData } from "@/data/data";

export const SimpleBarChart = () => {
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
          <BarChart data={barData}>
            <YAxis
              className="text-[--caption-text-color]"
              width={34}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              className="text-[--caption-text-color]"
              height={12}
              dataKey="name"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <CartesianGrid
              className={cartesianGrid()}
              vertical={false}
              stroke="currentColor"
              strokeDasharray={3}
            />
            <Tooltip
              cursor={{ fill: "var(--ui-border-color)", strokeWidth: 1 }}
              content={<Custom payload={[]} active mixed label={""} />}
            />
            <Bar
              className={area({ gradient: true, intent: "primary" })}
              radius={[4, 4, 0, 0]}
              fill="currentColor"
              dataKey="Primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </AspectRatio>
    </Card>
  );
};
