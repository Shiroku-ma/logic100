import React from 'react';
import Draggable from 'react-draggable';

function App() {
  const gates = Object.freeze([
    'NOT', 'AND', 'OR', 'NAND', 'NOR', 'XOR'
  ])

  const gateStyle = {
    width: '130px',
    height: '60px',
    backgroundColor: '#9b36ff',
    border: '2px solid #ccc',
    userSelect: 'none',
    positon: 'relative'
  };

  const gateSpan = {
    color: '#fff',
    fontSize: '10px',
    textAlign: 'center',
    userSelect: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '40px',
    fontWeight: '600'
  };

  return (
    <div className="App">
      {gates.map( item => 
        <Draggable>
          <div 
            className='gate'
            style={gateStyle}
          >
            <span className='gate-span' style={gateSpan}>{item}</span>
          </div>
        </Draggable>
        )
      }
    </div>
  );
}

export default App;
