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
import { CustomeSelect } from "@/components/common/CustomeSelect";
import { areaMenuItems } from "@/constants";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),

  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine(
      (val) => !isNaN(val) && val > 0,
      "Price must be a positive number."
    ),

  area: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, "Area must be a positive number."),
  areaUnit: z.string().nonempty({ message: "Please select a area unit" }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

export function PropertyAddForm() {
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      areaUnit: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert(JSON.stringify(values));
    toast({
      title: "Your email has been sent successfully",
      description: formatted,
    });

    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid md:grid-cols-2  gap-10"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-80">
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

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="1000000 PKR" {...field} type="number" />
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
                  <FormLabel>Currency</FormLabel>
                  <CustomeSelect
                    items={areaMenuItems}
                    placeholderVal="Select a currency"
                    label="Currency"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input placeholder="1000" {...field} type="number" />
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
                  <CustomeSelect
                    items={areaMenuItems}
                    placeholderVal="Select a Area Unit "
                    label="Area Unit"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="place-self-center md:col-span-2 w-96"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
