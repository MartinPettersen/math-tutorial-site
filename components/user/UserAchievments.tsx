"use client";

import React, { useEffect, useState } from "react";

type Props = {
  email: string;
};

function UserAchievments({ email }: Props) {
  const [achievments, setAchievments] = useState([]);

  const getAchievments = async () => {
      // http://localhost:3000/api/getAchievments
    const res = await fetch("/api/getAchievments", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } else {
      const temp = await res.json();
      console.log(temp);
      setAchievments(temp.data);
    }
  };

  useEffect(() => {
    getAchievments();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-extrabold">You have completed:</h1>
      {achievments.map((subject) => (
        <div key={subject}>{subject}</div>
      ))}
    </div>
  );
}

export default UserAchievments;
