import "./QuizItem.css";

export default function QuizItem(props) {
  function getClassName(answer) {
    let cssValue = "answer-item ";

    if (props.isSubmitted) {
      if (answer === props.correct_answer) {
        cssValue = cssValue + "answer-right";
      } else if (answer !== props.correct_answer) {
        if (answer === props.selectedAnswer) {
          cssValue = cssValue + "answer-wrong";
        } else {
          cssValue = cssValue + "answer-disabled";
        }
      }
    } else {
      if (answer === props.selectedAnswer) {
        cssValue = cssValue + "answer-selected";
      } else {
        cssValue = cssValue + "answer-regaular";
      }
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
