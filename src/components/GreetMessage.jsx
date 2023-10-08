import React from 'react';

const GreetMessage = props => {
  const {name, heroName} = props;
    return (
    <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
    </div>
  )
  
}

export default GreetMessage