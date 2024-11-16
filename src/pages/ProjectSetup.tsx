import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { useState } from "react";
import { TeamMemberForm } from "@/components/TeamMemberForm";
import { Hammer, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const ProjectSetup = () => {
  const [projectType, setProjectType] = useState<"renovation" | "new-build" | null>(null);
  const [showTeamSection, setShowTeamSection] = useState(false);

  // Check URL parameters for business type
  const isBusinessProject = new URLSearchParams(window.location.search).get('type') === 'business';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {projectType ? 'Project Details' : 'What type of project is this?'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projectType 
              ? "Let's gather some information about your project to help you get started"
              : "Choose the type of project you're planning to work on"}
          </p>
        </div>

        {!projectType ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <p className="text-muted-foreground">Transform your existing space with a renovation project</p>
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
                  <p className="text-muted-foreground">Start fresh with a new construction project</p>
                </div>
              </button>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <div className="space-y-8">
              <ProjectForm type={projectType} />
              <Button
                variant="outline"
                onClick={() => setProjectType(null)}
                className="w-full"
              >
                Change Project Type
              </Button>
            </div>
            {isBusinessProject && (
              <div className="space-y-4">
                <TeamMemberForm />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectSetup;