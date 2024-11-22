/* eslint-disable @next/next/no-img-element */
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// @components
import { Navigation, Pagination } from "swiper/modules";
import { Avatar, Card, IconButton, Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// @icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const DATA = [
  {
    img: "/avatar6.jpg",
    about:
      "Ability to handle growth users and data without issues in performance. Our team has been able to scale less.",
    name: "Sanam Hamza",
    company: "Decipheron Company",
  },
  {
    img: "/avatar1.jpg",
    about:
      "The intuitive interface and powerful features have streamlined our workflow. We have seen a significant.",
    name: "Alex Johnson",
    company: "Tech Innovators",
  },
  {
    img: "/avatar2.jpg",
    about:
      "Exceptional customer support and reliable performance. The team is always ready.",
    name: "Maria Garcia",
    company: "Creative Solutions",
  },
  {
    img: "/avatar3.jpg",
    about:
      "A game-changer for our business operations. It's an essential tool for any modern enterprise.",
    name: "James Smith",
    company: "Enterprise Corp",
  },
  {
    img: "/avatar4.jpg",
    about:
      "Highly customizable and easy to integrate with our existing systems.",
    name: "Linda Brown",
    company: "NextGen Tech",
  },
  {
    img: "/avatar5.jpg",
    about:
      "Increased our productivity and efficiency significantly. The seamless integration and user-friendly interface.",
    name: "Michael Davis",
    company: "Business Boosters",
  },
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-2 justify-end mt-6">
      <IconButton
        isCircular
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="dark z-10"
      >
        <ChevronLeftIcon className="h-6 w-6 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="dark z-10"
      >
        <ChevronRightIcon className="h-6 w-6 translate-x-px stroke-2" />
      </IconButton>
    </div>
  );
}

function customPagination(_: unknown, className: string) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[primary:rgb(var(--color-primary))] !opacity-50 ![primary:rgb(var(--color-background))]"></span>`;
}

export function Testimonials() {
  return (
    <section id="testimonials" className="my-32 px-4 md:px-8">
      <Typography as="h2" type="h4" className="text-center">
        Hear from Our Happy Customers
      </Typography>
      <Typography className="mt-4 mb-12 text-tertiary text-center max-w-xl mx-auto">
        Our customers share how our SaaS solutions have boosted efficiency and
        transformed their operations. Discover their success stories!
      </Typography>

      <div className="w-full mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            enabled: true,
            clickable: true,
            dynamicBullets: true,
            renderBullet: customPagination,
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            420: {
              slidesPerView: 1, // Show 1 slide on mobile
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablet
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on larger screens
              spaceBetween: 20,
            },
          }}
          className="relative rounded-lg"
        >
          {DATA.map(({ img, about, name, company }, index) => (
            <SwiperSlide key={index} className="select-none">
              <Card
                className={`p-4 w-full ${
                  index !== 0
                    ? "border border-primary/40 bg-transparent"
                    : "bg-primary"
                }`}
              >
                <Card.Header>
                  <Avatar size="lg" src={img} />
                </Card.Header>
                <Card.Body>
                  <Typography
                    className={`mt-2 mb-4 ${
                      index === 0 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {about}
                  </Typography>
                  <Typography
                    className={`font-semibold ${
                      index === 0 ? "text-white" : ""
                    }`}
                  >
                    {name}
                  </Typography>
                  <Typography
                    type="small"
                    className={index === 0 ? "text-white" : "text-foreground"}
                  >
                    {company}
                  </Typography>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
          <CustomNavigation />
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
