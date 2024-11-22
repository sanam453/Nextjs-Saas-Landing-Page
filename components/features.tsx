"use client";

// @components
import { Card, CardBody, Typography } from "@material-tailwind/react";

// @icons
import {
  ChartBarIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  PresentationChartBarIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/16/solid";

const DATA = [
  {
    icon: PresentationChartBarIcon,
    title: "Scalability",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Integration Capabilities",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Access",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
  {
    icon: PaintBrushIcon,
    title: "Customizability",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
  {
    icon: ChartBarIcon,
    title: "Analytics and Reporting",
    desc: "Ability to handle growth users and data without issues in performance.",
  },
];

export function Features() {
  return (
    <section id="features" className="my-32">
      <Typography as="h2" type="h4" className="text-center">
        Key Features
      </Typography>
      <Typography className="mt-4 mb-12 text-tertiary text-center max-w-xl mx-auto">
        Launchify has quickly become the to-go content marketing solution for
        over 4000 clients around the world.
      </Typography>
      <div className="container bg-background md:py-32 py-16 px-4 bg-opacity-50 rounded-lg">
        <div className="max-w-5xl mx-auto grid md:gap-y-28 gap-y-10 place-items-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {DATA.map(({ icon: Icon, title, desc }, key) => (
            <Card key={key} className="shadow-none border-0 sm:max-w-[16rem] bg-transparent">
              <CardBody>
                <Icon className="h-10 w-10" />
                <Typography
                  as="h3"
                  type="h6"
                  className="font-semibold mt-4 mb-2"
                >
                  {title}
                </Typography>
                <Typography className="text-tertiary">{desc}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
