function Options({ question, dispatch, answer }) {
  const { options, correctOption } = question;
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer ? (correctOption === index ? "correct" : "wrong") : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
