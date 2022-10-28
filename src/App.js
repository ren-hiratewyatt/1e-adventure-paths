import './App.css'
import data from './data.json'
import Spotlight from './components/Spotlight'

let testArryay = ['One', 'Two', 'Three']

const App = () => {
  console.log(Array.isArray(data))
  console.log(data)
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
