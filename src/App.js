import './App.css'
import data from './data.json'
import Spotlight from './components/Spotlight'
import SubNav from './components/SubNav'

const App = () => {
  console.log(Array.isArray(data[0].uniqueMechanics))
  console.log(data[0].uniqueMechanics)
  //  console.log(data[0].endLevel)
  return (
    <div className="App">
      <h1 className="head" id="header">
        Pathfinder 1e Adventure Paths
      </h1>
      <div className="subNav" id="subNav">
        {data.map((aps) => (
          <SubNav key={aps.id} aps={aps} />
        ))}
      </div>
      <div className="bookHolder">
        {data.map((aps) => (
          <Spotlight key={aps.id} aps={aps} />
        ))}
      </div>
    </div>
  )
}

export default App
