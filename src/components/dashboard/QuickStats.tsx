import { Card } from "@/components/ui/card";
import { Users, Clock, Building2, QrCode, ArrowUpRight } from "lucide-react";

export const QuickStats = () => {
  return (
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
            <Building2 className="w-5 h-5 text-purple-500" />
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
  );
};