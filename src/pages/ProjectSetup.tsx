import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { useState } from "react";
import { TeamMemberForm } from "@/components/TeamMemberForm";

const ProjectSetup = () => {
  const [projectType, setProjectType] = useState<"renovation" | "new-build" | null>(null);
  const [showTeamSection, setShowTeamSection] = useState(false);

  // Check URL parameters for business type
  const isBusinessProject = new URLSearchParams(window.location.search).get('type') === 'business';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="w-full max-w-4xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Project Details
          </h1>
          <p className="text-muted-foreground">
            {isBusinessProject ? "Set up your business project and team" : "Let's get started with your project"}
          </p>
        </div>
        
        {!projectType ? (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <h2 className="text-xl font-semibold">What type of project is this?</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setProjectType("renovation");
                  setShowTeamSection(false);
                }}
                className="w-40"
              >
                Renovation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setProjectType("new-build");
                  setShowTeamSection(false);
                }}
                className="w-40"
              >
                New Build
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-center">
              <ProjectForm type={projectType} />
            </div>
            {isBusinessProject && (
              <div className="flex justify-center">
                <TeamMemberForm />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSetup;