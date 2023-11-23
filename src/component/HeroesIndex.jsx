import { useLoaderData, Link } from "react-router-dom"

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function HeroesIndex() {
  const heroes = useLoaderData()
  console.log(heroes)
  return (
    <>
    {/* change to heroes and villians */}
      <h1 className="fs-1">Heroes and Villians</h1> 
      <Container fluid>
        <Row className='hero-list'>
          {heroes.map(heroes => {
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