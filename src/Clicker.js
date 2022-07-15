import React from 'react';

const Clicker = ({ amount, dispatch }) => (
  <div className="clicker">
    <h1>{amount}</h1>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <div className="" onClick={() => dispatch({ type: 'click' })}> </div>
  </div>
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  // <div className="clickerDiv" onClick={() => dispatch({ type: 'click' })}>
  //   <h1>{amount}</h1>
  // </div>
);

export default Clicker;
