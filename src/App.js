import "./App.css";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Route match exact path='/login' component={Login} />
      <Route match exact path='/register' component={Register} />
      <Route match exact path="/" component={Home} />
    </div>
  );
}

export default App;
