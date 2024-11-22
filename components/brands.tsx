import React from "react";

// @components
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Brands() {

  return (
    <section className="text-center mt-20">
      <Typography type="lead" className="font-semibold">
        We are trusted by
      </Typography>
      <div className="mt-6 flex flex-wrap gap-4 justify-between max-w-4xl mx-auto">
        <Image
          height={1024}
          width={1024}
          className="w-36"
          src="/stripe.png"
          alt="stripe"
        />
        <Image
          height={1024}
          width={1024}
          className="h-20 w-36"
          src="/hubspot.png"
          alt="hubspot"
        />
        <Image
          height={1024}
          width={1024}
          className="h-20 w-32"
          src="/zoom.png"
          alt="zoom"
        />
        <Image
          height={1024}
          width={1024}
          className="h-20 w-40"
          src="/gumroad.png"
          alt="gumroad"
        />
      </div>
    </section>
  );
}

export default Brands;
