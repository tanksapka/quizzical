import "./QuizScreen.css";
import QuizItem from "../QuizItem/QuizItem";

export default function QuizScreen(props) {
  return (
    <main className="quiz-container">
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <button className="check-answers">Check answers</button>
    </main>
  );
}
