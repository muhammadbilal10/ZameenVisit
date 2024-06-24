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
import { useFormState } from "react-dom";
import { contactUs } from "@/server-actions/company/contact";
import { useEffect, useRef, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "name must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "email must be a valid email address.",
  }),
  phone: z.string().length(13, {
    message: "phone number must be 13 characters.",
  }),
  role: z.string({
    required_error: "Please select your interest.",
  }),
  message: z.string().min(10, {
    message: "message must be at least 10 characters.",
  }),
});

export default function AgentContactForm({
  agentName,
  agentEmail,
}: {
  agentName: string;
  agentEmail: string;
  whatsapp?: string;
  phoneNo?: string;
}) {
  const session = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      phone: "",
      message: "Hello, I am interested in [Amazing oceanfront apartment]",
    },
  });

  console.log(session);

  const [state, formAction] = useFormState(contactUs, null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("mobileNumber", values.phone);
    formData.append("role", values.role);
    formData.append("message", values.message);
    formData.append("agentEmail", agentEmail);

    startTransition(() => {
      formAction(formData);
    });
  }

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you soon.",
      });
      form.reset();
    }
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later.",
      });
    }
  }, [state]);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{agentName ?? ""}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
            ref={formRef}
          >
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
                    <Input type="text" placeholder="+923494411115" {...field} />
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
                      <SelectItem value="buyer">
                        I&apos;m a Buyer/Tennant
                      </SelectItem>
                      <SelectItem value="agent">I&apos;m a agent</SelectItem>
                      <SelectItem value="other">other</SelectItem>
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

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
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
