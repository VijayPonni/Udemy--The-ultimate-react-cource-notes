import { useQuizContext } from '../Contexts/QuizContext';

function Nextbutton() {
  const { dispatch, answer, index, numQuestions } = useQuizContext();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Submit
      </button>
    );
}

export default Nextbutton;
