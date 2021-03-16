import "./App.css";
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-event";
import ExampleHandlingEvent from "./handling-event/example";
import State from "./state";
import ExampleCar from "./example-car";
import ListKeys from "./list-keys";
import Props from "./props";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElements />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandlingEvent />
      <hr />
      <State />
      <hr />
      <ExampleCar />
      <hr />
      <ListKeys />
    </div>
  );
}

export default App;
