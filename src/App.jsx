import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

console.log(location);
if (import.meta.env.DEV) {
  axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;
} else {
  axios.defaults.baseURL = location.origin;
}

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let res = await axios.get("/data");
      setData(res.data);
    })();
  }, []);

  return (
    <>
      <h1>{data.msg}</h1>
    </>
  );
}

export default App;
