import { AuthButtons } from "@/components/AuthButtons";
import { useNavigate } from "react-router-dom";
import { Home, Clock } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/5">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Home className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Koti</span>
          </div>
          <AuthButtons />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full space-y-8 animate-fade-in">
          <div className="flex flex-col items-center space-y-8">
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Home className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                Welcome to Koti
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Your intelligent assistant for planning, managing, and executing construction and renovation projects with ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => navigate("/project-type")}
              className="w-full max-w-md p-6 rounded-lg border bg-card hover:bg-accent/5 transition-colors duration-200 text-left space-y-2"
            >
              <h3 className="font-semibold">Start a New Project</h3>
              <p className="text-sm text-muted-foreground">
                Begin planning your construction or renovation project
              </p>
            </button>

            <HoverCard>
              <HoverCardTrigger>
                <button
                  onClick={() => navigate("/finance")}
                  className="w-full max-w-md p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/50">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col">
                        <h3 className="font-medium">Kitchen Renovation</h3>
                        <span className="text-sm text-muted-foreground">Last updated 2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Individual Project • In Progress</p>
                    </div>
                  </div>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">Kitchen Renovation Project</h4>
                  <p className="text-sm text-muted-foreground">Budget: $25,000</p>
                  <p className="text-sm text-muted-foreground">Timeline: 3 months</p>
                  <p className="text-sm text-muted-foreground">Progress: 45% complete</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-screen-xl mx-auto p-4 text-center text-sm text-muted-foreground">
          Koti © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;