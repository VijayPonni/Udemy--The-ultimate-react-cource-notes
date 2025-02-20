import { useQuizContext } from '../Contexts/QuizContext';

function Progressbar() {
  const { numQuestions, index, points, maxPossiblePoints, answer } =
    useQuizContext();
  return (
    <header className='progress'>
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
