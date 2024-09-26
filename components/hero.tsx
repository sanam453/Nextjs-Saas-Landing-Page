import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Hero() {
  return (
    <section className="bg-[#F2F2F2] rounded-tl-lg rounded-tr-lg">
      <div className="grid place-items-center h-[95vh]">
        <div className="text-center mt-20">
          <Typography type="h1" className="max-w-2xl mx-auto">
            Launch into Success with{" "}
            <span className="text-primary">Launchify</span>
          </Typography>
          <Typography className="mt-4 mb-8 text-tertiary max-w-md mx-auto">
            Empower your business with intuitive SaaS solutions designed to
            streamline operations and drive growth.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Learn More</Button>
            <Button className="text-white">Request a Demo</Button>
          </div>
          <Image
            height={1024}
            width={1024}
            src="/hero-3.png"
            alt="hero-image"
            className="h-full w-[1500px] mt-10 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
