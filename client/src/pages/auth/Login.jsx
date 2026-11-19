
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend authentication will be connected here.
    console.log({ email, password });
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#F7F3ED] text-[#242522] font-['Inter',sans-serif] flex flex-col">

      {/* HEADER */}
      <header className="h-[70px] min-h-[70px] w-full bg-[#F7F3ED] shadow-[0_3px_12px_rgba(36,37,34,0.08)] z-20">
        <div className="h-full max-w-[1440px] mx-auto px-[54px] flex items-center justify-between">

          <a href="/" className="flex items-center gap-[8px] shrink-0">
            <span className="h-[25px] w-[2px] bg-[#244B3D]" />
            <span className="text-[14px] font-bold tracking-[0.2px]">
              STUDENT PROJECTS
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-[62px] text-[14px] font-medium">
            <a href="/projects" className="relative py-2 hover:text-[#244B3D]">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#244B3D]" />
            </a>

            <a href="/about" className="relative py-2 hover:text-[#244B3D]">
              About
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#244B3D]" />
            </a>

            <a href="/contact" className="relative py-2 hover:text-[#244B3D]">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#244B3D]" />
            </a>
          </nav>

          <div className="flex items-center gap-[34px] text-[13px] font-medium">
            <a
              href="/signup"
              className="px-[19px] py-[7px] rounded-[9px] bg-[#244B3D] text-white shadow-[0_3px_8px_rgba(36,37,34,0.13)] hover:bg-[#19392E] transition"
            >
              Sign Up
            </a>

            <a href="/admin" className="relative py-2 hover:text-[#244B3D]">
              Admin
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#244B3D]" />
            </a>
          </div>
        </div>
      </header>

      {/* LOGIN PAGE */}
      <main className="relative flex-1 min-h-0 w-full overflow-hidden">

        {/* DECORATIVE TILE - TOP LEFT */}
        <div className="absolute top-[35px] left-[14%] w-[104px] h-[104px] rounded-[22px] bg-[#F7F3ED] shadow-[0_8px_20px_rgba(36,37,34,0.10)] rotate-[10deg] flex items-center justify-center">
          <span className="text-[43px] font-bold text-[#244B3D]">
            &lt;/&gt;
          </span>
        </div>

        {/* DECORATIVE TILE - TOP RIGHT */}
        <div className="absolute top-[55px] right-[9%] w-[104px] h-[104px] rounded-[22px] bg-[#F7F3ED] shadow-[0_8px_20px_rgba(36,37,34,0.10)] rotate-[-10deg] flex items-center justify-center">
          <span className="text-[66px] font-bold text-[#244B3D]">
            ◇
          </span>
        </div>

        {/* DECORATIVE TILE - BOTTOM LEFT */}
        <div className="absolute bottom-[65px] left-[10%] w-[104px] h-[104px] rounded-[22px] bg-[#F7F3ED] shadow-[0_8px_20px_rgba(36,37,34,0.10)] rotate-[-8deg] flex items-center justify-center">
          <span className="text-[61px] font-bold text-[#244B3D]">
            ⌘
          </span>
        </div>

        {/* DECORATIVE TILE - BOTTOM RIGHT */}
        <div className="absolute bottom-[55px] right-[14%] w-[104px] h-[104px] rounded-[22px] bg-[#F7F3ED] shadow-[0_8px_20px_rgba(36,37,34,0.10)] rotate-[8deg] flex items-center justify-center">
          <span className="text-[68px] font-bold text-[#244B3D]">
            *
          </span>
        </div>

        {/* CENTRAL LOGIN CONTENT */}
        <section className="relative z-10 flex flex-col items-center w-full pt-[70px]">

          {/* STUDENT LABEL */}
          <div className="flex items-center justify-center gap-[26px] mb-[22px]">
            <span className="w-[52px] h-[2px] bg-[#244B3D]/50" />

            <span className="text-[14px] font-bold tracking-[1px]">
              STUDENT
            </span>

            <span className="w-[52px] h-[2px] bg-[#244B3D]/50" />
          </div>

          {/* PROJECT CATALOG TITLE */}
          <div className="inline-flex items-center justify-center px-[18px] py-[4px] rounded-[18px] bg-[#F7F3ED] shadow-[0_5px_13px_rgba(36,37,34,0.17)]">
            <h1 className="whitespace-nowrap text-[38px] leading-[1.3] font-bold tracking-[-1px]">
              Project <span className="text-[#244B3D]">Catalog</span>
            </h1>
          </div>

          {/* LOGIN FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-[64px] w-[244px] flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-[33px] px-[10px] rounded-[9px] border border-[#244B3D]/55 bg-[#F7F3ED] text-[11px] outline-none shadow-[0_3px_8px_rgba(36,37,34,0.13)] focus:shadow-[0_4px_12px_rgba(36,75,61,0.22)] focus:border-[#244B3D]"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-[21px] w-full h-[33px] px-[10px] rounded-[9px] border border-[#244B3D]/55 bg-[#F7F3ED] text-[11px] outline-none shadow-[0_3px_8px_rgba(36,37,34,0.13)] focus:shadow-[0_4px_12px_rgba(36,75,61,0.22)] focus:border-[#244B3D]"
            />

            <button
              type="submit"
              className="mt-[42px] h-[32px] px-[20px] rounded-[9px] bg-[#244B3D] text-white text-[11px] font-semibold shadow-[0_3px_8px_rgba(36,37,34,0.16)] hover:bg-[#19392E] transition"
            >
              Log In
            </button>

            <p className="mt-[13px] text-[12px] whitespace-nowrap">
              Don't have an Account?{" "}
              <a
                href="/signup"
                className="border-b border-[#244B3D] pb-[2px] hover:text-[#244B3D]"
              >
                Sign up!
              </a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
