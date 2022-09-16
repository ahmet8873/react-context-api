import React from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent></FunctionContextComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
