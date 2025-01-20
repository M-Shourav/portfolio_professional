"use client";
import React, { useState } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
const ContactLeft = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Address: "",
    Message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycby-8ZQJuKt1_F69WfSRTKvF5uCP7vHHUepQdSOm2Su0xKk-pV311YLIFC7EQMrkqwXx3g/exec";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("DateTime", currentDateTime);
    try {
      setLoading(true);
      const response = await fetch(scriptUrl, { method: "POST", body: form });
      if (response.ok) {
        setStatus("Success! Your message has been sent. ");
        setFormData({
          Name: "",
          Email: "",
          Address: "",
          Message: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : status ? (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" py-10 flex flex-col gap-2 items-center justify-center"
        >
          <p className="text-xl font-semibold text-green-500">{status}</p>
          <p className="text-base text-green-800 font-semibold max-w-[400px] text-center">
            Thank you for your time and will make sure to reach you out on your
            email:
            <span className="text-lg font-semibold text-green-500">
              {formData?.Email}
            </span>{" "}
            as soon as possible
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 ">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase text-white font-semibold">
              Your Name
            </p>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
              value={formData?.Name}
              autoComplete="name"
              required
              className="bg-bodyColor w-full h-12 px-4 py-2 outline-none rounded-md 
              border border-hoverColor/20
            focus-visible:border-hoverColor/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase text-white font-semibold">Email</p>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
              value={formData?.Email}
              autoComplete="email"
              required
              className="w-full h-12 px-4 py-2 outline-none rounded-md
               border border-hoverColor/20
            focus-visible:border-hoverColor/50 bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase text-white font-semibold">
              Address
            </p>
            <input
              type="text"
              placeholder="Address"
              name="Address"
              onChange={handleChange}
              value={formData?.Address}
              autoComplete="address"
              required
              className="w-full h-12 bg-bodyColor px-4 py-2 outline-none rounded-md 
              border border-hoverColor/20
            focus-visible:border-hoverColor/50 data-[state=active]:bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase text-white font-semibold">
              Message
            </p>
            <textarea
              placeholder="Message"
              name="Message"
              onChange={handleChange}
              value={formData?.Message}
              required
              rows={4}
              className="bg-transparent px-4 py-2 resize-none outline-none 
              rounded-md border border-hoverColor/20
            focus-visible:border-hoverColor/50"
            />
          </div>
          <button
            type="submit"
            className="w-32 md:w-40 h-12 flex items-center justify-center text-base
          md:text-lg font-semibold text-white bg-transparent border border-lightSky/30
          rounded-md tracking-wide hover:bg-lightSky/80 hover:text-bodyColor
          duration-300 ease-in-out "
          >
            Contact Us
          </button>
        </form>
      )}
    </>
  );
};

export default ContactLeft;
