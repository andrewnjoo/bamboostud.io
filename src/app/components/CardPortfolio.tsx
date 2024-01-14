export type CardPortfolioProps = {
  title: string;
  href: string;
  description: string;
  imgHref: string;
};

export const CardPortfolio: React.FC<CardPortfolioProps> = ({
  title,
  href,
  description,
  imgHref,
}) => {
  return (
    <div className="mb-4 flex flex-col items-center justify-center">
      <img
        src={imgHref}
        className="w-[350px] rounded-xl shadow-2xl"
        alt="Portfolio Item 1"
      />
      <div className="mx-auto mt-2 flex flex-col items-center">
        <a
          href={href}
          target="_blank"
          className="text-2xl font-bold transition-all hover:text-blue-500"
        >
          {title}
        </a>
        <p className="">{description}</p>
      </div>
    </div>
  );
};
