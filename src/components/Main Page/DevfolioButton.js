"use client"

import React, { useEffect } from "react";
const Devfolio_Button = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="cursor-target text-white p-1 flex justify-center items-center">
      <div
        className="apply-button w-52 h-12 md:w-80 "
        data-hackathon-slug="electrothon-8"
        data-button-theme="light"
      >
      </div>
    </div>
  )
}
export default Devfolio_Button;