import { FormEvent } from "react";

export default function Step3({
  formData,
  prevStep,
  handleSubmit,
}: {
  formData: any;
  prevStep: () => void;
  handleSubmit: (e: FormEvent) => void;
}) {
  return (
    <div className="text-black">
      <h2 className="text-xl mb-4 font-bold">Step 3: Review & Confirm</h2>
      <div className="mb-4">
        <h3 className="font-bold">Name</h3>
        <p>{formData.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Email</h3>
        <p>{formData.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Phone</h3>
        <p>{formData.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Street</h3>
        <p>{formData.street}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">City</h3>
        <p>{formData.city}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Zip</h3>
        <p>{formData.zip}</p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
