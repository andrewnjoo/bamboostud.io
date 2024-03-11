/* eslint-disable @next/next/no-img-element */

import { Card, CardProps } from "@/app/components/cards/Card";
import { classNames, headingClass } from "@/lib/style";

const services: CardProps[] = [
  {
    title: "Frontend Development",
    description: "We create stunning and responsive websites.",
  },
  {
    title: "Backend Development",
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
        <h2 className={classNames(headingClass, "my-4")}>Our Services</h2>
        <img
          src="/coders.jpg"
          className="max-w-[400px] rounded-xl"
          alt="Coders"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
