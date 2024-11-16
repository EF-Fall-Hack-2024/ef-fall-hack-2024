import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { useState } from "react";
import { TeamMemberForm } from "@/components/TeamMemberForm";
import { Hammer, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const ProjectSetup = () => {
  const [projectType, setProjectType] = useState<"renovation" | "new-build" | null>(null);
  const [showTeamSection, setShowTeamSection] = useState(false);
  const isBusinessProject = new URLSearchParams(window.location.search).get('type') === 'business';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="w-full max-w-4xl p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {projectType ? 'Project Details' : 'Choose Your Project Type'}
          </h1>
          <p className="text-muted-foreground">
            {projectType 
              ? "Let's gather some information about your project"
              : "Select the type of project you'll be working on"}
          </p>
        </div>

        {!projectType ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => {
                  setProjectType("renovation");
                  setShowTeamSection(false);
                }}
                className="w-full h-64 rounded-2xl border-2 border-primary/20 bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:border-primary/40 p-8 flex flex-col items-center justify-center gap-6 group"
              >
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Hammer className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Renovation</h3>
                  <p className="text-muted-foreground">Transform your existing space</p>
                </div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button
                onClick={() => {
                  setProjectType("new-build");
                  setShowTeamSection(false);
                }}
                className="w-full h-64 rounded-2xl border-2 border-primary/20 bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-105 hover:border-primary/40 p-8 flex flex-col items-center justify-center gap-6 group"
              >
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Building2 className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">New Build</h3>
                  <p className="text-muted-foreground">Start fresh with a new construction</p>
                </div>
              </button>
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg space-y-8"
            >
              <ProjectForm type={projectType} />
              <Button
                variant="outline"
                onClick={() => setProjectType(null)}
                className="w-full"
              >
                Change Project Type
              </Button>
            </motion.div>
            {isBusinessProject && (
              <div className="mt-8 w-full max-w-lg">
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