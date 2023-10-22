"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddPerson = () => {
  const [fullname, setFullName] = useState("");
  const [ci, setCI] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [classification, setClassification] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname) {
      alert("Datos incompletos");
      return;
    }

    try {
      const res = await fetch("/api/people", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          ci,
          address,
          contact,
          classification,
        }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Falló al crear una nueva Persona");
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
        type="number"
        className="border border-slate-500 px-8 py-2"
        placeholder="Carnet de Identidad"
      />
      <input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Dirección"
      />
      <input
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        type="tel"
        className="border border-slate-500 px-8 py-2"
        placeholder="Contacto"
      />
      <input
        onChange={(e) => setClassification(e.target.value)}
        value={classification}
        type="tel"
        className="border border-slate-500 px-8 py-2"
        placeholder="Clasificación"
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
