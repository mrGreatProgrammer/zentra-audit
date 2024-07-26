import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "@/utils/db";

const HeroSection = async () => {
  const data = await db.heroSection.findFirst({ include: { img: true } });

  return (
    <section className="flex items-end container mx-auto justify-between pt-10">
      <div className="max-w-xl">
        <h1 className="text-3xl">{data?.title}</h1>
        <p className="pt-8 pb-12">{data?.txt}</p>
        <Button className="text-white" variant="default">
          Связаться с нами
        </Button>
      </div>
      <div>
        {data?.img?.find((e) => e)?.link && (
          <Image
            // @ts-ignore
            src={data?.img?.find((e) => e)?.link}
            alt="main-img"
            width={500}
            height={500}
            className="w-full"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
