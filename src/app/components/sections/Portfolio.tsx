/* eslint-disable @next/next/no-img-element */
import { PortfolioCard } from "@/app/components/cards/PortfolioCard";
import { headingClass } from "@/lib/style";
import { classNames } from "@/lib/style";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center py-5">
      <div className="">
        <h2 className={classNames(headingClass, "my-4 text-center")}>
          Our Portfolio
        </h2>
        <PortfolioCard
          title="XpenseTrackr"
          href="https://xpensetrackr.com"
          description="Expense tracking app developed with Ruby on Rails 7"
          imgHref="https://raw.githubusercontent.com/adnjoo/XpenseTrackr/main/docs/scrn.png"
        />
      </div>
    </section>
  );
};
