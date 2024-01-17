import './App.css'
import AnimalContainer from './assets/components/animalcontainer/AnimalContainer'
import animals from './assets/data/data'
import { v4 as uuidv4 } from 'uuid'

function App() {
  console.log(animals);
  return (
    <>
      <main>
        <h1>ZooPartyDB</h1>
        <p>Explore the fascinating world of zoo animals</p>
        <section className='animals'>
          {
            animals.map((a, i) => {
              return (
                <div key={i}>
                  <AnimalContainer
                    key={uuidv4()}
                    img={a.emoji}
                    header={a.name}
                    species={a.species}
                    habitant={a.habitat}
                    diet={a.diet}
                    lifespan={a.lifespan}
                    facts={a.funFacts}
                  />
                </div>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
