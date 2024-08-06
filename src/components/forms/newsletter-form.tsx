"use client";

import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold leading-[150%]">
                Join our newsletter
              </FormLabel>
              <FormControl>
                <div className="flex items-center gap-[1rem]">
                  <Input
                    {...field}
                    className="rounded-[150px] my-2 border-black px-6 py-3 focus-visible:ring-black"
                  />
                  <Button
                    variant="submit-second"
                    type="submit"
                    className="rounded-[150px] px-[1.5rem] py-[0.75rem] h-[3rem] text-base font-normal leading-[150%]"
                  >
                    Subscribe
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                By subscribing you agree with our{" "}
                <span className="underline">Privacy Policy</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default NewsletterForm;
