import React from "react";
import "./App.css";
import HeaderSection from "./Homepage/HeaderSection/HeaderSection";
import NavBar from "./Homepage/HeaderSection/NavBar";
import { Button } from "@nextui-org/button";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection></HeaderSection>
      <Button color="primary">Press me</Button>
    </div>
  );
}

export default App;
