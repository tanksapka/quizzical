import "./QuizItem.css";

export default function QuizItem(props) {
  console.log(props);

  function getClassName(answer) {
    let cssValue = "answer-item ";

    if (answer === props.selectedAnswer) {
      if (props.isSubmitted && answer === props.correct_answer) {
        cssValue = cssValue + "answer-right";
      } else if (props.isSubmitted && answer !== props.correct_answer) {
        cssValue = cssValue + "answer-wrong";
      } else {
        cssValue = cssValue + "answer-selected";
      }
    } else {
      cssValue = cssValue + (props.isSubmitted ? "answer-disabled" : "answer-regaular");
    }
    return cssValue;
  }

  const answers = props.answers.map((answer) => {
    return (
      <li key={answer} className={getClassName(answer)} onClick={() => props.clickHandler(answer)}>
        {answer}
      </li>
    );
  });

  return (
    <section className="quiz-item-container">
      <p className="question">{props.question}</p>
      <ul className="answers">{answers}</ul>
    </section>
  );
}
