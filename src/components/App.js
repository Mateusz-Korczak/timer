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
        <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{('0' + Math.floor(time)).slice(-3)}</span>
      </Display>
      <Button action={() => setTimerOn(true)}>Start</Button>
      <Button action={() => setTimerOn(false)}>Stop</Button>
      <Button action={() => setTime(true)}>Reset</Button>
    </Container>
  );
};

export default App;
