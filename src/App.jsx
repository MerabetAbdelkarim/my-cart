
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import Routers from "./routers/Routers";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routers />
      <Analytics />
    </>
  );
}

export default App;
