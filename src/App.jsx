import { useState } from "react";
import { BmiInput } from "./components/BmiInput";
import ResultBmi from "./components/ResultBmi";

function App() {
  const [userInput, setUserInput] = useState([]);
  function handleClick(formData) {
    setUserInput((prevData) => [...prevData, formData]);
  }

  return (
    <>
      <BmiInput onAddUser={handleClick} />
      <ResultBmi userInput={userInput} />
    </>
  );
}

export default App;
