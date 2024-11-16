import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Phone, Mail, Star, MessageSquare, Calendar } from "lucide-react";
import { toast } from "sonner";

const ContractorCRM = () => {
  const contractors = [
    {
      name: "John Smith",
      role: "General Contractor",
      phone: "555-0123",
      email: "john@example.com",
      rating: 4.8,
      lastContact: "2 days ago",
    },
    {
      name: "Sarah Johnson",
      role: "Electrician",
      phone: "555-0124",
      email: "sarah@example.com",
      rating: 4.9,
      lastContact: "1 week ago",
    },
    {
      name: "Mike Brown",
      role: "Plumber",
      phone: "555-0125",
      email: "mike@example.com",
      rating: 4.7,
      lastContact: "3 days ago",
    },
  ];

  const handleContact = (name: string) => {
    toast.success(`Message sent to ${name}`);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center gap-3 text-primary">
            <Users className="h-10 w-10" />
            Contractor Management
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractors.map((contractor) => (
            <Card 
              key={contractor.name} 
              className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-accent/10 animate-fade-in"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-primary">{contractor.name}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  {contractor.rating} rating
                </p>
                <p className="text-secondary font-medium">{contractor.role}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{contractor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{contractor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Last contact: {contractor.lastContact}</span>
                </div>
              </div>
              <Button 
                className="w-full mt-4 group" 
                onClick={() => handleContact(contractor.name)}
              >
                <MessageSquare className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorCRM;