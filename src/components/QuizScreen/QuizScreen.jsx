import "./QuizScreen.css";
import QuizItem from "../QuizItem/QuizItem";
import { useEffect, useState } from "react";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function QuizScreen(props) {
  const [questions, setQuestions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reloadQuestions, setReloadQuestions] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((resp) => resp.json())
      .then((data) => data.results)
      .then((arr) =>
        arr.map((q) => ({
          question: decodeHtml(q.question),
          correct_answer: decodeHtml(q.correct_answer),
          answers: [...q.incorrect_answers, q.correct_answer]
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => decodeHtml(value)),
          selectedAnswer: null,
        }))
      )
      .then((finalData) => setQuestions(finalData));
  }, [reloadQuestions]);

  function handleClick() {
    isSubmitted && setReloadQuestions((oldValue) => !oldValue);
    setIsSubmitted((oldValue) => !oldValue);
  }

  const quizItemList = questions.map((q, idx) => (
    <QuizItem
      key={idx}
      isSubmitted={isSubmitted}
      clickHandler={(answer) =>
        setQuestions((oldQuestions) =>
          oldQuestions.map((oldQ) => (oldQ.question === q.question ? { ...oldQ, selectedAnswer: answer } : oldQ))
        )
      }
      {...q}
    />
  ));

  return (
    <main className="quiz-container">
      {quizItemList}
      <div className="footer">
        {isSubmitted && (
          <p className="results">
            {`You scored
            ${questions.map((q) => q.selectedAnswer === q.correct_answer).reduce((prev, current) => prev + current)} / 
            ${questions.length} correct answers`}
          </p>
        )}
        <button className="check-answers" onClick={handleClick}>
          {isSubmitted ? "Play again" : "Check answers"}
        </button>
      </div>
    </main>
  );
}
