import React from "react";
import { Link } from "react-router-dom";
import Error from "../error.png";
import BackComponents from "./BackComponents";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col justify-center h-96">
        <img className=" w-48 mx-auto" src={Error} alt="" />
        <p className="mx-auto text-5xl font-bold">Page Not Found :(</p>
      </div>
      <BackComponents />
    </div>
  );
}
