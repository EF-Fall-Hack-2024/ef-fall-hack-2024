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
              {/* Room background */}
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Living room background"
                className="w-full h-full object-cover"
              />
              
              {/* AR Sofa Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-[80%] h-[40%] relative"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-lg border-2 border-primary/30 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-primary text-sm font-medium px-3 py-1 bg-primary/20 rounded-full">
                        AR Sofa Placement
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* AR Interface Elements */}
              <div className="absolute top-4 right-4 space-x-2 flex">
                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm">
                  <Check className="h-4 w-4" />
                </Button>
              </div>
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