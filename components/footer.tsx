"use client";

// @components
import { Typography } from "@material-tailwind/react";

// @icons
import { RocketLaunchIcon } from "@heroicons/react/16/solid";

const LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Testimonial",
    href: "#testimonial",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full mb-6">
      <Typography
        as="a"
        color="primary"
        href="#"
        className="flex items-center justify-center gap-2 cursor-pointer font-medium"
      >
        <RocketLaunchIcon className="size-5 text-primary" />
        Launchify
      </Typography>

      <ul className="my-8 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
        {LINKS.map(({ title, href }, key) => (
          <li key={key}>
            <Typography as="a" href={href} className="hover:text-primary">
              {title}
            </Typography>
          </li>
        ))}
      </ul>
      <hr className="mb-8 border-surface" />
      <Typography className="text-center">
        &copy; {YEAR} Lunchify All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
