import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "MERN Stack Development",
    image: "/services/mern.avif",
    description:
      "We offer full-stack web development using MongoDB, Express.js, React, and Node.js. From building responsive frontends to scalable APIs and real-time features, our MERN experts handle it all.",
    features: [
      "Responsive React frontends",
      "Node.js REST APIs",
      "MongoDB data modeling",
      "Authentication & Authorization",
      "Real-time updates with Socket.IO"
    ],
  },
  {
    title: "MEAN Stack Development",
    image: "/services/mean.jpg",
    description:
      "Our MEAN stack developers specialize in crafting enterprise-grade web applications with Angular, Express.js, MongoDB, and Node.js. Perfect for admin dashboards, B2B apps, and more.",
    features: [
      "Angular-powered SPAs",
      "RESTful services with Express",
      "MongoDB performance optimization",
      "JWT-based secure APIs",
      "Cross-platform deployment"
    ],
  },
];

const WebServices = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-4">Our Services</h1>
      <p className="text-lg text-center mb-10">
        We specialize in modern full-stack development using MERN and MEAN technologies.
      </p>

      <section className="space-y-10">
        {services.map((service, idx) => (
          <Card className="shadow-md py-0" key={idx}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover rounded-t-xl"
            />
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {service.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <Separator className="my-12" />

      <p className="text-center text-lg">
        Let's build something powerful together. Contact us to get started!
      </p>
    </div>
  );
};

export default WebServices;
