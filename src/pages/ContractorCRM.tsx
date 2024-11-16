import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Phone, Mail } from "lucide-react";

const ContractorCRM = () => {
  const contractors = [
    {
      name: "John Smith",
      role: "General Contractor",
      phone: "555-0123",
      email: "john@example.com",
    },
    {
      name: "Sarah Johnson",
      role: "Electrician",
      phone: "555-0124",
      email: "sarah@example.com",
    },
    {
      name: "Mike Brown",
      role: "Plumber",
      phone: "555-0125",
      email: "mike@example.com",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8" />
            Contractor Management
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractors.map((contractor) => (
            <Card key={contractor.name} className="p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{contractor.name}</h2>
                <p className="text-muted-foreground">{contractor.role}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{contractor.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{contractor.email}</span>
                </div>
              </div>
              <Button className="w-full">Contact</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorCRM;