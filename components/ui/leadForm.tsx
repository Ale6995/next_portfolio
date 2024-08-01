"use client";
import { db } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    additionalInfo: string;
}

const LeadForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        additionalInfo: "",
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
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "leads"), formData);
            console.log("Document written with ID: ", docRef.id);
            // Reset form after submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                additionalInfo: "",
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <form
                onSubmit={handleSubmit}
                className="flex items-center  m-6 rounded-full border border-black  w-full max-w-3xl h-52"
            >
                <div className="flex-grow relative flex flex-col space-y-4 p-10 w-52 mr-3">
                    <div className="flex space-x-4 ">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="flexw w-1/3 px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="flex-1 w-1/3 px-2 py-2 border-b border-black  bg-transparent focus:outline-none focus:ring-0"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="flex-1 w-1/3 px-2 py-2 border-b border-black bg-transparent focus:outline-none focus:ring-0"
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
                            className="w-full px-2 py-2 border-b  border-black bg-transparent focus:outline-none focus:ring-0 resize-none"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="h-full px-6 py-3 font-bold text-white bg-brown rounded-tr-full rounded-br-full hover:bg-brown-100 focus:outline-none focus:ring focus:border-brown"
                >
                    Call me back!
                </button>
            </form>
        </div>
    );
};

export default LeadForm;
