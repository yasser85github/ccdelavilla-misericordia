"use client";

import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

import Image from "next/image";

export default function Person({ person }) {
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl bg-[#005f69] flex flex-col items-center">
      <Image
        // onClick={openModal}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={120}
        height={120}
        src={`/${person.image}`}
        alt=""
        priority={1}
      />

      {/*title*/}
      <div>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer text-white">
          {person.fullname}
        </div>
      </div>

      {/*classification */}
      <div className="text-sm font-medium min-h-[60px] mb-6 flex justify-between items-center text-white">
        {person.classification}

        <div className="flex justify-end items-center">
          <RemoveBtn id={person._id} />
          <Link href={`/editPerson/${person._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>

      <div className="text-white">
        <p>{person.ci}</p>
        <p>{person.address}</p>
        <p>{person.contact}</p>
      </div>
    </div>
  );
}
