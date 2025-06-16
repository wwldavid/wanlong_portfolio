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
        setResult("Message sent successfully! Thank you for contacting me  ✨");
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
    <div id="contact" className="w-full min-h-screen relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f4e6] via-[#f8f4e6]/80 to-[#84b9cb]/20 dark:from-[#2f5d50]/40 dark:via-[#4c6473]/30 dark:to-[#84b9cb]/10" />

      {/* 几何装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#84b9cb]/20 blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#4c6473]/15 blur-lg animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-[#2f5d50]/10 blur-2xl animate-pulse delay-500" />

      <div className="relative z-10 px-6 py-20 md:px-12 lg:px-[12%]">
        <div className="max-w-4xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 rounded-full bg-[#84b9cb]/20 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4c6473] to-[#84b9cb] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4c6473] via-[#2f5d50] to-[#84b9cb] bg-clip-text text-transparent mb-4">
              Let&apos;s Talk
            </h2>

            <p className="text-xl text-[#4c6473]/80 dark:text-[#84b9cb]/90 max-w-2xl mx-auto leading-relaxed">
              Got ideas to share? Projects to collaborate on? Or just want to
              say hello?
              <br />
              <span className="text-[#2f5d50] dark:text-[#84b9cb] font-medium">
                I look forward to hearing from you
              </span>
            </p>
          </div>

          {/* 表单容器 */}
          <div className="relative">
            {/* 表单背景卡片 */}
            <div className="absolute inset-0 bg-white/60 dark:bg-[#4c6473]/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#84b9cb]/30" />

            <form onSubmit={onSubmit} className="relative p-8 md:p-12">
              {/* 输入字段容器 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full p-4 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                             focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                             placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                             hover:shadow-lg hover:border-[#4c6473]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full p-4 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                             focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                             placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                             hover:shadow-lg hover:border-[#4c6473]/50"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="block text-sm font-medium text-[#4c6473] dark:text-[#84b9cb]/90">
                  Your message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Please enter your message here......"
                  required
                  className="w-full p-4 rounded-2xl border-2 border-[#84b9cb]/30 bg-white/80 dark:bg-[#2f5d50]/30 backdrop-blur-sm
                           focus:border-[#4c6473] focus:ring-4 focus:ring-[#84b9cb]/20 outline-none transition-all duration-300
                           placeholder-[#4c6473]/50 text-[#2f5d50] dark:text-[#f8f4e6] dark:placeholder-[#84b9cb]/60
                           hover:shadow-lg hover:border-[#4c6473]/50 resize-none"
                />
              </div>

              {/* 提交按钮 */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#4c6473] to-[#2f5d50] text-white font-semibold rounded-2xl
                           hover:from-[#2f5d50] hover:to-[#4c6473] transform hover:scale-105 hover:shadow-2xl
                           transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                           border border-[#84b9cb]/20 hover:border-[#84b9cb]/40"
                >
                  <span className="flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending......
                      </>
                    ) : (
                      <>
                        Message sent
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
                    result.includes("成功")
                      ? "bg-[#84b9cb]/20 text-[#2f5d50] dark:bg-[#84b9cb]/30 dark:text-[#f8f4e6] border border-[#84b9cb]/40"
                      : result.includes("发送中") || result.includes("正在")
                      ? "bg-[#f8f4e6]/80 text-[#4c6473] dark:bg-[#4c6473]/20 dark:text-[#84b9cb] border border-[#84b9cb]/30"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-300/40"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* 底部装饰信息 */}
          <div className="text-center mt-12">
            <p className="text-[#4c6473]/60 dark:text-[#84b9cb]/70">
              I aim to respond to all messages within 24 hours.
              <span className="inline-block ml-2">💫</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
