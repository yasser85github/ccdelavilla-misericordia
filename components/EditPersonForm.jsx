"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPersonForm({ id, fullname, ci }) {
  const [newFullName, setNewFullName] = useState(fullname);
  const [newCI, setNewCI] = useState(ci);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch(`http://localhost:3000/api/people/${id}`, {
      const res = await fetch(`/api/people/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newFullName, newCI }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Person");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Nombre y Apellidos"
        value={newFullName}
        onChange={(e) => {
          setNewFullName(e.target.value);
        }}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Carnet de Identidad"
        value={newCI}
        onChange={(e) => {
          setNewCI(e.target.value);
        }}
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Actualizar Persona
      </button>
    </form>
  );
}
