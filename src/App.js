import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./style/bundle.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
