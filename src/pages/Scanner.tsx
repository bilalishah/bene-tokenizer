import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Scanner = () => {
  const [tokenId, setTokenId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle token search
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

      <Card className="p-6">
        <div className="text-center text-muted-foreground">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Enter a token ID to view beneficiary details</p>
        </div>
      </Card>
    </div>
  );
};

export default Scanner;