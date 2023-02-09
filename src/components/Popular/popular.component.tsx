//hooks
import { useState, useEffect } from "react"

//styles
import { Card, Gradient, Wrapper } from "./popular.styles"

//splide
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css'

//router
import { Link } from "react-router-dom"

export const Popular = () => {

  const [popular, setPopular] = useState<string[]>([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2c1a78f029bc4d43ae7f8d0162b2328e&number=16`);
    const data = await api.json();
    console.log(data.recipes)
    setPopular(data.recipes)
    }
    
  // const getPopular = async () => {

  //   const check = localStorage.getItem('popular'  || "[]")

  //   if(check) {
  //     setPopular(JSON.parse(localStorage.getItem('popular')  || '[]'))
  //   } else {
  //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2c1a78f029bc4d43ae7f8d0162b2328e&number=9`);
  //     const data = await api.json();

  //     localStorage.setItem('popular', JSON.stringify(data.recipes))
  //     setPopular(data.recipes)
  //     console.log(data.recipes)
  //   }

  // }
  
  return (
    <Wrapper>
      <h3>Popular Picks</h3>

      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem'
      }}>
        {popular.map((recipe: any) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card key={recipe.id}>
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient/>
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

export default Popular