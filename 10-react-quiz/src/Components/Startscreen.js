function Startscreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3> {numQuestions} questions to test your mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "gameStart" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default Startscreen;
