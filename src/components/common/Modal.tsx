import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { cn } from "@/lib/utils";

export default function Modal({
  isOpen,
  setOpen,
  children,
  className,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className={cn("max-w-4xl h-[600px] p-0")}>
        {children}
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
}
