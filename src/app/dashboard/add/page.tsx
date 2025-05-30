"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Step1 from "../../../components/UserForm/Step1";
import Step2 from "../../../components/UserForm/Step2";
import Step3 from "../../../components/UserForm/Step3";
import { motion } from "framer-motion";

export default function AddUserPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    zip: "",
  });

  // Optional: Save form data to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userForm");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("userForm", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User data to be saved:", formData);
    alert("User data logged to console. Check browser developer tools.");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Add New User</h1>
        <Link href="/dashboard" className="bg-gray-200 px-4 py-2 rounded">
          Back to Dashboard
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
          </motion.div>
        )}
      </form>
    </div>
  );
}
