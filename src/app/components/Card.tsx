export type CardProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="rounded-xl border p-4 sm:min-h-[150px]">
      <h5 className="mb-2 text-2xl">{title}</h5>
      <p className="">{description}</p>
    </div>
  );
};
