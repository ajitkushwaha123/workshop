import { Loader2 } from "lucide-react";

const Loader = ({ title = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2 className="h-10 w-10 animate-spin text-green-600" />

      <div className="text-center">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
};

export default Loader;
