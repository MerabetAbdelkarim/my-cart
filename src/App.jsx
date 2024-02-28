
import "./App.css";
import Layout from "./components/layout/Layout";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
        <Layout/>
        <Analytics/>
    </>
  );
}

export default App;
