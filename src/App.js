import "./App.css";
import CardComponent from "./components/CardComponent";
import Layout from "./Layout/Layout";
import UntukTest from "./UntukTest";
import datJson from "./json/data.json";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailComponents from "./components/DetailComponents";
import NotFound from "./components/NotFound";

function App() {
  const [data, setData] = useState(datJson);
  const [detail, setDetail] = useState([]);

  useEffect(() => {});

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<CardComponent data={data} />} />
          <Route
            path="/detail/:id"
            element={<DetailComponents data={data} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {/* <UntukTest /> */}
    </div>
  );
}

export default App;
