"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { CustomTooltip } from "../common/CustomTooltip";
import { dashboardLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavbarLink = ({
  href,
  icon: Icon,
  label,
  isAccent,
}: {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  isAccent?: boolean;
}) => (
  <CustomTooltip label={label} side="right">
    <Link
      href={href}
      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
        isAccent ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  </CustomTooltip>
);

export default function DashboardSidebar() {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {dashboardLinks.map((link) => (
          <NavbarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isAccent={pathName === link.href}
          />
        ))}
      </nav>
    </aside>
  );
}
