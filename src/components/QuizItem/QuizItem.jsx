import "./QuizItem.css";

export default function QuizItem(props) {
  return (
    <section className="quiz-item-container">
      <p className="question">How would one say goodbye in Spanish?</p>
      <ul className="answers">
        <li className="answer-item answer-regaular">Adiós</li>
        <li className="answer-item answer-selected">Adiós</li>
        <li className="answer-item answer-disabled">Hola</li>
        <li className="answer-item answer-right">Au Revoir</li>
        <li className="answer-item answer-wrong">Salir</li>
      </ul>
    </section>
  );
}
