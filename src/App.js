import React, { useEffect, useRef, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import Clicker from './Clicker';
import Autoclicker from './Autoclicker';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callback = useRef();

  useEffect(() => {
    callback.current = () => {
      const currentClics = state.clicks.amount;
      const totalCount = Object.keys(state)
        .reduce(
          (acc, cur, idx) => idx === 0
            ? acc
            : acc + state[cur].amount * (state[cur].cost * 0.1),
          currentClics,
        );

      dispatch({ type: 'update', payload: totalCount });
    };
  }, [state]);

  useEffect(() => {
    const interval = setInterval(() => callback.current(), 1000);
    return () => clearInterval(interval);
  }, [callback]);

  return (
    //   Her har jeg satt inn en clicker-funksjon, som sender inn et click når man trykker på div-en (det som blir bakgrunnen)
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="clickerDiv" onClick={() => dispatch({ type: 'click' })}>
      <div className="game">
        {/* <div className="banner"> */}
        {/*  This is an accompanying example to a clicker game tutorial using React. See */}
        {/*  <a href="https://github.com/Alaricus/clicker-tutorial">GitHub</a> */}
        {/*  for more details. */}
        {/* </div> */}
        {/* Solen og solstrålene kan gjøres bevegelige og fargeskiftende senere. Gjerne i respons til boostere. */}
        <div className="sun"> </div>
        <div className="sun-halo"> </div>
        <div className="sun-beam-1"> </div>
        <div className="sun-beam-2"> </div>
        <div className="sun-beam-3"> </div>
        <div className="sun-beam-4"> </div>
        <div className="sun-beam-5"> </div>
        <div className="floatie-1"> </div>
        <Clicker amount={state.clicks.amount} dispatch={dispatch} />
        {
          Object.keys(state).map((tier, idx) => {
            if (idx === 0) { return null; }
            const { cost, amount } = state[tier];
            return (state.clicks.amount >= cost || amount > 0) && (
              <Autoclicker
                key={tier}
                tier={tier}
                amount={amount}
                cost={cost}
                enabled={state.clicks.amount >= cost}
                dispatch={dispatch}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
