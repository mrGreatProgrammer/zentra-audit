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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import Image from "next/image";
import axios from "axios";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

interface ImagesFormProps {
  img: any;
  setImg: any;
}


const ImagesForm: React.FC<ImagesFormProps> = ({ img, setImg }) => {
  const [images, setImages] = React.useState<any>();
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    axios
      .get("/api/upload", { params: { page, limit: 30 } })
      .then((res) => {setImages(res.data)})
      .catch((err) => console.error("err", err));
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Выбрать изображение</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-100">
        <DialogHeader>
          <DialogTitle>Картинки</DialogTitle>
          <DialogDescription>Выберите картинку из базы</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-3 py-4">
          <RadioGroup onValueChange={(imgId)=>setImg(imgId)} defaultValue={img}>
            {images?.map((e: any) => (
              <div key={e.id} className="flex items-center space-x-2">
                <RadioGroupItem value={e.id} id="r1" />
                <Label htmlFor="r1">
                  <Image src={e.link} alt={e.altTxt} width={150} height={150} />
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button className="text-white" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImagesForm;
