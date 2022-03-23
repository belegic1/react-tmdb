import { useQuery } from "react-query"
const key = '7ebdafc7e41c27a3349891497023a098'

export function useMovies  () {
    return useQuery('movies', () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${1}`)
        .then(res => res.json())
         )
}