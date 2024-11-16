import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";

interface TeamMember {
  email: string;
  role: string;
}

export const TeamMemberForm = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleAddMember = () => {
    if (!email || !role) {
      toast.error("Please fill in all fields");
      return;
    }

    setTeamMembers([...teamMembers, { email, role }]);
    setEmail("");
    setRole("");
    toast.success("Team member added successfully!");
  };

  const handleRemoveMember = (index: number) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newTeamMembers);
    toast.success("Team member removed");
  };

  return (
    <Card className="p-6 w-full max-w-lg animate-fade-in">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Add Team Members</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="team@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="architect">Architect</SelectItem>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleAddMember}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>
        </div>

        {teamMembers.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Team Members:</h4>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-accent/10 rounded-md"
              >
                <div>
                  <p className="font-medium">{member.email}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {member.role.replace('-', ' ')}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveMember(index)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};