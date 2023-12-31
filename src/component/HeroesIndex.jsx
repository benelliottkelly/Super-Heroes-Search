import { useLoaderData, Link } from "react-router-dom"
import { useEffect, useState } from "react"


// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function HeroesIndex() {
  const heroes = useLoaderData()

  const [alignment, setAlignment] = useState('All')


  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [inputQuery, setInputQuery] = useState('')



  useEffect(() => {

    const pattern = new RegExp(inputQuery, 'i')
    const filteredArray = heroes.filter(hero => {
      return pattern.test(hero.name) && (hero.biography.alignment === alignment ||(hero.biography.alignment === "-" && alignment === "neutral")|| alignment === "All")
    })
    setFilteredHeroes(filteredArray)
  }, [alignment, heroes, inputQuery])


  console.log(heroes)
  return (
    <>
      <select className="m-4" name="alignment" value={alignment} onChange={(e) => setAlignment(e.target.value)}>
        <option value="All">All</option>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
        <option value="neutral">Neutral</option>
      </select>
      <input name="search" placeholder="Search..." value={inputQuery} onChange={(e) => setInputQuery(e.target.value)} />
      <h1 className="fs-1">Heroes and Villains</h1>
      <Container fluid>
        <Row className='hero-list'>
          {filteredHeroes.map(heroes => {
            const { id, name, images: { md } } = heroes
            return (
              <Col as={Link}
                key={id}
                xs={6}
                md={4}
                lg={3}
                style={{ backgroundImage: `url(${md})` }}
                to={`/heroes/${id}`}

              >
                {name}
              </Col>
            )
          })}

        </Row>
      </Container>

    </>

  )
}