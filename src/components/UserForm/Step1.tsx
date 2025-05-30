import { FormEvent } from "react";

export default function Step1({
  formData,
  setFormData,
  nextStep,
}: {
  formData: any;
  setFormData: (data: any) => void;
  nextStep: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone)
      return alert("Name, email, and phone are required!");
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Step 1: Basic Info</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="tel" // Use "tel" for phone numbers
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}
