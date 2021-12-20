import "./App.css";
import CardComponent from "./components/CardComponent";
import Layout from "./Layout/Layout";
import UntukTest from "./UntukTest";
import datJson from "./json/data.json";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(datJson);

  useEffect(() => {});

  return (
    <div>
      <Layout>
        <CardComponent data={data} />
      </Layout>
      {/* <UntukTest /> */}
    </div>
  );
}

export default App;
