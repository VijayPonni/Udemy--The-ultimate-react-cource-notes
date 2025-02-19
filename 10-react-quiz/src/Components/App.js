import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import Startscreen from './Startscreen';
import Question from './Question';
import Nextbutton from './Nextbutton';
import Progressbar from './Progressbar';
import Footer from './Footer';
import Timer from './Timer';

import Finishscreen from './Finishscreen';
import { useQuizContext } from '../Contexts/QuizContext';

export default function App() {
  const { status } = useQuizContext();

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <Startscreen />}
        {status === 'active' && (
          <>
            <Progressbar />
            <Question />
            <Footer>
              <Timer />
              <Nextbutton />
            </Footer>
          </>
        )}

        {status === 'finished' && <Finishscreen />}
      </Main>
    </div>
  );
}
