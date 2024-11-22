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
    title: "Services",
    href: "#services",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
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
    <footer id="footer" className="w-full mb-6 text-center mx-auto">
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
            <Typography as="a" type="small" href={href}>
              {title}
            </Typography>
          </li>
        ))}
      </ul>
      <hr className="mb-8 border-surface" />
      <Typography type="small">
        &copy; {YEAR} Lunchify All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
