import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CompanyHistory = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            О компании
          </h1>
          <p className="mb-8 leading-relaxed">
            Zentra Audit была основана с целью помочь владельцам бизнеса
            преодолевать финансовые трудности и достигать новых высот. Мы
            гордимся нашим опытом и достижениями в сфере консалтинга.
          </p>
          <div className="flex justify-center">
            <Button className="text-white" variant="default">
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/about_us-img.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
