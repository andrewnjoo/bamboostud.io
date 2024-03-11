export type PortfolioCardProps = {
  title: string;
  href: string;
  description: string;
  imgHref: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  href,
  description,
  imgHref,
}) => {
  return (
    <div className="mb-4 flex flex-col items-center justify-center">
      <a
        href={href}
        target="_blank"
        className="text-3xl font-bold transition-all hover:text-blue-500 text-center"
      >
        {title}
        <img
          src={imgHref}
          className="h-[350px] w-[350px] rounded-xl shadow mt-4"
          alt="Portfolio Item 1"
        />
      </a>
      <div className="mx-auto mt-8 flex flex-col items-center">
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};
