import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbProps = {
  breadCrumbItem?: {
    id: number;
    name: string;
    href: string;
    active?: boolean;
  }[];
};

export function BreadCrumb({ breadCrumbItem }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadCrumbItem?.map((item, index) => (
          <div key={item.id} className="flex items-center space-x-2">
            <BreadcrumbItem>
              <BreadcrumbLink
                className={`${item?.active === true ? "text-black" : ""}`}
                href={item.href}
              >
                {item.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadCrumbItem.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
