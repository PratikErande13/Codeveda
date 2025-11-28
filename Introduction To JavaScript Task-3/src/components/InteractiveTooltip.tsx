import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const InteractiveTooltip = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              Hover me
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip! 🎉</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Info className="w-4 h-4" />
              Information
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltips provide helpful context on hover</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="gradient-primary">
              Primary Action
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to perform the main action</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">
              Delete
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>⚠️ This action cannot be undone</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
