"use client";
import React from "react";
import ImagesForm from "./ImagesForm";
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
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Имя must be at least 2 characters.",
  }),
  txt: z.string().min(2, {
    message: "Телефон must be at least 2 characters.",
  }),
  img: z.any(),
});

const HeroForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [img, setImg] = React.useState<any>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    axios
      .post(`/api/sections/hero`, { ...values, imgId: img })
      .then(async (r) => {
        toast({
          title: "Успешно!",
          description: "Изображение успешно добавленно!",
        });
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
    <div className="my-5">
      <ImagesForm img={img} setImg={setImg} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="txt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-full text-white" type="submit">
            {loading?"Загрзука...":"Сохранить"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
