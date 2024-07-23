import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Git() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Govind-Aroult")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex p-10 flex-col w-full items-center gap-10">
      <img
        className=" shadow-2xl rounded-full"
        src={data.avatar_url}
        alt="Github picture"
        width={200}
      />
      <div className=" flex flex-col items-center bg-gray-700 px-4 py-2 rounded-lg gap-5 drop-shadow-lg">
        <h1 className=" text-white text-2xl flex gap-2 font-semibold drop-shadow-lg">
          Username: <span className="text-orange-500">{data.login}</span>{" "}
        </h1>
        <h1 className=" text-white text-2xl flex gap-2 font-semibold drop-shadow-lg">
          Followers: <span className="text-orange-500">{data.followers}</span>{" "}
        </h1>
        <h1 className="text-white text-2xl flex gap-2 font-semibold drop-shadow-lg ">
          Following: <span className="text-orange-500">{data.following}</span>{" "}
        </h1>
      </div>
    </div>
  );
}

export default Git;

export const gitInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Govind-Aroult")
    return response.json()
}