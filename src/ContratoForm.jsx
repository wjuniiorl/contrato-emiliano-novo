import React from "react";
import { useState } from "react";

export default function ContratoForm() {
  const [temSegundo, setTemSegundo] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">Contrato Emiliano Filmmaker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Nome Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="nome1" required />
          </div>
          <div>
            <label className="block font-medium">RG Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="rg1" required />
          </div>
          <div>
            <label className="block font-medium">CPF Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="cpf1" required />
          </div>
          <div>
            <label className="block font-medium">Endereço Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="endereco1" required />
          </div>
          <div>
            <label className="block font-medium">Cidade Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="cidade1" required />
          </div>
          <div>
            <label className="block font-medium">WhatsApp Contratante 1</label>
            <input className="w-full border rounded px-3 py-2" name="whatsapp1" required />
          </div>
        </div>

        <div>
          <label className="block font-medium">Terá dois contratantes?</label>
          <select
            className="w-full border rounded px-3 py-2 mt-1"
            onChange={(e) => setTemSegundo(e.target.value === "Sim")}
          >
            <option>Não</option>
            <option>Sim</option>
          </select>
        </div>

        {temSegundo && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-6">
            <div>
              <label className="block font-medium">Nome Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="nome2" />
            </div>
            <div>
              <label className="block font-medium">RG Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="rg2" />
            </div>
            <div>
              <label className="block font-medium">CPF Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="cpf2" />
            </div>
            <div>
              <label className="block font-medium">Endereço Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="endereco2" />
            </div>
            <div>
              <label className="block font-medium">Cidade Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="cidade2" />
            </div>
            <div>
              <label className="block font-medium">WhatsApp Contratante 2</label>
              <input className="w-full border rounded px-3 py-2" name="whatsapp2" />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Nome do Evento</label>
            <input className="w-full border rounded px-3 py-2" name="evento" required />
          </div>
          <div>
            <label className="block font-medium">Local do Evento</label>
            <input className="w-full border rounded px-3 py-2" name="local" required />
          </div>
          <div>
            <label className="block font-medium">Data do Evento</label>
            <input className="w-full border rounded px-3 py-2" type="date" name="data" required />
          </div>
          <div>
            <label className="block font-medium">Horário do Evento</label>
            <input className="w-full border rounded px-3 py-2" name="horario" required />
          </div>
        </div>

        <div>
          <label className="block font-medium">Observações</label>
          <textarea className="w-full border rounded px-3 py-2" name="obs" placeholder="Pacote, adicionais, etc." />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}