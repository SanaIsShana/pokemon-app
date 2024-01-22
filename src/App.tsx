import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PokemonList } from "./pages/PokemonList"
import { PokemonDetail } from "./pages/PokemonDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
