/* eslint-disable @next/next/no-img-element */
import { CardPortfolio } from "@/app/components/CardPortfolio";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center py-5">
      <div className="">
        <h2 className="my-4 text-center text-2xl sm:text-4xl">Our Portfolio</h2>
        <CardPortfolio
          title="XpenseTrackr"
          href="https://xpensetrackr.com"
          description="Expense tracking application developed with Ruby on Rails 7"
          imgHref="https://raw.githubusercontent.com/adnjoo/XpenseTrackr/main/docs/scrn.png"
        />
      </div>
    </section>
  );
};
