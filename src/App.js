import axios from "axios";
import { useEffect } from "react";
import Component from "./component/Component.tsx";

function App() {
  // useEffect(() => {
  //   axios.get(`	https://api.adviceslip.com/advice`).then((res) => {
  //     console.log(res.data);
  //   });
  // });
  return (
    <div className="App">
      <Component>
      </Component>
    </div>
  );
}

export default App;
