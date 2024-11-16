import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { useState } from "react";

const ProjectSetup = () => {
  const [projectType, setProjectType] = useState<"renovation" | "new-build" | null>(
    null
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="w-full max-w-4xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Project Details
          </h1>
          <p className="text-muted-foreground">
            Let's get started with your project
          </p>
        </div>
        
        {!projectType ? (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <h2 className="text-xl font-semibold">What type of project is this?</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setProjectType("renovation")}
                className="w-40"
              >
                Renovation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setProjectType("new-build")}
                className="w-40"
              >
                New Build
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <ProjectForm type={projectType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSetup;