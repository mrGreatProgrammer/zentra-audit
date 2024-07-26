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
import { ToastAction } from "../ui/toast";

const UploaderForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState<any>(null);
  const { toast } = useToast();

  function onSubmit() {
    setLoading(true);
    const formData = new FormData();

    formData.append("image", image as Blob);

    fetch(`/api/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (r) => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
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
          <Button disabled={loading} onClick={()=>onSubmit()} className="text-white" type="submit">
            {loading?"Loading...":"Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploaderForm;
