import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import QuizScreen from "./components/QuizScreen/QuizScreen";
import { useState } from "react";

function App() {
  const [isStartScreen, setIsStartScreen] = useState(true);

  function startQuiz() {
    setIsStartScreen(false);
  }

  return <div className="App">{isStartScreen ? <StartScreen load={startQuiz} /> : <QuizScreen />}</div>;
}

export default App;
