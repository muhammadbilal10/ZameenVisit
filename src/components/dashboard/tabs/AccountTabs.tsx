import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpdatePasswordForm from "@/components/user/Account/UpdatePasswordForm";
import UpdateProfileForm from "@/components/user/Account/UpdateProfileForm";
import { getUser } from "@/server-actions/user/profile";

export default async function AccountTabs() {
  //
  const user = (await getUser()) ?? {
    name: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    city: "",
    country: "",
    address: "",
    image: "",
  };
  console.log(user);

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="bg mb-10">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <UpdateProfileForm {...user} />
      </TabsContent>
      <TabsContent value="password">
        <UpdatePasswordForm />
      </TabsContent>
    </Tabs>
  );
}
