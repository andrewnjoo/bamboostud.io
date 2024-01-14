/* eslint-disable @next/next/no-img-element */

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col items-center py-5">
      <div className="">
        <h2 className="my-4 text-center text-2xl sm:text-4xl">Our Portfolio</h2>
        <div className="mb-4 flex flex-col items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/adnjoo/XpenseTrackr/main/docs/scrn.png"
            className="card-img-top w-[350px] rounded-xl"
            alt="Portfolio Item 1"
          />
          <div className="mx-auto mt-2 flex flex-col items-center">
            <a
              href="https://xpensetrackr.com"
              target="_blank"
              className="text-2xl font-bold transition-all hover:text-blue-500"
            >
              XpenseTrackr
            </a>
            <p className="">
              Expense tracking application developed with Ruby on Rails 7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
