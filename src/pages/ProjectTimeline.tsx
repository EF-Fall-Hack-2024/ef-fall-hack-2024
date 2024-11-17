import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProjectTimeline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-contractor-accent p-6">
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-contractor-secondary">Project Timeline</h1>
        
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-contractor-secondary">Project Plan</h2>
            <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg">
              Modern apartment condo renovation featuring an open-concept living space 
              with high-end finishes. The project includes a complete kitchen remodel 
              with custom cabinetry, quartz countertops, and stainless steel appliances. 
              Master bathroom to be upgraded with luxury fixtures and walk-in shower. 
              Additional improvements include hardwood flooring throughout, smart home 
              integration, and energy-efficient lighting systems. Total living space: 1,200 sq ft.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-contractor-secondary">Planning Phase</h2>
            <div className="space-y-3">
              <TimelineItem
                task="Initial design consultation"
                deadline="Week 1"
              />
              <TimelineItem
                task="Finalize material selections"
                deadline="Week 2"
              />
              <TimelineItem
                task="Obtain necessary permits"
                deadline="Week 3-4"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-contractor-secondary">Execution Phase</h2>
            <div className="space-y-3">
              <TimelineItem
                task="Site preparation"
                deadline="Week 5"
              />
              <TimelineItem
                task="Major construction work"
                deadline="Week 6-10"
              />
              <TimelineItem
                task="Interior finishing"
                deadline="Week 11-12"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-contractor-secondary">Completion Phase</h2>
            <div className="space-y-3">
              <TimelineItem
                task="Final inspections"
                deadline="Week 13"
              />
              <TimelineItem
                task="Project handover"
                deadline="Week 14"
              />
            </div>
          </div>
        </Card>

        <Button 
          onClick={() => navigate("/finance")}
          className="w-full bg-contractor-DEFAULT hover:bg-contractor-secondary"
        >
          Continue to Financial Sheet
        </Button>
      </div>
    </div>
  );
};

const TimelineItem = ({ task, deadline }: { task: string; deadline: string }) => (
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
    <span className="text-gray-800">{task}</span>
    <span className="text-contractor-secondary font-medium">{deadline}</span>
  </div>
);

export default ProjectTimeline;