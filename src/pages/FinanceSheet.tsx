import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, ChartBar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinanceSheet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <DollarSign className="h-8 w-8" />
            Finance Sheet
          </h1>
          <Button onClick={() => navigate("/tasks")}>
            Next: Tasks <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ChartBar className="h-5 w-5" />
              Budget Overview
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Budget</span>
                <span className="font-mono">$50,000</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Spent</span>
                <span className="font-mono">$12,500</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-2">
              {["Materials", "Labor", "Permits"].map((item) => (
                <div key={item} className="flex justify-between py-2 border-b">
                  <span>{item}</span>
                  <span className="font-mono">$4,000</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinanceSheet;