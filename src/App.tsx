import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectType from "./pages/ProjectType";
import ProjectSetup from "./pages/ProjectSetup";
import ProjectTimeline from "./pages/ProjectTimeline";
import FinanceSheet from "./pages/FinanceSheet";
import TaskBoard from "./pages/TaskBoard";
import ContractorCRM from "./pages/ContractorCRM";
import ARDemo from "./pages/ARDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project-type" element={<ProjectType />} />
          <Route path="/project-setup" element={<ProjectSetup />} />
          <Route path="/project-timeline" element={<ProjectTimeline />} />
          <Route path="/finance" element={<FinanceSheet />} />
          <Route path="/tasks" element={<TaskBoard />} />
          <Route path="/contractors" element={<ContractorCRM />} />
          <Route path="/ar-demo" element={<ARDemo />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;