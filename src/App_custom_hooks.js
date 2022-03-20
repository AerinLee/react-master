import React from 'react';
import BackwardCounter from './components_custom_hooks/BackwardCounter';
import ForwardCounter from './components_custom_hooks/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
