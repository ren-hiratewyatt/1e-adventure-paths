import './App.css'
import data from './data.json'
import Spotlight from './components/Spotlight'

const App = () => {
  console.log(Array.isArray(data[0].uniqueMechanics))
  console.log(data[0].uniqueMechanics)
  //  console.log(data[0].endLevel)
  return (
    <div className="App">
      <h1>Pathfinder Adventure Paths</h1>
      {data.map((aps) => (
        <Spotlight key={aps.id} aps={aps} />
      ))}
    </div>
  )
}

export default App
