"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

interface Spec {
  type?: string;
  format?: string;
  vitesse?: string;
  resolution?: string;
  fonction?: string;
  qualite?: string;
  memoire?: string;
  interface?: string;
  capacite?: string;
  dimensions?: string;
  poids?: string;
}

export default function NewCanon() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [spec, setSpec] = useState<Spec>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await addDoc(collection(db, "brands/imprimante/Canon"), {
        name,
        image,
        spec,
      });
      setSuccessMsg("Ajout réussi !");
      setName("");
      setImage("");
      setSpec({});
    } catch (error: unknown) {
        if (error instanceof Error) {
            setErrorMsg(`Erreur: ${error.message}`);
        } else {
            setErrorMsg("Une erreur inconnue est survenue.");
        }
    } finally {
      setLoading(false);
    }
  };

  const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpec((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Ajouter une imprimante Canon</h2>

      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="URL de l'image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <fieldset className="space-y-2">
        <legend className="text-lg font-medium">Spécifications (facultatives)</legend>
        {[
          "type",
          "format",
          "vitesse",
          "resolution",
          "fonction",
          "qualite",
          "memoire",
          "interface",
          "capacite",
          "dimensions",
          "poids",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={spec[field as keyof Spec] || ""}
            onChange={handleSpecChange}
            className="w-full border p-2 rounded"
          />
        ))}
      </fieldset>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Enregistrement..." : "Ajouter"}
      </button>

      {successMsg && <p className="text-green-600">{successMsg}</p>}
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
    </form>
  );
}
