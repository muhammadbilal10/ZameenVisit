"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomSelect } from "@/components/common/CustomSelect";
import {
  areaMenuItems,
  currencyList,
  propertyPurposeList,
  propertyTypeList,
} from "@/constants";
import ImageUpload from "@/components/common/ImageUpload";
import Modal from "@/components/common/Modal";
import { useEffect, useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import {
  CalendarIcon,
  Copy,
  Delete,
  Loader2,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { propertyFormSchema } from "@/lib/formSchema";
import { addProperty } from "@/server-actions/property/property";
import { Checkbox } from "@/components/ui/checkbox";
import { format, isValid } from "date-fns";
import { LocationSearch } from "@/components/common/LocationSearch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import MapBox from "../PropertyMap/LocationMap";
import LocationMap from "../PropertyMap/LocationMap";
import AmentiesForm from "./AmentiesForm";
import { useRouter } from "next/navigation";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

export function PropertyAddForm() {
  const [isPending, startTransition] = useTransition();
  const [videoOpen, setVideoOpen] = useState(false);
  const [state, formAction] = useFormState(addProperty, null);
  const [propertyVideoUrls, setPropertyVideoUrls] = useState<string[]>([]);
  const [propertyImageUrls, setPropertyImageUrls] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<
    Record<string, string[]>
  >({});
  const [location, setLocation] = useState({
    address: "",
    city: "",
    geo: {
      lat: 31.5204,
      lng: 74.3587,
    },
  });
  const now = new Date();
  const locale = "en-US";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as const;
  const formatted = now.toLocaleString(locale, options);
  // ...
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof propertyFormSchema>>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.error,
      });
    }
    if (state?.success) {
      toast({
        title: "Property added successfully",
        description: "Property has been added successfully",
      });
      router.push("/property-list");
    }
  }, [state]);

  async function onSubmit(values: z.infer<typeof propertyFormSchema>) {
    console.log(values);
    // alert(JSON.stringify(values));
    console.log(values.area);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("purpose", values.purpose);
    formData.append("propertyType", values.propertyType);
    formData.append("dob", JSON.stringify(values.dob));

    formData.append("area", values.area);
    formData.append("areaUnit", values.areaUnit);
    formData.append("bedrooms", values.bedrooms);
    formData.append("bathrooms", values.bathrooms);
    formData.append("imagesUrl", JSON.stringify(propertyImageUrls));
    formData.append("videoUrl", JSON.stringify(propertyVideoUrls));
    formData.append("location", JSON.stringify(location));
    formData.append("amenties", JSON.stringify(selectedAmenities));

    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 max-w-4xl mx-auto"
        >
          <Card className="">
            <CardHeader>
              <CardTitle>OverView</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-4 grid md:grid-cols md:space-x-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Beautiful House in DHA Phase 5"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Example: Freshly painted home with new appliances and carpeting. Easy walking to public transit and a great neighborhood."
                        {...field}
                        className="h-40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1000000 PKR"
                          {...field}
                          type="number"
                          min="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                control={form.control}
                name="currencyUnit"
                disabled
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <CustomSelect
                      items={currencyList}
                      placeholderVal="Select a currency"
                      label="Currency"
                      onChange={field.onChange}
                      defaultValue={"PKR"}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              </div>
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Listed in</FormLabel>
                    <CustomSelect
                      items={propertyPurposeList}
                      placeholderVal="Select a purpose"
                      label="Property Purpose"
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <CustomSelect
                      items={propertyTypeList}
                      placeholderVal="Select a property type"
                      label="Property Purpose"
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date: any) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription></FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>

          <Card className="space-x-2">
            <CardHeader>
              <CardTitle>Listing Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1000"
                        {...field}
                        type="number"
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="areaUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area Unit</FormLabel>
                    <CustomSelect
                      items={areaMenuItems}
                      placeholderVal="Select a Area Unit "
                      label="Area Unit"
                      onChange={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="3 bedrooms"
                        {...field}
                        type="number"
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="3 bathrooms"
                        {...field}
                        type="number"
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features and Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <AmentiesForm
                selectedAmenities={selectedAmenities}
                setSelectedAmenities={setSelectedAmenities}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Address & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <input {...field} />
                    </FormControl>
                    <LocationSearch
                      location={location}
                      setLocation={setLocation}
                    />

                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <LocationSearch location={location} setLocation={setLocation} />
              <LocationMap location={location} setLocation={setLocation} />
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Address & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="DHA Phase 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Lahore" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Punjab" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input placeholder="40100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <CardTitle>Photo & Video Attachment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ImageUpload
                setUploadImagesUrl={setPropertyImageUrls}
                uploadImagesUrl={propertyImageUrls}
              />

              {/* want to display list of youtube url in a card manner sharpe */}
              <div className="">
                <div className="flex space-y-2 flex-col">
                  {propertyVideoUrls?.map((url, index) => (
                    <div
                      key={index + 1}
                      className="flex items-center justify-between space-x-2 p-2 border border-gray-400  rounded-lg"
                    >
                      <div className="flex max-sm:flex-col sm:items-center max-sm:space-y-2 sm:space-x-2">
                        <Youtube className="text-red-600" />
                        <span>{url}</span>
                      </div>
                      <button
                        onClick={() => {
                          setPropertyVideoUrls(
                            propertyVideoUrls.filter((item) => item !== url)
                          );
                        }}
                      >
                        <Delete className="text-red-600 h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {propertyVideoUrls.length < 4 && (
                <VideoModal
                  setPropertyVideoUrls={setPropertyVideoUrls}
                  propertyVideoUrls={propertyVideoUrls}
                />
              )}
            </CardContent>
          </Card>

          {/* <ComboboxDemo /> */}

          <div className="max-w-sm self-end">
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-3" />{" "}
                  submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

const VideoModal = ({
  setPropertyVideoUrls,
  propertyVideoUrls,
}: {
  setPropertyVideoUrls: (urls: string[]) => void;
  propertyVideoUrls: string[];
}) => {
  const [isValid, setIsValid] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    if (validateUrl(url)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const validateUrl = (url: string) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(watch\?v=)?([\w-]{11})/;
    return youtubeRegex.test(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Video</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Videos of your Property</DialogTitle>
          <DialogDescription>
            Add videos of your property from Youtube. Upload on Youtube and
            paste the link below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="https://www.youtube.com/embed/uTIcquf4Z-s"
              onChange={handleChange}
            />
            {!isValid && videoUrl && (
              <span className="text-sm mt-2 text-destructive font-semibold">
                Video link is Invalid
              </span>
            )}
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              disabled={!isValid}
              onClick={() => {
                setPropertyVideoUrls([...propertyVideoUrls, videoUrl]);
              }}
            >
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
