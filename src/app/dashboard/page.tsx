import Sidebar from "@/components/layout/Sidebar";
import { PropertyAddForm } from "@/components/property/PropertyForm/PropertyAddForm";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Profile() {
  return (
    <div className="pt-24">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-screen rounded-lg border"
      >
        <ResizablePanel defaultSize={22} className="max-lg:hidden">
          <div className="flex h-full justify-center p-6">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={78}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <PropertyAddForm />
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Profile;
