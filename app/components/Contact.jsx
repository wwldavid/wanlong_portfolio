import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bf43d39-1274-4c55-947a-d439cbb51e9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* <h4 className="text-center mb-2 text-lg">Contact me</h4> */}
      <h4 className="text-center text-5xl text-[#84b9cb]">
        Please Leave Your Message Here
      </h4>

      {/* <p className="text-center max-w-2xl mx-auto mt-t mb-12">
        Please leave your message here. I am excited to collaborate with you!
      </p> */}

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/80"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/80"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/80"
        ></textarea>

        <button
          type="submit"
          className="py-1 px-4 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-white/10 dark:text-white dark:border dark:border-white/30  dark:hover:bg-white/20"
        >
          Send message{" "}
          <Image
            src={isDarkMode ? assets.contact_icon_dark : assets.contact_icon}
            alt="contact icon"
            className="w-6 h-6 brightness-200 dark:brightness-100"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
