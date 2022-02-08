import "./StartScreen.css";

export default function StartScreen(props) {
  return (
    <div className="start-container">
      <h1 className="title">Quizzical</h1>
      <p className="subtitle">Welcome to Quizzical!</p>
      <button className="start-quiz" onClick={props.load}>
        Start quiz
      </button>
    </div>
  );
}
