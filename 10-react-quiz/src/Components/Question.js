import { useQuizContext } from '../Contexts/QuizContext';
import Options from './Options';

function Question() {
  const { questions, index } = useQuizContext();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
