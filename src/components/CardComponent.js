import React from "react";

export default function CardComponent({ data: datas }) {
  const { data } = datas;
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="w-80 h-96 bg-indigo-50 mx-auto shadow-indigo-50 flex flex-col justify-start gap-2 rounded-md shadow-lg hover:shadow-xl hover:cursor-pointer"
            >
              <img className="w-full h-96 object-cover" src={data.url} alt="" />
              <div className="flex flex-col p-3">
                <h1 className="font-semibold">{data.judul}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
