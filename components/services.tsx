"use client";

import React from "react";

// charts import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// components
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";

const AreaChartData = [
  {
    name: "Jan",
    uv: 0,
  },
  {
    name: "Feb",
    uv: 2000,
  },
  {
    name: "Mar",
    uv: 800,
  },
  {
    name: "Apr",
    uv: 3080,
  },
  {
    name: "May",
    uv: 1890,
  },
  {
    name: "Jun",
    uv: 3690,
  },
  {
    name: "Jul",
    uv: 1090,
  },
  {
    name: "Aug",
    uv: 2900,
  },
  {
    name: "Sep",
    uv: 1090,
  },
  {
    name: "Oct",
    uv: 3680,
  },
  {
    name: "Nov",
    uv: 2090,
  },
  {
    name: "Dec",
    uv: 30,
  },
];

const PieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const MultiPieChart = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
      <div className="mt-14 grid gap-y-6 xl:gap-x-6 xl:grid-cols-3 grid-cols-1">
        <div className="col-span-1">
          <Card className="p-4 shadow-md border-0 bg-[#F2F2F2]">
            <CardHeader>
              <Typography type="h6">Analytics</Typography>
              <Typography className="mt-4 text-tertiary">
                Our analysis covers key metrics to help you identify areas for
                improvement.
              </Typography>
            </CardHeader>
            <CardBody>
              <PieChart width={400} height={300}>
                <Pie
                  data={PieChartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#01CC73"
                  label
                />
              </PieChart>
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
            <CardBody className="p-0">
              <PieChart width={400} height={400}>
                <Pie
                  data={MultiPieChart}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#01CC73"
                  paddingAngle={15}
                  dataKey="value"
                >
                  {MultiPieChart.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
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
              <Typography className="my-4 text-tertiary">
                Discover whats working and what could be improved in your hiring
                process with Recruitment.
              </Typography>
            </CardHeader>
            <CardBody className="w-full h-full overflow-scroll p-0">
              <LineChart
                width={900}
                height={270}
                data={AreaChartData}
                margin={{
                  top: 0,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#01CC73"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#01CC73" />
              </LineChart>
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
