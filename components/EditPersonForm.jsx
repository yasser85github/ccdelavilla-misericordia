"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPersonForm({
  id,
  fullname,
  ci,
  address,
  contact,
  classification,
}) {
  const [newFullName, setNewFullName] = useState(fullname);
  const [newCI, setNewCI] = useState(ci);
  const [newAddress, setNewAddress] = useState(address);
  const [newContact, setNewContact] = useState(contact);
  const [newClassification, setNewClassification] = useState(classification);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch(`http://localhost:3000/api/people/${id}`, {
      const res = await fetch(`/api/people/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          newFullName,
          newCI,
          newAddress,
          newContact,
          newClassification,
        }),
      });

      if (!res.ok) {
        throw new Error("Falló al actualizar Persona");
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
        type="number"
        className="border border-slate-500 px-8 py-2"
        placeholder="Carnet de Identidad"
        value={newCI}
        onChange={(e) => {
          setNewCI(e.target.value);
        }}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Dirección"
        value={newAddress}
        onChange={(e) => {
          setNewAddress(e.target.value);
        }}
      />
      <input
        type="tel"
        className="border border-slate-500 px-8 py-2"
        placeholder="Contacto"
        value={newContact}
        onChange={(e) => {
          setNewContact(e.target.value);
        }}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Clasificación"
        value={newClassification}
        onChange={(e) => {
          setNewClassification(e.target.value);
        }}
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Actualizar Persona
      </button>
    </form>
  );
}
