import React, { useEffect, useState } from "react";
import LogoSearch from "../search.svg";

export default function CardComponent({ data: datas }) {
  const { data } = datas;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleChange = (e) => {
    const hasil = e.target.value;
    setInput(hasil);
  };

  useEffect(() => {
    setOutput([]);

    data.filter((val) => {
      if (
        val.judul.toLowerCase().includes(input.toLowerCase()) ||
        val.description.toLowerCase().includes(input.toLowerCase())
      ) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);
  return (
    <div>
      <div className="flex justify-center relative w-8/12 mx-auto">
        <input
          type="text"
          className=" bg-gray-100 w-full p-3 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Cari sesuai keingininan anda ..."
          onChange={handleChange}
        />
        <div className="absolute right-0 bottom-0 top-0 flex flex-col justify-center items-center px-5">
          <img src={LogoSearch} alt="" />
        </div>
      </div>
      {output.length > 0 ? (
        <div className="grid gap-6 mt-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {output.map((data) => {
            return (
              <div
                key={data.id}
                className="w-80 h-96 bg-indigo-50 mx-auto shadow-indigo-50 flex flex-col justify-start gap-2 rounded-md shadow-lg hover:shadow-xl hover:cursor-pointer"
              >
                <img
                  className="w-full h-96 object-cover"
                  src={data.url}
                  alt=""
                />
                <div className="flex flex-col p-3">
                  <h1 className="font-semibold">{data.judul}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <h2 className="mt-3 h-screen">Data tidak ditemukan 😔</h2>
        </div>
      )}
    </div>
  );
}
