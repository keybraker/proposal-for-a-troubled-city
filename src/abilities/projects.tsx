import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";
import heraklion_logo from "@static/heraklion_logo.png";

const skills: SkillType[] = [
  {
    category:
      '<a href="https://www.heraklion.gr/en" rel="noopener noreferrer" target="_blank" class="hover:underline">' +
      '<span className="font-helvetica flex flex-col items-center gap-1 text-2xl font-semibold tn:flex-row xs:gap-2">' +
      '<Image src={heraklion_logo} alt="The source of truth" width={24} /><span>Heraklion</span></span></a>',
    qualifications: [
      "Heraklion is the capital of Crete and one of the Mediterranean region&apos;s most fascinating and vibrant cities. " +
        "It is full of places to discover. With the current efforts to open up the wonderful mediaeval city centre, " +
        "it speaks to us of a past full of history and great events that reflect its location at the crossroads of three continents.",
    ],
  },
];

export default function ProjectsPage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <SkillListings skills={skills} />
    </div>
  );
}
