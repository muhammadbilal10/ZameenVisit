import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ToolTipProps {
  label: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<any>;
  side?: "top" | "right" | "bottom" | "left";
}
export function CustomTooltip({
  children,
  label,
  className,
  icon: Icon,
  side,
}: ToolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
