import { Card, CardBody } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { nameConverter } from "../utils/nameConverter"
import { FaArrowCircleLeft } from "react-icons/fa"

export interface Ability {
  name: string
  url: string
}

export interface PokemonDetailProps {
  name: string
  abilities: Ability[]
  height: 0
  image: string
}

export const PokemonDetail = () => {
  const {
    state: { name, abilities, height, image },
  } = useLocation()

  let navigate = useNavigate()
  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <div style={{ backgroundColor: "#f4e604", height: "100vh" }}>
      <Header />

      <div className="d-flex justify-content-center pt-5">
        <div className="p-5">
          <FaArrowCircleLeft
            size={40}
            style={{ cursor: "pointer" }}
            onClick={handleGoBack}
          />
        </div>
        <Card style={{ fontFamily: "serif" }}>
          <Card.Img
            variant="top"
            src={`${image}`}
            sizes="30px"
            className="m-2"
            style={{ height: "200px", width: "200px", fontWeight: "bold" }}
          />
          <Card.Header style={{ fontSize: "2rem" }}>
            {nameConverter(name)}
          </Card.Header>
          <CardBody>
            <h5> Abilities:</h5>
            {abilities.map((ability: Ability) => {
              return <div>{ability.name}</div>
            })}
            <h5 className="mt-2"> Height:</h5>
            <p>{height}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
