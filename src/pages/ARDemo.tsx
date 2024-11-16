import { Phone, RotateCcw, Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ARDemo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20 p-4">
      <div className="w-full max-w-4xl p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl font-bold text-foreground">
            AR Furniture Preview
          </h1>
          <p className="text-muted-foreground">
            See how furniture looks in your space before you buy
          </p>
        </div>

        {/* Phone frame */}
        <div className="relative mx-auto" style={{ maxWidth: "360px" }}>
          <div className="absolute inset-0 bg-black rounded-[3rem] -z-10 shadow-xl"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-black aspect-[9/19]">
            {/* AR View */}
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="AR View of sofa in living room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Phone Details */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            This is a demo visualization of how AR furniture placement would work on a mobile device
          </p>
        </div>
      </div>
    </div>
  );
};

export default ARDemo;