import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface ProjectFormProps {
  type: "renovation" | "new-build";
}

export const ProjectForm = ({ type }: ProjectFormProps) => {
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Project details saved!");
  };

  return (
    <Card className="p-6 w-full max-w-lg animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Input
            id="budget"
            type="number"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Project Description</Label>
          <Textarea
            id="description"
            placeholder={`Describe your ${type === "renovation" ? "renovation" : "new build"} project...`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-[150px]"
          />
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </Card>
  );
};