// /*global chrome*/
import "./App.css";
import { useState } from "react";
import { ErrorView } from "./views/Error";
import { InitialView } from "./views/Initial";

function App() {
  const [view, setView] = useState("initial");

  const setExtensionView = async (view) => {
    setView(view);
  };

  const renderView = () => {
    switch (view) {
      case "error":
        return <ErrorView />;
      default:
        return <InitialView setExtensionView={setExtensionView} />;
    }
  };
  return (
    <div id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="App">
        <header className="App-header">{renderView()}</header>
      </div>
    </div>
  );
}

export default App;
