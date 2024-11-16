import { AuthButtons } from "@/components/AuthButtons";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="w-full max-w-md p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Build & Renovate
          </h1>
          <p className="text-muted-foreground">
            Plan your dream space with ease
          </p>
        </div>
        <div className="flex justify-center">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
};

export default Index;