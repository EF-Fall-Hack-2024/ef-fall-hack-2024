import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Phone, Mail, Star, MessageSquare, Calendar, ArrowUpRight } from "lucide-react";
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
          <h1 className="text-4xl font-bold flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <Users className="h-10 w-10 text-primary" />
            Contractor Management
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractors.map((contractor, index) => (
            <Card 
              key={contractor.name} 
              className="group p-6 space-y-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-accent/10 animate-fade-in border border-accent/20 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                  {contractor.name}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                  {contractor.rating} rating
                </p>
                <p className="text-secondary font-medium">{contractor.role}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span>{contractor.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                  <span>{contractor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Calendar className="h-4 w-4" />
                  <span>Last contact: {contractor.lastContact}</span>
                </div>
              </div>
              <Button 
                className="w-full mt-4 group relative overflow-hidden" 
                onClick={() => handleContact(contractor.name)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Contact
                </span>
                <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorCRM;