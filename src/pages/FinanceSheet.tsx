import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, ChartBar, ArrowRight, TrendingUp, Download, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from "sonner";

const FinanceSheet = () => {
  const navigate = useNavigate();

  const data = [
    { name: 'Materials', amount: 15000 },
    { name: 'Labor', amount: 12000 },
    { name: 'Permits', amount: 3000 },
    { name: 'Equipment', amount: 8000 },
    { name: 'Other', amount: 2000 },
  ];

  const transactions = [
    { id: 1, name: "Construction Materials", amount: 4000, date: "2024-02-15" },
    { id: 2, name: "Labor Costs", amount: 4000, date: "2024-02-14" },
    { id: 3, name: "Permits and Licenses", amount: 4000, date: "2024-02-13" },
  ];

  const handleExport = () => {
    toast.success("Exporting finance report...");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <DollarSign className="h-10 w-10 text-primary" />
            Finance Sheet
          </h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={handleExport} className="group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Export Report
            </Button>
            <Button onClick={() => navigate("/tasks")}>
              Next: Tasks <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-accent/10 animate-fade-in border border-accent/20 backdrop-blur-sm group">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
              <ChartBar className="h-5 w-5" />
              Budget Overview
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors group-hover:scale-[1.02] transform duration-300">
                <span className="text-lg">Total Budget</span>
                <span className="text-2xl font-mono font-bold text-primary">$50,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group-hover:scale-[1.02] transform duration-300">
                <span className="text-lg text-muted-foreground">Spent</span>
                <span className="text-2xl font-mono font-bold text-secondary">$12,500</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group-hover:scale-[1.02] transform duration-300">
                <span className="text-lg text-muted-foreground">Remaining</span>
                <span className="text-2xl font-mono font-bold text-primary">$37,500</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-white to-accent/10 animate-fade-in border border-accent/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              Expense Distribution
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      border: '1px solid rgba(155, 135, 245, 0.2)',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="amount" fill="#9b87f5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-gradient-to-br from-white to-accent/10 animate-fade-in border border-accent/20 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-6 text-primary">Recent Transactions</h2>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className="group flex justify-between items-center p-4 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:-translate-x-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-1">
                  <h3 className="font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                    {transaction.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-sm text-muted-foreground">{transaction.date}</span>
                </div>
                <span className="font-mono font-bold text-primary">${transaction.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinanceSheet;