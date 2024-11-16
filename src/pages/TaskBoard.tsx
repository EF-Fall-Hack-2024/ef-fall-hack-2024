import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Kanban, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const TaskBoard = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "To Do",
      tasks: [
        { id: 1, title: "Select materials", priority: "high" },
        { id: 2, title: "Contact suppliers", priority: "medium" },
        { id: 3, title: "Review permits", priority: "high" },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        { id: 4, title: "Site preparation", priority: "high" },
        { id: 5, title: "Foundation work", priority: "medium" },
      ],
    },
    {
      title: "Done",
      tasks: [
        { id: 6, title: "Initial planning", priority: "medium" },
        { id: 7, title: "Budget approval", priority: "high" },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const handleAddTask = () => {
    toast.success("Task creation modal would open here");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center gap-3 text-primary">
            <Kanban className="h-10 w-10" />
            Task Board
          </h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={handleAddTask}>
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
            <Button onClick={() => navigate("/contractors")}>
              Next: Contractors <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <Card key={column.title} className="p-4 bg-gradient-to-b from-white to-accent/5">
              <h2 className="text-xl font-semibold mb-4 text-primary">{column.title}</h2>
              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <Card 
                    key={task.id} 
                    className="p-4 cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  >
                    <div className="space-y-2">
                      <h3 className="font-medium">{task.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)} capitalize`}>
                        {task.priority} Priority
                      </span>
                    </div>
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