import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const recentRegistrations = [
  { id: "TOK123", name: "John Doe", department: "Health", date: "2024-01-25", status: "Pending" },
  { id: "TOK124", name: "Jane Smith", department: "Education", date: "2024-01-25", status: "Completed" },
  { id: "TOK125", name: "Bob Johnson", department: "Social Services", date: "2024-01-24", status: "In Progress" },
];

export const RecentRegistrations = () => {
  return (
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
  );
};