import Home from "./components/Home";
import Second from "./components/Second";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Second} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
