import ReactDOM from "react-dom";
import { Component } from  "./Component";

const App = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
