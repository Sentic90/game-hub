import { useEffect, useState } from "react";
import apiClient from "./services/api-client"


interface Game{
    id:number, 
    name:string,
}

interface FetchedGamesResponse{
    count:number
    result:Game[]
  }
const GameGrid = () => {
    
        const [games, setGames] = useState<Game[]>([])
        const [error, setError] = useState('')
      
        useEffect(()=>{
          apiClient.get<FetchedGamesResponse>('/games')
            .then(res => setGames(res.data.result)
            .catch(err => setError(err.message))
        }, [])
  return (
    <>
    {error && <p>error</p>}
    <ul>
          {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
        </>
  )
}

export default GameGrid;