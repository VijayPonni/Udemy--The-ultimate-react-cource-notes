function Progressbar({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} poins
      </p>
    </header>
  );
}

export default Progressbar;
