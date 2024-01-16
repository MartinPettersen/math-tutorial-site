"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const formChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/api/auth/signin");
    }
  };

  return (
    <div className="h-[90%] flex items-center justify-center">
      <div className="flex items-center justify-center w-[80%] h-[100%]">
        <form
          onSubmit={formSubmit}
          method="post"
          className="flex flex-col gap-2"
        >
          <p className="font-bold text-red-500">{errorMessage}</p>
          <h1>Create your account</h1>
          <div className="flex flex-col">
            <label>Your user Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formChange}
              required={true}
              value={formData.name}
              className="p-2 border-4"
            />
          </div>
          <div className="flex flex-col">
            <label>Your Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formChange}
              required={true}
              value={formData.email}
              className="p-2 border-4"
            />
          </div>
          <div className="flex flex-col">
            <label>Your Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formChange}
              required={true}
              value={formData.password}
              className="p-2 border-4"
            />
          </div>
          <input
          type="submit"
          value="Create User"
          className="bg-blue-500 p-2 text-white hover:cursor-pointer"
          />
        </form>
        
      </div>
    </div>
  );
}

export default page;
