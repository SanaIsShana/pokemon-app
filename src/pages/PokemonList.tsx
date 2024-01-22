import { useCallback, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { Pokemon } from "../components/Pokemon"
import { PageNavigate } from "../components/PageNavigate"
import { Header } from "../components/Header"

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState({
    data: [],
    limit: 15,
    activePage: 1,
    total: 0,
  })

  const getData = useCallback(async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonList.limit}&offset=${
        pokemonList.activePage * 20
      }`,
      {
        method: "GET",
      }
    )
    const jsonData = await data.json()
    setPokemonList((prev) => ({
      ...prev,
      data: jsonData.results,
      total: jsonData.count,
    }))
  }, [pokemonList.activePage, pokemonList.limit])

  useEffect(() => {
    getData()
  }, [getData, pokemonList.limit])

  const handlePageChange = (current: number) => {
    setPokemonList((prev) => ({ ...prev, activePage: current }))
    getData()
  }

  return (
    <div style={{ backgroundColor: "#f4e604", height: "100%" }}>
      <Header />

      <div className="p-4">
        <Container>
          <Row>
            {pokemonList.data.map((pokemon, index) => {
              return (
                <Col sm={4} className="p-2" key={index}>
                  <Pokemon pokemon={pokemon} />
                </Col>
              )
            })}
          </Row>
        </Container>

        <PageNavigate
          total={pokemonList.total}
          current={pokemonList.activePage}
          onChangePage={handlePageChange}
          limitPerPage={pokemonList.limit}
        />
      </div>
    </div>
  )
}
