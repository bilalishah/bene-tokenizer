import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User, Calendar, Building } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Scanner = () => {
  const [tokenId, setTokenId] = useState("");
  const [beneficiaryData, setBeneficiaryData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to fetch beneficiary data
    if (tokenId.trim()) {
      // Mock data - in a real app, this would come from an API
      setBeneficiaryData({
        name: "John Doe",
        cnic: "1234567890123",
        phone: "03001234567",
        department: "Health",
        purpose: "Medical Assistance",
        history: [
          {
            date: "2024-01-25",
            department: "Health",
            status: "Registered",
          },
          {
            date: "2024-01-24",
            department: "Social Services",
            status: "Completed",
          },
        ],
      });
    }
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8">Token Scanner</h1>
      
      <Card className="p-6 mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
              placeholder="Enter token ID"
              className="w-full"
            />
          </div>
          <Button type="submit">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>
      </Card>

      {beneficiaryData ? (
        <div className="space-y-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{beneficiaryData.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">CNIC</p>
                  <p className="font-medium">{beneficiaryData.cnic}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-medium">{beneficiaryData.department}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Visit History</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beneficiaryData.history.map((record: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      ) : (
        <Card className="p-6">
          <div className="text-center text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Enter a token ID to view beneficiary details</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Scanner;