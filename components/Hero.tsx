"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handeleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="hero__title leading-tight">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our efoortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handeleScroll;
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
