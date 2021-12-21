import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataJson from "../json/data.json";
import BackComponents from "./BackComponents";

export default function DetailComponents({ props }) {
  const detail = useParams();
  const [det, setGetDetail] = useState([]);

  useEffect(() => {
    const findDetail = dataJson.data.find((item) => item.id == detail.id);
    setGetDetail(findDetail);
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <img className="mx-auto" src={det.url} alt="" />
        <p className="mx-auto text-xl font-bold mt-2">{det.judul}</p>
        <p className="mx-auto">{det.description}</p>
        <div className="mx-auto">
          <p>Alamat</p>
          {/* {det.fasilitas.map((fasilitas, index) => {
            return (
              <ul key={index} className="list-disc">
                <li>{fasilitas}</li>
              </ul>
            );
          })} */}
        </div>
        <iframe src={det.location} className="w-5/12 h-80 mx-auto"></iframe>
      </div>
      <BackComponents />
    </div>
  );
}
