"use client";
import React, { useState, forwardRef, useImperativeHandle, Ref } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useModal } from "./AnimatedModal";

interface FormData {
  yourName: string;
  companyName: string;
  phone: string;
  address: string;
  position: string;
  payType: "yearly" | "hourly" | "monthly";
  salaryMin: string;
  salaryMax: string;
  requirementDuration: string;
  startDate: string;
  paid: boolean;
}

const QuickHireForm = forwardRef(({}, ref) => {
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    companyName: "",
    phone: "",
    address: "",
    position: "",
    payType: "yearly",
    salaryMin: "",
    salaryMax: "",
    requirementDuration: "",
    startDate: "",
    paid: false,
  });

  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit();
    },
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { setOpen } = useModal();

  const handleSubmit = async () => {
    if (!formData.yourName || !formData.companyName || !formData.phone || !formData.address || !formData.position || !formData.salaryMin || !formData.salaryMax || !formData.requirementDuration || !formData.startDate) {
      alert("Please fill all the required fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "quickhire"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Entry created successfully!");
      setOpen(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error creating entry. Please try again.");
    }
  };

  return (
    <form className="w-full mx-auto h-full p-4 space-y-4 rounded-lg overflow-auto" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <div>
        <label htmlFor="yourName" className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          id="yourName"
          name="yourName"
          value={formData.yourName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Name of the Company</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position to be Filled</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="payType" className="block text-sm font-medium text-gray-700">Pay Type</label>
        <select
          id="payType"
          name="payType"
          value={formData.payType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="yearly">Yearly</option>
          <option value="hourly">Hourly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div>
        <label htmlFor="salaryMin" className="block text-sm font-medium text-gray-700">Salary Min</label>
        <input
          type="number"
          id="salaryMin"
          name="salaryMin"
          value={formData.salaryMin}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="salaryMax" className="block text-sm font-medium text-gray-700">Salary Max</label>
        <input
          type="number"
          id="salaryMax"
          name="salaryMax"
          value={formData.salaryMax}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="requirementDuration" className="block text-sm font-medium text-gray-700">Requirement Duration</label>
        <input
          type="text"
          id="requirementDuration"
          name="requirementDuration"
          value={formData.requirementDuration}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
    </form>
  );
});

export default QuickHireForm;
