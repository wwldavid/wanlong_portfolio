import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message......");

    const formData = new FormData(event.target);
    formData.append("access_key", "2bf43d39-1274-4c55-947a-d439cbb51e9c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! Thank you for contacting me ✨");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Submission failed, please try again later");
      }
    } catch (error) {
      setResult("Network error, please check your connection and try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full relative overflow-hidden py-20">
      <div className="relative z-10 px-6 md:px-12 lg:px-[12%]">
        <div className="max-w-7xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4c6473] via-[#2f5d50] to-[#84b9cb] bg-clip-text text-transparent mb-4">
              Contact Me
            </h2>

            <p className="text-xl text-[#4c6473]/80 dark:text-[#84b9cb]/90 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities ?
              <br />
              <span className="text-[#2f5d50] dark:text-[#84b9cb] font-medium">
                Connect with me and make something amazing together
              </span>
            </p>
          </div>

          {/* 联系信息和表单区域 */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* 左侧：联系信息 */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 dark:bg-[#4c6473]/20 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-[#84b9cb]/30">
                <h3 className="text-2xl font-bold text-[#4c6473] dark:text-[#84b9cb] mb-8">
                  Get In Touch
                </h3>

                {/* 联系方式列表 */}
                <div className="space-y-6">
                  {/* 邮箱 */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4c6473] to-[#84b9cb] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#4c6473] dark:text-[#84b9cb] mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:davidwu.web@gmail.com"
                        className="text-[#2f5d50] dark:text-[#f8f4e6] hover:text-[#84b9cb] transition-colors duration-300 break-all"
                      >
                        davidwu.web@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* 电话 */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4c6473] to-[#84b9cb] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#4c6473] dark:text-[#84b9cb] mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+14038883609"
                        className="text-[#2f5d50] dark:text-[#f8f4e6] hover:text-[#84b9cb] transition-colors duration-300"
                      >
                        403-888-3609
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#4c6473] to-[#84b9cb] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#4c6473] dark:text-[#84b9cb] mb-1">
                        LinkedIn
                      </h4>
                      <a
                        href="https://www.linkedin.com/in/david-wanlong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2f5d50] dark:text-[#f8f4e6] hover:text-[#84b9cb] transition-colors duration-300 break-all"
                      >
                        linkedin.com/in/david-wanlong
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：联系表单 */}
            <div className="lg:col-span-3">
              <div className="bg-white/60 dark:bg-[#4c6473]/20 backdrop-blur-lg rounded-3xl shadow-lg border border-[#84b9cb]/30">
                <form onSubmit={onSubmit} className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-[#4c6473] dark:text-[#84b9cb] mb-8">
                    Send Message
                  </h3>

                  {/* 输入字段容器 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                        Your Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-2 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                                 focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                                 placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                                 hover:shadow-lg hover:border-[#4c6473]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-2 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                                 focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                                 placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                                 hover:shadow-lg hover:border-[#4c6473]/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-4 py-2 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                               focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                               placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                               hover:shadow-lg hover:border-[#4c6473]/50"
                    />
                  </div>

                  <div className="space-y-2 mb-8">
                    <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      required
                      className="w-full px-4 py-2 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                               focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                               placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                               hover:shadow-lg hover:border-[#4c6473]/50 resize-none"
                    />
                  </div>

                  {/* 提交按钮 */}
                  <div className="text-left">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-4 py-2 bg-gradient-to-r from-[#4c6473] to-[#2f5d50] text-white font-semibold rounded-2xl
                               hover:from-[#2f5d50] hover:to-[#4c6473] transform hover:scale-105 hover:shadow-2xl
                               transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                               border border-[#84b9cb]/20 hover:border-[#84b9cb]/40"
                    >
                      <span className="flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <div className="p-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                              <Image
                                src={
                                  isDarkMode
                                    ? assets.contact_icon_dark
                                    : assets.contact_icon
                                }
                                alt="发送图标"
                                className="w-4 h-4 brightness-200 dark:brightness-100 group-hover:rotate-12 transition-transform"
                              />
                            </div>
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  {/* 状态消息 */}
                  {result && (
                    <div
                      className={`mt-6 p-4 rounded-2xl text-center font-medium transition-all duration-500 ${
                        result.includes("success")
                          ? "bg-[#84b9cb]/20 text-[#2f5d50] dark:bg-[#84b9cb]/30 dark:text-[#f8f4e6] border border-[#84b9cb]/40"
                          : result.includes("Sending") ||
                            result.includes("going")
                          ? "bg-[#f8f4e6]/80 text-[#4c6473] dark:bg-[#4c6473]/20 dark:text-[#84b9cb] border border-[#84b9cb]/30"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-300/40"
                      }`}
                    >
                      {result}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
