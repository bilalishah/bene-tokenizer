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

const recentRegistrations = [
  { id: "TOK123", name: "John Doe", department: "Health", date: "2024-01-25" },
  { id: "TOK124", name: "Jane Smith", department: "Education", date: "2024-01-25" },
  { id: "TOK125", name: "Bob Johnson", department: "Social Services", date: "2024-01-24" },
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
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-24">
              <Link to="/register" className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6" />
                <span>New Registration</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24">
              <Link to="/scanner" className="flex flex-col items-center gap-2">
                <Ticket className="w-6 h-6" />
                <span>Scan Token</span>
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;