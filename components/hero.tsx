import React from "react";

// @components
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-b from-background to-white rounded-tl-lg rounded-tr-lg">
      <div className="grid place-items-center">
        <div className="text-center lg:mt-28 mt-20">
          <Typography type="h1" className="max-w-2xl mx-auto">
            Launch into Success with{" "}
            <span className="text-primary">Launchify</span>
          </Typography>
          <Typography className="mt-4 mb-8 text-tertiary max-w-md mx-auto">
            Empower your business with intuitive SaaS solutions designed to
            streamline operations and drive growth.
          </Typography>
          <div className="flex gap-4 justify-center mb-2">
            <Button variant="outline" className="hover:text-white">Get Started</Button>
            <Button className="text-white">Request a Demo</Button>
          </div>
          <Image
            height={1280}
            width={1280}
            src="/hero.png"
            alt="hero-image"
            className="h-full w-[1200px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
