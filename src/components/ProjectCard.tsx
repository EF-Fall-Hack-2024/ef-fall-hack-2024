import { Card } from "@/components/ui/card";
import { Building, Home } from "lucide-react";

interface ProjectCardProps {
  type: "individual" | "business";
  onClick: () => void;
}

export const ProjectCard = ({ type, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="p-6 cursor-pointer card-hover"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-4">
        {type === "individual" ? (
          <Home className="w-12 h-12 text-primary" />
        ) : (
          <Building className="w-12 h-12 text-primary" />
        )}
        <h3 className="text-xl font-semibold capitalize">
          {type === "individual" ? "Individual" : "Business"}
        </h3>
        <p className="text-sm text-gray-500 text-center">
          {type === "individual"
            ? "Plan your home renovation or building project"
            : "Manage multiple projects and team collaboration"}
        </p>
      </div>
    </Card>
  );
};