
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import Routers from "./routers/Routers";




function App() {
  
  return (
    <>
      <Routers />
      <Analytics />
    </>
  );
}

export default App;
