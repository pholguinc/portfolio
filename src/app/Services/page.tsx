import React from "react";
import RollingCard from "@/components/RollingCard";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-center mt-2 md:text-6xl">
        My <span className="text-purple-500">services</span>
      </h1>
      <p className="text-lg text-gray-200 mt-4 max-w-2xl text-center md:text-xl md:mt-6">
        I offer a wide range of services to meet your needs.
      </p>
      <RollingCard
        autoplay={true}   
        pauseOnHover={true}/>
    </div>
  );
}

export default Services;
