import AgencyInfoForm from "@/components/property/Agencies/AgencyInfoForm";
import AgencyOwnerInfoForm from "@/components/property/Agencies/AgencyOwnerInfoForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAgencyInfo } from "@/server-actions/Agency/agency";

type AgencyInfo = {
  agencyName: string;
  companyEmail: string;
  city: string;
  country: string;
  agencyAddress: string;
  agencyImage: string;
  designation: string;
  description: string;
  ownerName: string;
  message: string;
  ownerPicture: string;
};
export default async function AgencyInfoTabs() {
  const agencyData = await getAgencyInfo();
  const agencyInfo = agencyData?.agency as AgencyInfo;
  console.log(agencyInfo);
  return (
    <Tabs defaultValue="agency" className="w-full">
      <TabsList className="bg mb-10">
        <TabsTrigger value="agency">Agency</TabsTrigger>
        <TabsTrigger value="password">Owner</TabsTrigger>
      </TabsList>
      <TabsContent value="agency">
        <AgencyInfoForm {...agencyInfo} />
      </TabsContent>
      <TabsContent value="password">
        <AgencyOwnerInfoForm {...agencyInfo} />
      </TabsContent>
    </Tabs>
  );
}
