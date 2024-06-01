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
import { useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { Copy, Delete, Loader2, Youtube, YoutubeIcon } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { propertyFormSchema } from "@/lib/formSchema";
import { addProperty } from "@/server-actions/property/property";
import { Checkbox } from "@/components/ui/checkbox";
import { isValid } from "date-fns";
import { ComboboxDemo } from "@/components/common/LocationSearch";

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
  const form = useForm<z.infer<typeof propertyFormSchema>>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

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

    formData.append("area", values.area);
    formData.append("areaUnit", values.areaUnit);
    formData.append("bedrooms", values.bedrooms);
    formData.append("bathrooms", values.bathrooms);
    formData.append("address", values.address);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("zipCode", values.zipCode);
    formData.append("imagesUrl", JSON.stringify(propertyImageUrls));
    formData.append("videoUrl", JSON.stringify(propertyVideoUrls));

    startTransition(() => {
      formAction(formData);
    });

    // toast({
    //   title: "Your property has been added Successfully",
    //   description: formatted,
    // });

    // toast({
    //   variant: "destructive",
    //   title: "Uh oh! Something went wrong.",
    //   description: "There was a problem with your request.",
    //   action: <ToastAction altText="Try again">Try again</ToastAction>,
    // });
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

          {/* <Card>
            <CardHeader>
              <CardTitle>Feature and Amenities</CardTitle>
              <CardDescription>
                Add features and amenities of your property
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Sidebar</FormLabel>
                        <FormDescription>
                          Select the items you want to display in the sidebar.
                        </FormDescription>
                      </div>
                      {items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card> */}

          <Card>
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
          </Card>

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
                  {propertyVideoUrls?.map((url) => (
                    <div className="flex items-center justify-between space-x-2 p-2 border border-gray-400  rounded-lg">
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

          <ComboboxDemo />

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
