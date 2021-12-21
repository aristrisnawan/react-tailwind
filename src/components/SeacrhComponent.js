import React from "react";

export default function SeacrhComponent() {
  return (
    <div>
      <form action="/" method="get" className="flex justify-center">
        <input
          type="text"
          className=" bg-gray-100 w-8/12 p-3 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Cari sesuai keingininan anda ..."
          id="header-search"
          name="s"
        />
      </form>
    </div>
  );
}
