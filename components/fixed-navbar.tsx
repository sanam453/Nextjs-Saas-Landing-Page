"use client";

import React from "react";

// @components
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

// @icons
import { RocketLaunchIcon } from "@heroicons/react/16/solid";

export function FixedNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="#services" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="#features" className="flex items-center">
          Features
        </a>
      </Typography>
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="#testimonials" className="flex items-center">
          Testimonial
        </a>
      </Typography>
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="#pricing" className="flex items-center">
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        type="small"
        color="secondary"
        className="p-1 font-normal"
      >
        <a href="#faq" className="flex items-center">
          FAQ
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky bg-white rounded-none shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            color="primary"
            href="#"
            className="flex items-center gap-2 cursor-pointer font-medium"
          >
            <RocketLaunchIcon className="size-5 text-primary" />
            Launchify
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-3">
              <Button variant="ghost" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button
                variant="solid"
                color="primary"
                className="hidden lg:inline-block"
              >
                <span className="text-white">Get Started</span>
              </Button>
            </div>
            <IconButton
              variant="ghost"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-4">
            <Button isFullWidth variant="ghost">
              <span>Log In</span>
            </Button>
            <Button isFullWidth variant="solid">
              <span className="text-white">Get Started</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default FixedNavbar;
