import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <InlineWidget url="https://calendly.com/jonbsimp" />
    </div>
  );
}

export default Calendly;
