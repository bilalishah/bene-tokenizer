import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Ticket, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { title: "Total Beneficiaries", value: "1,234", icon: Users, color: "bg-blue-500" },
  { title: "Active Tokens", value: "856", icon: Ticket, color: "bg-green-500" },
  { title: "Recent Activity", value: "89", icon: Clock, color: "bg-purple-500" },
  { title: "Departments", value: "12", icon: BarChart3, color: "bg-orange-500" },
];

const Index = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening today.</p>
        </div>
        <Button asChild>
          <Link to="/register">New Registration</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Registrations</h2>
          {/* Add table or list component here */}
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Token Activity</h2>
          {/* Add chart component here */}
        </Card>
      </div>
    </div>
  );
};

export default Index;