import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart } from "recharts";
import { Users, UserPlus, QrCode, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data - replace with actual API data later
const dailyVisits = [
  { name: "Mon", visits: 20 },
  { name: "Tue", visits: 35 },
  { name: "Wed", visits: 45 },
  { name: "Thu", visits: 30 },
  { name: "Fri", visits: 50 },
];

const departmentData = [
  { name: "Health", value: 400 },
  { name: "Education", value: 300 },
  { name: "Social Services", value: 200 },
  { name: "Housing", value: 100 },
];

const recentRegistrations = [
  { id: "TOK123", name: "John Doe", department: "Health", date: "2024-01-25", status: "Pending" },
  { id: "TOK124", name: "Jane Smith", department: "Education", date: "2024-01-25", status: "Completed" },
  { id: "TOK125", name: "Bob Johnson", department: "Social Services", date: "2024-01-24", status: "In Progress" },
];

const Index = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome to the Beneficiary Management System</p>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/register" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              New Registration
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/scanner" className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              Scan Token
            </Link>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Beneficiaries</p>
              <p className="text-2xl font-bold mt-2">1,234</p>
              <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                12% increase
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today's Visits</p>
              <p className="text-2xl font-bold mt-2">156</p>
              <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                8% increase
              </p>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-full">
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Departments</p>
              <p className="text-2xl font-bold mt-2">12</p>
            </div>
            <div className="bg-purple-500/10 p-3 rounded-full">
              <BarChart className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Tokens</p>
              <p className="text-2xl font-bold mt-2">45</p>
            </div>
            <div className="bg-orange-500/10 p-3 rounded-full">
              <QrCode className="w-5 h-5 text-orange-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Daily Visitor Trends</h3>
          <div className="h-[300px]">
            <LineChart
              width={500}
              height={300}
              data={dailyVisits}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* Add chart components here */}
            </LineChart>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
          <div className="h-[300px]">
            <PieChart width={400} height={300}>
              {/* Add chart components here */}
            </PieChart>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Registrations</h3>
        <div className="space-y-4">
          {recentRegistrations.map((registration) => (
            <div
              key={registration.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{registration.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {registration.department}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{registration.id}</p>
                <p className="text-sm text-muted-foreground">
                  {registration.date}
                </p>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  registration.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  registration.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {registration.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Index;