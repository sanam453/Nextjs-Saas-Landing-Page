"use client";

import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

// charts import
import dynamic from "next/dynamic";
import Image from "next/image";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RadialChart = {
  chart: {
    type: "radialBar",
  },
  colors: ["#01CC73"],
  series: [62],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 10,
        size: "60%",
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: 10,
          show: true,
          color: "#343434",
          fontSize: "20px",
        },
        value: {
          color: "#111",
          fontSize: "20px",
          show: false,
        },
      },
    },
  },

  labels: ["Goal"],
};

const MultiRadialChart = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  colors: ["#C1E3D4", "#01CC73", "#0D6E44", "#167A4E"],
  series: [67, 84, 97, 61],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
      },
      dataLabels: {
        total: {
          show: true,
          label: "TOTAL",
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Goal"],
};

const AreaChart = {
  chart: {
    type: "bar",
    height: 150,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#0BB96D"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  markers: {
    size: 5,
    strokeWidth: 0,
    strokeColors: "solid",
    hover: {
      size: 7,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    show: false,
    borderColor: "#EEEEEE",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    axisTicks: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    labels: {
      show: true, // Hide x-axis labels
    },
  },
  yaxis: {
    labels: {
      show: true, // Hide x-axis labels
    },
  },
};

const AreaChartSeries = [
  {
    name: "series1",
    data: [
      11, 80, 50, 100, 139, 100, 120, 67, 91, 129, 101, 75, 91, 11, 80, 50, 100,
      139, 67, 91, 129, 101, 75, 91,
    ],
  },
];

export function Services() {
  const AVATARS = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  ];

  return (
    <section className="my-32">
      <Typography type="h4" className="text-center">
        Boost Your Growth with Our SaaS Solutions
      </Typography>
      <Typography className="mt-4 mb-8 text-tertiary max-w-xl mx-auto">
        Our SaaS products boost collaboration and efficiency, empowering your
        business to grow with user-friendly designs and seamless integration.
      </Typography>
      <div className="mt-14 grid gap-y-6 lg:gap-x-6 lg:grid-cols-3 grid-cols-1">
        <div className="col-span-1">
          <Card className="p-4 shadow-md border-0 bg-[#F2F2F2]">
            <CardHeader>
              <Typography type="h6">Analytics</Typography>
              <Typography className="mt-4 text-tertiary">
                Our analysis covers key metrics to help you identify areas for
                improvement.
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <Chart
                options={RadialChart}
                series={RadialChart.series}
                type="radialBar"
                height={290}
              />
            </CardBody>
          </Card>
        </div>
        <div className="col-span-2">
          <Card className="p-4 shadow-md border-0 bg-[#F2F2F2] flex flex-col md:flex-row justify-between">
            <CardHeader className="flex flex-col h-80 justify-between">
              <div>
                <Typography type="h6">Advanced Analytics</Typography>
                <Typography className="mt-4 text-tertiary max-w-lg">
                  Our advanced analytics tools provide valuable insights into
                  your business performance. Track key metrics, visualize data
                  trends, and make informed decisions to optimize your
                  operations. With user-friendly dashboards, you&apos;ll have
                  the power of data at your fingertips.
                </Typography>
              </div>
              <div className="flex items-center -space-x-4">
                {AVATARS.map((img, key) => (
                  <Avatar
                    key={key}
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={img}
                  />
                ))}
              </div>
            </CardHeader>
            <CardBody>
              <Chart
                options={MultiRadialChart}
                series={MultiRadialChart.series}
                type="radialBar"
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-6 grid gap-y-6 lg:gap-x-6 lg:grid-cols-3 grid-cols-1">
        <div className="col-span-2">
          <Card className="p-4 shadow-md border-0 bg-[#F2F2F2]">
            <CardHeader>
              <Typography type="h6">
                Improve your hiring process based on existing data
              </Typography>
              <Typography className="mt-4 text-tertiary">
                Discover whats working and what could be improved in your hiring
                process with Recruitment. With user-friendly dashboards,
                you&apos;ll have the power of data at your fingertips.
              </Typography>
            </CardHeader>
            <CardBody>
              <Chart
                options={AreaChart}
                series={AreaChartSeries}
                type="area"
                width=""
                height={220}
              />
            </CardBody>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="p-4 shadow-md border-0 bg-primary">
            <CardHeader>
              <Typography type="h6" className="text-white">
                Flow Insights
              </Typography>
            </CardHeader>
            <CardBody className="p-0 grid place-items-center">
              <Image
                height={512}
                width={512}
                src="/animation.gif"
                alt="animation"
                className="h-80 w-80"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Services;
