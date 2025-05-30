"use client";

import { useState, useEffect } from "react";
import { User, getUsers } from "../../utils/api";
import UserTable from "../../components/UserTable";
import Step1 from "../../components/UserForm/Step1";
import Step2 from "../../components/UserForm/Step2";
import Step3 from "../../components/UserForm/Step3";
import ThemeToggle from "../../components/ThemeToggle";

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
  });

  // Fetch users from API on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter users by search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Multi-step form navigation
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Handle form submit: add new user to the users list
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new user object
    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: {
        street: formData.street,
        city: formData.city,
        zipcode: formData.zip,
      },
    };

    // Add new user to users state
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Reset form and close add user section
    setFormData({
      name: "",
      email: "",
      street: "",
      city: "",
      zip: "",
      phone: "",
    });
    setStep(1);
    setShowAddForm(false);

    alert("User added!");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name or city"
          className="w-full max-w-md p-2 border border-gray-300 rounded bg-white text-black placeholder-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex items-center gap-4 ml-4">
          <button
            onClick={() => {
              setShowAddForm((prev) => !prev);
              setStep(1);
              setFormData({
                name: "",
                email: "",
                street: "",
                city: "",
                zip: "",
                phone: "",
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showAddForm ? "Cancel" : "Add New User"}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {showAddForm && (
        <div className="mb-6 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-white">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Step1
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step2
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <Step3
                formData={formData}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
              />
            )}
          </form>
        </div>
      )}

      <UserTable users={filteredUsers} />
    </div>
  );
}
