import { Redirect, Route, Switch } from "react-router-dom";
import Form from "./components/form";
import Result from "./components/result";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/horoscope/:name" component={Result} />
        <Route path="/horoscope/" exact component={Form} />
        <Redirect to="/horoscope/" />
      </Switch>
    </div>
  );
}

export default App;
