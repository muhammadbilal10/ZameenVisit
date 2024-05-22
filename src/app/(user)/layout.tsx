import DashboardNavbar from "@/components/layout/DashboardNavbar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // bg-muted/40
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <DashboardSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <DashboardNavbar />
        <div className="sm:px-6 sm:py-0 p-4">{children}</div>
      </div>
    </div>
  );
}
