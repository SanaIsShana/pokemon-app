import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa"

import { PokemonDetailProps } from "../pages/PokemonDetail"
import { nameConverter } from "../utils/nameConverter"

interface PokemonProps {
  pokemon: {
    name: string
    url: string
  }
}

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const [hovered, setHovered] = useState(false)
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailProps>({
    name: "",
    abilities: [{ name: "", url: "" }],
    height: 0,
    image: "",
  })

  let navigate = useNavigate()

  const getData = useCallback(async () => {
    const data = await fetch(`${pokemon.url}`, {
      method: "GET",
    })
    const jsonData = await data.json()

    setPokemonDetail((prev) => ({
      ...prev,
      name: jsonData.name,
      abilities: jsonData.abilities.map(
        (info: { ability: { name: string; url: string } }) => info.ability
      ),
      height: jsonData.height,
      image: jsonData.sprites.front_default,
    }))
  }, [pokemon.url])

  useEffect(() => {
    getData()
  }, [getData])

  const handleClick = () => {
    navigate("/pokemon-detail", { state: pokemonDetail })
  }

  return (
    <Card
      style={
        hovered ? { backgroundColor: "#7ddc1f" } : { backgroundColor: "white" }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Body>
        <Card.Title>
          {nameConverter(pokemon.name)}
          <img src={`${pokemonDetail.image}`} alt="" />
        </Card.Title>

        <FaArrowCircleRight
          onClick={handleClick}
          size={20}
          className="float-end"
          style={{ cursor: "pointer" }}
        />
      </Card.Body>
    </Card>
  )
}
