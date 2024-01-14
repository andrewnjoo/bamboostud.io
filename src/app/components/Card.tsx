export type CardProps = {
  title: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-xl p-4 sm:min-h-[150px]">
      <h5 className="text-2xl mb-2">{title}</h5>
      <p className="">{description}</p>
    </div>
  );
};
