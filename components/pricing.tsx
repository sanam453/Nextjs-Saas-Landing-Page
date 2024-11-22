"use client";

// @components
import { Card, Typography, Button } from "@material-tailwind/react";

// @icons
import { CheckIcon } from "@heroicons/react/16/solid";

const DATA = [
  {
    title: "Free",
    description: "Send files once in a while",
    options: [
      "5 team members",
      "200+ components",
      "40+ built-in pages",
      "1 year free updates",
    ],
    price: 0,
  },
  {
    title: "Pro",
    description: "send really big files regularly",
    options: [
      "Encrypted file storage",
      "Get access to all our services",
      "No need to verify transfers",
      "Access your files",
    ],
    price: 29,
  },
  {
    title: "Premium",
    description: "Send files once in a while",
    options: [
      "5 team members",
      "200+ components",
      "40+ built-in pages",
      "1 year free updates",
    ],
    price: 19,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="my-32">
      <Typography as="h2" type="h4" className="text-center">
        Pricing Made Easy
      </Typography>
      <Typography className="mt-4 mb-12 text-tertiary text-center max-w-xl mx-auto">
        Our flexible pricing plans are designed for businesses of all sizes.
        Choose the right plan for your needs and start benefiting from our SaaS
        solutions—no hidden fees, just clear value.
      </Typography>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {DATA.map(({ title, description, options, price }, index) => (
          <Card
            key={index}
            color={index === 1 ? "primary" : "default"}
            className={`p-4 border-0 ${index === 1 ? "text-white" : "text-secondary"}`}
          >
            <Card.Header>
              <Typography
                as="h3"
                type="h6"
                className={`${index === 1 ? "text-white" : "text-black"}`}
              >
                {title}
              </Typography>
              <Typography
                className={`mt-2 ${
                  index === 1 ? "text-white" : "text-tertiary"
                }`}
              >
                {description}
              </Typography>
            </Card.Header>
            <Card.Body as="ul">
              <div className="space-y-2 pb-10">
                {options.map((option, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckIcon className="h-5 w-5" />
                    <Typography>{option}</Typography>
                  </li>
                ))}
              </div>
              <hr className="border-primary-dark pt-6" />
              <Typography
                as="span"
                type="h4"
                className="mt-3 flex gap-1 text-black"
              >
                <span className="lg:text-2xl text-sm">$</span>
                {price}
                <span className="self-end lg:text-2xl text-sm">/mo</span>
              </Typography>
              <Typography
                className={`mt-2 text-tertiary ${
                  index === 1 ? "text-white" : "text-tertiary"
                }`}
              >
                per person
              </Typography>
            </Card.Body>
            <Card.Footer>
              <Button
                size="lg"
                color={index === 1 ? "secondary" : "primary"}
                className="text-white"
                isFullWidth
              >
                Buy Now
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
