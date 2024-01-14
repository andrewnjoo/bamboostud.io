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
      <img
        src={imgHref}
        className="w-[350px] rounded-xl shadow"
        alt="Portfolio Item 1"
      />
      <div className="mx-auto mt-8 flex flex-col items-center">
        <a
          href={href}
          target="_blank"
          className="text-3xl font-bold transition-all hover:text-blue-500"
        >
          {title}
        </a>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};
