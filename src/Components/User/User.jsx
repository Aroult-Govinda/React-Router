import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className="text-3xl flex gap-3 justify-center p-10 font-bold capitalize text-gray-700">
        User: <span className="text-orange-700">{userid}</span>{" "}
      </h1>
    </div>
  );
}

export default User;
