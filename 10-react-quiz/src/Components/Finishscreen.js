import { useQuizContext } from '../Contexts/QuizContext';

function Finishscreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuizContext();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 1 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🙇‍♂️';

  return (
    <>
      <p className='result'>
        <p>{emoji}</p> You scored <strong>{points}</strong> points out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)} % )
      </p>
      <p className='highscore'>(Highscore : {highScore} )</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finishscreen;
