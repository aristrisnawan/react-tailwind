import React from "react";
import { Link } from "react-router-dom";

export default function BackComponents() {
  return (
    <div>
      <div className="flex flex-row mb-40">
        <Link to="/" className=" text-2xl text-blue-400 ml-32 underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
