import "./App.css";
import { Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route match exact path="/" component={Home} />
    </div>
  );
}

export default App;
