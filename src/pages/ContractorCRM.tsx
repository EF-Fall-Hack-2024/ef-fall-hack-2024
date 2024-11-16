import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Phone, Mail, Star, MessageSquare, Calendar, ArrowUpRight, PlusCircle, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ContractorCRM = () => {
  const navigate = useNavigate();
  const contractors = [
    {
      name: "John Smith",
      role: "General Contractor",
      phone: "555-0123",
      email: "john@example.com",
      rating: 4.8,
      lastContact: "2 days ago",
      favorite: false,
    },
    {
      name: "Sarah Johnson",
      role: "Electrician",
      phone: "555-0124",
      email: "sarah@example.com",
      rating: 4.9,
      lastContact: "1 week ago",
      favorite: false,
    },
    {
      name: "Mike Brown",
      role: "Plumber",
      phone: "555-0125",
      email: "mike@example.com",
      rating: 4.7,
      lastContact: "3 days ago",
      favorite: false,
    },
  ];

  const handleContact = (name: string) => {
    toast.success(`Message sent to ${name}`);
  };

  const handleNewProject = () => {
    navigate("/project-type");
  };

  const handleFavorite = (name: string) => {
    toast.success(`${name} added to favorites`);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-contractor-accent to-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-center animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center gap-3 bg-gradient-to-r from-contractor to-contractor-secondary bg-clip-text text-transparent">
            <Users className="h-10 w-10 text-contractor" />
            Potential Contractors
          </h1>
          <Button 
            onClick={handleNewProject}
            className="group bg-contractor hover:bg-contractor-secondary transition-all duration-300"
          >
            <PlusCircle className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
            New Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractors.map((contractor, index) => (
            <Card 
              key={contractor.name} 
              className="group p-6 space-y-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-contractor-accent/10 animate-fade-in border border-contractor-accent/20 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-contractor group-hover:text-contractor-secondary transition-colors duration-300 flex items-center">
                    {contractor.name}
                    <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleFavorite(contractor.name)}
                    className="text-contractor hover:text-contractor-secondary hover:bg-contractor-accent/20"
                  >
                    <Star className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Star className="h-4 w-4 text-contractor animate-pulse" />
                  {contractor.rating} rating
                </p>
                <p className="text-contractor-secondary font-medium">{contractor.role}</p>
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
                className="w-full mt-4 group relative overflow-hidden bg-contractor hover:bg-contractor-secondary" 
                onClick={() => handleContact(contractor.name)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Contact
                </span>
                <span className="absolute inset-0 bg-contractor-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-semibold text-contractor flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Nearest Construction Firm
            </h2>
            <span className="bg-contractor-accent text-contractor-secondary text-xs font-medium px-2 py-1 rounded-full">
              Sponsored
            </span>
          </div>
          <Card className="w-full h-[400px] relative overflow-hidden bg-gradient-to-br from-white to-contractor-accent/10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
            <div className="relative p-6 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-contractor-accent flex items-center justify-center">
                <MapPin className="h-8 w-8 text-contractor" />
              </div>
              <h3 className="text-xl font-semibold text-contractor">BuildRight Construction Co.</h3>
              <p className="text-muted-foreground">123 Builder's Lane, Your City</p>
              <p className="text-sm text-muted-foreground">⭐ 4.9 · 0.5 miles away</p>
              <Button 
                className="bg-contractor hover:bg-contractor-secondary mt-4"
                onClick={() => toast.success("Redirecting to BuildRight Construction's website...")}
              >
                Visit Website
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContractorCRM;