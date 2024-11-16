import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Kanban, ArrowRight, Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const TaskBoard = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "To Do",
      icon: <AlertCircle className="h-5 w-5 text-task" />,
      tasks: [
        { id: 1, title: "Select materials", priority: "high" },
        { id: 2, title: "Contact suppliers", priority: "medium" },
        { id: 3, title: "Review permits", priority: "high" },
      ],
    },
    {
      title: "In Progress",
      icon: <Clock className="h-5 w-5 text-task" />,
      tasks: [
        { id: 4, title: "Site preparation", priority: "high" },
        { id: 5, title: "Foundation work", priority: "medium" },
      ],
    },
    {
      title: "Done",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      tasks: [
        { id: 6, title: "Initial planning", priority: "medium" },
        { id: 7, title: "Budget approval", priority: "high" },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-task/10 text-task border-task/20";
      case "medium":
        return "bg-task-secondary/10 text-task-secondary border-task-secondary/20";
      default:
        return "bg-green-100 text-green-700 border-green-200";
    }
  };

  const handleAddTask = () => {
    toast.success("Task creation modal would open here");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-task-accent to-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center animate-fade-in">
          <h1 className="text-4xl font-bold flex items-center gap-3 bg-gradient-to-r from-task to-task-secondary bg-clip-text text-transparent">
            <Kanban className="h-10 w-10 text-task" />
            Task Board
          </h1>
          <div className="space-x-4">
            <Button variant="outline" onClick={handleAddTask} className="group">
              <Plus className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
              Add Task
            </Button>
            <Button onClick={() => navigate("/contractors")} className="bg-task hover:bg-task-secondary">
              Next: Contractors <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((column, columnIndex) => (
            <Card 
              key={column.title} 
              className="p-4 bg-gradient-to-b from-white to-task-accent/5 animate-fade-in border border-task-accent/20 backdrop-blur-sm"
              style={{ animationDelay: `${columnIndex * 150}ms` }}
            >
              <h2 className="text-xl font-semibold mb-4 text-task flex items-center gap-2">
                {column.icon}
                {column.title}
              </h2>
              <div className="space-y-3">
                {column.tasks.map((task, taskIndex) => (
                  <Card 
                    key={task.id} 
                    className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in bg-white/50"
                    style={{ animationDelay: `${(columnIndex * 150) + (taskIndex * 100)}ms` }}
                  >
                    <div className="space-y-2">
                      <h3 className="font-medium group-hover:text-task transition-colors">{task.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)} border capitalize inline-block`}>
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