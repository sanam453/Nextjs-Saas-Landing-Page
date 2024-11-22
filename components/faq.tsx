"use client";

import React from "react";

// @components
import { Typography, Accordion } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

// @icons

export function Faq() {
  return (
    <section id="faq" className="container my-32">
      <div className="mb-12">
        <Typography
          as="h2"
          type="h3"
          className="text-black dark:text-white text-center mb-4 [text-wrap:_balance]"
        >
          Frequently asked auestions
        </Typography>
        <Typography className="[text-wrap:_balance] max-w-2xl mx-auto text-center text-foreground">
          Our FAQ section answers common questions about our SaaS solutions,
          covering setup, features, and support. For more inquiries, feel free
          to contact our support team!
        </Typography>
      </div>
      <div className="max-w-4xl mx-auto">
        <Accordion>
          <Accordion.Item
            value="faq-1"
            className="mb-2 bg-background rounded-lg px-6 py-2 border-0"
          >
            <Accordion.Trigger>
              <Typography as="h3" type="lead" className="font-medium">
                How do I get started?
              </Typography>
              <ChevronDownIcon className="h-5 w-5 group-data-[open=true]:rotate-180 text-black dark:text-white" />
            </Accordion.Trigger>
            <Accordion.Content>
              <Typography className="text-foreground mt-1">
                Getting started is easy! Simply sign up for an account, you can
                either use your email or sign up with Google or Twitter. Once
                you have an account, then connect your mobile or computer with
                Vault and start uploading your files to the cloud by dragging
                and dropping them into the Vault folder created on your device.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="faq-2"
            className="mb-2 bg-background rounded-lg px-6 py-2 border-0"
          >
            <Accordion.Trigger>
              <Typography as="h3" type="lead" className="font-medium">
                How secure is my data?
              </Typography>
              <ChevronDownIcon className="h-5 w-5 group-data-[open=true]:rotate-180 text-black dark:text-white" />
            </Accordion.Trigger>
            <Accordion.Content>
              <Typography className="text-foreground mt-1">
                Your data is very secure. We use industry-standard encryption
                methods to ensure your data is secure both during transfer and
                while at rest. We also have a team of security experts that
                monitor our systems 24/7 to ensure that your data is always
                protected.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="faq-3"
            className="mb-2 bg-background rounded-lg px-6 py-2 border-0"
          >
            <Accordion.Trigger>
              <Typography as="h3" type="lead" className="font-medium">
                Can I share my files with others?
              </Typography>
              <ChevronDownIcon className="h-5 w-5 group-data-[open=true]:rotate-180 text-black dark:text-white" />
            </Accordion.Trigger>
            <Accordion.Content>
              <Typography className="text-foreground mt-1">
                Yes, you can share your files with others. You can create a
                shareable link to your files and send it to anyone you want to
                share the files with. You can also set permissions on the files
                to control who can view or edit the files.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="faq-4"
            className="mb-2 bg-background rounded-lg px-6 py-2 border-0"
          >
            <Accordion.Trigger>
              <Typography as="h3" type="lead" className="font-medium">
                Can I access my files offline?
              </Typography>
              <ChevronDownIcon className="h-5 w-5 group-data-[open=true]:rotate-180 text-black dark:text-white" />
            </Accordion.Trigger>
            <Accordion.Content>
              <Typography className="text-foreground mt-1">
                Yes, you can access your files offline. You can download your
                files to your device and access them even when you are not
                connected to the internet. You can also set files to be
                available offline so that you can access them without an
                internet connection.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="faq-5"
            className="mb-2 bg-background rounded-lg px-6 py-2 border-0"
          >
            <Accordion.Trigger>
              <Typography as="h3" type="lead" className="font-medium">
                Do you offer refunds?
              </Typography>
              <ChevronDownIcon className="h-5 w-5 group-data-[open=true]:rotate-180 text-black dark:text-white" />
            </Accordion.Trigger>
            <Accordion.Content>
              <Typography className="text-foreground mt-1">
                Yes, we offer refunds. If you are not satisfied with our service
                for any reason, you can request a refund within 30 days of
                signing up. We will refund your payment in full, no questions
                asked.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}
