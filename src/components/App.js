import Display from './Display/Display';
import Container from './Container/Container';
import Button from './Button/Button';
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <Container>
      <Display>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor(time % 1000)).slice(-3)}</span>
      </Display>
      <Button action={() => setTimerOn(true)}>Start</Button>
      <Button action={() => setTimerOn(false)}>Stop</Button>
      <Button action={() => setTime(true)}>Reset</Button>
      {/* <Button
        action={() => {
          startCounting();
        }}
      >
        <span>Start</span>
      </Button>
      <Button action={stopCounting()}>
        <span>Stop</span>
      </Button>
      <Button action={resetCounting()}>
        <span>Reset</span>
      </Button> */}
    </Container>
  );
};

export default App;

/**
 * DONE: Szkielet aplikacji powinien być zbudowany przy użyciu paczki Create React App.
 * DONE: W katalogu projektu nie powinny znajdować się pliki, z których nie korzystamy (np. logo.svg, App.test.js * itd.).
 * TODO: Aplikacja powinna być zbudowana z przynajmniej dwóch komponentów (np. <App /> i komponent pokazujący czas  *  * formacie HH:mm:ss.ms).
 * DONE:Komponenty mogą być zadeklarowane za pomocą funkcji albo klas, ale zalecamy tę pierwszą opcję.
 * DONE: Aktualna wartość czasu powinna być przechowywana w stanie komponentu.
 * DONE: Aplikacja powinna być ostylowana tak jak na gifie powyżej. Przy stylowaniu należy skorzystać z mechanizmu CSS  * Modules.
 * DONE: Style powinny być napisane za pomocą SASS-a.
 * DONE: Tam, gdzie to możliwe, używaj funkcji strzałkowych.
 */
