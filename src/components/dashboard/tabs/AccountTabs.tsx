import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "@/components/user/Account/ProfileCard";

export default function AccountTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="bg mb-10">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfileCard />
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
