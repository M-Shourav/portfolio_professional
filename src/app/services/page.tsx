import PageLayout from "@/components/PageLayout";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import Link from "next/link";
import React from "react";
import { FaShareSquare } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] w-full flex flex-col py-5 md:py-10 ">
      <PageLayout>
        <Title className="md:text-3xl text-lightSky/90 mb-6">
          Services I Provide
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {servicesData?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col p-6 bg-lightSky/10 border
               border-lightSky/20 hover:border-lightSky/30
                rounded-xl shadow-md group hover:shadow-lg gap-2 duration-300"
            >
              <div className="w-full flex items-center justify-between">
                <p
                  className="text-2xl md:text-5xl font-semibold text-outline
                 text-transparent group-hover:text-outline-hover duration-300"
                >
                  {item?.id}
                </p>
                <Link
                  href={item?.href}
                  target="_blank"
                  className="text-2xl hover:text-lightSky duration-300"
                >
                  <FaShareSquare />
                </Link>
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                {item?.title}
              </h1>
              <p className="text-sm md:text-base text-white/60 leading-5">
                {item?.description}
              </p>
              <span className="w-full mt-2 h-px bg-white/20 inline-block" />
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;
