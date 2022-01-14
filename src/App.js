import {useState} from 'react'
import MoleContainer from './MoleContainer'


//GENERATE 9 MOLECONTAINERS

function App() {
  let [score, setScore] = useState(0)
  const createMoleHill = () => {
    const hills = []
    for(let i = 0; i < 10; i++) {
      hills.push(
        <MoleContainer 
          key={i}
          setScore={setScore}
          score={score} />
      )
    }
    return(
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill}
    </div>
  );
}

export default App;
