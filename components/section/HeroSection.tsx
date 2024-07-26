import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "@/utils/db";

const HeroSection = async () => {
    const data = await db.heroSection.findMany();

  return (
    <section className="flex items-end container mx-auto justify-between pt-10">
      <div className="max-w-xl">
        <h1 className="text-3xl">
          Zentra Audit – Ваш ключ к прибыльному бизнесу
        </h1>
        <p className="pt-8 pb-12">
          Мы специализируемся на анализе убыточных компаний и выводе их в
          прибыль. Также помогаем владельцам избавиться от операционных забот,
          предоставляя профессиональные решения для устойчивого роста вашего
          бизнеса.
        </p>
        <Button className="text-white" variant="default">Связаться с нами</Button>
      </div>
      <div>
        <Image
          src={"/main_img.png"}
          alt="main-img"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
