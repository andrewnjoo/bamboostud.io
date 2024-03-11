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
        <div className="flex flex-col gap-8 sm:flex-row">
          <PortfolioCard
            title="XpenseTrackr"
            href="https://xpensetrackr.com"
            description="Expense tracking app built with Express and React."
            imgHref="https://raw.githubusercontent.com/adnjoo/XpenseTrackr/main/docs/scrn.png"
          />
          <PortfolioCard
            title="SmallTrack"
            href="https://smalltrack.ing"
            description="Track your social media activity."
            imgHref="https://raw.githubusercontent.com/andrewnjoo/smalltrack/main/scrn.png"
          />
        </div>
      </div>
    </section>
  );
};
