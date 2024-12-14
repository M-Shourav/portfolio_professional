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
        <div className="w-full h-full">
          <Title className="md:text-3xl text-lightSky">
            Let&#39;s work together
          </Title>
          <p className="max-w-2xl text-sm md:text-lg text-white/60 tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            velit vel saepe fugiat ex aperiam, totam quae et tenetur deleniti.
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row  gap-5">
          <div className="bg-transparent w-full h-full p-6 flex flex-col gap-10">
            <Title className="md:text-3xl text-lightSky/80">
              Send Us A Message
            </Title>
            <ContactLeft />
          </div>
          <div
            className="bg-transparent  w-full h-full p-6
         flex flex-col gap-10"
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
