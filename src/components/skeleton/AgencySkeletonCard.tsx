import { Skeleton } from "@/components/ui/skeleton";

export function AgencySkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-full rounded-xl" />
    </div>
  );
}
