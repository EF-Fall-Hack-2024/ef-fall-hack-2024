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
            <div className="relative w-full h-full bg-gradient-to-b from-neutral-100 to-neutral-200">
              {/* Room background */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-80"></div>

              {/* AR Sofa */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%]"
              >
                <img
                  src="/placeholder.svg"
                  alt="AR Sofa"
                  className="w-full h-auto opacity-90"
                />
              </motion.div>

              {/* AR Interface Elements */}
              <div className="absolute inset-x-4 top-4 flex justify-between items-center">
                <Button variant="secondary" size="icon" className="rounded-full bg-black/20 border-2 border-white/20 backdrop-blur-sm">
                  <RotateCcw className="h-4 w-4 text-white" />
                </Button>
                <div className="space-x-2">
                  <Button variant="secondary" size="icon" className="rounded-full bg-red-500 border-2 border-white/20">
                    <X className="h-4 w-4 text-white" />
                  </Button>
                  <Button variant="secondary" size="icon" className="rounded-full bg-green-500 border-2 border-white/20">
                    <Check className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>

              {/* AR Guidelines */}
              <div className="absolute inset-0 border-2 border-white/10 border-dashed m-8"></div>

              {/* Instructions */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white text-sm">Move phone to scan area</p>
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