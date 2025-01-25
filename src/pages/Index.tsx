import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { RecentRegistrations } from "@/components/dashboard/RecentRegistrations";

const Index = () => {
  console.log("Rendering Index component");
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <DashboardHeader />
      <QuickStats />
      <DashboardCharts />
      <RecentRegistrations />
    </div>
  );
};

export default Index;