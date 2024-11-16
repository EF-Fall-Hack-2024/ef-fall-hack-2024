import { ProjectCard } from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";

const ProjectType = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="w-full max-w-4xl p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Choose Your Account Type
          </h1>
          <p className="text-muted-foreground">
            Select how you'll be using the platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <ProjectCard
            type="individual"
            onClick={() => navigate("/project-setup")}
          />
          <ProjectCard
            type="business"
            onClick={() => navigate("/project-setup")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectType;