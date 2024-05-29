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
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { propertyFormSchema } from "@/lib/formSchema";
import { addProperty } from "@/server-actions/property/property";

export function PropertyAddForm() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [state, formAction] = useFormState(addProperty, null);
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

  function onSubmit(values: z.infer<typeof propertyFormSchema>) {
    console.log(values);
    alert(JSON.stringify(values));
    toast({
      title: "Your property has been added Successfully",
      description: formatted,
    });

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
          // onSubmit={form.handleSubmit(onSubmit)}
          action={formAction}
          className="flex flex-col space-y-8"
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
                        required
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
                        required
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
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aunit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area Unit</FormLabel>
                    <CustomSelect
                      items={areaMenuItems}
                      placeholderVal="Select a Area Unit "
                      label="Area Unit"
                      onChange={field.onChange}
                      defaultValue={"Marla"}
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
              <ImageUpload />
              <VideoModal />
            </CardContent>
          </Card>

          <div className="max-w-sm self-end">
            <SubmitButton />
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

const VideoModal = () => {
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
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary">
            Add
          </Button>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
