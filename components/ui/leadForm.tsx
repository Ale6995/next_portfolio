"use client";
import { db } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    additionalInfo: string;
    honeypot?: string; // Add honeypot field to FormData
}

const LeadForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        additionalInfo: "",
        honeypot: "" // Initialize honeypot field
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Check if honeypot field is filled
        if (formData.honeypot) {
            console.log("Bot detected");
            return; // Do not process the form if honeypot is filled
        }

        try {
            const docRef = await addDoc(collection(db, "leads"), formData);
            console.log("Document written with ID: ", docRef.id);
            // Reset form after submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                additionalInfo: "",
                honeypot: "" // Reset honeypot field
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1  items-stretch p-8 md:p-0 md:flex m-6 rounded-full border border-black  max-w-3xl h-96 md:h-52  md:w-full"
            >
                <div className="flex-grow relative flex flex-col space-y-4 p-2 md:p-10  md:w-52 mr-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="flex-1 w-full px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="flex-1 w-full px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="flex-1 w-full px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div>
                        <textarea
                            maxLength={300}
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Additional Information"
                            required
                            className="w-full px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0 resize-none"
                        />
                    </div>
                    <input
                        type="text"
                        name="hp"
                        value={formData.honeypot}
                        onChange={handleChange}
                        className="hidden" // Hide honeypot field
                        aria-hidden="true"
                    />
                </div>
                <div className=" flex items-center justify-center ">
                <button
                    type="submit"
                    className=" h-12  md:h-full  md:w-full px-6 py-3  font-bold text-white justify-center text-center bg-brown rounded-full md:rounded-tr-full md:rounded-br-full md:rounded-none hover:bg-brown-100 focus:outline-none focus:ring focus:border-brown"
                >
                    Call me back!
                </button>
                </div>
            </form>

        </div>
    );
};

export default LeadForm;
