import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <Loader2 className="h-10 w-10 animate-spin text-green-600" />

      <div className="text-center">
        <h3 className="font-semibold text-lg">Loading Workshop Details</h3>
        <p className="text-sm text-muted-foreground">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default Loader;
