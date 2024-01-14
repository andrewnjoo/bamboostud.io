/* eslint-disable @next/next/no-img-element */

import { Card, CardProps } from "./Card";

const services: CardProps[] = [
  {
    title: "Web Design",
    description: "We create stunning and responsive websites.",
  },
  {
    title: "Ruby on Rails",
    description: "From scratch to production, we have the expertise.",
  },
  {
    title: "Branding",
    description: "Let us help you build a unique brand identity.",
  },
];

export const Services = () => {
  return (
    <>
      <div
        className="mt-4 flex flex-col items-center justify-center p-3"
        id="services"
      >
        <div className="text-2xl sm:text-4xl my-4">Our Services</div>
        <img
          src="/coders.jpg"
          className="rounded-xl max-w-[400px]"
          alt="Coders"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
