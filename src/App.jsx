import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import QuizScreen from "./components/QuizScreen/QuizScreen";
import { useState } from "react";

function App() {
  const [isStart, setIsStart] = useState(true);

  return <div className="App">{isStart ? <StartScreen /> : <QuizScreen />}</div>;
}

export default App;
