import React, { useState } from "react";

export default function ContratoForm() {
  const [temSegundo, setTemSegundo] = useState(false);
  const [form, setForm] = useState({
    nome1: "",
    rg1: "",
    cpf1: "",
    endereco1: "",
    cidade1: "",
    whatsapp1: "",
    nome2: "",
    rg2: "",
    cpf2: "",
    endereco2: "",
    cidade2: "",
    whatsapp2: "",
    evento: "",
    local: "",
    data: "",
    horario: "",
    obs: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      temSegundo
    };

    try {
      const res = await fetch("https://webhook.lacintradev.tech/webhook/contrato-emiliano", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Contrato enviado com sucesso!");
      } else {
        alert("Erro ao enviar o contrato.");
      }
    } catch (err) {
      alert("Erro ao conectar com o servidor.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">Contrato Emiliano Filmmaker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Nome Contratante 1" name="nome1" value={form.nome1} onChange={handleChange} />
          <InputField label="RG Contratante 1" name="rg1" value={form.rg1} onChange={handleChange} />
          <InputField label="CPF Contratante 1" name="cpf1" value={form.cpf1} onChange={handleChange} />
          <InputField label="Endereço Contratante 1" name="endereco1" value={form.endereco1} onChange={handleChange} />
          <InputField label="Cidade Contratante 1" name="cidade1" value={form.cidade1} onChange={handleChange} />
          <InputField label="WhatsApp Contratante 1" name="whatsapp1" value={form.whatsapp1} onChange={handleChange} />
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
            <InputField label="Nome Contratante 2" name="nome2" value={form.nome2} onChange={handleChange} />
            <InputField label="RG Contratante 2" name="rg2" value={form.rg2} onChange={handleChange} />
            <InputField label="CPF Contratante 2" name="cpf2" value={form.cpf2} onChange={handleChange} />
            <InputField label="Endereço Contratante 2" name="endereco2" value={form.endereco2} onChange={handleChange} />
            <InputField label="Cidade Contratante 2" name="cidade2" value={form.cidade2} onChange={handleChange} />
            <InputField label="WhatsApp Contratante 2" name="whatsapp2" value={form.whatsapp2} onChange={handleChange} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Nome do Evento" name="evento" value={form.evento} onChange={handleChange} />
          <InputField label="Local do Evento" name="local" value={form.local} onChange={handleChange} />
          <div>
            <label className="block font-medium">Data do Evento</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
            />
          </div>
          <InputField label="Horário do Evento" name="horario" value={form.horario} onChange={handleChange} />
        </div>

        <div>
          <label className="block font-medium">Observações</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            name="obs"
            placeholder="Pacote, adicionais, etc."
            value={form.obs}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          Enviar
        </button>
      </div>
    </form>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      <input
        className="w-full border rounded px-3 py-2"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
