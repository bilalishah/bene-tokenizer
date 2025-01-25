import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const dailyVisits = [
  { name: "Mon", visits: 20 },
  { name: "Tue", visits: 35 },
  { name: "Wed", visits: 45 },
  { name: "Thu", visits: 30 },
  { name: "Fri", visits: 50 },
  { name: "Sat", visits: 25 },
  { name: "Sun", visits: 15 },
];

const departmentData = [
  { name: "Health", value: 400, color: "#34D399" },
  { name: "Education", value: 300, color: "#60A5FA" },
  { name: "Social Services", value: 200, color: "#F472B6" },
  { name: "Housing", value: 100, color: "#FBBF24" },
];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Daily Visitor Trends</h3>
        <ChartContainer className="h-[300px]" config={{}}>
          <BarChart data={dailyVisits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visits" fill="#34D399" />
          </BarChart>
        </ChartContainer>
      </Card>
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
        <ChartContainer className="h-[300px]" config={{}}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </Card>
    </div>
  );
};