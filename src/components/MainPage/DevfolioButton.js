"use client"
// import React from "react";

const Devfolio_Button = () => {
  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <div className="cursor-target flex justify-center items-center p-1">
      <div
        className="apply-button"
        data-hackathon-slug="electrothon-8"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      >
      </div>
    </div>
  )
}
export default Devfolio_Button;