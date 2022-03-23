import React from 'react'
import Home from "./pages/home/home.component"
import Movie from './pages/movie/movie.component'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/:id" element={<Movie />} />
          </Routes>
    </div>
  )
}

export default App