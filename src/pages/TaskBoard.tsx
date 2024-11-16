import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Kanban, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskBoard = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "To Do",
      tasks: ["Select materials", "Contact suppliers", "Review permits"],
    },
    {
      title: "In Progress",
      tasks: ["Site preparation", "Foundation work"],
    },
    {
      title: "Done",
      tasks: ["Initial planning", "Budget approval"],
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Kanban className="h-8 w-8" />
            Task Board
          </h1>
          <Button onClick={() => navigate("/contractors")}>
            Next: Contractors <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <Card key={column.title} className="p-4">
              <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
              <div className="space-y-2">
                {column.tasks.map((task) => (
                  <Card key={task} className="p-3 cursor-pointer hover:bg-accent/50 transition-colors">
                    {task}
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;