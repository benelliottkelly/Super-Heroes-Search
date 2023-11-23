import { useLoaderData } from "react-router-dom";

//bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// 
export default function HeroSingle() {
  const hero = useLoaderData()
  console.log(hero)
  const { id, images: { md }, name, powerstats: { intelligence, strength, speed, durability, power, combat }, appearance: { race, height, weight }, biography: { fullName, alignment }, work: { occupation } } = hero
  const alias = fullName ? fullName : name

  function cardColour(alignment) {
    if (alignment === "good") {
      return { background: "radial-gradient(closest-side, #3f87a6, #ebf8e1, rgb(4 169 4))" }
    } else if (alignment === "bad") {
      return { background: "radial-gradient(closest-side, rgb(14 33 183) 30%, rgb(157 97 255), rgb(255, 0, 0))" }
    } else {
      return { background: "radial-gradient(closest-side, rgb(183 14 14) 30%, rgb(56 104 70), rgb(254 255 0))" }

    }

  }


  return (
    <Container fluid className='hero-single' style={cardColour(alignment)} >

      <Row>
        <Col md={12} className="cardname"><h2  className='text-center bold mt-4 mb-4'>#{id} {name}</h2></Col>

        <Col md={12}><div className="card-img" style={{ backgroundImage: `url(${md})` }}></div></Col>
        <div className="stats">
          <Row>
        <Col md={8}>
          <p>Identity: {alias} </p>
          <p>Occupation: {occupation && occupation !== "-" ? occupation : "Unknown"} </p>
          <p>Race: {race ? race : "Unknown"}</p>
          <p>Height: {height[0] && height[0] !== "-" ? height[0] : "Unknown"}</p>
          <p>Weight: {weight[0] && weight[0] !== "- lb" ? weight[0] : "Unknown"}</p>
          <p>Alignment: {alignment && alignment !== "-" ? alignment : "Neutral"}</p>
        </Col>

        <Col md={4} className="singlestat">
          <p>INT: {intelligence}</p>
          <p>STR: {strength}</p>
          <p>SPD: {speed}</p>
          <p>DUR: {durability}</p>
          <p>PWR: {power}</p>
          <p>CMBT: {combat}</p>
        </Col>
        </Row>
        </div>
        






      </Row>

    </Container>
  )
}