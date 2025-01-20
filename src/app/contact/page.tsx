"use client";
import ContactLeft from "@/components/ContactLeft";
import ContactRight from "@/components/ContactRight";
import PageLayout from "@/components/PageLayout";
import SocialLinks from "@/components/SocialLinks";
import Title from "@/components/Title";
import React from "react";
const ContactPage = () => {
  return (
    <div className="py-5 md:py-10">
      <PageLayout>
        <div className="w-full h-full flex flex-col gap-y-2">
          <Title className="md:text-3xl text-lightSky">
            Let&#39;s work together
          </Title>
          <p className="max-w-2xl text-sm md:text-lg text-white/60 tracking-wider">
            way to connect for potential projects or partnerships. It creates an
            open and welcoming environment for communication and teamwork.
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row items-center  gap-5 md:gap-10">
          <div className="bg-transparent w-full h-full py-5 flex flex-col gap-5">
            <Title className="md:text-3xl text-lightSky/80">
              Send Us A Message
            </Title>
            <ContactLeft />
          </div>
          <div
            className="bg-transparent  w-full h-full
         flex flex-col gap-5"
          >
            <Title className="md:text-2xl text-lightSky/80">Contact Info</Title>
            <ContactRight />
            <Title className="md:text-3xl text-lightSky/60">Follow US</Title>
            <SocialLinks />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default ContactPage;
