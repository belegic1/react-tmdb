import { useQuery } from "react-query";
const key = '7ebdafc7e41c27a3349891497023a098';
export function useMovie(id) {
    return useQuery(['movie', id],()=> fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
        .then(res => res.json())
        )
}