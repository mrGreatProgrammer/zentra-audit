"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const UploaderForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState<any>(null);

  function onSubmit() {
    const { toast } = useToast();
    setLoading(true);
    const formData = new FormData();

    formData.append("image", image as Blob);

    fetch(`/api/iamges`, {
      method: "POST",
      body: formData,
    })
      .then(async (r) => {
        toast({
          title: "Успешно!",
          description: "Изображение успешно добавлено!",
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Загрузить изображение</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Картинки</DialogTitle>
          <DialogDescription>Загрзите новую картинку.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="images">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                setImage(event.target.files?.item(0) || null);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="text-white" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploaderForm;
