import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#2ecc71] px-8 py-3">
      <Link href={"/"} className="text-white font-bold">
        +Hope.
      </Link>
      <Link href={"/addPerson"} className="bg-white p-2">
        Agregar Persona
      </Link>
    </nav>
  );
};

export default Navbar;
