import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

import Person from "@/components/Person";

const getPeople = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/people`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch people");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading people:", error);
  }
};

export default async function PeopleList() {
  const { people } = await getPeople();
  return (
    <section>
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {people.map((person) => ( 
            <Person key={person._id} person={person} />
          ))}
        </div>
      </div> */}
      Hello
    </section>
  );
}
