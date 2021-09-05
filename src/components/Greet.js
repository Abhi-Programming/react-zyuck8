import React from 'react';

const Greet = props => {
  const { name, work, onSubmit } = props;
  //const {state1, state2} = this.state
  return (
    <div>
      <h1 onClick={() => onSubmit(name)}>
        {name} is work to {work}
      </h1>
    </div>
  );
};

export default Greet;
