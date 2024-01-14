export type TeamCardProps = {
  name: string;
  skills: string[];
  img: string;
  previousCompanies: string[];
};

export const TeamCard: React.FC<TeamCardProps> = ({ name, skills, img, previousCompanies }) => {
  return (
    <div className="rounded-xl border p-4 sm:min-h-[150px] flex flex-col justify-center items-center">
      <h5 className="mb-2 text-2xl">{name}</h5>
      <img src={img} className="w-32 rounded-full" alt="avatar" />
      <p className="my-4">Skills: {skills.join(", ")}</p>
      <p className="my-4">Previous Companies: {previousCompanies.join(", ")}</p>
    </div>
  );
};
