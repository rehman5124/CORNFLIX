import React from "react";
import IndexData from "@/components/IndexData";
import HeroSection from "@/components/HeroSection";

export const generateMetadata = (params) => {
  return {
    title: "Home | CORNFLIX"
  }
}

export default function Home() {

  return (
    <div>
      <HeroSection />
      <IndexData />
    </div>
  );
}
