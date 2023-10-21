"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddPerson = () => {
  const [fullname, setFullName] = useState("");
  const [ci, setCI] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log("Hello");
    e.preventDefault();

    if (!fullname || !ci) {
      alert("Datos incompletos");
      return;
    }

    try {
      const res = await fetch("/api/people", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fullname, ci }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setFullName(e.target.value)}
        value={fullname}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Nombre y Apellidos"
      />
      <input
        onChange={(e) => setCI(e.target.value)}
        value={ci}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Carnet de Identidad"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Agregar Persona
      </button>
    </form>
  );
};

export default AddPerson;
