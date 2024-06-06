"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AreaChart,
  Bath,
  Bed,
  Loader2,
  MoreHorizontal,
  MoreVertical,
  Trash,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CustomTooltip } from "@/components/common/CustomTooltip";
import Link from "next/link";
import { formatCurrency, formatNumber } from "@/constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useFormState, useFormStatus } from "react-dom";
import { deleteProperty } from "@/server-actions/property/property";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    description: string;
    propertyType: string;
    price: string;
    imageUrl: string[];
    location: {
      address: string;
      city: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    bedrooms: number;
    bathrooms: number;

    areaSize: {
      size: number;
      unit: string;
    };
    user: {
      name: string;
      phone: string;
      email: string;
      image: string;
    };
  };
  type?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, type }) => {
  function createPropertySlug() {
    const baseSlug = `${property.bedrooms}-bedroom-${property?.propertyType}-${property.user?.name}-${property.location?.address}`;
    const id = property.id;

    const slug = baseSlug
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    return `/property/${slug}/${id}`;
  }

  return (
    <div className="relative">
      {type === "edit" && (
        <div className="absolute top-2 z-50 right-2">
          <DeleteProperty id={property.id} />
        </div>
      )}
      <Link href={createPropertySlug()}>
        <Card className={cn("w-full")}>
          <CardContent className={cn("p-0 h-52 w-full")}>
            {property?.imageUrl?.length > 0 && (
              <Image
                src={property.imageUrl[0]}
                alt="Property Image"
                width={600}
                height={200}
                className="object-cover w-full h-full"
              />
            )}
          </CardContent>
          <CardHeader>
            <CardTitle className={cn("text-xl truncate")}>
              <CustomTooltip label={property.title}>
                <p className="truncate">{property.title}</p>
              </CustomTooltip>
            </CardTitle>
            <p className="text-md font-semibold text-primary">
              PKR {formatCurrency(Number(property.price))}
            </p>
            <CardDescription className="line-clamp-3">
              {property.description}
            </CardDescription>
            <div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Bed size={16} /> {property.bedrooms}
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={16} /> {property?.bedrooms}
                </span>
                <span className="flex items-center gap-1">
                  <AreaChart size={16} /> {property?.areaSize?.size}{" "}
                  {property?.areaSize?.unit}
                </span>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardFooter className={cn("p-2 mt-auto")}>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={property?.user?.image} />
                <AvatarFallback>
                  {property?.user?.name?.split(" ").map((name) => name[0])}
                </AvatarFallback>
              </Avatar>
              <p className="">{property?.user?.name}</p>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default PropertyCard;

function DeleteProperty({ id }: { id: string }) {
  const [state, formAction] = useFormState(deleteProperty, null);
  const [isOpen, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Property Deleted",
        description: "Property has been deleted successfully.",
      });
      setOpen(false);
      router.refresh();
    }

    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.error,
      });
    }
  }, [state]);

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", id);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-2 rounded-full bg-white shadow-lg cursor-pointer">
            <MoreVertical size={20} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash size={16} className="mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isOpen} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              property and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button onClick={handleDelete} disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span className="ml-2">Deleting...</span>
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
