import './App.css'
import data from './data.json'
import Spotlight from './components/Spotlight'

const App = () => {
  console.log(Array.isArray(data[0].uniqueMechanics))
  console.log(data[0].uniqueMechanics)
  //  console.log(data[0].endLevel)
  return (
    <div className="App">
      <img
        src="https://pathfinderwiki.com/w/images/1/13/Pathfinder_Adventure_Path_logo_trans.png"
        className="headerLogo"
        alt="Pathfinder Adventure Paths"
      />
      <div className="bookHolder">
        {data.map((aps) => (
          <Spotlight key={aps.id} aps={aps} />
        ))}
      </div>
    </div>
  )
}

export default App
