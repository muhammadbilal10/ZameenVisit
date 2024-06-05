"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import whatsapp from "@/images/socials/whatsapp.svg";
import Link from "next/link";

import { useSession } from "@/components/auth/auth-wrapper";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "name must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "email must be a valid email address.",
  }),
  phone: z.string().length(12, {
    message: "phone number must be 12 characters.",
  }),
  role: z.string({
    required_error: "Please select your interest.",
  }),
  message: z.string().min(10, {
    message: "message must be at least 10 characters.",
  }),
});

export default function AgentContactForm() {
  const session = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      phone: session?.user?.phoneNumber || "",
      message: "Hello, I am interested in [Amazing oceanfront apartment]",
    },
  });

  console.log(session);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Agent Name</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Muhammad Umer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="muhdumer81@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="+923494411115"
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
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identify Your Interest</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        I&apos;m a Buyer/Tennant
                      </SelectItem>
                      <SelectItem value="m@google.com">
                        I&apos;m a agent
                      </SelectItem>
                      <SelectItem value="m@support.com">other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className=""
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    Please include key details and any specific preferences for
                    your property inquiry.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className={cn("space-x-2")}>
        <Button asChild variant={"outline"} className="flex-1">
          <Link href={`https://wa.me/+923200452298`} target="_blank">
            <Image
              src={whatsapp}
              alt="whatsapp"
              width={24}
              height={24}
              className="mr-2"
            />
            WhatsApp
          </Link>
        </Button>

        <Button asChild variant={"outline"} className="flex-1">
          <Link href={`tel:+923494411115`} target="_blank">
            <Phone className="mr-2 h-5 w-5" />
            Call
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
