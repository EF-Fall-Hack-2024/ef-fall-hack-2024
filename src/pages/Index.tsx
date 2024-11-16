import { AuthButtons } from "@/components/AuthButtons";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/5">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Koti</span>
          </div>
          <AuthButtons />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full space-y-8 animate-fade-in">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to Koti
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your intelligent assistant for planning, managing, and executing construction and renovation projects with ease.
            </p>
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