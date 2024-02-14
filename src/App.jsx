import { useEffect, useState } from 'react'
import './App.css'

import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

// link: http://www.omdbapi.com/?apikey=${apikey}&t=${title}

function App() {
  const apikey = 'e79fc53d'

  const [movie, setMovie] = useState(null)

  async function getMovie(title) {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}`)

    const data = await response.json();
    setMovie(data)
    } 
    catch(e) {
    console.log(e)
    }
  }

  useEffect(()=> {
    getMovie('Mamamia');
  }, [])

  return (
    <>
      <div className='App'>
        <Form movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
    </>
  )
}

export default App
