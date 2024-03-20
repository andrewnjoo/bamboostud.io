import { headingClass } from "@/lib/style";
import { TeamCard } from "@/app/components/cards/TeamCard";

const team = [
  {
    name: "Andrew Njoo",
    skills: ["Next.js", "Ruby on Rails", "React", "TypeScript", "Go", "Node.js"],
    img: "https://avatars.githubusercontent.com/u/22807629?v=4",
    previousCompanies: ["Amazon", "Inovo"],
  },
  {
    name: "Deborah Ong",
    skills: ["Ruby on Rails", "React", "Tailwind", "PHP", "Scala"],
    img: "https://avatars.githubusercontent.com/u/59413856?v=4",
    previousCompanies: ["Etsy", "Flexport", "Shopify"],
  },
  {
    name: "Devin",
    skills: ["100+ languages"],
    img: "/devin.jpg",
    previousCompanies: ["All companies"],
  },
];

export const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24" id="team">
      <h2 className={headingClass}>Our Team</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
        {team.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            skills={member.skills}
            img={member.img}
            previousCompanies={member.previousCompanies}
          />
        ))}
      </div>
    </div>
  );
};
