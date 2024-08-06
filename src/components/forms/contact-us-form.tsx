"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .max(150, { message: "Subject must be less than 150 characters" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree to the terms" }),
});

function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-normal leading-[150%]">
                Name
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel className="text-base font-normal leading-[150%]">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel className="text-base font-normal leading-[150%]">
                Email
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-normal leading-[150%]">
                Subject
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-normal leading-[150%]">
                Message
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex items-center gap-[0.5rem] space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-[0.875rem] font-normal leading-[0] hover:cursor-pointer">
                I accept the Terms
              </FormLabel>
            </FormItem>
          )}
        />

        <div className="pt-[1rem]">
          <Button
            variant="submit-second"
            type="submit"
            className="rounded-[150px] px-[1.5rem] py-[0.75rem] h-[3rem] text-base font-normal leading-[150%]"
          >
            Send message
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactUsForm;
