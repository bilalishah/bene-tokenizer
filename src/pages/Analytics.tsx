import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const dailyData = [
  { date: "Mon", visitors: 45, returning: 20 },
  { date: "Tue", visitors: 52, returning: 25 },
  { date: "Wed", visitors: 38, returning: 15 },
  { date: "Thu", visitors: 65, returning: 30 },
  { date: "Fri", visitors: 48, returning: 22 },
];

const departmentData = [
  { name: "Health", value: 35 },
  { name: "Education", value: 25 },
  { name: "Social Services", value: 20 },
  { name: "Housing", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Visitors Today</h3>
          <p className="text-3xl font-bold">248</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">New Beneficiaries</h3>
          <p className="text-3xl font-bold">156</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Returning Visitors</h3>
          <p className="text-3xl font-bold">92</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Daily Activity</h3>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                visitors: { color: "#0088FE" },
                returning: { color: "#00C49F" },
              }}
            >
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="visitors" fill="var(--color-visitors)" />
                <Bar dataKey="returning" fill="var(--color-returning)" />
              </BarChart>
            </ChartContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {departmentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;