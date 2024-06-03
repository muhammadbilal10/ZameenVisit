import { BreadCrumb } from "@/components/common/BreadCrumb";
import AccountTabs from "@/components/dashboard/tabs/AccountTabs";
import { getSession } from "@/server-actions/auth";

const BREADCRUMB_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Account",
    href: "/account",
    active: true,
  },
];

export default async function AccountPage() {
  return (
    <div className="sm:px-6 sm:mx-8 max-w-7xl">
      <div>
        <h1 className="text-2xl font-bold mb-2">Account</h1>
      </div>
      <div className="mb-10">
        <BreadCrumb breadCrumbItem={BREADCRUMB_ITEMS} />
      </div>

      <div>
        <div className="">
          <AccountTabs />
        </div>
        {/* <div>
          <ProfileCard />
        </div> */}
      </div>
    </div>
  );
}
