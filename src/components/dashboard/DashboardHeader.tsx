import { Button } from "@/components/ui/button";
import { UserPlus, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  return (
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
  );
};