import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export function Brands() {
  const DATA = ["stripe", "hubspot", "gumroad", "zoom"];

  return (
    <section className="text-center mt-20">
      <Typography type="lead" className="font-semibold">
        We are trusted by
      </Typography>
      <div className="mt-6 flex flex-wrap gap-4 justify-between max-w-4xl mx-auto">
        {DATA.map((img, key) => (
          <Image
            key={key}
            height={1024}
            width={1024}
            className="w-36 h-[70px]"
            src={`/${img}.png`}
            alt="stripe"
          />
        ))}
      </div>
    </section>
  );
}

export default Brands;
