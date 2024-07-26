"use client";
import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Имя must be at least 2 characters.",
  }),
  telephon: z.string().min(2, {
    message: "Телефон must be at least 2 characters.",
  }),
  comment: z
    .string()
    .min(5, {
      message: "Сообщение must be at least 5 characters.",
    })
    .max(200, { message: "Не больше 200 символов!" }),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    axios
      .post(`/api/sections/contacts`, values)
      .then(async (r) => {
        toast({
          title: "Успешно!",
          description: "В скором времени мы с вами свяжемся!",
        });
        form.reset({ comment: "", telephon: "", username: "" });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Ошибка!",
          description: err.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сообщение</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="w-full text-white" type="submit">
          {loading ? "Загрузка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
