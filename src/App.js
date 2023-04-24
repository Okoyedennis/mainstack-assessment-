import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
